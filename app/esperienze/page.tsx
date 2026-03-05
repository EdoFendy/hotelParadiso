import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze"

export const metadata: Metadata = {
  title: "Esperienze a Castelbuono e nelle Madonie | Hotel Paradiso",
  description:
    "Cosa vedere e fare a Castelbuono e nelle Madonie: escursioni, mare a Cefalu, enogastronomia, borghi, gite con bambini. Tutto a portata dall'hotel 4 stelle nel centro storico.",
  keywords:
    "esperienze castelbuono, cosa fare madonie, escursioni madonie, castelbuono cosa vedere, cefalu castelbuono, enogastronomia madonie",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Esperienze a Castelbuono e nelle Madonie",
    description:
      "Guida completa alle esperienze da vivere soggiornando all'Hotel Paradiso delle Madonie: natura, cultura, mare, cibo, borghi.",
    images: [
      {
        url: "/images/sicily-hilltop.jpg",
        width: 1200,
        height: 630,
        alt: "Borgo medievale italiano al tramonto - Esperienze Castelbuono",
      },
    ],
  },
}

const experiences = [
  {
    href: "/esperienze/castelbuono",
    icon: "🏰",
    title: "Castelbuono",
    subtitle: "Il Borgo che Non ti Aspetti",
    description:
      "Castello medievale, chiese barocche, la Pasticceria Fiasconaro e vicoli che sembrano fermi nel tempo.",
    badge: "0 km dall'hotel",
  },
  {
    href: "/esperienze/parco-madonie",
    icon: "🏔️",
    title: "Parco delle Madonie",
    subtitle: "Natura a Portata di Mano",
    description:
      "40.000 ettari di Geoparco UNESCO. Sentieri per tutti i livelli, Gole di Tiberio, Pizzo Carbonara e agrifogli giganti.",
    badge: "Geoparco UNESCO",
  },
  {
    href: "/esperienze/cefalu-costa",
    icon: "🌊",
    title: "Cefalu e la Costa",
    subtitle: "Il Mare a 25 Minuti",
    description:
      "Montagna la mattina, mare il pomeriggio. Cefalu con il suo Duomo normanno e le spiagge piu belle della costa nord.",
    badge: "23 km · 25 min",
  },
  {
    href: "/esperienze/enogastronomia",
    icon: "🍷",
    title: "Enogastronomia",
    subtitle: "I Sapori che Non Dimenticherai",
    description:
      "La manna dei frassini, il panettone Fiasconaro, i funghi porcini in autunno, i formaggi e i vini delle Madonie.",
    badge: "Presidio Slow Food",
  },
  {
    href: "/esperienze/gite-giornaliere",
    icon: "🗺️",
    title: "Gite di un Giorno",
    subtitle: "Tutta la Sicilia a Portata",
    description:
      "Palermo a 1 ora, borghi UNESCO a 30 minuti, Isole Eolie in aliscafo, Monreale e i suoi mosaici. Castelbuono e al centro di tutto.",
    badge: "Palermo 1h · Gangi 35 min",
  },
  {
    href: "/esperienze/famiglie-bambini",
    icon: "👨‍👩‍👧‍👦",
    title: "Con Bambini",
    subtitle: "La Sicilia a Misura di Famiglia",
    description:
      "Castello medievale, asino-trekking, Gole di Tiberio in gommone, assaggio della manna direttamente dall'albero.",
    badge: "Camera quad. da €126",
  },
  {
    href: "/esperienze/quando-venire",
    icon: "📅",
    title: "Quando Venire",
    subtitle: "Ogni Stagione Ha il Suo Motivo",
    description:
      "Primavera in fiore, estate tra mare e Ypsigrock, autunno di funghi e vendemmia, inverno col panettone Fiasconaro appena sfornato.",
    badge: "Guida stagionale",
  },
]

export default function EsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze",
        title: "Esperienze a Castelbuono e nelle Madonie",
        description:
          "Guida completa alle esperienze da vivere soggiornando all'Hotel Paradiso delle Madonie: natura, cultura, mare, cibo, borghi.",
        keywords: [
          "esperienze castelbuono",
          "cosa fare madonie",
          "escursioni madonie",
          "castelbuono cosa vedere",
        ],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: PAGE_URL },
      ]),
    ],
  }

  return (
    <>
      <NavigationBar />
      <main className="bg-section-light">
        {/* Hero scuro per visibilita navbar */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/sicily-hilltop.jpg"
            alt="Borgo medievale italiano al tramonto - Hotel Paradiso delle Madonie"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.75) 100%)" }}
          />
          <div
            className="relative container-shell flex flex-col justify-end"
            style={{ minHeight: "65vh", paddingTop: "8rem", paddingBottom: "3rem" }}
          >
            <nav aria-label="Breadcrumb" className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <Link href="/" className="hover:underline" style={{ color: "rgba(255,255,255,0.72)" }}>Home</Link>
              <span> / </span>
              <span style={{ color: "#fff" }}>Esperienze</span>
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
              Esperienze a Castelbuono e nelle Madonie — Tutto in un Posto Solo
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              L'Hotel Paradiso delle Madonie e nel cuore di Castelbuono, a 400 metri dal Castello dei Ventimiglia e a 23
              km dalle spiagge di Cefalu. Da qui raggiungi a piedi il meglio del borgo, in 20 minuti le escursioni nel
              Parco delle Madonie, e in 25 minuti il mare. Scegli la tua esperienza.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">
          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <Link key={exp.href} href={exp.href} className="group block">
                <div
                  className="surface-card h-full p-6 transition-all duration-200 group-hover:shadow-md"
                  style={{ borderColor: "var(--neutral-150)" }}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="text-3xl">{exp.icon}</span>
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: "var(--accent-50)",
                        color: "var(--accent-700)",
                        border: "1px solid var(--accent-100)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>
                  <h2
                    className="text-lg font-semibold"
                    style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
                  >
                    {exp.title}
                  </h2>
                  <p className="text-sm font-medium" style={{ color: "var(--accent-700)" }}>
                    {exp.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                    {exp.description}
                  </p>
                  <p
                    className="mt-4 text-sm font-semibold transition-colors group-hover:underline"
                    style={{ color: "var(--accent-700)" }}
                  >
                    Scopri →
                  </p>
                </div>
              </Link>
            ))}
          </section>

          {/* Immagini rappresentative delle esperienze */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <Image
                src="/images/cefalu-town.jpg"
                alt="Cefalù - il mare a 25 minuti da Castelbuono"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <Image
                src="/images/borghi-campagna.jpg"
                alt="I borghi medievali raggiungibili da Castelbuono"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <Image
                src="/images/arancini-siciliani.jpg"
                alt="Arancini siciliani - enogastronomia delle Madonie"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>

          <section
            className="mt-10 rounded-2xl p-6"
            style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
          >
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
            >
              Perche Castelbuono come base?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>
                  Posizione strategica
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--neutral-600)" }}>
                  Costa, montagna e borghi a 20-45 minuti. Palermo a 1 ora. Tutto raggiungibile in giornata.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>
                  Parcheggio gratuito
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--neutral-600)" }}>
                  Parcheggio pubblico gratuito nelle vicinanze. A Cefalu in agosto non troveresti posto neanche a
                  pagamento.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>
                  Prezzi onesti
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--neutral-600)" }}>
                  Hotel 4 stelle da €72/notte con colazione, contro i €150-300+ dei resort sulla costa.
                </p>
              </div>
            </div>
          </section>

          <section
            className="mt-10 rounded-2xl p-6"
            style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}
          >
            <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
              Prenota la tua base per le Madonie
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              Hotel 4 stelle nel centro storico di Castelbuono. Da €72/notte, colazione con prodotti locali inclusa.
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
        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <Footer />
    </>
  )
}
