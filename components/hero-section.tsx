"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarCheck2, ChevronDown, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { language, t } = useLanguage()

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Hotel Paradiso delle Madonie",
          title: "Hotel a Castelbuono centro storico",
          description:
            "Alloggio comodo per dormire a Castelbuono e visitare le Madonie senza caos: camere confortevoli, contatto diretto e assistenza h24.",
          primaryCta: "Verifica disponibilità",
          secondaryCta: "Scopri le camere",
          directNote: "Prenotazione diretta: risposta rapida via WhatsApp o telefono.",
          trust: [
            { icon: MapPin, text: "Centro storico" },
            { icon: MapPin, text: "A 23 km da Cefalù" },
            { icon: ShieldCheck, text: "Wi-Fi + colazione inclusi" },
          ],
          ratingText: "Valutazione pubblica su Google Maps",
          location: "Castelbuono, Parco delle Madonie",
        }
        : {
          eyebrow: "Hotel Paradiso delle Madonie",
          title: "Hotel in Castelbuono historic center, between Madonie and Cefalu.",
          description:
            "A strategic base to explore the Madonie area and reach Cefalu without friction: comfortable rooms, direct contact and human support.",
          primaryCta: "Check availability",
          secondaryCta: "Explore rooms",
          directNote: "Direct booking: fast support via WhatsApp or phone.",
          trust: [
            { icon: MapPin, text: "Historic center" },
            { icon: MapPin, text: "23 km from Cefalu" },
            { icon: ShieldCheck, text: "Wi-Fi + breakfast included" },
          ],
          ratingText: "Public rating on Google Maps",
          location: "Castelbuono, Madonie Park",
        },
    [language],
  )

  const scrollToSection = (id: string) => {
    const node = document.getElementById(id)
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/fronte.png"
          alt="Hotel a Castelbuono centro storico - Hotel Paradiso delle Madonie"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Premium overlay with depth */}
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute inset-0 overlay-warm-glow" />
      </div>

      {/* Content */}
      <div className="container-shell flex min-h-[100svh] items-center py-32 sm:py-36 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-light">
              <Sparkles className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            {copy.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg"
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            {copy.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToSection("prenota")}
              className="cta-pill-accent"
            >
              <CalendarCheck2 className="h-4 w-4" />
              {copy.primaryCta}
            </button>
            <button
              onClick={() => scrollToSection("camere")}
              className="cta-pill-outline-light"
            >
              {copy.secondaryCta}
            </button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {/* Rating block */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i <= 4 ? "fill-current" : ""}`}
                    style={{ color: i <= 4 ? "var(--accent-400)" : "rgba(255,255,255,0.3)" }}
                  />
                ))}
              </div>
              <div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--accent-300)" }}
                >
                  4.3/5
                </span>
                <span
                  className="ml-1.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  — {copy.ratingText}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="hidden h-6 sm:block"
              style={{
                width: "1px",
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            />

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2">
              {copy.trust.map((item) => (
                <span key={item.text} className="trust-chip">
                  <item.icon className="h-3.5 w-3.5" style={{ color: "var(--accent-300)" }} />
                  {item.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("hotel")}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase text-white backdrop-blur-sm md:inline-flex"
        style={{
          letterSpacing: "var(--tracking-wider)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          transitionDuration: "var(--duration-normal)",
        }}
      >
        <span>{t("hero.scroll")}</span>
        <ChevronDown className="h-4 w-4 animate-float-y" />
      </button>
    </section>
  )
}
