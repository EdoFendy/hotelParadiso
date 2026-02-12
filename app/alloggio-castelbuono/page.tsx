import type { Metadata } from "next"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"

const PAGE_URL = "https://paradisodellemadonie.it/alloggio-castelbuono"

const faqItems = [
  {
    question: "Qual e il miglior alloggio a Castelbuono per visitare le Madonie?",
    answer:
      "Dipende dal tuo obiettivo: posizione centrale per muoverti a piedi nel borgo e collegamenti semplici per escursioni nelle Madonie.",
  },
  {
    question: "Un alloggio a Castelbuono e adatto anche per visitare Cefalu?",
    answer:
      "Si. Castelbuono consente di combinare entroterra e costa: Cefalu dista circa 23 km ed e facilmente raggiungibile in auto.",
  },
  {
    question: "Come ricevere conferma della disponibilita?",
    answer:
      "Puoi inviare una richiesta diretta via telefono, WhatsApp o email indicando date, numero ospiti e tipo camera desiderato.",
  },
]

export const metadata: Metadata = {
  title: "Alloggio Castelbuono | Dove Dormire in Centro Storico",
  description:
    "Cerchi un alloggio a Castelbuono? Guida pratica per scegliere dove dormire: posizione, servizi, logistica e contatto diretto con l'hotel.",
  keywords:
    "alloggio castelbuono, dove dormire castelbuono, pernottamento castelbuono, hotel castelbuono centro storico",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Alloggio Castelbuono: come scegliere dove dormire",
    description:
      "Confronta criteri essenziali per scegliere un alloggio a Castelbuono senza errori: posizione, servizi e assistenza.",
    images: [
      {
        url: "/images/reception2.png",
        width: 1200,
        height: 630,
        alt: "Alloggio a Castelbuono - accoglienza Hotel Paradiso delle Madonie",
      },
    ],
  },
}

export default function AlloggioCastelbuonoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/alloggio-castelbuono",
        title: "Alloggio Castelbuono: guida pratica",
        description:
          "Guida pratica per scegliere un alloggio a Castelbuono in base a posizione, servizi e tipo di viaggio.",
        keywords: ["alloggio castelbuono", "dove dormire castelbuono", "pernottamento castelbuono"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Alloggio Castelbuono", url: PAGE_URL },
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
    <main className="bg-section-warm">
      <article className="container-shell py-24 sm:py-28">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: "var(--neutral-500)" }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span> / </span>
          <span style={{ color: "var(--neutral-900)" }}>Alloggio Castelbuono</span>
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
          Alloggio a Castelbuono: come scegliere dove dormire senza perdere tempo.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed" style={{ color: "var(--neutral-600)" }}>
          Quando cerchi un alloggio a Castelbuono, la scelta migliore nasce da tre fattori: posizione reale nel borgo,
          comodita della camera e velocita di assistenza. Una struttura ben posizionata riduce spostamenti, migliora
          l'esperienza serale e rende piu semplice organizzare escursioni nel Parco delle Madonie.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              1. Posizione utile
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Dormire in centro storico di Castelbuono ti permette di muoverti a piedi per cena, visite e servizi.
            </p>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              2. Camere adatte al viaggio
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Verifica capienza reale, dotazioni e colazione inclusa in base a coppia, famiglia o viaggio di lavoro.
            </p>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              3. Contatto diretto
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Per un alloggio a Castelbuono, parlare direttamente con l'hotel evita incomprensioni su date e richieste.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl p-6" style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}>
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Per chi e ideale un soggiorno a Castelbuono
          </h2>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--neutral-700)" }}>
            <li>Coppie che cercano un borgo autentico e ritmi piu lenti</li>
            <li>Famiglie che vogliono alternare natura, mare e visite culturali</li>
            <li>Viaggiatori che cercano un punto base tra Madonie e Cefalu</li>
            <li>Chi partecipa a eventi locali come festival e manifestazioni stagionali</li>
          </ul>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Cerchi un hotel vicino Cefalu?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Se la ricerca parte da Cefalu, valuta la base a Castelbuono con tempi di spostamento chiari.
            </p>
            <Link href="/hotel-cefalu" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla guida vicino Cefalu
            </Link>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vuoi confrontare le tipologie di camera?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Consulta la pagina camere per scegliere rapidamente la soluzione piu adatta.
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
            Contatto diretto per il tuo alloggio a Castelbuono
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Invia la richiesta con date e numero ospiti per ricevere una risposta rapida su disponibilita camere.
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
