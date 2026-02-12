"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { language, t } = useLanguage()

  const copy = useMemo(
    () =>
      language === "it"
        ? {
          eyebrow: "Contatti",
          title: "Parla con l'hotel, non con un call center.",
          subtitle:
            "Telefono, email, WhatsApp: scegli il canale più comodo e ricevi risposta diretta su camere, prezzi e richieste speciali.",
          directContacts: "Contatti diretti",
          callNow: "Chiama ora",
          whatsapp: "Scrivi su WhatsApp",
          sendMail: "Invia email",
        }
        : {
          eyebrow: "Contacts",
          title: "Talk to the hotel, not a call center.",
          subtitle:
            "Phone, email, WhatsApp: choose your preferred channel and get direct answers on rooms, rates and special requests.",
          directContacts: "Direct contacts",
          callNow: "Call now",
          whatsapp: "Message on WhatsApp",
          sendMail: "Send email",
        },
    [language],
  )

  const contactItems = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "0921 820683",
      href: "tel:+390921820683",
    },
    {
      icon: Phone,
      label: t("contact.mobile"),
      value: "392 930 9201",
      href: "tel:+393929309201",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "info@paradisodellemadonie.it",
      href: "mailto:info@paradisodellemadonie.it",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: "Via Dante Alighieri, 82 - 90013 Castelbuono (PA)",
      href: undefined,
    },
  ]

  return (
    <section id="contatti" className="section-shell-compact bg-section-warm">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title text-balance">{copy.title}</h2>
          <p className="section-subtitle mx-auto">{copy.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Contact cards */}
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card p-6 md:p-7"
          >
            <h3
              className="text-lg font-semibold"
              style={{
                color: "var(--neutral-900)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {copy.directContacts}
            </h3>

            <div className="mt-5 space-y-3">
              {contactItems.map((item) => {
                const Tag = item.href ? "a" : "div"
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all"
                    style={{
                      backgroundColor: "var(--neutral-50)",
                      border: "1px solid var(--neutral-150)",
                      color: "var(--neutral-700)",
                      transitionDuration: "var(--duration-fast)",
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
                    <span>
                      <strong
                        className="block text-sm"
                        style={{ color: "var(--neutral-900)" }}
                      >
                        {item.label}
                      </strong>
                      <span className="text-sm">{item.value}</span>
                    </span>
                  </Tag>
                )
              })}
            </div>
          </motion.article>

          {/* Quick booking card */}
          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl p-6 md:p-7"
            style={{
              backgroundColor: "var(--primary-900)",
              color: "#fff",
            }}
          >
            <h3
              className="text-2xl text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t("contact.book")}
            </h3>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {t("contact.book.desc")}
            </p>

            <div
              className="mt-6 space-y-2 text-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <p>{t("contact.checkin")}</p>
              <p>{t("contact.checkout")}</p>
              <p>{t("contact.available")}</p>
            </div>

            <div className="mt-7 space-y-2">
              <a
                href="https://wa.me/393929309201?text=Salve%2C%20vorrei%20prenotare%20una%20camera%20all%27Hotel%20Paradiso%20delle%20Madonie"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pill-accent flex w-full items-center justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                {copy.whatsapp}
              </a>
              <a
                href="tel:+390921820683"
                className="cta-pill-outline-light flex w-full items-center justify-center"
              >
                <Phone className="h-4 w-4" />
                {copy.callNow}
              </a>
              <a
                href="mailto:info@paradisodellemadonie.it"
                className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Mail className="h-4 w-4" />
                {copy.sendMail}
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
