"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function NewsletterSection() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const copy =
    language === "it"
      ? {
        eyebrow: "Offerte Esclusive",
        title: "Ricevi offerte e guide gratuite sulle Madonie.",
        subtitle:
          "Nessuno spam. Solo offerte esclusive per chi prenota direttamente e guide pratiche sul territorio.",
        placeholder: "La tua email",
        privacyLabel: "Accetto la",
        privacyLink: "Privacy Policy",
        button: "Iscriviti",
        loading: "Invio in corso...",
        successTitle: "Iscrizione completata!",
        successText: "Ti contatteremo con le migliori offerte dirette per le Madonie.",
        errorGeneric: "Si e verificato un errore. Riprova o contattaci via WhatsApp.",
        privacyRequired: "Devi accettare la privacy policy per iscriverti.",
      }
      : {
        eyebrow: "Exclusive Offers",
        title: "Get free offers and guides about the Madonie.",
        subtitle:
          "No spam. Only exclusive deals for direct bookings and practical local guides.",
        placeholder: "Your email",
        privacyLabel: "I accept the",
        privacyLink: "Privacy Policy",
        button: "Subscribe",
        loading: "Sending...",
        successTitle: "Subscription complete!",
        successText: "We'll contact you with the best direct offers for the Madonie.",
        errorGeneric: "An error occurred. Please try again or contact us via WhatsApp.",
        privacyRequired: "You must accept the privacy policy to subscribe.",
      }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    if (!privacy) {
      setErrorMsg(copy.privacyRequired)
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        const data = await res.json()
        setErrorMsg(data.error || copy.errorGeneric)
        setStatus("error")
      }
    } catch {
      setErrorMsg(copy.errorGeneric)
      setStatus("error")
    }
  }

  return (
    <section
      aria-label={copy.eyebrow}
      style={{
        backgroundColor: "var(--accent-50)",
        borderTop: "1px solid var(--accent-100)",
        borderBottom: "1px solid var(--accent-100)",
      }}
    >
      <div className="container-shell py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="eyebrow-accent"
            style={{ color: "var(--accent-700)" }}
          >
            {copy.eyebrow}
          </span>

          {status === "success" ? (
            <div className="mt-4">
              <p
                className="text-2xl font-semibold"
                style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
              >
                {copy.successTitle}
              </p>
              <p className="mt-2 text-base" style={{ color: "var(--neutral-600)" }}>
                {copy.successText}
              </p>
            </div>
          ) : (
            <>
              <h2
                className="mt-3 text-balance text-2xl font-semibold sm:text-3xl"
                style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
              >
                {copy.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--neutral-600)" }}>
                {copy.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={copy.placeholder}
                    className="flex-1 rounded-full border px-4 py-2.5 text-sm outline-none transition-all"
                    style={{
                      border: "1px solid var(--accent-200)",
                      backgroundColor: "var(--neutral-0)",
                      color: "var(--neutral-900)",
                    }}
                    disabled={status === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="cta-pill-accent shrink-0"
                    style={{ opacity: status === "loading" ? 0.7 : 1 }}
                  >
                    {status === "loading" ? copy.loading : copy.button}
                  </button>
                </div>

                <label className="flex items-start justify-center gap-2 text-left text-xs" style={{ color: "var(--neutral-500)" }}>
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    className="mt-0.5 shrink-0 accent-current"
                    style={{ accentColor: "var(--accent-600)" }}
                    disabled={status === "loading"}
                  />
                  <span>
                    {copy.privacyLabel}{" "}
                    <Link
                      href="/privacy"
                      className="underline transition-colors hover:text-neutral-800"
                    >
                      {copy.privacyLink}
                    </Link>
                  </span>
                </label>

                {(status === "error" || errorMsg) && (
                  <p className="text-xs" style={{ color: "#dc2626" }}>
                    {errorMsg}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
