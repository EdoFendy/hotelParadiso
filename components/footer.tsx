"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarCheck2, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { language, t } = useLanguage()

  const copy =
    language === "it"
      ? {
        ctaTitle: "Pronto a prenotare senza intermediari?",
        ctaSubtitle: "Contatto diretto con l'hotel: risposta rapida su disponibilità e condizioni.",
        checkAvailability: "Verifica disponibilità",
        callNow: "Chiama ora",
        localGuides: "Guide Locali",
      }
      : {
        ctaTitle: "Ready to book without intermediaries?",
        ctaSubtitle: "Direct contact with the hotel for quick availability and policy confirmation.",
        checkAvailability: "Check availability",
        callNow: "Call now",
        localGuides: "Local guides",
      }

  const scrollToSection = (id: string) => {
    const node = document.getElementById(id)
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const socialLinks = [
    {
      href: "https://www.facebook.com/hotelparadisomadonie",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: "https://www.instagram.com/hotelparadisomadonie",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://www.tripadvisor.it/hotel-paradiso-madonie",
      label: "TripAdvisor",
      icon: Star,
    },
    {
      href: "https://wa.me/393929309201",
      label: "WhatsApp",
      icon: MessageCircle,
    },
  ]

  return (
    <footer
      style={{ backgroundColor: "var(--primary-950)" }}
      className="text-white"
    >
      <div className="container-shell py-14 sm:py-16">
        {/* CTA Banner */}
        <div
          className="mb-12 rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, var(--neutral-0), var(--neutral-50))",
            border: "1px solid var(--neutral-150)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className="text-xl font-semibold sm:text-2xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--neutral-950)",
                }}
              >
                {copy.ctaTitle}
              </p>
              <p
                className="mt-2 text-sm sm:text-base"
                style={{ color: "var(--neutral-500)" }}
              >
                {copy.ctaSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => scrollToSection("prenota")} className="cta-pill-accent">
                <CalendarCheck2 className="h-4 w-4" />
                {copy.checkAvailability}
              </button>
              <a href="tel:+390921820683" className="cta-pill-outline">
                <Phone className="h-4 w-4" />
                {copy.callNow}
              </a>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="relative h-16 w-48 sm:h-20 sm:w-56">
              <Image
                src="/images/chiaro.png"
                alt="Hotel Paradiso delle Madonie"
                fill
                className="object-contain object-left"
              />
            </div>
            <p
              className="mt-4 max-w-md text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {t("footer.description")}
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.55)",
                    transitionDuration: "var(--duration-fast)",
                  }}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase"
              style={{
                letterSpacing: "var(--tracking-eyebrow)",
                color: "var(--accent-300)",
              }}
            >
              {t("footer.links")}
            </h3>
            <div className="mt-4 space-y-2.5">
              {[
                { id: "hotel", label: t("nav.hotel") },
                { id: "camere", label: t("nav.rooms") },
                { id: "castelbuono", label: t("nav.castelbuono") },
                { id: "prenota", label: copy.checkAvailability },
                { id: "contatti", label: t("nav.info") },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-sm transition-colors"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    transitionDuration: "var(--duration-fast)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p
              className="mt-5 text-xs font-semibold uppercase"
              style={{
                letterSpacing: "var(--tracking-eyebrow)",
                color: "var(--accent-300)",
              }}
            >
              {copy.localGuides}
            </p>
            <div className="mt-3 space-y-2.5">
              <Link href="/hotel-castelbuono" className="block text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                Hotel Castelbuono
              </Link>
              <Link href="/alloggio-castelbuono" className="block text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                Alloggio Castelbuono
              </Link>
              <Link href="/camere-castelbuono" className="block text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                Camere Castelbuono
              </Link>
              <Link href="/hotel-cefalu" className="block text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                Hotel vicino Cefalu
              </Link>
            </div>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase"
              style={{
                letterSpacing: "var(--tracking-eyebrow)",
                color: "var(--accent-300)",
              }}
            >
              {t("footer.contact")}
            </h3>
            <div className="mt-4 space-y-3">
              <p
                className="flex items-start gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--accent-300)" }}
                />
                <span>
                  Via Dante Alighieri, 82
                  <br />
                  90013 Castelbuono (PA), Sicilia
                </span>
              </p>
              <a
                href="tel:+390921820683"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  transitionDuration: "var(--duration-fast)",
                }}
              >
                <Phone className="h-4 w-4" style={{ color: "var(--accent-300)" }} />
                0921 820683
              </a>
              <a
                href="tel:+393929309201"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  transitionDuration: "var(--duration-fast)",
                }}
              >
                <Phone className="h-4 w-4" style={{ color: "var(--accent-300)" }} />
                392 930 9201
              </a>
              <a
                href="mailto:info@paradisodellemadonie.it"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  transitionDuration: "var(--duration-fast)",
                }}
              >
                <Mail className="h-4 w-4" style={{ color: "var(--accent-300)" }} />
                info@paradisodellemadonie.it
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col gap-3 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Hotel Paradiso delle Madonie. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/termini" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).showCookieBanner) {
                  ; (window as any).showCookieBanner()
                }
              }}
              className="hover:text-white transition-colors"
            >
              {language === "it" ? "Gestisci Cookie" : "Manage Cookies"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
