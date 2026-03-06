/**
 * Bridge client for the hotel-dashboard-edo API.
 * Used to check real-time availability and create reservations in Firestore.
 */

export type RoomType = "single" | "double" | "triple" | "quad"

// Dashboard room numbers grouped by public website room type
const ROOM_TYPE_MAP: Record<RoomType, number[]> = {
  single: [5],
  double: [4, 6, 8, 9, 12, 13, 14, 16, 3],
  triple: [2, 7, 10, 15],
  quad: [1, 11],
}

function getDashboardUrl(): string {
  return (process.env.DASHBOARD_API_URL || "http://localhost:3001").replace(/\/$/, "")
}

function getDashboardKey(): string {
  return process.env.DASHBOARD_API_KEY || ""
}

function dashboardHeaders(): HeadersInit {
  return {
    "Content-Type": "application/json",
    "X-Api-Key": getDashboardKey(),
  }
}

/**
 * Returns the set of occupied room numbers for the given date range.
 * Throws if the dashboard API is unreachable.
 */
export async function getOccupiedRooms(checkIn: string, checkOut: string): Promise<Set<number>> {
  const url = `${getDashboardUrl()}/api/availability?checkIn=${checkIn}&checkOut=${checkOut}`
  const res = await fetch(url, { headers: dashboardHeaders(), cache: "no-store" })

  if (!res.ok) {
    throw new Error(`Dashboard availability returned ${res.status}`)
  }

  const data = await res.json() as {
    availableRooms: { roomNumber: number }[]
    totalAvailable: number
  }

  // The API returns available rooms — invert to get occupied
  const allRooms = Object.values(ROOM_TYPE_MAP).flat()
  const availableSet = new Set(data.availableRooms.map((r) => r.roomNumber))
  const occupied = new Set(allRooms.filter((r) => !availableSet.has(r)))
  return occupied
}

/**
 * Returns how many rooms of each type are available for the given dates.
 */
export async function getAvailableCountByType(
  checkIn: string,
  checkOut: string
): Promise<Record<RoomType, number>> {
  const occupied = await getOccupiedRooms(checkIn, checkOut)

  const result = {} as Record<RoomType, number>
  for (const [type, rooms] of Object.entries(ROOM_TYPE_MAP) as [RoomType, number[]][]) {
    result[type] = rooms.filter((r) => !occupied.has(r)).length
  }
  return result
}

export interface CreateReservationInput {
  guestName: string
  email: string
  phoneNumber: string
  checkIn: string
  checkOut: string
  roomType: RoomType
  quantity: number
  adults: number
  children: number
  totalPeople: number
  notes: string
  pet: boolean
  crib: boolean
  parking: boolean
  lateCheckIn: boolean
  dietaryNeeds: string
  pricePerNight: number
  totalPrice: number
  nights: number
  paymentType?: "full" | "deposit"
}

/**
 * Creates a reservation in Firestore via the dashboard API.
 * Returns the new reservation ID.
 */
export async function createDashboardReservation(
  data: CreateReservationInput
): Promise<{ reservationId: string; roomNumbers: number[] }> {
  const url = `${getDashboardUrl()}/api/reservations`
  const res = await fetch(url, {
    method: "POST",
    headers: dashboardHeaders(),
    body: JSON.stringify(data),
    cache: "no-store",
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }))
    throw new Error((err as { error?: string }).error || `HTTP ${res.status}`)
  }

  const result = await res.json() as {
    success: boolean
    reservationId: string
    roomNumbers: number[]
  }

  if (!result.success || !result.reservationId) {
    throw new Error("Unexpected response from dashboard API")
  }

  return { reservationId: result.reservationId, roomNumbers: result.roomNumbers }
}

/**
 * Confirms payment for one or more reservations after SumUp checkout is verified.
 * Called from /api/booking/confirm after verifySumUpCheckout returns PAID.
 */
export interface ConfirmedReservation {
  reservationId: string
  reservation: Record<string, unknown>
}

export async function confirmDashboardPayment(
  reservationIds: string[],
  checkoutId: string,
  paymentType: "full" | "deposit",
  amountPaid: number
): Promise<ConfirmedReservation[]> {
  return Promise.all(
    reservationIds.map(async (id) => {
      const url = `${getDashboardUrl()}/api/reservations/${id}/confirm-payment`
      const res = await fetch(url, {
        method: "PATCH",
        headers: dashboardHeaders(),
        body: JSON.stringify({ checkoutId, paymentType, amountPaid }),
        cache: "no-store",
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }))
        throw new Error((err as { error?: string }).error || `HTTP ${res.status}`)
      }

      const result = await res.json() as { success: boolean; reservationId: string; reservation: Record<string, unknown> }
      return { reservationId: result.reservationId ?? id, reservation: result.reservation ?? {} }
    })
  )
}
