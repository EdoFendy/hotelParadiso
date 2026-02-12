import type { Metadata } from "next"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"

const PAGE_URL = "https://paradisodellemadonie.it/hotel-castelbuono"

const faqItems = [
  {
    question: "Dove si trova l'hotel a Castelbuono?",
    answer:
      "L'hotel si trova in Via Dante Alighieri, 82, nel centro storico di Castelbuono, vicino ai principali punti di interesse del borgo.",
  },
  {
    question: "Quanto dista l'hotel da Cefalu?",
    answer:
      "La distanza tra Castelbuono e Cefalu e di circa 23 km, con tempi medi di percorrenza in auto intorno ai 25 minuti.",
  },
  {
    question: "Come posso prenotare una camera?",
    answer:
      "Puoi richiedere disponibilita direttamente via telefono, WhatsApp o email per ricevere conferma rapida su tariffe e tipologie di camera.",
  },
]

export const metadata: Metadata = {
  title: "Hotel Castelbuono Centro Storico | Hotel Paradiso delle Madonie",
  description:
    "Cerchi un hotel a Castelbuono? Hotel Paradiso delle Madonie e nel centro storico: camere confortevoli, colazione inclusa e contatto diretto.",
  keywords:
    "hotel castelbuono, hotel castelbuono centro storico, dove dormire castelbuono, hotel paradiso delle madonie",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Hotel Castelbuono Centro Storico",
    description:
      "Guida pratica per scegliere un hotel a Castelbuono: posizione, servizi, distanza da Cefalu e contatto diretto.",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel Castelbuono centro storico - Hotel Paradiso delle Madonie",
      },
    ],
  },
}

export default function HotelCastelbuonoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/hotel-castelbuono",
        title: "Hotel Castelbuono Centro Storico",
        description:
          "Guida pratica per scegliere un hotel a Castelbuono: posizione, servizi e contatto diretto.",
        keywords: ["hotel castelbuono", "hotel castelbuono centro storico", "dove dormire castelbuono"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Hotel Castelbuono", url: PAGE_URL },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <main className="bg-section-light">
      <article className="container-shell py-24 sm:py-28">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: "var(--neutral-500)" }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span> / </span>
          <span style={{ color: "var(--neutral-900)" }}>Hotel Castelbuono</span>
        </nav>

        <h1
          className="text-balance"
          style={{
            fontSize: "clamp(var(--text-3xl), 4vw, var(--text-5xl))",
            lineHeight: "var(--leading-tight)",
            color: "var(--neutral-950)",
            fontFamily: "var(--font-serif)",
          }}
        >
          Hotel a Castelbuono nel centro storico: guida rapida per scegliere bene.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed" style={{ color: "var(--neutral-600)" }}>
          Se stai cercando un hotel a Castelbuono, la posizione conta piu di qualsiasi altra cosa: puoi visitare il
          borgo a piedi, ridurre gli spostamenti e gestire meglio giornate tra Parco delle Madonie e costa di Cefalu.
          Hotel Paradiso delle Madonie si trova in una zona centrale e pratica, utile sia per weekend brevi sia per
          soggiorni di piu notti.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Posizione centrale
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              A pochi minuti a piedi da Castello dei Ventimiglia, ristoranti e principali servizi del centro.
            </p>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Camere per ogni esigenza
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Singole, doppie, triple e quadruple con WiFi, aria condizionata e colazione inclusa.
            </p>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Prenotazione diretta
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Risposta rapida via telefono o WhatsApp, senza passaggi inutili e con informazioni chiare.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl p-6" style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}>
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Distanze utili da Castelbuono
          </h2>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--neutral-700)" }}>
            <li>Cefalu e spiagge: circa 23 km</li>
            <li>Palermo centro: circa 70 km</li>
            <li>Aeroporto di Palermo: circa 85 km</li>
            <li>Parco delle Madonie: accesso rapido dal borgo</li>
          </ul>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Cerchi un hotel vicino Cefalu?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Se la tua ricerca parte da Cefalu, guarda la pagina dedicata con distanza e logistica reali.
            </p>
            <Link href="/hotel-cefalu" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla guida vicino Cefalu
            </Link>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vuoi vedere le camere disponibili?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Scopri differenze tra camere singole, doppie, triple e quadruple.
            </p>
            <Link href="/camere-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla pagina camere
            </Link>
          </div>
        </section>

        <section
          className="mt-10 rounded-2xl p-6"
          style={{
            backgroundColor: "var(--primary-900)",
            color: "#fff",
          }}
        >
          <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            Richiedi disponibilita adesso
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Per trovare il miglior alloggio a Castelbuono per le tue date, contatta direttamente l'hotel.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="tel:+390921820683" className="cta-pill-accent">
              Chiama 0921 820683
            </a>
            <a href="https://wa.me/393929309201" target="_blank" rel="noopener noreferrer" className="cta-pill-outline-light">
              Scrivi su WhatsApp
            </a>
            <Link href="/#prenota" className="cta-pill-outline-light">
              Vai al form di prenotazione
            </Link>
          </div>
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
