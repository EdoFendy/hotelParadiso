import { CheckCircle2, XCircle, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"

interface PageProps {
  searchParams: Promise<{ checkout_id?: string; reservation_ids?: string; payment_type?: string }>
}

async function confirmPayment(
  checkoutId: string,
  reservationIds: string[],
  paymentType: "full" | "deposit"
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3025"
  const res = await fetch(`${baseUrl}/api/booking/confirm`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ checkoutId, reservationIds, paymentType }),
    cache: "no-store",
  })
  return res.json() as Promise<{
    success: boolean
    status?: string
    reservationIds?: string[]
    amountPaid?: number
    paymentType?: string
    message?: string
    error?: string
  }>
}

export default async function BookingSuccessPage({ searchParams }: PageProps) {
  const params = await searchParams
  const checkoutId = params.checkout_id
  const rawIds = params.reservation_ids
  const rawPaymentType = params.payment_type

  const reservationIds = rawIds ? rawIds.split(",").filter(Boolean) : []
  const paymentType = rawPaymentType === "deposit" ? "deposit" : "full"

  if (!checkoutId || reservationIds.length === 0) {
    return <ErrorPage title="Parametri mancanti" message="Link di conferma non valido. Se hai completato il pagamento, contattaci direttamente." />
  }

  let result: Awaited<ReturnType<typeof confirmPayment>>
  try {
    result = await confirmPayment(checkoutId, reservationIds, paymentType)
  } catch {
    return <ErrorPage title="Errore di rete" message="Impossibile verificare il pagamento. Se hai pagato, contattaci: il tuo pagamento è al sicuro." />
  }

  if (!result.success) {
    return (
      <ErrorPage
        title={result.status === "PENDING" ? "Pagamento in attesa" : "Pagamento non completato"}
        message={
          result.status === "PENDING"
            ? "Il tuo pagamento è in fase di verifica. Riceverai una conferma via WhatsApp a breve."
            : "Il pagamento non è stato completato. Nessun addebito è stato effettuato."
        }
        showRetry
      />
    )
  }

  const amountPaid = result.amountPaid ?? 0
  const isDeposit = (result.paymentType ?? paymentType) === "deposit"

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "var(--neutral-50)" }}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg" style={{ border: "1px solid var(--neutral-150)" }}>
        {/* Success icon */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full" style={{ backgroundColor: "var(--accent-100)" }}>
            <CheckCircle2 className="h-10 w-10" style={{ color: "var(--accent-600)" }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--neutral-900)" }}>
            Prenotazione confermata!
          </h1>
          <p className="mt-2 text-sm" style={{ color: "var(--neutral-500)" }}>
            {isDeposit
              ? "La caparra è stata ricevuta. Il saldo verrà riscosso in struttura al check-in."
              : "Il pagamento è stato ricevuto. Ci vediamo presto!"}
          </p>
        </div>

        {/* Payment info */}
        <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: "var(--accent-50)", border: "1px solid var(--accent-200)" }}>
          <p className="text-sm font-medium" style={{ color: "var(--accent-800)" }}>
            {isDeposit ? "Caparra pagata" : "Importo pagato"}:{" "}
            <span className="font-bold">
              {new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(amountPaid)}
            </span>
            {isDeposit && <span className="ml-1 text-xs">(30%)</span>}
          </p>
          {isDeposit && (
            <p className="mt-1 text-xs" style={{ color: "var(--accent-600)" }}>
              Il saldo rimanente sarà riscosso all&apos;arrivo in struttura.
            </p>
          )}
        </div>

        {/* Booking refs */}
        <div className="mb-5 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--neutral-400)" }}>
            Codice prenotazione
          </p>
          {reservationIds.map((id) => (
            <p key={id} className="font-mono text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
              {id}
            </p>
          ))}
        </div>

        {/* WhatsApp note */}
        <div className="mb-6 flex items-start gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-150)" }}>
          <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--neutral-400)" }} />
          <p className="text-sm" style={{ color: "var(--neutral-600)" }}>
            Ti contatteremo su <strong>WhatsApp</strong> al numero fornito per confermare i dettagli del tuo soggiorno.
          </p>
        </div>

        {/* Cancellation policy */}
        <div className="mb-6 rounded-xl px-4 py-3" style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-150)" }}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--neutral-500)" }}>
            Politica di cancellazione
          </p>
          <ul className="space-y-1 text-xs" style={{ color: "var(--neutral-500)" }}>
            <li>• Cancellazione &gt; 15 giorni prima: rimborso completo</li>
            <li>• Cancellazione 4–14 giorni prima: rimborso del 50%</li>
            <li>• Cancellazione ≤ 3 giorni prima: nessun rimborso</li>
          </ul>
        </div>

        <Link href="/" className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors"
          style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}>
          <ArrowLeft className="h-4 w-4" />
          Torna alla home
        </Link>
      </div>
    </main>
  )
}

function ErrorPage({ title, message, showRetry }: { title: string; message: string; showRetry?: boolean }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "var(--neutral-50)" }}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg text-center" style={{ border: "1px solid var(--neutral-150)" }}>
        <div className="mb-4 flex h-20 w-20 mx-auto items-center justify-center rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
          <XCircle className="h-10 w-10" style={{ color: "#ef4444" }} />
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--neutral-900)" }}>{title}</h1>
        <p className="text-sm mb-6" style={{ color: "var(--neutral-500)" }}>{message}</p>
        <div className="flex flex-col gap-3">
          {showRetry && (
            <Link href="/#prenota" className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--accent-500)", color: "#fff" }}>
              Riprova la prenotazione
            </Link>
          )}
          <Link href="/" className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            style={{ backgroundColor: "var(--neutral-100)", color: "var(--neutral-700)", border: "1px solid var(--neutral-200)" }}>
            <ArrowLeft className="h-4 w-4" />
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}
