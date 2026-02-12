"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Car, Check, Coffee, MapPin, Tv, Wifi } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const amenityIconMap = [
  { key: "about.wifi", icon: Wifi },
  { key: "about.parking", icon: Car },
  { key: "about.bar", icon: Coffee },
  { key: "about.tv", icon: Tv },
  { key: "about.center", icon: MapPin },
]

export default function AboutSection() {
  const { language, t } = useLanguage()

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Perché questo hotel",
          title: "Comfort reale nel centro di Castelbuono.",
          subtitle:
            "Struttura pensata per chi vuole visitare le Madonie senza rinunciare a praticità, contatto umano e tempi rapidi di organizzazione.",
          cta: "Vai alla prenotazione diretta",
          highlights: [
            "Nel cuore del Parco Regionale delle Madonie",
            "Camere con arredi classici, minibar e WiFi gratuito",
            "A 10 minuti a piedi dal Castello dei Ventimiglia",
            "Colazione servita ogni giorno con prodotti locali",
            "Bar in loco con bevande calde e fredde",
            "Vicino ai migliori ristoranti di Castelbuono",
          ],
          stat1Value: "23 km",
          stat1Label: "da Cefalù",
          stat2Value: "10 min",
          stat2Label: "dal Castello",
          stat3Value: "4.3/5",
          stat3Label: "Google Maps",
        }
        : {
          eyebrow: "Why this hotel",
          title: "Real comfort in the center of Castelbuono.",
          subtitle:
            "Designed for guests who want to explore the Madonie area without giving up convenience, human support and quick planning.",
          cta: "Go to direct booking",
          highlights: [
            "In the heart of Madonie Regional Park",
            "Classically furnished rooms with minibar & free WiFi",
            "10-minute walk from Ventimiglia Castle",
            "Daily breakfast with local products",
            "On-site bar with hot and cold drinks",
            "Near the best restaurants in Castelbuono",
          ],
          stat1Value: "23 km",
          stat1Label: "from Cefalù",
          stat2Value: "10 min",
          stat2Label: "to Castle",
          stat3Value: "4.3/5",
          stat3Label: "Google Maps",
        },
    [language],
  )

  const scrollToBooking = () => {
    const node = document.getElementById("prenota")
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="hotel" className="section-shell bg-section-warm">
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

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4"
        >
          <div className="stat-item">
            <span className="stat-value">{copy.stat1Value}</span>
            <span className="stat-label">{copy.stat1Label}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{copy.stat2Value}</span>
            <span className="stat-label">{copy.stat2Label}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{copy.stat3Value}</span>
            <span className="stat-label">{copy.stat3Label}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Highlights + Amenities */}
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card p-6 md:p-8"
          >
            {/* Scannable highlights instead of wall of text */}
            <div className="space-y-3">
              {copy.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--accent-50)",
                      color: "var(--accent-700)",
                    }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--neutral-700)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Amenity chips */}
            <div
              className="mt-8 pt-6 flex flex-wrap gap-2"
              style={{ borderTop: "1px solid var(--neutral-150)" }}
            >
              {amenityIconMap.map((amenity) => (
                <div
                  key={amenity.key}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--neutral-50)",
                    color: "var(--neutral-700)",
                    border: "1px solid var(--neutral-200)",
                  }}
                >
                  <amenity.icon className="h-4 w-4" style={{ color: "var(--accent-600)" }} />
                  {t(amenity.key)}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={scrollToBooking} className="cta-pill-primary mt-8">
              {copy.cta}
            </button>
          </motion.article>

          {/* Right: Images with asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            <div
              className="relative h-72 overflow-hidden rounded-2xl sm:h-80"
              style={{ border: "1px solid var(--neutral-150)" }}
            >
              <Image
                src="/images/reception.png"
                alt="Reception Hotel Paradiso delle Madonie"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative h-48 overflow-hidden rounded-2xl"
                style={{ border: "1px solid var(--neutral-150)" }}
              >
                <Image
                  src="/images/ingresso-hotel.jpg"
                  alt="Ingresso Hotel Paradiso delle Madonie"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div
                className="relative flex h-48 flex-col items-center justify-center rounded-2xl p-4 text-center"
                style={{
                  backgroundColor: "var(--primary-900)",
                  color: "#fff",
                }}
              >
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  4.3/5
                </p>
                <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {language === "it" ? "Valutazione Google" : "Google rating"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
