import { NextRequest, NextResponse } from "next/server"
import { verifySumUpCheckout } from "@/lib/sumup"
import { confirmDashboardPayment } from "@/lib/dashboard-api"
import { sendBookingConfirmationEmail, sendHotelNotificationEmail, type BookingEmailData } from "@/lib/email"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { checkoutId, reservationIds, paymentType = "full" } = body as {
            checkoutId: string
            reservationIds: string[]
            paymentType: "full" | "deposit"
        }

        if (!checkoutId || !reservationIds?.length) {
            return NextResponse.json(
                { error: "Missing required fields: checkoutId, reservationIds" },
                { status: 400 }
            )
        }

        const hasSumUpKeys = process.env.SUMUP_API_KEY && process.env.SUMUP_MERCHANT_CODE
        if (!hasSumUpKeys) {
            return NextResponse.json(
                { error: "Payment system not configured" },
                { status: 503 }
            )
        }

        const checkout = await verifySumUpCheckout(checkoutId)

        if (checkout.status !== "PAID") {
            return NextResponse.json({
                success: false,
                status: checkout.status,
                message: "Payment has not been completed.",
            })
        }

        // Update all reservations in Firestore: mark as confirmed + paid
        const confirmed = await confirmDashboardPayment(
            reservationIds,
            checkoutId,
            paymentType,
            checkout.amount
        )

        // Send emails using data from the first confirmed reservation (fire-and-forget)
        try {
            const r = confirmed[0]?.reservation as Record<string, unknown> | undefined
            if (r && r.guestEmail) {
                const emailData: BookingEmailData = {
                    guestName: String(r.guestName ?? ""),
                    guestEmail: String(r.guestEmail),
                    phoneNumber: String(r.phoneNumber ?? ""),
                    checkIn: String(r.checkIn ?? ""),
                    checkOut: String(r.checkOut ?? ""),
                    nights: Number(r.nights ?? 0),
                    totalPrice: Number(r.totalPrice ?? 0),
                    amountPaid: checkout.amount,
                    paymentType,
                    reservationIds,
                    extras: r.extras as BookingEmailData["extras"],
                    notes: String(r.additionalNotes ?? ""),
                }

                // Convert Firestore Timestamps to date strings if needed
                if (r.checkInDate && typeof r.checkInDate === "object" && "_seconds" in (r.checkInDate as object)) {
                    const ts = r.checkInDate as { _seconds: number }
                    emailData.checkIn = new Date(ts._seconds * 1000).toISOString().split("T")[0]
                }
                if (r.checkOutDate && typeof r.checkOutDate === "object" && "_seconds" in (r.checkOutDate as object)) {
                    const ts = r.checkOutDate as { _seconds: number }
                    emailData.checkOut = new Date(ts._seconds * 1000).toISOString().split("T")[0]
                }

                sendBookingConfirmationEmail(emailData).catch((e) =>
                    console.error("[confirm] Guest email failed:", e)
                )
                sendHotelNotificationEmail(emailData).catch((e) =>
                    console.error("[confirm] Hotel email failed:", e)
                )
            }
        } catch (emailErr) {
            console.error("[confirm] Email setup error:", emailErr)
        }

        return NextResponse.json({
            success: true,
            status: "confirmed",
            reservationIds,
            amountPaid: checkout.amount,
            paymentType,
        })
    } catch (err) {
        console.error("[confirm] Error:", err)
        const message = err instanceof Error ? err.message : "Internal server error"
        return NextResponse.json(
            { error: message },
            { status: 500 }
        )
    }
}
