import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/cefalu-costa"

export const metadata: Metadata = {
  title: "Da Castelbuono a Cefalu: Mare a 25 Minuti | Hotel Madonie",
  description:
    "Cefalu e le spiagge della costa nord Sicilia a soli 25 minuti da Castelbuono. Montagna la mattina, mare il pomeriggio. Hotel 4 stelle da €72/notte.",
  keywords:
    "castelbuono cefalu, da castelbuono a cefalu, hotel vicino cefalu, castelbuono mare, cefalu spiagge, hotel madonie cefalu",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Da Castelbuono a Cefalu: Mare a 25 Minuti",
    description:
      "Montagna la mattina, mare il pomeriggio. Cefalu a 23 km da Castelbuono: Duomo UNESCO, spiagge, Rocca e costa cristallina.",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel Paradiso delle Madonie - Castelbuono vicino Cefalu",
      },
    ],
  },
}

const spiagge = [
  { name: "Spiaggia di Cefalu", distanza: "23 km", tipo: "Sabbia dorata", ideale: "Famiglie — acqua bassa, cattedrale sullo sfondo" },
  { name: "Caldura", distanza: "24 km", tipo: "Rocce", ideale: "Snorkeling — meno affollata, fondali ricchi" },
  { name: "Settefrati / Mazzaforno", distanza: "20 km", tipo: "Ciottoli/rocce", ideale: "Chi cerca calette isolate con acqua cristallina" },
  { name: "Campofelice di Roccella", distanza: "30 km", tipo: "Sabbia", ideale: "Famiglie — chilometri di spiaggia, poco affollata" },
  { name: "Finale di Pollina", distanza: "25 km", tipo: "Sabbia e rocce", ideale: "Il segreto dei locali — costa incontaminata" },
]

const confronto = [
  { aspetto: "Prezzo medio hotel", castelbuono: "€72-144/notte", cefalu: "€150-300+/notte" },
  { aspetto: "Parcheggio", castelbuono: "Gratuito nelle vicinanze", cefalu: "Difficile e costoso" },
  { aspetto: "Folla in estate", castelbuono: "Borgo tranquillo", cefalu: "Molto affollata" },
  { aspetto: "Accesso alle Madonie", castelbuono: "Immediato", cefalu: "30-45 minuti" },
  { aspetto: "Accesso al mare", castelbuono: "25 minuti", cefalu: "Immediato" },
  { aspetto: "Esperienza autentica", castelbuono: "Borgo vivo, non turistico", cefalu: "Turistica" },
  { aspetto: "Cena", castelbuono: "Trattorie locali, prezzi onesti", cefalu: "Ristoranti turistici, prezzi alti" },
]

export default function CefaluCostaEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/cefalu-costa",
        title: "Da Castelbuono a Cefalu: Il Mare a 25 Minuti dall'Hotel",
        description:
          "Montagna la mattina, mare il pomeriggio. Cefalu e le spiagge della costa nord a soli 25 minuti da Castelbuono.",
        keywords: ["castelbuono cefalu", "da castelbuono a cefalu", "hotel vicino cefalu", "castelbuono mare"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Cefalu e la Costa", url: PAGE_URL },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Cefalu — Duomo Normanno e Spiagge",
        description:
          "Cefalu e una citta costiera siciliana con un Duomo normanno patrimonio UNESCO, spiagge di sabbia dorata e un affascinante centro storico arabo-normanno.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cefalu",
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
        {/* Hero scuro con foto reale di Cefalù */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/cefalu-town.jpg"
            alt="Cefalù dalla spiaggia - il mare a 25 minuti da Castelbuono"
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
              <span style={{ color: "#fff" }}>Cefalu e la Costa</span>
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
              Cefalu e la Costa — Il Mare a 25 Minuti dall'Hotel
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Montagna a colazione. Mare a pranzo. Questo e il bello di dormire a Castelbuono. L'Hotel Paradiso delle
              Madonie dista 23 km da Cefalu — 25 minuti di auto attraverso un paesaggio che da solo vale il viaggio.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Cosa vedere a Cefalu */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Cosa Vedere a Cefalu
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "Duomo Normanno",
                note: "Patrimonio UNESCO",
                desc: "Mosaici bizantini del Cristo Pantocratore. Una delle cattedrali piu belle del Mediterraneo.",
              },
              {
                name: "La Rocca",
                note: "20 min a piedi",
                desc: "Salita di 20 minuti per una vista che toglie il fiato su tutta la costa. Rovine di un castello medievale sulla cima.",
              },
              {
                name: "Lavatoio Medievale",
                note: "Centro storico",
                desc: "Vasche di pietra alimentate da un fiume sotterraneo. Atmosfera fuori dal tempo.",
              },
              {
                name: "Museo Mandralisca",
                note: "Centro storico",
                desc: "Ospita il Ritratto di Ignoto di Antonello da Messina. Una delle opere piu misteriose del Rinascimento italiano.",
              },
            ].map((item) => (
              <div key={item.name} className="surface-card p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>{item.name}</h3>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: "var(--accent-50)", color: "var(--accent-700)", border: "1px solid var(--accent-100)", whiteSpace: "nowrap" }}
                  >
                    {item.note}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spiagge */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Le Spiagge Piu Belle
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Spiaggia", "Distanza", "Tipo", "Ideale per"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {spiagge.map((s, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)" }}>{s.name}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{s.distanza}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)" }}>{s.tipo}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)" }}>{s.ideale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Escursioni in barca e Isole Eolie */}
        <section
          className="mt-8 rounded-2xl p-6"
          style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
        >
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Escursioni in Barca e Isole Eolie
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>Escursioni in barca da Cefalu</p>
              <p className="mt-1 text-sm" style={{ color: "var(--neutral-600)" }}>
                Da maggio a ottobre: crociere costiere, tour al tramonto, grotte marine inaccessibili da terra. Porto di
                Cefalu a 25 minuti dall'hotel.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--neutral-900)" }}>Isole Eolie in giornata</p>
              <p className="mt-1 text-sm" style={{ color: "var(--neutral-600)" }}>
                Da giugno a settembre: aliscafo da Cefalu per Lipari, Vulcano, Salina. Escursione giornaliera
                possibile — andata e ritorno in giornata.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/mare-estivo.jpg"
              alt="Mare cristallino della costa siciliana - acque turchesi"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/borghi-campagna.jpg"
              alt="I borghi delle Madonie - l'alternativa autentica alla costa"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Confronto */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Perche Dormire a Castelbuono Invece che a Cefalu
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
            A meta prezzo, vivi il doppio. Le Madonie E il mare, senza il caos.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  <th className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>Aspetto</th>
                  <th className="p-3 text-left font-semibold" style={{ color: "var(--accent-700)", borderBottom: "1px solid var(--neutral-200)" }}>Castelbuono</th>
                  <th className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>Cefalu</th>
                </tr>
              </thead>
              <tbody>
                {confronto.map((c, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)" }}>{c.aspetto}</td>
                    <td className="p-3 font-medium" style={{ color: "var(--accent-700)" }}>{c.castelbuono}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)" }}>{c.cefalu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="relative mt-10 h-44 overflow-hidden rounded-2xl">
          <Image
            src="/images/fronte.png"
            alt="Hotel Paradiso delle Madonie - a 25 minuti dal mare di Cefalu"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 800px"
          />
        </div>

        {/* Links */}

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Altre gite da Castelbuono
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Palermo, Monreale, borghi UNESCO, Isole Eolie. Castelbuono e al centro di tutto.
            </p>
            <Link href="/esperienze/gite-giornaliere" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Scopri tutte le gite →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vieni con bambini?
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Spiaggia di Cefalu con acqua bassa, castelli medievali, Gole di Tiberio in gommone. La guida famiglia.
            </p>
            <Link href="/esperienze/famiglie-bambini" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida famiglie →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}
        >
          <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            Prenota la tua base tra montagna e mare
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Hotel 4 stelle a Castelbuono. Da €72/notte con colazione, contro i €150-300+ dei resort di Cefalu.
            Parcheggio gratuito, borgo autentico, mare a 25 minuti.
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
