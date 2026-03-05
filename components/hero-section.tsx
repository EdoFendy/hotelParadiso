"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarCheck2, MapPin, ShieldCheck, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { language } = useLanguage()

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
    <section id="home" className="relative overflow-hidden" style={{ minHeight: "72vh" }}>
      {/* Background Image */}
      <Image
        src="/hero_castelbuono.jpeg"
        alt="Hotel a Castelbuono centro storico - Hotel Paradiso delle Madonie"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.80) 100%)" }}
      />

      {/* Content allineato in basso */}
      <div
        className="relative container-shell flex flex-col justify-end"
        style={{ minHeight: "72vh", paddingTop: "8rem", paddingBottom: "3.5rem" }}
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-white"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
            maxWidth: "780px",
          }}
        >
          {copy.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          {copy.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <button onClick={() => scrollToSection("prenota")} className="cta-pill-accent">
            <CalendarCheck2 className="h-4 w-4" />
            {copy.primaryCta}
          </button>
          <button onClick={() => scrollToSection("camere")} className="cta-pill-outline-light">
            {copy.secondaryCta}
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mt-6 flex flex-wrap items-center gap-5"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i <= 4 ? "fill-current" : ""}`}
                  style={{ color: i <= 4 ? "var(--accent-400)" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: "var(--accent-300)" }}>4.3/5</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>— {copy.ratingText}</span>
          </div>
          <div className="hidden h-5 w-px sm:block" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
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
    </section>
  )
}
