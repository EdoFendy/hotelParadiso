import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/famiglie-bambini"

export const metadata: Metadata = {
  title: "Castelbuono con Bambini: Attivita per Famiglie | Hotel Madonie",
  description:
    "Vacanza a Castelbuono con bambini: castello medievale, asini, Gole di Tiberio, manna, gelato artigianale. Camera quadrupla da €126/notte.",
  keywords:
    "castelbuono bambini, castelbuono famiglie, vacanza famiglia sicilia madonie, hotel famiglia castelbuono, cosa fare bambini castelbuono",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Castelbuono con Bambini: Attivita per Famiglie",
    description:
      "I bambini a Castelbuono esplorano castelli medievali, cavalcano asini, nuotano nei canyon e scoprono la manna. Camera famiglia da €126/notte.",
    images: [
      {
        url: "/images/castello.png",
        width: 1200,
        height: 630,
        alt: "Castelbuono con Bambini - Castello dei Ventimiglia",
      },
    ],
  },
}

const attivita = [
  {
    name: "Castello dei Ventimiglia",
    eta: "Tutte",
    durata: "1-2h",
    periodo: "Tutto l'anno",
    desc: "Torri, merli e una cappella piena di angeli dorati. Per i bambini e un castello VERO — non una ricostruzione. Il Museo Civico dentro e pieno di sorprese.",
  },
  {
    name: "Asino-trekking",
    eta: "4-12 ideale",
    durata: "2-4h",
    periodo: "Mar-Nov",
    desc: "Escursioni con asinelli siciliani nella campagna. L'asino porta gli zaini (e i bambini stanchi). Un'esperienza che i bambini raccontano per anni.",
  },
  {
    name: "Gole di Tiberio in gommone",
    eta: "6+",
    durata: "2h",
    periodo: "Mag-Ott",
    desc: "Canyon con pareti di 50 metri, acqua cristallina. Bambini €11. Assolutamente indimenticabile. Uno dei migliori ricordi di qualsiasi vacanza siciliana.",
  },
  {
    name: "Museo Mina Palumbo",
    eta: "Tutte",
    durata: "1h",
    periodo: "Tutto l'anno",
    desc: "Insetti giganti, farfalle, minerali, piante delle Madonie. Collezioni scientifiche autentiche che incuriosiscono i bambini piu di qualsiasi museo interattivo.",
  },
  {
    name: "Assaggio della Manna",
    eta: "4+",
    durata: "1,5-2h",
    periodo: "Lug-Set",
    desc: "I bambini assaggiano la manna direttamente dall'albero durante le visite guidate ai frassineti. Dolce come lo zucchero, naturale al 100%.",
  },
  {
    name: "Laboratorio Gelato e Dolci",
    eta: "4+",
    durata: "1,5-2h",
    periodo: "Tutto l'anno",
    desc: "Mani piccole, sapori grandi: gelato artigianale e pasticcini siciliani fatti da loro. Un ricordo delizioso da portare a casa.",
  },
  {
    name: "Passeggiate nel Bosco",
    eta: "3+",
    durata: "1-3h",
    periodo: "Tutto l'anno",
    desc: "Sentieri facili nei boschi di Castelbuono. Caccia al tesoro, foglie, farfalle. Alcuni accessibili col passeggino nei tratti pianeggianti.",
  },
  {
    name: "Piscine Naturali del Pollina",
    eta: "6+",
    durata: "2-3h",
    periodo: "Giu-Set",
    desc: "Pozze d'acqua cristallina nel fiume Pollina. Meglio di qualsiasi piscina. A 20 km da Castelbuono.",
  },
  {
    name: "Parco Avventura Madonie",
    eta: "4+",
    durata: "2-4h",
    periodo: "Mar-Nov",
    desc: "Zipline, ponti di corda, percorsi sugli alberi. 20 km dall'hotel. Il parco avventura piu bello della Sicilia settentrionale.",
  },
  {
    name: "Fattorie Didattiche",
    eta: "Tutte",
    durata: "2-3h",
    periodo: "Tutto l'anno",
    desc: "Cavalli, pecore, capre. I bambini diventano piccoli contadini per un giorno. Alcune fattorie producono formaggi freschi sul posto.",
  },
  {
    name: "Spiaggia di Cefalu",
    eta: "Tutte",
    durata: "Mezza giornata",
    periodo: "Giu-Set",
    desc: "Acqua bassa e sabbia dorata: perfetta per i bambini. Cattedrale sullo sfondo. A 25 minuti dall'hotel.",
  },
]

export default function FamiglieBambiniEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/famiglie-bambini",
        title: "Castelbuono con Bambini — La Sicilia a Misura di Famiglia",
        description:
          "Castello medievale, asino-trekking, Gole di Tiberio in gommone, manna. Camera quadrupla da €126/notte.",
        keywords: ["castelbuono bambini", "castelbuono famiglie", "vacanza famiglia sicilia madonie"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Con Bambini", url: PAGE_URL },
      ]),
    ],
  }

  return (
    <>
      <NavigationBar />
      <main className="bg-section-light">
        {/* Hero con bambini in piazza italiana */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/famiglia-piazza.jpg"
            alt="Bambini che giocano in una piazza italiana - vacanza in famiglia a Castelbuono"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.72) 100%)" }}
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
              <span style={{ color: "#fff" }}>Con Bambini</span>
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
              Castelbuono con Bambini — La Sicilia a Misura di Famiglia
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              I bambini a Castelbuono non si annoiano. Esplorano castelli veri, cavalcano asini, nuotano in canyon di
              roccia e scoprono che il dolce piu buono del mondo si fa a 5 minuti dall'hotel. E i genitori? Si godono un
              borgo autentico, trattorie con prezzi onesti e una tranquillita che nessun resort puo comprare.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Il castello per i bambini */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/castello.png"
              alt="Castello dei Ventimiglia - avventura medievale per i bambini"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/mare-estivo.jpg"
              alt="Mare cristallino siciliano - Cefalu a 25 minuti dall'hotel"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Tabella attivita */}
        <section className="mt-4">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Attivita per Famiglie
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  {["Attivita", "Eta", "Durata", "Periodo", "Descrizione"].map((h) => (
                    <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attivita.map((a, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--neutral-900)", minWidth: 160 }}>{a.name}</td>
                    <td className="p-3" style={{ color: "var(--accent-700)", whiteSpace: "nowrap" }}>{a.eta}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{a.durata}</td>
                    <td className="p-3" style={{ color: "var(--neutral-700)", whiteSpace: "nowrap" }}>{a.periodo}</td>
                    <td className="p-3" style={{ color: "var(--neutral-600)", minWidth: 260 }}>{a.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/camera1.jpg"
              alt="Camera famiglie - Hotel Paradiso delle Madonie"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/borgo-medievale.jpg"
              alt="I vicoli medievali di Castelbuono - perfetti per esplorare con bambini"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Hotel per famiglie */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            L'Hotel per le Famiglie
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Camera Quadrupla", desc: "30 m², fino a 4 persone — da €126/notte con colazione inclusa." },
              { title: "Camera Tripla", desc: "26 m², fino a 3 persone — da €108/notte con colazione inclusa." },
              { title: "Colazione Buffet", desc: "Opzioni per bambini e senza glutine. Prodotti locali siciliani ogni mattina." },
              { title: "Pet-friendly", desc: "Animali di piccola e media taglia benvenuti. Fatelo sapere al momento della prenotazione." },
              { title: "Tutto a Piedi", desc: "Ristoranti, gelateriaie, castello, piazza — niente auto per la sera. Bambini liberi di girare." },
              { title: "Posizione Sicura", desc: "Centro storico tranquillo. Nessun traffico pesante. Borgo a misura d'uomo." },
            ].map((item) => (
              <div key={item.title} className="surface-card p-5">
                <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative mt-10 h-44 overflow-hidden rounded-2xl">
          <Image
            src="/images/fronte.png"
            alt="Hotel Paradiso delle Madonie - hotel per famiglie a Castelbuono"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 800px"
          />
        </div>

        {/* Links */}

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Il mare per i bambini
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              La spiaggia di Cefalu e perfetta per i bambini: acqua bassa, sabbia fine. A 25 minuti dall'hotel.
            </p>
            <Link href="/esperienze/cefalu-costa" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida Cefalu e Costa →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Quando portare i bambini?
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              Primavera per escursioni, estate per il mare, autunno per la manna e i funghi. La guida stagionale.
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
            Prenota la Camera Famiglia
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            Camera quadrupla da €126/notte — colazione inclusa, pet-friendly. Centro storico di Castelbuono,
            tutto a piedi. Contattaci direttamente per le migliori condizioni.
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
