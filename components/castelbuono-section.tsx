"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarCheck2, Castle, ChefHat, Mountain, UtensilsCrossed } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CastelbuonoSection() {
  const { language, t } = useLanguage()

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Castelbuono",
          title: "A cinque minuti a piedi da tutto il necessario.",
          subtitle:
            "Borgo medievale vivo, non un'attrazione turistica: gastronomia, cultura e montagna accessibili senza auto.",
          cta: "Pianifica il tuo soggiorno",
          cards: [
            {
              icon: Castle,
              title: "Castello dei Ventimiglia",
              desc: "Fortezza medievale con il museo civico: 10 minuti a piedi dall'hotel.",
              image: "/images/castello.png",
              badge: "10 min a piedi",
            },
            {
              icon: ChefHat,
              title: "La manna delle Madonie",
              desc: "Nettare dolce dalla corteccia del frassino — prodotto unico al mondo lavorato ancora qui.",
              image: "/images/manna.png",
              badge: "Prodotto locale",
            },
            {
              icon: Mountain,
              title: "Parco delle Madonie",
              desc: "Sentieri per tutti i livelli: dalla passeggiata al trekking. Flora, fauna e silenzio.",
              image: "/images/parcomadonie.png",
              badge: "Accesso diretto",
            },
            {
              icon: UtensilsCrossed,
              title: "Dolci di Fiasconaro",
              desc: "Pasticceria artigianale conosciuta in tutta Italia — a pochi passi dall'hotel.",
              image: "/images/fiasconaro.png",
              badge: "5 min a piedi",
            },
          ],
        }
        : {
          eyebrow: "Castelbuono",
          title: "Five minutes on foot from everything you need.",
          subtitle:
            "A living medieval village, not a tourist trap: gastronomy, culture and mountains accessible without a car.",
          cta: "Plan your stay",
          cards: [
            {
              icon: Castle,
              title: "Ventimiglia Castle",
              desc: "Medieval fortress with the civic museum — 10-minute walk from the hotel.",
              image: "/images/castello.png",
              badge: "10 min walk",
            },
            {
              icon: ChefHat,
              title: "Manna of the Madonie",
              desc: "Sweet nectar from the ash tree bark — a unique product still crafted here.",
              image: "/images/manna.png",
              badge: "Local product",
            },
            {
              icon: Mountain,
              title: "Madonie Park",
              desc: "Trails for all levels — from casual walks to challenging hikes. Flora, fauna and silence.",
              image: "/images/parcomadonie.png",
              badge: "Direct access",
            },
            {
              icon: UtensilsCrossed,
              title: "Fiasconaro Pastries",
              desc: "Artisan confectionery famous across Italy — steps from the hotel.",
              image: "/images/fiasconaro.png",
              badge: "5 min walk",
            },
          ],
        },
    [language],
  )

  const scrollToBooking = () => {
    const node = document.getElementById("prenota")
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="castelbuono" className="section-shell bg-section-light">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-subtitle mx-auto">{copy.subtitle}</p>
        </motion.div>

        {/* Asymmetric Card Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="surface-card-interactive group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Badge */}
                <div
                  className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "var(--neutral-800)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  {card.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "var(--primary-50)",
                      color: "var(--primary-700)",
                    }}
                  >
                    <card.icon className="h-4 w-4" />
                  </span>
                  <h3
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--neutral-900)",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--neutral-600)" }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 text-center"
        >
          <button onClick={scrollToBooking} className="cta-pill-primary">
            <CalendarCheck2 className="h-4 w-4" />
            {copy.cta}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
