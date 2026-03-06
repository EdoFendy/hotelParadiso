import { NextRequest, NextResponse } from "next/server"
import { createSumUpCheckout } from "@/lib/sumup"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const {
            reservationIds,
            totalAmount,
            email,
            paymentType = "full",
            checkIn,
            checkOut,
        } = body as {
            reservationIds: string[]
            totalAmount: number
            email: string
            paymentType: "full" | "deposit"
            checkIn: string
            checkOut: string
        }

        if (!reservationIds?.length || !totalAmount || !email || !checkIn || !checkOut) {
            return NextResponse.json(
                { error: "Missing required fields: reservationIds, totalAmount, email, checkIn, checkOut" },
                { status: 400 }
            )
        }

        if (!["full", "deposit"].includes(paymentType)) {
            return NextResponse.json(
                { error: "paymentType must be 'full' or 'deposit'" },
                { status: 400 }
            )
        }

        const chargeAmount = paymentType === "deposit"
            ? Math.round(totalAmount * 0.30 * 100) / 100
            : totalAmount

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paradisodellemadonie.it"
        const redirectUrl = `${siteUrl}/booking/success?reservation_ids=${reservationIds.join(",")}&payment_type=${paymentType}`

        const description = `Soggiorno ${checkIn} → ${checkOut}${paymentType === "deposit" ? " (caparra 30%)" : ""}`
        const reference = reservationIds[0]

        const checkout = await createSumUpCheckout(
            chargeAmount,
            reference,
            description,
            email,
            redirectUrl
        )

        return NextResponse.json({
            success: true,
            checkoutId: checkout.id,
            checkoutUrl: `https://pay.sumup.com/b2c/${checkout.id}`,
            chargeAmount,
            paymentType,
        })
    } catch (err) {
        console.error("[checkout] Error:", err)
        const message = err instanceof Error ? err.message : "Internal server error"
        return NextResponse.json(
            { error: message },
            { status: 500 }
        )
    }
}
