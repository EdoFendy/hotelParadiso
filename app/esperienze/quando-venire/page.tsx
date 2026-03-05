import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/quando-venire"

export const metadata: Metadata = {
  title: "Quando Visitare Castelbuono: Guida Stagionale | Hotel Madonie",
  description:
    "Primavera, estate, autunno, inverno: ogni stagione a Castelbuono ha qualcosa di unico. Scopri il periodo perfetto per la tua vacanza nelle Madonie.",
  keywords:
    "quando visitare castelbuono, castelbuono primavera, castelbuono estate, castelbuono autunno, periodo migliore sicilia madonie",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Quando Visitare Castelbuono: Guida Stagionale",
    description:
      "Ogni stagione a Castelbuono ha il suo motivo. Primavera in fiore, estate tra mare e festival, autunno di funghi, inverno con Fiasconaro.",
    images: [
      {
        url: "/images/parcomadonie.png",
        width: 1200,
        height: 630,
        alt: "Parco delle Madonie - Quando Visitare Castelbuono",
      },
    ],
  },
}

const stagioni = [
  {
    name: "Primavera",
    mesi: "Marzo — Maggio",
    rating: "★★★★★",
    tag: "Il periodo perfetto",
    colore: "#4ade80",
    highlights: [
      "Temperature ideali: 15-25°C",
      "Fioritura dei campi e dei frutteti",
      "Settimana Santa con processioni storiche",
      "Sentieri al massimo — cascate e torrenti in piena",
      "Pochi turisti, prezzi migliori",
      "Ponte 25 aprile e 1 maggio",
      "Cefalu senza la folla estiva",
    ],
    eventi: ["Carnevale (febbraio)", "Settimana Santa (marzo/aprile)", "Ponti primaverili"],
    desc: "La primavera e il momento d'oro delle Madonie. Le temperature sono perfette per escursioni a tutti i livelli, i sentieri sono al meglio e il borgo torna a vivere dopo l'inverno. La Settimana Santa a Castelbuono e uno spettacolo che vale il viaggio da solo.",
  },
  {
    name: "Estate",
    mesi: "Giugno — Agosto",
    rating: "★★★★",
    tag: "Mare + montagna",
    colore: "#fb923c",
    highlights: [
      "Mare a Cefalu a 25 minuti",
      "Castelbuono a 28-30°C (fresco la sera)",
      "Costa a 35°C+, ma qui si respira",
      "Ypsigrock Festival ad agosto",
      "Raccolta della manna (luglio-settembre)",
      "Serate nelle piazze",
      "DiVino Festival (luglio)",
    ],
    eventi: ["DiVino Festival (luglio)", "Raccolta Manna (lug-set)", "YPSIGROCK Festival (agosto)", "Festa di Sant'Anna (agosto)"],
    desc: "L'estate e la stagione piu frequentata. Il caldo sulla costa (35°C+) diventa piacevole a Castelbuono (28-30°C, fresco la sera grazie all'altitudine). Lo Ypsigrock Festival ad agosto porta musica indie internazionale nel cortile del castello dal 1997.",
  },
  {
    name: "Autunno",
    mesi: "Settembre — Novembre",
    rating: "★★★★★",
    tag: "La stagione dei sapori",
    colore: "#f59e0b",
    highlights: [
      "Funghi porcini e tartufi delle Madonie",
      "Vendemmia e olio nuovo",
      "Colori del foliage nelle faggete",
      "Temperature perfette per escursioni",
      "FungiFest a ottobre",
      "Meno turisti, prezzi ottimi",
      "Mare ancora balneabile a settembre",
    ],
    eventi: ["FungiFest / Sagra del Fungo (ottobre)", "Vendemmia (settembre-ottobre)", "Olio nuovo (novembre)", "Festa di San Martino (11 novembre)"],
    desc: "L'autunno e la stagione dei sapori. Funghi porcini, tartufi, olive, castagne e vendemmia si concentrano in pochi mesi straordinari. Il foliage nelle faggete delle Madonie e uno spettacolo inatteso per chi pensa alla Sicilia solo come a un'isola di sole.",
  },
  {
    name: "Inverno",
    mesi: "Dicembre — Febbraio",
    rating: "★★★",
    tag: "Natale e Carnevale",
    colore: "#60a5fa",
    highlights: [
      "Natale a Castelbuono: presepe vivente, mercatini",
      "Panettone Fiasconaro appena sfornato",
      "Ciaspolate a Piano Battaglia nella neve",
      "Carnevale di Castelbuono (febbraio)",
      "Meno turisti, prezzi migliori di sempre",
      "Atmosfera autentica del borgo siciliano",
    ],
    eventi: ["Natale a Castelbuono (dicembre)", "Capodanno nel borgo", "Carnevale (febbraio)"],
    desc: "L'inverno offre un'esperienza di Castelbuono autentica e raccolta. Il Natale riempie il borgo di luci, presepi viventi e il profumo del panettone Fiasconaro. A Piano Battaglia, a 1.600 metri, e possibile fare ciaspolate nella neve — si, in Sicilia.",
  },
]

const calEventi = [
  { mese: "Febbraio", evento: "Carnevale di Castelbuono" },
  { mese: "Marzo/Aprile", evento: "Settimana Santa" },
  { mese: "Giugno", evento: "Estate Castelbuonese — concerti e teatro" },
  { mese: "Luglio", evento: "Raccolta della Manna + DiVino Festival" },
  { mese: "Agosto", evento: "YPSIGROCK Festival + Festa di Sant'Anna" },
  { mese: "Ottobre", evento: "FungiFest / Sagra del Fungo" },
  { mese: "Novembre", evento: "Festa di San Martino — tradizione vinicola" },
  { mese: "Dicembre", evento: "Natale a Castelbuono — presepe vivente" },
]

export default function QuandoVenireEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/quando-venire",
        title: "Quando Visitare Castelbuono — Ogni Stagione Ha il Suo Motivo",
        description:
          "Guida stagionale completa per visitare Castelbuono: primavera, estate, autunno e inverno.",
        keywords: ["quando visitare castelbuono", "castelbuono primavera", "castelbuono estate autunno"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Quando Venire", url: PAGE_URL },
      ]),
    ],
  }

  return (
    <>
      <NavigationBar />
      <main className="bg-section-light">
        {/* Hero stagionale */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/autunno-madonie.jpg"
            alt="Madonie in autunno - foliage sui monti siciliani"
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
              <span style={{ color: "#fff" }}>Quando Venire</span>
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
              Quando Visitare Castelbuono — Ogni Stagione Ha il Suo Motivo
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Castelbuono non e una destinazione stagionale. E un borgo vivo tutto l'anno, con eventi, sapori e paesaggi
              che cambiano con le stagioni. Non esiste il momento sbagliato — esiste il momento giusto per il tipo di
              vacanza che vuoi.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Stagioni */}
        <section className="mt-12 space-y-8">
          {stagioni.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2
                    className="text-2xl font-semibold"
                    style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
                  >
                    {s.name}
                    <span className="ml-2 text-base font-normal" style={{ color: s.colore }}>
                      {s.rating}
                    </span>
                  </h2>
                  <p className="text-sm" style={{ color: "var(--neutral-500)" }}>{s.mesi}</p>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-sm font-semibold"
                  style={{ backgroundColor: "var(--accent-50)", color: "var(--accent-700)", border: "1px solid var(--accent-100)" }}
                >
                  {s.tag}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                {s.desc}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase" style={{ color: "var(--neutral-500)", letterSpacing: "0.1em" }}>Highlights</p>
                  <ul className="mt-2 space-y-1 text-sm" style={{ color: "var(--neutral-700)" }}>
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span style={{ color: s.colore }}>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase" style={{ color: "var(--neutral-500)", letterSpacing: "0.1em" }}>Eventi principali</p>
                  <ul className="mt-2 space-y-1 text-sm" style={{ color: "var(--neutral-700)" }}>
                    {s.eventi.map((ev, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span style={{ color: "var(--accent-700)" }}>→</span> {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/primavera-fiori.jpg"
              alt="Primavera in fiore nelle Madonie - il periodo migliore per le escursioni"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/inverno-neve.jpg"
              alt="Inverno con la neve sulle Madonie - Piano Battaglia"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Calendario eventi */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Calendario degli Eventi Principali
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  <th className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>Mese</th>
                  <th className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>Evento</th>
                </tr>
              </thead>
              <tbody>
                {calEventi.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{e.mese}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)" }}>{e.evento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/mare-estivo.jpg"
              alt="Mare cristallino d'estate - Cefalù a 25 minuti da Castelbuono"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/autunno-madonie.jpg"
              alt="Foliage autunnale sulle Madonie - la stagione dei sapori"
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
              Pianifica le escursioni
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              I sentieri del Parco delle Madonie sono al meglio in primavera e autunno. Guida completa alle escursioni.
            </p>
            <Link href="/esperienze/parco-madonie" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida escursioni →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              I sapori di ogni stagione
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              Manna in estate, funghi in autunno, panettone in inverno. La guida enogastronomica completa.
            </p>
            <Link href="/esperienze/enogastronomia" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida enogastronomia →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}
        >
          <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            Qualunque stagione scegli, l'Hotel Paradiso delle Madonie ti aspetta
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Da €72/notte, colazione con prodotti locali inclusa. Aperto tutto l'anno.
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
