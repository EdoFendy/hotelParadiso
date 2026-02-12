import { NextRequest, NextResponse } from "next/server"
import { updateReservationStatus } from "@/lib/booking"
import { verifySumUpCheckout } from "@/lib/sumup"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { checkoutId } = body

        if (!checkoutId) {
            return NextResponse.json(
                { error: "Missing checkoutId" },
                { status: 400 }
            )
        }

        // Demo mode checkout
        if (checkoutId.startsWith("demo-")) {
            const reservation = updateReservationStatus(checkoutId, "confirmed")
            if (!reservation) {
                return NextResponse.json(
                    { error: "Reservation not found" },
                    { status: 404 }
                )
            }

            return NextResponse.json({
                success: true,
                status: "confirmed",
                reservation: {
                    id: reservation.id,
                    roomType: reservation.roomType,
                    checkIn: reservation.checkIn,
                    checkOut: reservation.checkOut,
                    name: reservation.name,
                    totalPrice: reservation.totalPrice,
                    nights: reservation.nights,
                },
                demoMode: true,
            })
        }

        // Verify SumUp payment
        const hasSumUpKeys = process.env.SUMUP_API_KEY && process.env.SUMUP_MERCHANT_CODE

        if (!hasSumUpKeys) {
            return NextResponse.json(
                { error: "Payment system not configured" },
                { status: 503 }
            )
        }

        const checkout = await verifySumUpCheckout(checkoutId)

        if (checkout.status === "PAID") {
            const reservation = updateReservationStatus(checkoutId, "confirmed")
            if (!reservation) {
                return NextResponse.json(
                    { error: "Reservation not found" },
                    { status: 404 }
                )
            }

            // TODO: Send confirmation emails to guest and hotel
            // This can be done via nodemailer, SendGrid, etc.

            return NextResponse.json({
                success: true,
                status: "confirmed",
                reservation: {
                    id: reservation.id,
                    roomType: reservation.roomType,
                    checkIn: reservation.checkIn,
                    checkOut: reservation.checkOut,
                    name: reservation.name,
                    totalPrice: reservation.totalPrice,
                    nights: reservation.nights,
                },
            })
        }

        // Payment not completed yet
        return NextResponse.json({
            success: false,
            status: checkout.status,
            message: "Payment has not been completed yet.",
        })
    } catch (err) {
        console.error("[confirm] Error:", err)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
