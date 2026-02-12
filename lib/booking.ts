import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

// ─── Types ───────────────────────────────────────────────────────────
export type RoomType = "single" | "double" | "triple" | "quad"
type TariffSeason = "A" | "B" | "C"

export interface RoomConfig {
    type: RoomType
    count: number
    pricePerNight: number
    bookingPrice: number
    icalUrl: string
}

const DIRECT_BOOKING_DISCOUNT = 0.1

// Official FIT 2026 tariff (per room / night), mapped by seasonal band.
// `single` maps to DUS values from the provided tariff sheet.
const OFFICIAL_FIT_RATES: Record<RoomType, Record<TariffSeason, number>> = {
    single: { A: 80, B: 85, C: 100 },
    double: { A: 100, B: 105, C: 120 },
    triple: { A: 120, B: 120, C: 135 },
    quad: { A: 140, B: 140, C: 160 },
}

export interface Reservation {
    id: string
    roomType: RoomType
    checkIn: string // YYYY-MM-DD
    checkOut: string // YYYY-MM-DD
    adults: number
    children: number
    name: string
    email: string
    phone: string
    notes: string
    totalPrice: number
    nights: number
    status: "pending" | "confirmed" | "cancelled"
    sumupCheckoutId: string
    createdAt: string
}

export interface AvailabilityResult {
    available: boolean
    blockedDates: string[]
    pricePerNight: number
    bookingPricePerNight: number
    totalPrice: number
    bookingTotalPrice: number
    savings: number
    nights: number
    roomsAvailable: number
}

// ─── Config ──────────────────────────────────────────────────────────
const DATA_DIR = path.join(process.cwd(), "data")
const RESERVATIONS_FILE = path.join(DATA_DIR, "reservations.json")

function ensureDataDir() {
    if (!existsSync(DATA_DIR)) {
        mkdirSync(DATA_DIR, { recursive: true })
    }
    if (!existsSync(RESERVATIONS_FILE)) {
        writeFileSync(RESERVATIONS_FILE, JSON.stringify([]), "utf-8")
    }
}

export function getRoomConfig(): Record<RoomType, RoomConfig> {
    const getMinOfficialRate = (roomType: RoomType) =>
        Math.min(...Object.values(OFFICIAL_FIT_RATES[roomType]))
    const getMinDirectRate = (roomType: RoomType) =>
        roundMoney(getMinOfficialRate(roomType) * (1 - DIRECT_BOOKING_DISCOUNT))

    return {
        single: {
            type: "single",
            count: parseInt(process.env.ROOMS_COUNT_SINGLE || "2", 10),
            pricePerNight: getMinDirectRate("single"),
            bookingPrice: getMinOfficialRate("single"),
            icalUrl: process.env.BOOKING_ICAL_SINGLE || "",
        },
        double: {
            type: "double",
            count: parseInt(process.env.ROOMS_COUNT_DOUBLE || "4", 10),
            pricePerNight: getMinDirectRate("double"),
            bookingPrice: getMinOfficialRate("double"),
            icalUrl: process.env.BOOKING_ICAL_DOUBLE || "",
        },
        triple: {
            type: "triple",
            count: parseInt(process.env.ROOMS_COUNT_TRIPLE || "2", 10),
            pricePerNight: getMinDirectRate("triple"),
            bookingPrice: getMinOfficialRate("triple"),
            icalUrl: process.env.BOOKING_ICAL_TRIPLE || "",
        },
        quad: {
            type: "quad",
            count: parseInt(process.env.ROOMS_COUNT_QUAD || "1", 10),
            pricePerNight: getMinDirectRate("quad"),
            bookingPrice: getMinOfficialRate("quad"),
            icalUrl: process.env.BOOKING_ICAL_QUAD || "",
        },
    }
}

// ─── iCal Cache ──────────────────────────────────────────────────────
interface ICalCacheEntry {
    blockedDates: Set<string>
    fetchedAt: number
}

const icalCache = new Map<string, ICalCacheEntry>()
const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes

function dateToYMD(d: Date): string {
    return d.toISOString().split("T")[0]
}

function getDatesInRange(start: string, end: string): string[] {
    const dates: string[] = []
    const s = new Date(start + "T00:00:00Z")
    const e = new Date(end + "T00:00:00Z")
    const current = new Date(s)
    while (current < e) {
        dates.push(dateToYMD(current))
        current.setUTCDate(current.getUTCDate() + 1)
    }
    return dates
}

function countNights(checkIn: string, checkOut: string): number {
    const s = new Date(checkIn + "T00:00:00Z")
    const e = new Date(checkOut + "T00:00:00Z")
    return Math.max(1, Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)))
}

function roundMoney(value: number): number {
    return Math.round(value * 100) / 100
}

function resolveTariffSeason(dateYmd: string): TariffSeason {
    const date = new Date(dateYmd + "T00:00:00Z")
    const mmdd = (date.getUTCMonth() + 1) * 100 + date.getUTCDate()

    // C band: 06/08-20/08 and 24/12-02/01
    if ((mmdd >= 806 && mmdd <= 820) || mmdd >= 1224 || mmdd <= 102) return "C"
    // B band: 01/07-05/08 and 21/08-30/09
    if ((mmdd >= 701 && mmdd <= 805) || (mmdd >= 821 && mmdd <= 930)) return "B"
    // A band: 03/01-30/06 and 01/10-23/12 (default)
    return "A"
}

function getOfficialRateForDate(roomType: RoomType, dateYmd: string): number {
    const season = resolveTariffSeason(dateYmd)
    return OFFICIAL_FIT_RATES[roomType][season]
}

function getDiscountedRate(officialRate: number): number {
    return roundMoney(officialRate * (1 - DIRECT_BOOKING_DISCOUNT))
}

function calculateRateTotals(roomType: RoomType, checkIn: string, checkOut: string): {
    nights: number
    avgDirect: number
    avgOfficial: number
    totalDirect: number
    totalOfficial: number
    savings: number
} {
    const nights = countNights(checkIn, checkOut)
    const stayDates = getDatesInRange(checkIn, checkOut)

    let totalOfficial = 0
    let totalDirect = 0

    for (const date of stayDates) {
        const official = getOfficialRateForDate(roomType, date)
        totalOfficial += official
        totalDirect += getDiscountedRate(official)
    }

    const normalizedOfficialTotal = roundMoney(totalOfficial)
    const normalizedDirectTotal = roundMoney(totalDirect)

    return {
        nights,
        avgDirect: roundMoney(normalizedDirectTotal / nights),
        avgOfficial: roundMoney(normalizedOfficialTotal / nights),
        totalDirect: normalizedDirectTotal,
        totalOfficial: normalizedOfficialTotal,
        savings: roundMoney(normalizedOfficialTotal - normalizedDirectTotal),
    }
}

/**
 * Lightweight iCal parser for Booking.com feeds.
 * Parses VEVENT blocks and extracts DTSTART/DTEND date ranges.
 * No heavy dependency needed — Booking.com iCal is simple text.
 */
function parseICalDate(value: string): Date | null {
    // Handles: 20260315, 20260315T120000, 20260315T120000Z
    const clean = value.replace(/[^0-9T]/g, "")
    if (clean.length >= 8) {
        const y = parseInt(clean.substring(0, 4), 10)
        const m = parseInt(clean.substring(4, 6), 10) - 1
        const d = parseInt(clean.substring(6, 8), 10)
        return new Date(Date.UTC(y, m, d))
    }
    return null
}

async function fetchICalBlockedDates(url: string): Promise<Set<string>> {
    if (!url) return new Set()

    // Check cache
    const cached = icalCache.get(url)
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
        return cached.blockedDates
    }

    try {
        const res = await fetch(url, { next: { revalidate: 1800 } })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const text = await res.text()

        const blocked = new Set<string>()
        const events = text.split("BEGIN:VEVENT")

        for (let i = 1; i < events.length; i++) {
            const block = events[i]
            const dtStartMatch = block.match(/DTSTART[^:]*:(\d{8}(?:T\d{6}Z?)?)/)
            const dtEndMatch = block.match(/DTEND[^:]*:(\d{8}(?:T\d{6}Z?)?)/)

            const start = dtStartMatch ? parseICalDate(dtStartMatch[1]) : null
            const end = dtEndMatch ? parseICalDate(dtEndMatch[1]) : null

            if (!start || !end) continue

            const current = new Date(start)
            while (current < end) {
                blocked.add(dateToYMD(current))
                current.setUTCDate(current.getUTCDate() + 1)
            }
        }

        icalCache.set(url, { blockedDates: blocked, fetchedAt: Date.now() })
        return blocked
    } catch (err) {
        console.error(`[booking] Error fetching iCal from ${url}:`, err)
        if (cached) return cached.blockedDates
        return new Set()
    }
}

// ─── Reservations ────────────────────────────────────────────────────
export function getReservations(): Reservation[] {
    ensureDataDir()
    try {
        const raw = readFileSync(RESERVATIONS_FILE, "utf-8")
        return JSON.parse(raw) as Reservation[]
    } catch {
        return []
    }
}

export function saveReservation(reservation: Reservation): void {
    ensureDataDir()
    const all = getReservations()
    all.push(reservation)
    writeFileSync(RESERVATIONS_FILE, JSON.stringify(all, null, 2), "utf-8")
}

export function updateReservationStatus(
    checkoutId: string,
    status: Reservation["status"]
): Reservation | null {
    ensureDataDir()
    const all = getReservations()
    const idx = all.findIndex((r) => r.sumupCheckoutId === checkoutId)
    if (idx === -1) return null
    all[idx].status = status
    writeFileSync(RESERVATIONS_FILE, JSON.stringify(all, null, 2), "utf-8")
    return all[idx]
}

function getLocalBlockedDates(roomType: RoomType): Set<string> {
    const reservations = getReservations().filter(
        (r) => r.roomType === roomType && (r.status === "confirmed" || r.status === "pending")
    )
    const blocked = new Set<string>()
    for (const r of reservations) {
        const dates = getDatesInRange(r.checkIn, r.checkOut)
        for (const d of dates) blocked.add(d)
    }
    return blocked
}

// ─── Public API ──────────────────────────────────────────────────────

/**
 * Get all blocked dates for a room type (from both iCal and local reservations)
 */
export async function getBlockedDates(roomType: RoomType): Promise<string[]> {
    const config = getRoomConfig()[roomType]
    if (!config) return []

    // Fetch iCal blocked dates
    const icalBlocked = await fetchICalBlockedDates(config.icalUrl)

    // Get local blocked dates (from our own reservations)
    const localBlocked = getLocalBlockedDates(roomType)

    // Merge
    const allBlocked = new Set([...icalBlocked, ...localBlocked])
    return Array.from(allBlocked).sort()
}

/**
 * Check availability for a specific room type and date range
 */
export async function checkAvailability(
    roomType: RoomType,
    checkIn: string,
    checkOut: string
): Promise<AvailabilityResult> {
    const config = getRoomConfig()[roomType]
    if (!config) {
        return {
            available: false,
            blockedDates: [],
            pricePerNight: 0,
            bookingPricePerNight: 0,
            totalPrice: 0,
            bookingTotalPrice: 0,
            savings: 0,
            nights: 0,
            roomsAvailable: 0,
        }
    }

    const blockedDates = await getBlockedDates(roomType)
    const requestedDates = getDatesInRange(checkIn, checkOut)
    const pricing = calculateRateTotals(roomType, checkIn, checkOut)

    // Check if any requested date is blocked
    const conflicting = requestedDates.filter((d) => blockedDates.includes(d))
    const available = conflicting.length === 0

    return {
        available,
        blockedDates,
        pricePerNight: pricing.avgDirect,
        bookingPricePerNight: pricing.avgOfficial,
        totalPrice: pricing.totalDirect,
        bookingTotalPrice: pricing.totalOfficial,
        savings: pricing.savings,
        nights: pricing.nights,
        roomsAvailable: available ? config.count : 0,
    }
}

/**
 * Create a new reservation (initially in "pending" status)
 */
export function createReservation(data: {
    roomType: RoomType
    checkIn: string
    checkOut: string
    adults: number
    children: number
    name: string
    email: string
    phone: string
    notes: string
    sumupCheckoutId: string
}): Reservation {
    const pricing = calculateRateTotals(data.roomType, data.checkIn, data.checkOut)

    const reservation: Reservation = {
        id: uuidv4(),
        ...data,
        totalPrice: pricing.totalDirect,
        nights: pricing.nights,
        status: "pending",
        createdAt: new Date().toISOString(),
    }

    saveReservation(reservation)
    return reservation
}

/**
 * Get all room prices for display
 */
export function getAllRoomPrices(): Array<{
    type: RoomType
    pricePerNight: number
    bookingPrice: number
    savings: number
}> {
    return (Object.keys(OFFICIAL_FIT_RATES) as RoomType[]).map((type) => {
        const minOfficial = Math.min(...Object.values(OFFICIAL_FIT_RATES[type]))
        const minDirect = getDiscountedRate(minOfficial)

        return {
            type,
            pricePerNight: minDirect,
            bookingPrice: minOfficial,
            savings: roundMoney(minOfficial - minDirect),
        }
    })
}
