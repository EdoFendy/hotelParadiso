import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/parco-madonie"

export const metadata: Metadata = {
  title: "Parco delle Madonie: Escursioni e Sentieri | Guida 2026",
  description:
    "I migliori sentieri delle Madonie: Gole di Tiberio, Pizzo Carbonara, Piano Battaglia, agrifogli giganti. Base ideale: hotel 4 stelle a Castelbuono.",
  keywords:
    "parco madonie escursioni, madonie trekking, madonie sentieri, gole di tiberio, pizzo carbonara, piano battaglia, castelbuono escursioni",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Parco delle Madonie: Escursioni e Sentieri | Guida 2026",
    description:
      "40.000 ettari di Geoparco UNESCO. Sentieri per tutti i livelli, canyon, vette e foreste millenarie — a partire da Castelbuono.",
    images: [
      {
        url: "/images/parcomadonie.png",
        width: 1200,
        height: 630,
        alt: "Parco delle Madonie - Escursioni e Sentieri",
      },
    ],
  },
}

const escursioniFacili = [
  {
    name: "Bosco di Castelbuono",
    distanza: "1-3 km",
    durata: "1-3h",
    stagione: "Tutto l'anno",
    descrizione: "Querce, castagni e frassini da manna. Sentieri facili, alcuni accessibili con passeggino. In autunno i colori sono spettacolari.",
  },
  {
    name: "Sentiero Natura Castelbuono",
    distanza: "Dal centro",
    durata: "1,5-2h",
    stagione: "Tutto l'anno",
    descrizione: "Anello segnalato attraverso macchia mediterranea con punti panoramici sul borgo e la costa.",
  },
  {
    name: "Gole di Tiberio in gommone",
    distanza: "20 km (20 min auto)",
    durata: "2h",
    stagione: "Mag-Ott",
    descrizione: "Canyon calcareo con pareti di 50 metri. Escursione in gommone su acqua cristallina. Adulti €17, bambini €11.",
  },
]

const escursioniMedie = [
  {
    name: "Agrifogli Giganti di Piano Pomo",
    distanza: "20 km",
    durata: "2-3h",
    stagione: "Mar-Nov",
    descrizione: "Foresta di agrifogli secolari, alcuni di 300 anni e 15 metri. Tra i piu grandi d'Europa. Una cattedrale vegetale.",
  },
  {
    name: "Monte San Salvatore",
    distanza: "1 km dal centro",
    durata: "1-1,5h",
    stagione: "Tutto l'anno",
    descrizione: "Salita ripida ma breve. Rovine bizantine e panorama su Castelbuono. Perfetto al tramonto.",
  },
  {
    name: "Sentieri da Piano Sempria (1.260m)",
    distanza: "30 min auto",
    durata: "2-4h",
    stagione: "Apr-Nov",
    descrizione: "Punto di partenza per sentieri naturalistici. Sughereta secolare delle Madonie.",
  },
  {
    name: "Vallone Madonna degli Angeli",
    distanza: "3 km",
    durata: "2-3h",
    stagione: "Primavera/Autunno",
    descrizione: "Valle nascosta con vegetazione lussureggiante, attraversamenti di torrenti, silenzio assoluto.",
  },
]

const escursioniDifficili = [
  {
    name: "Pizzo Carbonara (1.979m)",
    distanza: "25 km (Piano Battaglia)",
    durata: "3-5h A/R",
    stagione: "Mag-Ott",
    descrizione: "La vetta piu alta delle Madonie, la seconda della Sicilia. Vista a 360°: Etna, Isole Eolie, costa tirrenica.",
  },
  {
    name: "Canyoning Gole di Tiberio",
    distanza: "20 km",
    durata: "3-5h",
    stagione: "Giu-Set",
    descrizione: "Calate in corda, nuoto, salti — per chi vuole l'adrenalina. Dai 16 anni, con guide esperte.",
  },
]

const avventure = [
  { attivita: "Mountain Bike", dove: "Sentieri forestali e single-track", periodo: "Mar-Nov", perChi: "Intermedi-Esperti (E-bike disponibili)" },
  { attivita: "Ciclismo su strada", dove: "Piano Battaglia, discese panoramiche", periodo: "Mar-Nov", perChi: "Il Giro d'Italia e passato di qui" },
  { attivita: "Equitazione", dove: "Centri ippici zona (5-15 km)", periodo: "Tutto l'anno", perChi: "Dai 8 anni. Lezioni e escursioni" },
  { attivita: "Arrampicata", dove: "Falesie calcaree (Isnello, gole)", periodo: "Mar-Nov", perChi: "Intermedi-Esperti, con guida" },
  { attivita: "Zipline Sicilia", dove: "Vicino Gole di Tiberio", periodo: "Mag-Ott", perChi: "Adrenalina pura — 1 ora" },
  { attivita: "Ciaspole", dove: "Piano Battaglia (1.600m)", periodo: "Dic-Mar", perChi: "Faggete innevate in Sicilia — si, in Sicilia" },
  { attivita: "Parapendio", dove: "Punti di lancio in quota", periodo: "Apr-Ott", perChi: "Volo biposto — mare davanti, Etna dietro" },
  { attivita: "Osservatorio GAL Hassin", dove: "Isnello (15 km)", periodo: "Tutto l'anno", perChi: "Serate di osservazione astronomica pubblica" },
]

export default function ParcoMadonieEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/parco-madonie",
        title: "Parco delle Madonie: Escursioni, Sentieri e Avventure",
        description:
          "Guida completa alle escursioni nel Parco delle Madonie: sentieri per tutti i livelli, canyon, vette e foreste millenarie.",
        keywords: ["parco madonie escursioni", "madonie trekking", "gole di tiberio", "pizzo carbonara"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Parco delle Madonie", url: PAGE_URL },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Parco delle Madonie",
        description:
          "Geoparco UNESCO di 40.000 ettari in Sicilia. Ospita oltre meta delle specie vegetali della Sicilia, l'Abies nebrodensis e aquile reali.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Castelbuono",
          addressRegion: "PA",
          addressCountry: "IT",
        },
      },
    ],
  }

  return (
    <>
      <NavigationBar />
      <main className="bg-section-light">
        {/* Hero scuro per visibilita navbar */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/madonie-sentiero.jpg"
            alt="Sentiero di montagna nel Parco delle Madonie - trekking Sicilia"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.72) 100%)" }}
          />
          <div
            className="relative container-shell flex flex-col justify-end"
            style={{ minHeight: "65vh", paddingTop: "8rem", paddingBottom: "3rem" }}
          >
            <nav aria-label="Breadcrumb" className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <Link href="/" className="hover:underline" style={{ color: "rgba(255,255,255,0.72)" }}>Home</Link>
              <span> / </span>
              <Link href="/esperienze" className="hover:underline" style={{ color: "rgba(255,255,255,0.72)" }}>Esperienze</Link>
              <span> / </span>
              <span style={{ color: "#fff" }}>Parco delle Madonie</span>
            </nav>
            <h1
              className="text-balance"
              style={{
                fontSize: "clamp(var(--text-3xl), 4vw, var(--text-5xl))",
                lineHeight: "var(--leading-tight)",
                color: "#fff",
                fontFamily: "var(--font-serif)",
              }}
            >
              Parco delle Madonie: Escursioni, Sentieri e Avventure
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Il Parco delle Madonie e un Geoparco UNESCO di 40.000 ettari. Ospita oltre meta delle specie vegetali della
              Sicilia (1.600+), l'Abies nebrodensis — con meno di 30 esemplari al mondo — aquile reali e grifoni.
              Castelbuono e il punto d'accesso principale. L'Hotel Paradiso delle Madonie e la tua base: doccia calda
              dopo il trekking, colazione energetica la mattina, e il borgo medievale per la sera.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Facili */}
        <section className="mt-4">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Escursioni Facili — Per Tutti
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Escursione", "Distanza", "Durata", "Stagione", "Descrizione"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {escursioniFacili.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)", minWidth: 160 }}>{e.name}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{e.distanza}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{e.durata}</td>
                    <td className="p-3" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{e.stagione}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)", minWidth: 240 }}>{e.descrizione}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Medie */}
        <section className="mt-10">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Escursioni Medie — Escursionisti con Esperienza Base
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Escursione", "Distanza", "Durata", "Stagione", "Descrizione"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {escursioniMedie.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)", minWidth: 160 }}>{e.name}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{e.distanza}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{e.durata}</td>
                    <td className="p-3" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{e.stagione}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)", minWidth: 240 }}>{e.descrizione}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Difficili */}
        <section className="mt-10">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Escursioni Impegnative — Escursionisti Esperti
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Escursione", "Distanza", "Durata", "Stagione", "Descrizione"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {escursioniDifficili.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)", minWidth: 160 }}>{e.name}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{e.distanza}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{e.durata}</td>
                    <td className="p-3" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{e.stagione}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)", minWidth: 240 }}>{e.descrizione}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/foresta-sentiero.jpg"
              alt="Sentiero nella foresta del Parco delle Madonie"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/parcomadonie.png"
              alt="Veduta panoramica del Parco delle Madonie"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Avventure Speciali */}
        <section className="mt-10">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Avventure Speciali
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Attivita", "Dove", "Periodo", "Per chi"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {avventure.map((a, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)" }}>{a.attivita}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)" }}>{a.dove}</td>
                    <td className="p-3" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{a.periodo}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)" }}>{a.perChi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/autunno-madonie.jpg"
              alt="Foliage autunnale nelle faggete delle Madonie"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/fronte.png"
              alt="Hotel Paradiso delle Madonie - la tua base per il Parco"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Links */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Dopo l'escursione, il borgo ti aspetta
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Castelbuono: Castello, Fiasconaro, trattorie locali. La tua sera dopo una giornata sulle Madonie.
            </p>
            <Link href="/esperienze/castelbuono" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Scopri Castelbuono →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Periodo migliore per venire?
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Primavera e autunno sono i periodi d'oro per le escursioni. Leggi la guida stagionale.
            </p>
            <Link href="/esperienze/quando-venire" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida stagionale →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}
        >
          <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            La tua base per le Madonie
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Torni in hotel dopo l'escursione: doccia calda, letto comodo, e domani si riparte. Da €72/notte,
            colazione inclusa.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="tel:+390921820683" className="cta-pill-accent">
              Chiama 0921 820683
            </a>
            <a href="https://wa.me/393929309201" target="_blank" rel="noopener noreferrer" className="cta-pill-outline-light">
              Scrivi su WhatsApp
            </a>
            <Link href="/#prenota" className="cta-pill-outline-light">
              Verifica disponibilita
            </Link>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </article>
      </main>
      <Footer />
    </>
  )
}
