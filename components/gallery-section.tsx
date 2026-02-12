"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Camera } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const galleryImages = [
  { src: "/images/fronte.png", alt: "Hotel a Castelbuono - facciata Hotel Paradiso delle Madonie", category: "exterior" },
  { src: "/images/reception.png", alt: "Reception hotel nel centro storico di Castelbuono", category: "interior" },
  { src: "/images/ingresso-hotel.jpg", alt: "Ingresso principale hotel a Castelbuono", category: "exterior" },
  { src: "/images/camera1.jpg", alt: "Camera singola a Castelbuono", category: "rooms" },
  { src: "/images/camera2.jpg", alt: "Camera doppia a Castelbuono", category: "rooms" },
  { src: "/images/camera3.jpg", alt: "Camera tripla a Castelbuono", category: "rooms" },
  { src: "/images/bagno.png", alt: "Bagno privato in camera", category: "rooms" },
  { src: "/images/castello.png", alt: "Castello dei Ventimiglia", category: "exterior" },
  { src: "/images/parcomadonie.png", alt: "Parco delle Madonie", category: "exterior" },
  { src: "/images/manna.png", alt: "Raccolta della Manna", category: "exterior" },
  { src: "/images/fiasconaro.png", alt: "Pasticceria Fiasconaro", category: "interior" },
  { src: "/images/reception2.png", alt: "Dettagli Reception", category: "interior" },
]

const categories = ["all", "exterior", "interior", "rooms"] as const

export default function GallerySection() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const categoryLabels: Record<string, string> = {
    all: t("gallery.all"),
    exterior: t("gallery.exterior"),
    interior: t("gallery.interior"),
    rooms: t("gallery.rooms"),
  }

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
    )
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null,
    )

  return (
    <section id="galleria" className="section-shell bg-section-warm">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">
            <Camera className="h-3.5 w-3.5" />
            {t("gallery.title")}
          </span>
          <h2 className="section-title">{t("gallery.title")}</h2>
          <p className="section-subtitle mx-auto">{t("gallery.description")}</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="mx-auto mt-10 flex max-w-sm justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-all"
              style={{
                backgroundColor:
                  activeCategory === cat ? "var(--primary-900)" : "var(--neutral-100)",
                color: activeCategory === cat ? "#fff" : "var(--neutral-600)",
                transitionDuration: "var(--duration-fast)",
              }}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Gallery Grid — masonry-like */}
        <motion.div
          layout
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "sm:row-span-2 sm:h-full min-h-[280px]" : "h-56"
                  }`}
                style={{ border: "1px solid var(--neutral-150)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ transitionDuration: "var(--duration-normal)" }}
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{
              zIndex: "var(--z-modal)",
              backgroundColor: "rgba(0,0,0,0.92)",
            }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onKeyDown={(e) => {
              if (e.key === "Escape") closeLightbox()
              if (e.key === "ArrowLeft") goPrev()
              if (e.key === "ArrowRight") goNext()
            }}
            tabIndex={0}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="rounded-2xl object-contain"
                sizes="90vw"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-6 text-sm text-white/70">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
