import type { Metadata } from "next"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"

const PAGE_URL = "https://paradisodellemadonie.it/hotel-cefalu"

const faqItems = [
  {
    question: "L'hotel si trova a Cefalu?",
    answer:
      "No, l'hotel si trova a Castelbuono, nel centro storico, a circa 23 km da Cefalu.",
  },
  {
    question: "Quanto tempo serve per arrivare a Cefalu?",
    answer:
      "In auto il tempo medio e circa 25 minuti, variabile in base al traffico e al periodo.",
  },
  {
    question: "Perche scegliere Castelbuono se cerco hotel a Cefalu?",
    answer:
      "Castelbuono offre un contesto piu tranquillo e autentico, mantenendo Cefalu facilmente raggiungibile in giornata.",
  },
]

export const metadata: Metadata = {
  title: "Hotel Cefalu? Soggiorna a Castelbuono a 23 km | Hotel Paradiso delle Madonie",
  description:
    "Cerchi un hotel a Cefalu? Hotel Paradiso delle Madonie e a Castelbuono, a 23 km dalla costa: camere confortevoli, colazione inclusa e contatto diretto.",
  keywords:
    "hotel cefalu, hotel vicino cefalu, alloggio vicino cefalu, dove dormire vicino cefalu, hotel castelbuono vicino cefalu",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Hotel vicino Cefalu: alternativa a Castelbuono",
    description:
      "A 23 km da Cefalu, Hotel Paradiso delle Madonie ti permette di combinare mare, borgo storico e Madonie.",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel vicino Cefalu - Hotel Paradiso delle Madonie a Castelbuono",
      },
    ],
  },
}

export default function HotelCefaluPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/hotel-cefalu",
        title: "Hotel vicino Cefalu",
        description:
          "Pagina informativa per chi cerca hotel a Cefalu e valuta un soggiorno a Castelbuono, a 23 km.",
        keywords: [
          "hotel cefalu",
          "hotel vicino cefalu",
          "alloggio vicino cefalu",
          "hotel castelbuono vicino cefalu",
        ],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Hotel vicino Cefalu", url: PAGE_URL },
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
          <span style={{ color: "var(--neutral-900)" }}>Hotel vicino Cefalu</span>
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
          Cerchi un hotel a Cefalu? Ecco una base comoda a 23 km, nel centro di Castelbuono.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed" style={{ color: "var(--neutral-600)" }}>
          Se stai cercando hotel a Cefalu ma vuoi anche tranquillita, autenticita e accesso rapido alle Madonie,
          Castelbuono e una scelta concreta. Hotel Paradiso delle Madonie si trova nel centro storico del borgo,
          con collegamento semplice verso Cefalu in circa 25 minuti d'auto.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Distanza da Cefalu
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Circa 23 km: puoi visitare Cefalu e rientrare in serata senza difficolta.
            </p>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Contesto piu tranquillo
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Centro storico di Castelbuono, ritmi piu comodi e atmosfera locale autentica.
            </p>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Prenotazione diretta
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Conferma rapida su camere e disponibilita via telefono o WhatsApp.
            </p>
          </div>
        </section>

        <section
          className="mt-10 rounded-2xl p-6"
          style={{
            backgroundColor: "var(--neutral-0)",
            border: "1px solid var(--neutral-150)",
          }}
        >
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Itinerario tipo: Cefalu + Castelbuono
          </h2>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--neutral-700)" }}>
            <li>Mattina: spiaggia e centro storico di Cefalu</li>
            <li>Pomeriggio: rientro a Castelbuono e visita del borgo</li>
            <li>Sera: cena nel centro storico e pernottamento in zona tranquilla</li>
          </ul>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vuoi focus su Castelbuono?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Leggi la guida hotel con posizione, servizi e distanze principali.
            </p>
            <Link href="/hotel-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla guida hotel Castelbuono
            </Link>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Cerchi una camera specifica?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Confronta camere singole, doppie, triple e quadruple.
            </p>
            <Link href="/camere-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla guida camere
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
            Richiedi disponibilita per soggiornare vicino Cefalu
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Invia date e numero ospiti: riceverai una risposta rapida con la soluzione migliore.
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
