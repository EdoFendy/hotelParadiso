"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Clock, CreditCard, Dog, HelpCircle, Key, Mail, MessageCircle, Minus, Palette, Phone, Plus, Wifi } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const faqIcons = [Clock, Key, Dog, HelpCircle, HelpCircle, CreditCard, Wifi, HelpCircle]

export default function FAQSection() {
  const { language, t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index))

  const faqItems = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        question: t(`faq.q${i + 1}`),
        answer: t(`faq.a${i + 1}`),
        Icon: faqIcons[i],
      })),
    [t],
  )

  const contactCopy = useMemo(
    () =>
      language === "it"
        ? {
          heading: "Hai ancora dubbi?",
          desc: "Contattaci direttamente — rispondiamo in giornata su qualsiasi domanda.",
          whatsapp: "WhatsApp",
          callNow: "Chiama ora",
          sendEmail: "Invia email",
        }
        : {
          heading: "Still have questions?",
          desc: "Contact us directly — we reply within the day on any matter.",
          whatsapp: "WhatsApp",
          callNow: "Call now",
          sendEmail: "Send email",
        },
    [language],
  )

  return (
    <section id="faq" className="section-shell bg-section-warm">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Left: FAQ list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="eyebrow">{t("faq.title")}</span>
              <h2
                className="mt-4 text-balance"
                style={{
                  fontSize: "clamp(var(--text-2xl), 3.5vw, var(--text-4xl))",
                  color: "var(--neutral-950)",
                  fontFamily: "var(--font-serif)",
                  lineHeight: "var(--leading-tight)",
                }}
              >
                {t("faq.subtitle")}
              </h2>
            </motion.div>

            <div className="mt-10 space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="surface-card overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="flex w-full items-start gap-3.5 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors"
                        style={{
                          backgroundColor: isOpen ? "var(--accent-50)" : "var(--neutral-50)",
                          color: isOpen ? "var(--accent-700)" : "var(--neutral-400)",
                          transitionDuration: "var(--duration-fast)",
                        }}
                      >
                        <item.Icon className="h-4 w-4" />
                      </span>

                      <span className="flex-1">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--neutral-900)" }}
                        >
                          {item.question}
                        </span>
                      </span>

                      <span
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors"
                        style={{
                          backgroundColor: isOpen ? "var(--primary-900)" : "var(--neutral-100)",
                          color: isOpen ? "#fff" : "var(--neutral-500)",
                          transitionDuration: "var(--duration-fast)",
                        }}
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed"
                            style={{ color: "var(--neutral-600)" }}
                          >
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Contact sidebar */}
          {/* Right: Contact sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start h-fit">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--primary-900)",
                  color: "#fff",
                }}
              >
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {contactCopy.heading}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {contactCopy.desc}
                </p>

                <div className="mt-7 space-y-2.5">
                  <a
                    href="https://wa.me/393929309201?text=Ciao%2C%20ho%20una%20domanda%20sulla%20mia%20prenotazione"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-pill-accent flex w-full items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {contactCopy.whatsapp}
                  </a>
                  <a
                    href="tel:+390921820683"
                    className="cta-pill-outline-light flex w-full items-center justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    {contactCopy.callNow}
                  </a>
                  <a
                    href="mailto:info@paradisodellemadonie.it"
                    className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    <Mail className="h-4 w-4" />
                    {contactCopy.sendEmail}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
