"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Car, Clock, MapPin, Navigation, Plane, Train } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LocationSection() {
  const { language, t } = useLanguage()

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Dove siamo",
          title: "Nel cuore delle Madonie, comodo a tutto.",
          subtitle:
            "Castelbuono è il punto di equilibrio tra montagna e mare. Da qui raggiungi Cefalù, Palermo e il Parco senza chilometri inutili.",
          distances: [
            { icon: MapPin, label: "Castello dei Ventimiglia", value: "10 min a piedi" },
            { icon: Navigation, label: "Cefalù e spiagge", value: "23 km · 25 min" },
            { icon: Navigation, label: "Palermo centro", value: "70 km · 1h" },
            { icon: Plane, label: "Aeroporto Palermo", value: "85 km · 1h 15min" },
          ],
          howToReach: "Come raggiungerci",
          byCar: "In auto",
          byCarDesc: "Da Palermo: A19 direzione Messina → uscita Pollina-Castelbuono → SS286 fino a Castelbuono.",
          byPublic: "Trasporti pubblici",
          byPublicDesc: "Autobus da Palermo Stazione Centrale con fermata a Castelbuono centro.",
        }
        : {
          eyebrow: "Location",
          title: "In the heart of the Madonie, convenient to everything.",
          subtitle:
            "Castelbuono sits between mountains and sea. From here, reach Cefalù, Palermo, and the Park without wasting kilometers.",
          distances: [
            { icon: MapPin, label: "Ventimiglia Castle", value: "10 min walk" },
            { icon: Navigation, label: "Cefalù & beaches", value: "23 km · 25 min" },
            { icon: Navigation, label: "Palermo center", value: "70 km · 1h" },
            { icon: Plane, label: "Palermo Airport", value: "85 km · 1h 15min" },
          ],
          howToReach: "How to reach us",
          byCar: "By car",
          byCarDesc: "From Palermo: A19 towards Messina → Pollina-Castelbuono exit → SS286 to Castelbuono.",
          byPublic: "Public transport",
          byPublicDesc: "Bus from Palermo Central Station with a stop in Castelbuono center.",
        },
    [language],
  )

  return (
    <section id="posizione" className="section-shell bg-section-light">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2
              className="mt-4 text-balance"
              style={{
                fontSize: "clamp(var(--text-2xl), 3.5vw, var(--text-4xl))",
                fontFamily: "var(--font-serif)",
                color: "var(--neutral-950)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              {copy.title}
            </h2>
            <p
              className="mt-4 max-w-lg text-base"
              style={{
                color: "var(--neutral-500)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              {copy.subtitle}
            </p>

            {/* Distances */}
            <div className="mt-8 space-y-3">
              {copy.distances.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    backgroundColor: "var(--neutral-0)",
                    border: "1px solid var(--neutral-150)",
                  }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "var(--primary-50)",
                      color: "var(--primary-700)",
                    }}
                  >
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--neutral-900)" }}
                    >
                      {item.label}
                    </p>
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--accent-700)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* How to reach */}
            <div className="mt-8">
              <h3
                className="text-base font-semibold"
                style={{
                  color: "var(--neutral-900)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {copy.howToReach}
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--neutral-0)",
                    border: "1px solid var(--neutral-150)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4" style={{ color: "var(--accent-600)" }} />
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--neutral-900)" }}
                    >
                      {copy.byCar}
                    </p>
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--neutral-600)" }}
                  >
                    {copy.byCarDesc}
                  </p>
                </div>
                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: "var(--neutral-0)",
                    border: "1px solid var(--neutral-150)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Train className="h-4 w-4" style={{ color: "var(--accent-600)" }} />
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--neutral-900)" }}
                    >
                      {copy.byPublic}
                    </p>
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--neutral-600)" }}
                  >
                    {copy.byPublicDesc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-2xl"
            style={{ border: "1px solid var(--neutral-150)" }}
          >
            <iframe
              title="Hotel Paradiso delle Madonie — Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.5!2d14.0891!3d37.9297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131590c0c0c0c0c1%3A0x0!2sHotel+Paradiso+delle+Madonie!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
