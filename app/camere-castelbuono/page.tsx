import type { Metadata } from "next"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"

const PAGE_URL = "https://paradisodellemadonie.it/camere-castelbuono"

const faqItems = [
  {
    question: "Quali camere sono disponibili a Castelbuono?",
    answer:
      "Sono disponibili camere singole, doppie, triple e quadruple, adatte a soggiorni di coppia, famiglia o piccoli gruppi.",
  },
  {
    question: "Le camere includono colazione e WiFi?",
    answer:
      "Si, la colazione e inclusa e il WiFi e disponibile nelle camere e nelle aree comuni della struttura.",
  },
  {
    question: "Come scegliere la camera giusta?",
    answer:
      "Scegli in base a numero ospiti, durata del soggiorno e necessita specifiche. Per dubbi puoi contattare direttamente l'hotel.",
  },
]

export const metadata: Metadata = {
  title: "Camere Castelbuono | Singole, Doppie, Triple e Quadruple",
  description:
    "Scopri le camere a Castelbuono: singole, doppie, triple e quadruple con WiFi, aria condizionata e colazione inclusa. Prenotazione diretta.",
  keywords:
    "camere castelbuono, camera doppia castelbuono, camera tripla castelbuono, hotel castelbuono camere",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Camere a Castelbuono: guida scelta rapida",
    description:
      "Confronta tipologie di camere a Castelbuono e scegli in base a capienza, comfort e durata del soggiorno.",
    images: [
      {
        url: "/images/camera2.jpg",
        width: 1200,
        height: 630,
        alt: "Camere a Castelbuono - Hotel Paradiso delle Madonie",
      },
    ],
  },
}

export default function CamereCastelbuonoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/camere-castelbuono",
        title: "Camere Castelbuono",
        description:
          "Guida alle camere disponibili a Castelbuono con differenze tra singola, doppia, tripla e quadrupla.",
        keywords: ["camere castelbuono", "camera doppia castelbuono", "hotel castelbuono camere"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Camere Castelbuono", url: PAGE_URL },
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
          <span style={{ color: "var(--neutral-900)" }}>Camere Castelbuono</span>
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
          Camere a Castelbuono: singola, doppia, tripla o quadrupla?
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed" style={{ color: "var(--neutral-600)" }}>
          Scegliere la camera giusta a Castelbuono e semplice se parti da tre criteri: numero ospiti, spazio utile e
          durata del soggiorno. Qui trovi una panoramica chiara delle principali tipologie per prenotare senza errori.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Camera singola
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Ideale per chi viaggia da solo e cerca una base comoda nel centro di Castelbuono.
            </p>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Camera doppia
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Soluzione classica per coppie: equilibrio tra comfort, praticita e ottimo rapporto qualita/prezzo.
            </p>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Camera tripla
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Perfetta per piccoli nuclei familiari o gruppi ridotti che vogliono restare in una sola camera.
            </p>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Camera quadrupla
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              La scelta con piu capienza, indicata per famiglie o gruppi che vogliono massimizzare spazio e comodita.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl p-6" style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}>
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Dotazioni tipiche delle camere
          </h2>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--neutral-700)" }}>
            <li>WiFi gratuito</li>
            <li>Aria condizionata</li>
            <li>Bagno privato</li>
            <li>TV</li>
            <li>Colazione inclusa</li>
          </ul>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Cerchi camere vicino Cefalu?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Consulta la guida dedicata a chi cerca hotel a Cefalu e vuole una base a 23 km.
            </p>
            <Link href="/hotel-cefalu" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla guida vicino Cefalu
            </Link>
          </div>
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
              Ti serve un alloggio su misura?
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Leggi la guida alloggio per scegliere in base al tuo tipo di viaggio.
            </p>
            <Link href="/alloggio-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
              Vai alla guida alloggio
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
            Richiedi disponibilita camere a Castelbuono
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Invia date e numero ospiti per ricevere rapidamente la soluzione camera piu adatta.
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
