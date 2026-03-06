import { NextRequest, NextResponse } from "next/server"
import { checkAvailability, type RoomType } from "@/lib/booking"
import { getAvailableCountByType, createDashboardReservation } from "@/lib/dashboard-api"

const VALID_ROOM_TYPES: RoomType[] = ["single", "double", "triple", "quad"]

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const {
            roomType, checkIn, checkOut,
            adults, children, name, email, phone, notes,
            pet, crib, parking, lateCheckIn, dietaryNeeds,
            pricePerNight, totalPrice, nights, quantity,
        } = body

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

        // Re-check availability in real time (prevent race conditions)
        const needed = Math.max(1, Number(quantity) || 1)
        let roomsAvailable = 0
        try {
            const countByType = await getAvailableCountByType(checkIn, checkOut)
            roomsAvailable = countByType[roomType as RoomType] ?? 0
        } catch {
            // Fallback to iCal check if dashboard API unreachable
            const fallback = await checkAvailability(roomType as RoomType, checkIn, checkOut)
            roomsAvailable = fallback.roomsAvailable
        }

        if (roomsAvailable < needed) {
            return NextResponse.json(
                { error: "Room is no longer available for the selected dates", available: false },
                { status: 409 }
            )
        }

        // Get final pricing if not already provided by the form
        let finalPricePerNight = Number(pricePerNight) || 0
        let finalTotalPrice = Number(totalPrice) || 0
        let finalNights = Number(nights) || 0
        if (!finalPricePerNight || !finalTotalPrice || !finalNights) {
            const pricing = await checkAvailability(roomType as RoomType, checkIn, checkOut)
            finalPricePerNight = pricing.pricePerNight
            finalTotalPrice = pricing.totalPrice
            finalNights = pricing.nights
        }

        const {
            paymentType = "full",
        } = body

        if (!["full", "deposit"].includes(paymentType)) {
            return NextResponse.json(
                { error: "paymentType must be 'full' or 'deposit'" },
                { status: 400 }
            )
        }

        const roomTotalPrice = finalTotalPrice * needed
        const totalPeople = (Number(adults) || 0) + (Number(children) || 0)

        // Create reservation in Firestore via dashboard API
        const result = await createDashboardReservation({
            guestName: name,
            email,
            phoneNumber: phone,
            checkIn,
            checkOut,
            roomType: roomType as RoomType,
            quantity: needed,
            adults: Number(adults) || 2,
            children: Number(children) || 0,
            totalPeople,
            notes: notes || "",
            pet: Boolean(pet),
            crib: Boolean(crib),
            parking: Boolean(parking),
            lateCheckIn: Boolean(lateCheckIn),
            dietaryNeeds: dietaryNeeds || "",
            pricePerNight: finalPricePerNight,
            totalPrice: roomTotalPrice,
            nights: finalNights,
            paymentType,
        })

        return NextResponse.json({
            success: true,
            reservationId: result.reservationId,
            roomNumbers: result.roomNumbers,
            nights: finalNights,
            pricePerNight: finalPricePerNight,
            amount: roomTotalPrice,
            paymentType,
        })
    } catch (err) {
        console.error("[create] Error:", err)
        const message = err instanceof Error ? err.message : "Internal server error"
        return NextResponse.json(
            { error: message },
            { status: 500 }
        )
    }
}
