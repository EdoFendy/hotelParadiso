"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Bath, CalendarCheck2, Coffee, Crown, MessageCircle, Tv, Users, Wifi, Wind } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const roomTypes = [
  {
    id: "single",
    nameKey: "rooms.single.name",
    descKey: "rooms.single.desc",
    priceKey: "rooms.single.price",
    guests: 1,
    size: "16 m²",
    featured: false,
  },
  {
    id: "double",
    nameKey: "rooms.double.name",
    descKey: "rooms.double.desc",
    priceKey: "rooms.double.price",
    guests: 2,
    size: "22 m²",
    featured: true,
  },
  {
    id: "triple",
    nameKey: "rooms.triple.name",
    descKey: "rooms.triple.desc",
    priceKey: "rooms.triple.price",
    guests: 3,
    size: "26 m²",
    featured: false,
  },
  {
    id: "quad",
    nameKey: "rooms.quad.name",
    descKey: "rooms.quad.desc",
    priceKey: "rooms.quad.price",
    guests: 4,
    size: "30 m²",
    featured: false,
  },
]

const roomGallery = [
  { src: "/images/camera2.jpg", alt: "Camera doppia a Castelbuono" },
  { src: "/images/camera1.jpg", alt: "Camera singola a Castelbuono" },
  { src: "/images/camera3.jpg", alt: "Camera tripla a Castelbuono" },
  { src: "/images/bagno.png", alt: "Bagno privato in camera" },
]

const amenities = [
  { icon: Wifi, key: "rooms.wifi" },
  { icon: Tv, key: "rooms.tv" },
  { icon: Wind, key: "rooms.ac" },
  { icon: Bath, key: "rooms.bathroom" },
  { icon: Coffee, key: "rooms.breakfast" },
]

export default function RoomsSection() {
  const { language, t } = useLanguage()
  const [selectedRoomId, setSelectedRoomId] = useState("double")

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Camere & tariffe",
          title: "Le nostre camere",
          subtitle:
            "Confronta capienza e tariffa scontata del 10% a sinistra, guarda tutte le foto a destra, poi conferma disponibilità con contatto diretto.",
          guests: "ospiti",
          mostPopular: "Più scelta",
          selectionTitle: "Seleziona la camera",
          selectionSubtitle: "Una scelta chiara: tipologia, capienza e prezzo base in un unico punto.",
          selectedRoomLabel: "Camera selezionata",
          galleryTitle: "Foto reali delle camere",
          ctaPrimary: "Verifica disponibilità",
          ctaSecondary: "Chiedi su WhatsApp",
          roomDisclaimer: "Tariffario ufficiale 2026/27 con sconto diretto 10% prenotando qui. Prezzi variabili per periodo/eventi.",
          allInclude: "In tutte le camere",
        }
        : {
          eyebrow: "Rooms & rates",
          title: "Choose your room in 30 seconds, no confusion.",
          subtitle:
            "Compare occupancy and direct 10%-off rates on the left, see all room photos on the right, then request availability directly.",
          guests: "guests",
          mostPopular: "Most popular",
          selectionTitle: "Select your room",
          selectionSubtitle: "One clear selection flow: room type, occupancy, and base price in one place.",
          selectedRoomLabel: "Selected room",
          galleryTitle: "Real room photos",
          ctaPrimary: "Check availability",
          ctaSecondary: "Ask on WhatsApp",
          roomDisclaimer: "Official 2026/27 tariff with direct 10% discount when booking here. Rates may vary by period/events.",
          allInclude: "Included in every room",
        },
    [language],
  )

  const selectedRoom = roomTypes.find((room) => room.id === selectedRoomId) ?? roomTypes[0]
  const selectedRoomName = t(selectedRoom.nameKey)

  const scrollToBooking = () => {
    const node = document.getElementById("prenota")
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const openRoomWhatsApp = (roomName: string) => {
    const message =
      language === "it"
        ? `Ciao, vorrei informazioni sulla ${roomName} all'Hotel Paradiso delle Madonie.`
        : `Hi, I would like details about the ${roomName} at Hotel Paradiso delle Madonie.`

    window.open(`https://wa.me/393929309201?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="camere" className="section-shell bg-section-light">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-subtitle mx-auto">{copy.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: room choice */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card p-5 sm:p-6"
          >
            <p
              className="text-xs font-semibold uppercase"
              style={{
                letterSpacing: "var(--tracking-eyebrow)",
                color: "var(--neutral-400)",
              }}
            >
              {copy.selectionTitle}
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              {copy.selectionSubtitle}
            </p>

            <div className="mt-5 space-y-3">
              {roomTypes.map((room) => {
                const roomName = t(room.nameKey)
                const isSelected = room.id === selectedRoom.id

                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setSelectedRoomId(room.id)}
                    aria-pressed={isSelected}
                    className="w-full rounded-xl p-4 text-left transition-all"
                    style={{
                      backgroundColor: isSelected ? "var(--primary-900)" : "var(--neutral-0)",
                      border: isSelected
                        ? "1px solid var(--primary-800)"
                        : "1px solid var(--neutral-150)",
                      boxShadow: isSelected ? "var(--shadow-md)" : "none",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="text-base font-semibold"
                          style={{ color: isSelected ? "#fff" : "var(--neutral-900)" }}
                        >
                          {roomName}
                        </p>
                        <p
                          className="mt-1 inline-flex items-center gap-1.5 text-xs"
                          style={{ color: isSelected ? "rgba(255,255,255,0.7)" : "var(--neutral-500)" }}
                        >
                          <Users className="h-3.5 w-3.5" />
                          {room.guests} {copy.guests} · {room.size}
                        </p>
                      </div>

                      <span
                        className="text-sm font-bold"
                        style={{ color: isSelected ? "var(--accent-300)" : "var(--neutral-900)" }}
                      >
                        {t(room.priceKey)}
                      </span>
                    </div>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: isSelected ? "rgba(255,255,255,0.75)" : "var(--neutral-600)" }}
                    >
                      {t(room.descKey)}
                    </p>

                    {room.featured && (
                      <span
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: isSelected ? "rgba(255,255,255,0.16)" : "var(--accent-100)",
                          color: isSelected ? "var(--accent-200)" : "var(--accent-700)",
                        }}
                      >
                        <Crown className="h-3 w-3" />
                        {copy.mostPopular}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            <div
              className="mt-6 rounded-xl p-4 sm:p-5"
              style={{
                backgroundColor: "var(--neutral-50)",
                border: "1px solid var(--neutral-150)",
              }}
            >
              <p className="text-xs font-semibold uppercase" style={{ letterSpacing: "var(--tracking-eyebrow)", color: "var(--neutral-500)" }}>
                {copy.selectedRoomLabel}
              </p>
              <h3
                className="mt-1 text-xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--neutral-950)",
                }}
              >
                {selectedRoomName}
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {amenities.map((amenity) => (
                  <div
                    key={amenity.key}
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs"
                    style={{
                      backgroundColor: "var(--neutral-0)",
                      border: "1px solid var(--neutral-150)",
                      color: "var(--neutral-700)",
                    }}
                  >
                    <amenity.icon className="h-3.5 w-3.5" style={{ color: "var(--accent-600)" }} />
                    <span>{t(amenity.key)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2">
                <button onClick={scrollToBooking} className="cta-pill-primary w-full justify-center">
                  <CalendarCheck2 className="h-4 w-4" />
                  {copy.ctaPrimary}
                </button>
                <button
                  onClick={() => openRoomWhatsApp(selectedRoomName)}
                  className="cta-pill-outline w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  {copy.ctaSecondary}
                </button>
              </div>
            </div>
          </motion.article>

          {/* Right: all room photos */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card p-4 sm:p-5"
          >
            <p
              className="text-xs font-semibold uppercase"
              style={{
                letterSpacing: "var(--tracking-eyebrow)",
                color: "var(--neutral-400)",
              }}
            >
              {copy.galleryTitle}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {roomGallery.map((photo, index) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-xl ${index === 0 ? "h-64 sm:row-span-2 sm:h-full sm:min-h-[352px]" : "h-40 sm:h-[170px]"
                    }`}
                  style={{ border: "1px solid var(--neutral-150)" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        {/* Disclaimer */}
        <div
          className="mx-auto mt-10 max-w-3xl rounded-xl px-5 py-3 text-center text-sm"
          style={{
            backgroundColor: "var(--accent-50)",
            border: "1px solid var(--accent-200)",
            color: "var(--accent-800)",
          }}
        >
          {copy.roomDisclaimer}
        </div>

        {/* "All rooms include" bar */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <p
            className="text-center text-xs font-semibold uppercase"
            style={{
              letterSpacing: "var(--tracking-eyebrow)",
              color: "var(--neutral-400)",
            }}
          >
            {copy.allInclude}
          </p>
          <div className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
            {amenities.map((amenity) => (
              <div
                key={amenity.key}
                className="flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-medium"
                style={{
                  backgroundColor: "var(--neutral-0)",
                  border: "1px solid var(--neutral-150)",
                  color: "var(--neutral-700)",
                }}
              >
                <amenity.icon className="h-4 w-4" style={{ color: "var(--accent-600)" }} />
                <span>{t(amenity.key)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
