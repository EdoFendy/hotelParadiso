import { NextRequest, NextResponse } from "next/server"
import { checkAvailability, createReservation, type RoomType } from "@/lib/booking"
import { createSumUpCheckout } from "@/lib/sumup"

const VALID_ROOM_TYPES: RoomType[] = ["single", "double", "triple", "quad"]

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { roomType, checkIn, checkOut, adults, children, name, email, phone, notes } = body

        // Validate required fields
        if (!roomType || !checkIn || !checkOut || !name || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields: roomType, checkIn, checkOut, name, email, phone" },
                { status: 400 }
            )
        }

        if (!VALID_ROOM_TYPES.includes(roomType as RoomType)) {
            return NextResponse.json(
                { error: "Invalid room type" },
                { status: 400 }
            )
        }

        // Re-check availability (prevent race conditions)
        const availability = await checkAvailability(roomType as RoomType, checkIn, checkOut)
        if (!availability.available) {
            return NextResponse.json(
                { error: "Room is no longer available for the selected dates", available: false },
                { status: 409 }
            )
        }

        // Determine redirect URL for SumUp
        const origin = req.headers.get("origin") || req.headers.get("referer")?.replace(/\/[^/]*$/, "") || "https://paradisodellemadonie.it"
        const redirectUrl = `${origin}/#prenota`

        // Create SumUp checkout
        let checkoutId = ""
        let checkoutData = null

        const hasSumUpKeys = process.env.SUMUP_API_KEY && process.env.SUMUP_MERCHANT_CODE

        if (hasSumUpKeys) {
            try {
                const reference = `HP-${Date.now()}-${roomType}`
                const roomLabels: Record<string, string> = {
                    single: "Camera Singola",
                    double: "Camera Doppia",
                    triple: "Camera Tripla",
                    quad: "Camera Quadrupla",
                }
                const description = `${roomLabels[roomType]} — ${checkIn} → ${checkOut} (${availability.nights} notti)`

                checkoutData = await createSumUpCheckout(
                    availability.totalPrice,
                    reference,
                    description,
                    email,
                    redirectUrl
                )
                checkoutId = checkoutData.id
            } catch (err) {
                console.error("[create] SumUp checkout error:", err)
                return NextResponse.json(
                    { error: "Payment system error. Please try again or contact the hotel directly." },
                    { status: 502 }
                )
            }
        } else {
            // Demo mode — no SumUp keys configured
            checkoutId = `demo-${Date.now()}`
        }

        // Create reservation in pending status
        const reservation = createReservation({
            roomType: roomType as RoomType,
            checkIn,
            checkOut,
            adults: adults || 2,
            children: children || 0,
            name,
            email,
            phone,
            notes: notes || "",
            sumupCheckoutId: checkoutId,
        })

        return NextResponse.json({
            success: true,
            reservationId: reservation.id,
            checkoutId,
            amount: availability.totalPrice,
            nights: availability.nights,
            pricePerNight: availability.pricePerNight,
            demoMode: !hasSumUpKeys,
        })
    } catch (err) {
        console.error("[create] Error:", err)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
