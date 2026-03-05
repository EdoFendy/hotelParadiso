import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/enogastronomia"

export const metadata: Metadata = {
  title: "Enogastronomia Madonie: Manna, Fiasconaro, Cucina Tipica",
  description:
    "La manna, il panettone Fiasconaro, i funghi porcini, l'olio d'oliva, i formaggi. Scopri i sapori delle Madonie dal tuo hotel a Castelbuono.",
  keywords:
    "enogastronomia madonie, manna madonie, fiasconaro castelbuono, cucina madonita, funghi porcini madonie, cibo tipico sicilia",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Enogastronomia Madonie: Manna, Fiasconaro, Cucina Tipica",
    description:
      "I sapori delle Madonie che non dimenticherai: manna dei frassini, panettone Fiasconaro, funghi porcini, formaggi DOP e vini biodinamici.",
    images: [
      {
        url: "/images/fiasconaro.png",
        width: 1200,
        height: 630,
        alt: "Fiasconaro Castelbuono - Enogastronomia delle Madonie",
      },
    ],
  },
}

const esperienze = [
  {
    name: "La Manna delle Madonie",
    note: "Presidio Slow Food",
    periodo: "Luglio-Settembre",
    distanza: "2-5 km dall'hotel",
    descrizione:
      "Castelbuono e uno degli ultimi posti al mondo dove la manna si raccoglie ancora a mano. I frassini vengono incisi (la 'ntaccatura') e la linfa cristallizza lungo il tronco. Dolcificante naturale usato in pasticceria, medicina e cosmetica. Candidata a patrimonio immateriale UNESCO. Visite guidate ai frassineti con raccolta e degustazione.",
  },
  {
    name: "Fiasconaro — Il Panettone di Sicilia",
    note: "5 minuti a piedi",
    periodo: "Tutto l'anno",
    distanza: "Piazza Margherita",
    descrizione:
      "Da piccola pasticceria di paese a marchio esportato in tutto il mondo. L'Oro di Manna (panettone con manna locale) e il prodotto iconico. In bottega trovi creme, torroni, praline e dolci che non arrivano mai sugli scaffali dei supermercati. Assaggiarlo qui, appena fatto, e un'altra cosa.",
  },
  {
    name: "Cooking Class",
    note: "Tutto l'anno",
    periodo: "3-5 ore",
    distanza: "Nel borgo",
    descrizione:
      "Mani in pasta: busiate, maccheroni, cannoli, caponata, arancine e specialita madonite. Spesso include visita al mercato e pranzo con vino locale. Opzioni family-friendly disponibili.",
  },
  {
    name: "Degustazione Vini",
    note: "Vendemmia Set-Ott",
    periodo: "Tutto l'anno",
    distanza: "5-30 km",
    descrizione:
      "Nero d'Avola, Perricone, Catarratto, Grillo. L'Abbazia Santa Anastasia (vicino Castelbuono) produce vini biologici e biodinamici pluripremiati. Altre cantine nella zona meritano una visita.",
  },
  {
    name: "Funghi e Tartufi",
    note: "Autunno",
    periodo: "Settembre-Novembre",
    distanza: "5-15 km",
    descrizione:
      "Foraging guidato di porcini e tartufi con micologi esperti, seguito da cucina e degustazione. Menu speciali ai ristoranti del borgo durante il FungiFest di ottobre.",
  },
  {
    name: "Formaggi delle Madonie",
    note: "Tutto l'anno",
    periodo: "Primavera per la ricotta piu fresca",
    distanza: "5-15 km",
    descrizione:
      "Visita a un pastore locale. Produzione tradizionale di ricotta, tuma, provola delle Madonie. Caldaie di rame, fuoco a legna, gesti che si ripetono da generazioni.",
  },
  {
    name: "Olio d'Oliva DOP",
    note: "Raccolta Ott-Dic",
    periodo: "Degustazioni tutto l'anno",
    distanza: "2-10 km",
    descrizione:
      "Varieta Cerasuola, Biancolilla, Nocellara del Belice. Frantoi visitabili con degustazione. Oro liquido che profuma di erba tagliata e mandorla.",
  },
  {
    name: "Mercato Locale",
    note: "Sabato mattina",
    periodo: "Tutto l'anno",
    distanza: "0 km — Centro storico",
    descrizione:
      "Bancarelle di formaggi, salumi, olive, miele, pane caldo, frutta di stagione. Il sabato mattina e il momento migliore per immergersi nei sapori del borgo.",
  },
]

const piatti = [
  { name: "Testa di Turco", desc: "Il dolce-simbolo: cupola croccante, ricotta, cioccolato, canditi. Ogni pasticceria ha la sua ricetta." },
  { name: "Pasta con le sarde", desc: "Il piatto iconico siciliano, qui con finocchietto selvatico delle Madonie." },
  { name: "Maccheroni al sugo di maiale", desc: "Il pranzo della domenica madonita. Ricco, profumato, lento." },
  { name: "Sfincione", desc: "La pizza siciliana: soffice, con cipolla, acciuga e caciocavallo." },
  { name: "Funghi porcini (autunno)", desc: "Fritti, in umido, sulla pasta, alla griglia. Le Madonie li producono tra i migliori d'Italia." },
  { name: "Cannolo", desc: "Ripieno di ricotta freschissima, non quella industriale dei bar turistici." },
]

export default function EnogastronomiaEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/enogastronomia",
        title: "Enogastronomia delle Madonie — I Sapori che Non Dimenticherai",
        description:
          "La manna, il panettone Fiasconaro, i funghi porcini, i formaggi DOP e i vini biodinamici delle Madonie.",
        keywords: ["enogastronomia madonie", "manna madonie", "fiasconaro castelbuono", "cucina madonita"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Enogastronomia", url: PAGE_URL },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Manna delle Madonie",
        description:
          "La manna delle Madonie e un dolcificante naturale estratto dai frassini di Castelbuono. Presidio Slow Food, candidata a patrimonio immateriale UNESCO.",
        brand: { "@type": "Brand", name: "Presidio Slow Food Madonie" },
      },
    ],
  }

  return (
    <>
      <NavigationBar />
      <main className="bg-section-light">
        {/* Hero scuro con cibo siciliano */}
        <div className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
          <Image
            src="/images/arancini-siciliani.jpg"
            alt="Arancini siciliani - la cucina delle Madonie"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)" }}
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
              <span style={{ color: "#fff" }}>Enogastronomia</span>
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
              Enogastronomia delle Madonie — I Sapori che Non Dimenticherai
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Castelbuono ha piu ristoranti che semafori. La cucina delle Madonie e una delle meno conosciute e piu
              sorprendenti di tutta la Sicilia. Qui non si mangia "siciliano generico" — si mangia madonita.
              L'Hotel Paradiso delle Madonie e nel centro storico: i ristoranti sono a 200 metri, Fiasconaro a 400,
              il mercato dietro l'angolo.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Esperienze */}
        <section className="mt-4">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Le Esperienze Enogastronomiche
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {esperienze.map((e) => (
              <div key={e.name} className="surface-card p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>{e.name}</h3>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: "var(--accent-50)", color: "var(--accent-700)", border: "1px solid var(--accent-100)", whiteSpace: "nowrap" }}
                  >
                    {e.note}
                  </span>
                </div>
                <div className="mt-1 flex gap-3 text-xs" style={{ color: "var(--neutral-500)" }}>
                  <span>{e.distanza}</span>
                  <span>·</span>
                  <span>{e.periodo}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>{e.descrizione}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/manna.png"
              alt="Manna delle Madonie - Presidio Slow Food"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <Image
              src="/images/funghi-porcini.jpg"
              alt="Funghi porcini freschi delle Madonie"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Piatti da non perdere */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            I Piatti da Non Perdere
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {piatti.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-4"
                style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
              >
                <p className="font-semibold" style={{ color: "var(--neutral-900)" }}>{p.name}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--neutral-600)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/pasta-madonie.jpg"
              alt="Tagliatelle ai funghi porcini - piatto tipico madonita"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/palermo-mercato.jpg"
              alt="Mercato ortofrutticolo siciliano - prodotti freschi"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Calendario stagionale */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
        >
          <h2 className="text-xl font-semibold" style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}>
            Cosa Trovare Mese per Mese
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <div>
              <p className="font-semibold" style={{ color: "var(--accent-700)" }}>Primavera (Mar-Mag)</p>
              <p className="mt-1" style={{ color: "var(--neutral-600)" }}>Ricotta fresca, asparagi selvatici, finocchietto, erbe delle Madonie.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--accent-700)" }}>Estate (Giu-Ago)</p>
              <p className="mt-1" style={{ color: "var(--neutral-600)" }}>Raccolta della manna (lug-ago), pomodori secchi, dolci estivi di Fiasconaro.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--accent-700)" }}>Autunno (Set-Nov)</p>
              <p className="mt-1" style={{ color: "var(--neutral-600)" }}>Funghi porcini, tartufi, vendemmia, olio nuovo, FungiFest a ottobre.</p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--accent-700)" }}>Inverno (Dic-Feb)</p>
              <p className="mt-1" style={{ color: "var(--neutral-600)" }}>Panettone Fiasconaro appena sfornato, dolci di Natale, arance siciliane.</p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vuoi scoprire Castelbuono in profondita?
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              Il castello, le chiese, i vicoli e gli eventi del borgo. La guida completa a Castelbuono.
            </p>
            <Link href="/esperienze/castelbuono" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Guida a Castelbuono →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Periodo migliore per la manna?
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
              Luglio-settembre per la raccolta, autunno per i funghi e la vendemmia. La guida stagionale completa.
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
            Dormi nel Borgo, Mangia nel Borgo
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            L'Hotel Paradiso delle Madonie e nel centro storico. I ristoranti sono a 200 metri. La pasticceria
            Fiasconaro a 400. Il mercato dietro l'angolo. Da €72/notte, colazione con prodotti locali inclusa.
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
