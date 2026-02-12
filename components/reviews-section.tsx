"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ReviewsSection() {
  const { language } = useLanguage()

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Recensioni",
          title: "Recensioni pubblicate su Google.",
          subtitle:
            "Per trasparenza non ripubblichiamo citazioni di recensioni nel sito. Leggi le recensioni direttamente sulla scheda Google.",
          avgRating: "4.3/5",
          avgRatingLabel: "Valutazione Google (dato pubblico)",
          totalReviews: "Fonte: Google Maps",
          cta: "Apri recensioni su Google",
          note: "Ultimo controllo dati scheda: 11 febbraio 2026.",
        }
        : {
          eyebrow: "Reviews",
          title: "Reviews published on Google.",
          subtitle:
            "For transparency we do not republish review quotes on this site. Read all reviews directly on the Google listing.",
          avgRating: "4.3/5",
          avgRatingLabel: "Google rating (public data)",
          totalReviews: "Source: Google Maps",
          cta: "Open reviews on Google",
          note: "Listing data last checked: February 11, 2026.",
        },
    [language],
  )

  const googleReviewsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJ9W6nOC4wFxMRCfXZxWVXscU"

  return (
    <section id="recensioni" className="section-shell bg-section-warm">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow-accent">
            <Star className="h-3.5 w-3.5 fill-current" style={{ color: "var(--accent-600)" }} />
            {copy.eyebrow}
          </span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-subtitle mx-auto">{copy.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="surface-card p-6 text-center sm:p-8">
            <p className="text-sm font-semibold" style={{ color: "var(--neutral-500)" }}>
              {copy.avgRatingLabel}
            </p>
            <p
              className="mt-2 text-5xl font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--neutral-950)",
              }}
            >
              {copy.avgRating}
            </p>
            <div className="mt-3 flex items-center justify-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i <= 4 ? "fill-current" : ""}`}
                  style={{
                    color: i <= 4 ? "var(--accent-500)" : "var(--neutral-300)",
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-500)" }}>
              {copy.totalReviews}
            </p>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill-primary mt-6 inline-flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              {copy.cta}
            </a>
            <p className="mt-4 text-xs" style={{ color: "var(--neutral-500)" }}>
              {copy.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
