"use client"

import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import {
  CalendarCheck2,
  ChevronDown,
  ChevronRight,
  Globe,
  Menu,
  Phone,
  Star,
  X,
  Bed,
  Camera,
  HelpCircle,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const SECTION_IDS = [
  "home",
  "hotel",
  "camere",
  "recensioni",
  "castelbuono",
  "galleria",
  "faq",
  "prenota",
  "posizione",
  "contatti",
]

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMegaOpen, setIsMegaOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { t, language, setLanguage } = useLanguage()
  const rootRef = useRef<HTMLDivElement>(null)
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          explore: "Esplora",
          directBooking: "Prenotazione diretta",
          directBookingDesc: "Nessun passaggio inutile: scegli camera e chiedi disponibilità in 60 secondi.",
          quickLinks: "Link veloci",
          verifyAvailability: "Verifica disponibilità",
          callNow: "Chiama ora",
          ratesHint: "Tariffario ufficiale con sconto diretto 10% prenotando qui.",
          rating: "4.3/5",
          ratingLabel: "Google Maps",
          megaCards: [
            {
              id: "camere",
              title: "Camere & Tariffe",
              desc: "Confronta tipologie e scegli in base a spazio e budget.",
              icon: Bed,
            },
            {
              id: "prenota",
              title: "Prenota Diretto",
              desc: "Contatto diretto per condizioni personalizzate.",
              icon: CalendarCheck2,
            },
            {
              id: "galleria",
              title: "Galleria",
              desc: "Foto reali degli ambienti: nessuna sorpresa.",
              icon: Camera,
            },
            {
              id: "faq",
              title: "FAQ & Policy",
              desc: "Orari, cancellazione, parcheggio, animali.",
              icon: HelpCircle,
            },
          ],
        }
        : {
          explore: "Explore",
          directBooking: "Direct booking",
          directBookingDesc: "No friction: choose a room and request availability in under one minute.",
          quickLinks: "Quick links",
          verifyAvailability: "Check availability",
          callNow: "Call now",
          ratesHint: "Official tariff with direct 10% discount when booking here.",
          rating: "4.3/5",
          ratingLabel: "Google Maps",
          megaCards: [
            {
              id: "camere",
              title: "Rooms & Rates",
              desc: "Compare room types by size and budget.",
              icon: Bed,
            },
            {
              id: "prenota",
              title: "Book Direct",
              desc: "Direct contact for tailored requests.",
              icon: CalendarCheck2,
            },
            {
              id: "galleria",
              title: "Gallery",
              desc: "Real photos so you see what you book.",
              icon: Camera,
            },
            {
              id: "faq",
              title: "FAQ & Policies",
              desc: "Timings, cancellation, parking, pets.",
              icon: HelpCircle,
            },
          ],
        },
    [language],
  )

  const primaryLinks = useMemo(
    () => [
      { id: "hotel", label: t("nav.hotel") },
      { id: "camere", label: t("nav.rooms") },
      { id: "castelbuono", label: t("nav.castelbuono") },
      { id: "posizione", label: language === "it" ? "Posizione" : "Location" },
      { id: "contatti", label: t("nav.info") },
    ],
    [t, language],
  )

  // Scroll detection with compact threshold
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.15,
      },
    )

    SECTION_IDS.forEach((id) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  // Body scroll lock for mobile
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  // Click outside
  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (rootRef.current && !rootRef.current.contains(target)) {
        setIsMegaOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [])

  // Escape key
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false)
        setIsMegaOpen(false)
      }
    }

    document.addEventListener("keydown", onEscape)
    return () => document.removeEventListener("keydown", onEscape)
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const node = document.getElementById(id)
    if (!node) return
    node.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMobileOpen(false)
    setIsMegaOpen(false)
  }, [])

  // Mega menu hover handlers with delay
  const handleMegaEnter = useCallback(() => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current)
    setIsMegaOpen(true)
  }, [])

  const handleMegaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setIsMegaOpen(false), 200)
  }, [])

  return (
    <div ref={rootRef} className="fixed inset-x-0 top-0" style={{ zIndex: "var(--z-navbar)" }}>
      <header
        className={cn(
          "transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-1.5"
            : "bg-transparent py-5",
        )}
      >
        <div className="container-shell">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className={cn(
                "relative shrink-0 transition-all duration-500",
                isScrolled ? "h-20 w-60 sm:h-24 sm:w-72" : "h-24 w-72 sm:h-32 sm:w-96"
              )}
              aria-label="Torna all'inizio"
            >
              <Image
                src={isScrolled ? "/images/logo.png" : "/images/chiaro.png"}
                alt="Hotel Paradiso delle Madonie"
                fill
                priority
                sizes="(max-width: 640px) 240px, 280px"
                className="object-contain object-left"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex flex-1 items-center justify-center gap-1">
              {primaryLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300",
                    isScrolled
                      ? activeSection === link.id ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {/* Active indicator pill */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className={cn(
                        "absolute inset-0 rounded-full",
                        isScrolled ? "bg-neutral-100" : "bg-white/10"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}

              {/* Explore mega-menu trigger */}
              <div
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  onClick={() => setIsMegaOpen((prev) => !prev)}
                  className={cn(
                    "ml-1 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300",
                    isMegaOpen
                      ? "bg-accent-400 text-neutral-950"
                      : isScrolled
                        ? "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                        : "text-white/90 hover:bg-white/10 hover:text-white",
                  )}
                  aria-expanded={isMegaOpen}
                  aria-controls="mega-menu"
                >
                  {copy.explore}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      isMegaOpen && "rotate-180",
                    )}
                  />
                </button>
              </div>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden items-center gap-3 xl:flex">
              {/* Rating chip */}
              <div className={cn(
                "hidden 2xl:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300",
                isScrolled
                  ? "bg-accent-50 text-accent-800 border border-accent-200"
                  : "bg-white/10 text-white border border-white/15"
              )}>
                <Star className="h-3 w-3 fill-current" />
                <span>{copy.rating}</span>
                <span className={isScrolled ? "text-neutral-500" : "text-white/60"}>
                  {copy.ratingLabel}
                </span>
              </div>

              {/* Language Switcher */}
              <div
                className={cn(
                  "flex rounded-full p-0.5 transition-colors duration-300",
                  isScrolled
                    ? "bg-neutral-100 border border-neutral-200"
                    : "bg-white/10 border border-white/15"
                )}
              >
                <button
                  onClick={() => setLanguage("it")}
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold transition-all",
                    language === "it"
                      ? "bg-primary-900 text-white shadow-sm"
                      : isScrolled
                        ? "text-neutral-500 hover:text-neutral-800"
                        : "text-white/85 hover:text-white",
                  )}
                  aria-label="Lingua italiana"
                >
                  IT
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold transition-all",
                    language === "en"
                      ? "bg-primary-900 text-white shadow-sm"
                      : isScrolled
                        ? "text-neutral-500 hover:text-neutral-800"
                        : "text-white/85 hover:text-white",
                  )}
                  aria-label="English language"
                >
                  EN
                </button>
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("prenota")}
                className={cn(
                  "cta-pill-navbar-light transition-all duration-300",
                  !isScrolled && "bg-white/90 text-primary-900 border-white/50"
                )}
              >
                <CalendarCheck2 className="h-3.5 w-3.5" />
                {copy.verifyAvailability}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className={cn(
                "ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full transition-all xl:hidden",
                isScrolled
                  ? "bg-primary-900 text-white shadow-md"
                  : "bg-white/20 text-white backdrop-blur-sm border border-white/15"
              )}
              aria-label="Apri menu"
              aria-expanded={isMobileOpen}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MEGA MENU ──────────────────────────────────────── */}
      <AnimatePresence>
        {isMegaOpen && (
          <motion.div
            id="mega-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden xl:block border-b bg-white/98 backdrop-blur-xl"
            style={{
              borderColor: "var(--neutral-150)",
              boxShadow: "var(--shadow-2xl)",
            }}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <div className="container-shell py-8">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                {/* Quick Links Grid */}
                <div>
                  <p
                    className="mb-5 text-xs font-semibold uppercase"
                    style={{
                      letterSpacing: "var(--tracking-eyebrow)",
                      color: "var(--neutral-400)",
                    }}
                  >
                    {copy.quickLinks}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {copy.megaCards.map((card, index) => (
                      <button
                        key={card.id}
                        onClick={() => scrollToSection(card.id)}
                        className="surface-card-interactive group p-5 text-left"
                        style={{ animationDelay: `${index * 60}ms` }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors"
                            style={{
                              backgroundColor: "var(--primary-50)",
                              color: "var(--primary-700)",
                              transitionDuration: "var(--duration-fast)",
                            }}
                          >
                            <card.icon className="h-4.5 w-4.5" />
                          </span>
                          <div>
                            <p
                              className="text-sm font-semibold group-hover:text-primary-700 transition-colors"
                              style={{
                                color: "var(--neutral-900)",
                                transitionDuration: "var(--duration-fast)",
                              }}
                            >
                              {card.title}
                            </p>
                            <p
                              className="mt-1 text-sm leading-relaxed"
                              style={{ color: "var(--neutral-500)" }}
                            >
                              {card.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight
                          className="mt-3 ml-auto h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
                          style={{
                            color: "var(--primary-500)",
                            transitionDuration: "var(--duration-fast)",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Booking Promo */}
                <div
                  className="rounded-2xl p-6 bg-mesh-warm"
                  style={{
                    backgroundColor: "var(--neutral-50)",
                    border: "1px solid var(--neutral-150)",
                  }}
                >
                  <span className="eyebrow-accent" style={{ marginBottom: "var(--space-4)" }}>
                    <Star className="h-3.5 w-3.5 fill-current" style={{ color: "var(--accent-600)" }} />
                    {copy.directBooking}
                  </span>
                  <p
                    className="mt-4 text-lg font-semibold"
                    style={{ color: "var(--neutral-900)" }}
                  >
                    {copy.directBookingDesc}
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--neutral-500)" }}
                  >
                    {copy.ratesHint}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button onClick={() => scrollToSection("prenota")} className="cta-pill-primary">
                      <CalendarCheck2 className="h-4 w-4" />
                      {copy.verifyAvailability}
                    </button>
                    <a href="tel:+390921820683" className="cta-pill-outline">
                      <Phone className="h-4 w-4" />
                      {copy.callNow}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MENU ────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 xl:hidden"
              style={{
                backgroundColor: "rgba(15, 13, 46, 0.6)",
                backdropFilter: "blur(4px)",
                zIndex: "var(--z-mobile-menu)",
              }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 flex h-dvh w-full max-w-[360px] flex-col bg-white shadow-2xl xl:hidden"
              style={{ zIndex: "calc(var(--z-mobile-menu) + 1)" }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid var(--neutral-150)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-36">
                    <Image
                      src="/images/logo.png"
                      alt="Hotel Paradiso"
                      fill
                      sizes="144px"
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  style={{
                    backgroundColor: "var(--neutral-100)",
                    color: "var(--neutral-700)",
                  }}
                  aria-label="Chiudi menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                {/* Language Switcher */}
                <div
                  className="mb-6 flex items-center gap-2 rounded-xl p-2"
                  style={{
                    backgroundColor: "var(--neutral-50)",
                    border: "1px solid var(--neutral-150)",
                  }}
                >
                  <Globe className="h-4 w-4" style={{ color: "var(--neutral-400)" }} />
                  <button
                    onClick={() => setLanguage("it")}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
                      language === "it"
                        ? "bg-primary-900 text-white"
                        : "text-neutral-500 hover:text-neutral-800",
                    )}
                    style={{ transitionDuration: "var(--duration-fast)" }}
                  >
                    Italiano
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
                      language === "en"
                        ? "bg-primary-900 text-white"
                        : "text-neutral-500 hover:text-neutral-800",
                    )}
                    style={{ transitionDuration: "var(--duration-fast)" }}
                  >
                    English
                  </button>
                </div>

                {/* Rating badge */}
                <div
                  className="mb-6 flex items-center gap-3 rounded-xl p-3"
                  style={{
                    backgroundColor: "var(--accent-50)",
                    border: "1px solid var(--accent-200)",
                  }}
                >
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={cn("h-3.5 w-3.5", i <= 4 ? "fill-current" : "")}
                        style={{ color: i <= 4 ? "var(--accent-500)" : "var(--accent-200)" }}
                      />
                    ))}
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--accent-800)" }}
                  >
                    {copy.rating}
                  </span>
                  <span className="text-xs" style={{ color: "var(--neutral-500)" }}>
                    {copy.ratingLabel}
                  </span>
                </div>

                {/* Nav Links */}
                <div className="space-y-1.5">
                  {[
                    ...primaryLinks,
                    { id: "recensioni", label: language === "it" ? "Recensioni" : "Reviews" },
                    { id: "galleria", label: language === "it" ? "Galleria" : "Gallery" },
                    { id: "faq", label: "FAQ" },
                  ].map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all",
                        activeSection === link.id
                          ? "text-white"
                          : "hover:bg-neutral-50",
                      )}
                      style={{
                        backgroundColor: activeSection === link.id ? "var(--primary-900)" : "transparent",
                        color: activeSection === link.id ? "#fff" : "var(--neutral-700)",
                        transitionDuration: "var(--duration-fast)",
                      }}
                    >
                      {link.label}
                      <ChevronRight
                        className="h-4 w-4 opacity-40"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <div
                className="space-y-2 px-5 py-4"
                style={{ borderTop: "1px solid var(--neutral-150)" }}
              >
                <button
                  onClick={() => scrollToSection("prenota")}
                  className="cta-pill-navbar-light w-full justify-center"
                >
                  <CalendarCheck2 className="h-4 w-4" />
                  {copy.verifyAvailability}
                </button>
                <a
                  href="tel:+390921820683"
                  className="cta-pill-outline w-full flex items-center justify-center"
                >
                  <Phone className="h-4 w-4" />
                  {copy.callNow}
                </a>
                <a
                  href="https://wa.me/393929309201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-pill-ghost w-full flex items-center justify-center gap-2"
                  style={{ color: "#25D366" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
