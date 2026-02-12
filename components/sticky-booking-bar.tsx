"use client"

import { useEffect, useMemo, useState } from "react"
import { Calendar, Phone, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function StickyBookingBar() {
  const { language } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          bestRate: "Vantaggi prenotazione diretta",
          helper: "Sconto diretto del 10% sul tariffario ufficiale, con conferma immediata.",
          cta: "Verifica disponibilità",
          call: "Chiama",
        }
        : {
          bestRate: "Direct booking advantages",
          helper: "Direct 10% discount on the official tariff with instant confirmation.",
          cta: "Check availability",
          call: "Call",
        },
    [language],
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const onScroll = () => {
      if (typeof window === "undefined") return
      const threshold = window.innerHeight * 0.35
      setIsVisible(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isMounted])

  const scrollToBooking = () => {
    if (typeof document === "undefined") return
    const node = document.getElementById("prenota")
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  if (!isMounted) return null

  return (
    <>
      <div
        aria-hidden={!isVisible}
        className={`fixed bottom-4 left-0 right-0 hidden transform-gpu transition-all duration-300 md:block ${
          isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
        style={{ zIndex: "var(--z-sticky-bar)" }}
      >
        <div className="container-shell">
          <div
            className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-3 backdrop-blur-xl lg:px-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              border: "1px solid var(--neutral-200)",
              boxShadow: "var(--shadow-2xl)",
            }}
          >
            <div className="flex min-w-0 items-start gap-3">
              <div
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "var(--accent-50)",
                  color: "var(--accent-600)",
                }}
              >
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>
                  {copy.bestRate}
                </p>
                <p className="text-xs md:text-sm" style={{ color: "var(--neutral-500)" }}>
                  {copy.helper}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a href="tel:+390921820683" className="cta-pill-outline">
                <Phone className="h-4 w-4" />
                {copy.call}
              </a>
              <button onClick={scrollToBooking} className="cta-pill-accent">
                <Calendar className="h-4 w-4" />
                {copy.cta}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden={!isVisible}
        className={`fixed bottom-0 left-0 right-0 transform-gpu backdrop-blur-xl transition-all duration-300 md:hidden ${
          isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
        }`}
        style={{
          zIndex: "var(--z-sticky-bar)",
          backgroundColor: "rgba(255,255,255,0.96)",
          borderTop: "1px solid var(--neutral-200)",
          boxShadow: "0 -8px 32px -8px rgba(23,25,34,0.12)",
          paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
          paddingTop: "0.75rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a href="tel:+390921820683" className="cta-pill-outline flex-1 justify-center">
            <Phone className="h-4 w-4" />
            {copy.call}
          </a>
          <button onClick={scrollToBooking} className="cta-pill-accent flex-1 justify-center">
            <Calendar className="h-4 w-4" />
            {copy.cta}
          </button>
        </div>
      </div>
    </>
  )
}
