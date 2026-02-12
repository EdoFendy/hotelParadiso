// ─── SumUp Checkout Integration ──────────────────────────────────────
// Uses the SumUp REST API to create online checkouts.
// The @sumup/sdk is used server-side only.

export interface SumUpCheckout {
    id: string
    checkout_reference: string
    amount: number
    currency: string
    status: string
    date: string
}

const SUMUP_API_BASE = "https://api.sumup.com/v0.1"

function getHeaders(): Record<string, string> {
    const apiKey = process.env.SUMUP_API_KEY
    if (!apiKey) {
        throw new Error("[SumUp] SUMUP_API_KEY is not configured")
    }
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    }
}

/**
 * Create a SumUp online checkout
 */
export async function createSumUpCheckout(
    amount: number,
    reference: string,
    description: string,
    customerEmail?: string,
    redirectUrl?: string
): Promise<SumUpCheckout> {
    const merchantCode = process.env.SUMUP_MERCHANT_CODE
    if (!merchantCode) {
        throw new Error("[SumUp] SUMUP_MERCHANT_CODE is not configured")
    }

    const body: Record<string, unknown> = {
        checkout_reference: reference,
        amount,
        currency: "EUR",
        description,
        merchant_code: merchantCode,
        pay_to_email: process.env.BOOKING_NOTIFY_EMAIL || undefined,
    }

    if (redirectUrl) {
        body.redirect_url = redirectUrl
    }

    if (customerEmail) {
        body.customer_id = customerEmail
    }

    const res = await fetch(`${SUMUP_API_BASE}/checkouts`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(body),
    })

    if (!res.ok) {
        const err = await res.text()
        console.error("[SumUp] Create checkout error:", err)
        throw new Error(`SumUp checkout creation failed: ${res.status}`)
    }

    return (await res.json()) as SumUpCheckout
}

/**
 * Verify a SumUp checkout status
 */
export async function verifySumUpCheckout(checkoutId: string): Promise<SumUpCheckout> {
    const res = await fetch(`${SUMUP_API_BASE}/checkouts/${checkoutId}`, {
        method: "GET",
        headers: getHeaders(),
    })

    if (!res.ok) {
        const err = await res.text()
        console.error("[SumUp] Verify checkout error:", err)
        throw new Error(`SumUp checkout verification failed: ${res.status}`)
    }

    return (await res.json()) as SumUpCheckout
}
