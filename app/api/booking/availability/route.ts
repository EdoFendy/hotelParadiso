import { NextRequest, NextResponse } from "next/server"
import { checkAvailability, getBlockedDates, getAllRoomPrices, type RoomType } from "@/lib/booking"

const VALID_ROOM_TYPES: RoomType[] = ["single", "double", "triple", "quad"]

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl
        const roomType = searchParams.get("roomType") as RoomType | null
        const checkIn = searchParams.get("checkIn")
        const checkOut = searchParams.get("checkOut")

        // If no dates provided, return blocked dates for all room types (calendar view)
        if (!checkIn || !checkOut) {
            const allBlocked: Record<string, string[]> = {}
            const prices = getAllRoomPrices()

            for (const type of VALID_ROOM_TYPES) {
                allBlocked[type] = await getBlockedDates(type)
            }

            return NextResponse.json({
                blockedDates: allBlocked,
                prices,
            })
        }

        // Validate inputs
        if (!roomType || !VALID_ROOM_TYPES.includes(roomType)) {
            return NextResponse.json(
                { error: "Invalid roomType. Must be one of: single, double, triple, quad" },
                { status: 400 }
            )
        }

        // Validate date format
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(checkIn) || !dateRegex.test(checkOut)) {
            return NextResponse.json(
                { error: "Dates must be in YYYY-MM-DD format" },
                { status: 400 }
            )
        }

        // Validate check-in is before check-out
        if (new Date(checkIn) >= new Date(checkOut)) {
            return NextResponse.json(
                { error: "Check-in must be before check-out" },
                { status: 400 }
            )
        }

        // Validate check-in is not in the past
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        if (new Date(checkIn) < today) {
            return NextResponse.json(
                { error: "Check-in cannot be in the past" },
                { status: 400 }
            )
        }

        const result = await checkAvailability(roomType, checkIn, checkOut)

        return NextResponse.json(result)
    } catch (err) {
        console.error("[availability] Error:", err)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
