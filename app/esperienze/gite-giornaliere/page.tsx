import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/gite-giornaliere"

export const metadata: Metadata = {
  title: "Gite da Castelbuono: Palermo, Cefalu, Borghi | Hotel Madonie",
  description:
    "Da Castelbuono raggiungi Cefalu in 25 min, Palermo in 1h, borghi UNESCO e Isole Eolie. Hotel 4 stelle come base, da €72/notte.",
  keywords:
    "gite da castelbuono, cosa vedere vicino castelbuono, castelbuono palermo, castelbuono gangi, borghi madonie, isole eolie da cefalu",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Gite di un Giorno da Castelbuono — Tutta la Sicilia a Portata",
    description:
      "Cefalu a 25 minuti, Palermo a 1 ora, borghi medievali a 30 minuti. Castelbuono e al centro di tutto.",
    images: [
      {
        url: "/images/parcomadonie.png",
        width: 1200,
        height: 630,
        alt: "Gite da Castelbuono - Borghi e Paesaggi delle Madonie",
      },
    ],
  },
}

const destinazioni = [
  { dest: "Cefalu", dist: "23 km", tempo: "25 min", cosa: "Duomo UNESCO, spiaggia, Rocca, Museo Mandralisca, shopping", per: "Tutti" },
  { dest: "Palermo", dist: "90 km", tempo: "1h 15min", cosa: "Mercati storici (Ballaro, Vucciria), Cattedrale, Teatro Massimo, Catacombe Cappuccini, Mondello", per: "Cultura, cibo" },
  { dest: "Monreale", dist: "100 km", tempo: "1h 30min", cosa: "Mosaici bizantini piu grandi del mondo (6.340 mq) — patrimonio UNESCO", per: "Arte, cultura" },
  { dest: "Gangi", dist: "35 km", tempo: "45 min", cosa: "Borgo dei Borghi 2014, borgo medievale arroccato, Palazzo Bongiorno", per: "Borghi, foto" },
  { dest: "Petralia Soprana", dist: "20 km", tempo: "30 min", cosa: "Borgo dei Borghi 2018, panorami mozzafiato, architettura medievale", per: "Borghi, tranquillita" },
  { dest: "Petralia Sottana", dist: "25 km", tempo: "40 min", cosa: "Sede del Parco delle Madonie, architettura medievale", per: "Cultura" },
  { dest: "Geraci Siculo", dist: "25 km", tempo: "35 min", cosa: "Rovine del castello normanno, vista drammatica, formaggi DOP", per: "Borghi, cibo" },
  { dest: "Pollina", dist: "20 km", tempo: "25 min", cosa: "Teatro greco in pietra con vista mare, spettacoli estivi", per: "Cultura, panorama" },
  { dest: "Isnello", dist: "15 km", tempo: "20 min", cosa: "Osservatorio astronomico GAL Hassin, serate di osservazione pubblica", per: "Famiglie, scienza" },
  { dest: "Tusa / Fiumara d'Arte", dist: "45 km", tempo: "50 min", cosa: "Museo di arte contemporanea monumentale a cielo aperto", per: "Arte" },
  { dest: "Santo Stefano di Camastra", dist: "40 km", tempo: "40 min", cosa: "Citta della Ceramica, botteghe artigiane, shopping", per: "Shopping, artigianato" },
  { dest: "Caccamo", dist: "65 km", tempo: "1h", cosa: "Uno dei castelli normanni piu grandi e meglio conservati di Sicilia", per: "Storia, castelli" },
  { dest: "Isole Eolie", dist: "Da Cefalu", tempo: "Aliscafo", cosa: "Lipari, Vulcano, Salina — arcipelago vulcanico UNESCO", per: "Avventura (Giu-Set)" },
  { dest: "Parco Avventura Madonie", dist: "20 km", tempo: "25 min", cosa: "Zipline, ponti di corda, percorsi sugli alberi (dai 4 anni)", per: "Famiglie, avventura" },
]

const itinerari = [
  {
    titolo: "1 Giorno: Mare + Cultura",
    tappe: ["Mattina a Cefalu — Duomo, Rocca, spiaggia", "Pomeriggio: rientro a Castelbuono", "Sera: cena nel borgo"],
  },
  {
    titolo: "1 Giorno: I Borghi delle Madonie",
    tappe: ["Petralia Soprana (mattina)", "Gangi (meta giornata)", "Geraci Siculo (pomeriggio)", "Rientro a Castelbuono per cena"],
  },
  {
    titolo: "1 Giorno: Palermo",
    tappe: ["Mercato di Ballaro", "Cattedrale e street food", "Monreale — i mosaici", "Mondello (spiaggia)", "Rientro in serata"],
  },
  {
    titolo: "1 Giorno: Avventura",
    tappe: ["Gole di Tiberio in gommone (mattina)", "Pranzo al sacco", "Zipline pomeriggio", "Rientro e relax in hotel"],
  },
]

export default function GiteGiornaliereEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/gite-giornaliere",
        title: "Gite di un Giorno da Castelbuono — Tutta la Sicilia a Portata di Mano",
        description:
          "Da Castelbuono raggiungi Cefalu in 25 min, Palermo in 1h, borghi UNESCO, Isole Eolie in aliscafo e Monreale.",
        keywords: ["gite da castelbuono", "cosa vedere vicino castelbuono", "castelbuono palermo", "borghi madonie"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Gite di un Giorno", url: PAGE_URL },
      ]),
    ],
  }

  return (
    <>
      <NavigationBar />
      <main className="bg-section-light">
        {/* Hero scuro con mercato siciliano */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/sicily-market.jpg"
            alt="Mercato storico siciliano - vivacita di Palermo e della Sicilia"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)" }}
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
              <span style={{ color: "#fff" }}>Gite di un Giorno</span>
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
              Gite di un Giorno da Castelbuono — Tutta la Sicilia a Portata di Mano
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Castelbuono e al centro di tutto. La costa, l'entroterra, i borghi piu belli, Palermo. Dormi qui, esplora
              ovunque. La posizione centrale e uno dei vantaggi piu sottovalutati di scegliere Castelbuono come base per
              la tua vacanza in Sicilia.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Tabella destinazioni */}
        <section className="mt-4">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Le Destinazioni Raggiungibili in Giornata
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Destinazione", "Distanza", "Tempo", "Cosa Fare", "Ideale per"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {destinazioni.map((d, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)", whiteSpace: "nowrap" }}>{d.dest}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{d.dist}</td>
                    <td className="p-3 font-medium" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{d.tempo}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)", minWidth: 260 }}>{d.cosa}</td>
                    <td className="p-3" style={{ color: "var(--neutral-500)", whiteSpace: "nowrap" }}>{d.per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/borghi-campagna.jpg"
              alt="I borghi medievali raggiungibili in giornata da Castelbuono"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/palermo-mercato.jpg"
              alt="Mercato di Palermo - gita di un giorno da Castelbuono"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Itinerari suggeriti */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Itinerari Suggeriti
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {itinerari.map((it) => (
              <div key={it.titolo} className="surface-card p-5">
                <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>{it.titolo}</h3>
                <ul className="mt-3 space-y-1.5 text-sm" style={{ color: "var(--neutral-600)" }}>
                  {it.tappe.map((tappa, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: "var(--accent-700)", flexShrink: 0 }}>→</span>
                      <span>{tappa}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="relative mt-10 h-44 overflow-hidden rounded-2xl">
          <Image
            src="/images/cefalu-town.jpg"
            alt="Cefalù dalla spiaggia - gita immancabile da Castelbuono"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 800px"
          />
        </div>

        {/* Perche Castelbuono */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
        >
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Perche Castelbuono Come Base?
          </h2>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--neutral-700)" }}>
            <li>→ Posizione centrale: raggiungi costa, montagna e borghi in 20-45 minuti</li>
            <li>→ Parcheggio facile e gratuito: prova a parcheggiare a Cefalu in agosto</li>
            <li>→ Prezzi onesti: hotel 4 stelle da €72/notte con colazione, contro €150+ sulla costa</li>
            <li>→ Serata nel borgo: dopo la gita, cena in trattoria e passeggiata — non in un anonimo hotel di catena</li>
          </ul>
        </section>

        {/* Links */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Il mare di Cefalu in dettaglio
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              Spiagge, Duomo UNESCO, escursioni in barca. La guida completa a Cefalu da Castelbuono.
            </p>
            <Link href="/esperienze/cefalu-costa" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida Cefalu e Costa →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Escursioni nel Parco delle Madonie
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              Gole di Tiberio, Pizzo Carbonara, agrifogli giganti. I sentieri del Geoparco UNESCO.
            </p>
            <Link href="/esperienze/parco-madonie" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida Parco delle Madonie →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}
        >
          <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            Hotel Paradiso delle Madonie — La tua base per tutta la Sicilia del Nord
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            16 camere nel centro storico di Castelbuono. Da €72/notte, colazione con prodotti locali inclusa.
            Parcheggio gratuito.
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
