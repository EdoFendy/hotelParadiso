import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateBreadcrumbSchema, generateLandingPageSchema } from "@/lib/seo-schema"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const PAGE_URL = "https://paradisodellemadonie.it/esperienze/castelbuono"

const faqItems = [
  {
    question: "Cosa vedere a Castelbuono in un giorno?",
    answer:
      "In un giorno puoi visitare il Castello dei Ventimiglia con la Cappella Palatina (1-2 ore), la Chiesa Matrice Vecchia (30 min), il Museo Naturalistico Mina Palumbo (1 ora), passeggiare nel centro storico e fermarti da Fiasconaro per assaggiare l'Oro di Manna. Tutto raggiungibile a piedi dall'hotel.",
  },
  {
    question: "Quando si tiene lo Ypsigrock Festival a Castelbuono?",
    answer:
      "Lo Ypsigrock Festival si tiene ogni anno ad agosto, generalmente nella seconda meta del mese, nel cortile del Castello dei Ventimiglia. E un festival di musica indie internazionale che si svolge dal 1997. Le date esatte variano ogni anno.",
  },
  {
    question: "Dove si puo assaggiare la manna a Castelbuono?",
    answer:
      "La manna puo essere assaggiata da Fiasconaro in Piazza Margherita (a 5 minuti dall'hotel) in vari prodotti dolciari, tra cui l'Oro di Manna. Durante luglio e settembre e possibile partecipare a visite guidate ai frassineti con assaggio diretto della manna raccolta dall'albero.",
  },
]

const attractions = [
  {
    name: "Castello dei Ventimiglia e Museo Civico",
    distance: "400m dall'hotel",
    duration: "1-2 ore",
    description:
      "Un castello del 1316 che ospita arte contemporanea. La Cappella Palatina, con gli stucchi attribuiti a Giuseppe Serpotta, e uno dei gioielli barocchi piu sottovalutati di tutta la Sicilia. Il Museo Civico ospita sezioni di archeologia, arte sacra e arte moderna.",
  },
  {
    name: "Chiesa Matrice Vecchia (SS. Maria Assunta)",
    distance: "300m dall'hotel",
    duration: "30-45 minuti",
    description:
      "Costruita nel XIV secolo sulle rovine di un tempio pagano. Affreschi medievali, la cripta dei Ventimiglia e un'atmosfera che sa di pietra e incenso. Sette secoli di arte sacra in un unico luogo.",
  },
  {
    name: "Chiesa Matrice Nuova (Nativita di Maria)",
    distance: "200m dall'hotel",
    duration: "30 minuti",
    description:
      "Chiesa rinascimentale con un imponente campanile e un polittico attribuito ad Antonello de Saliba. Gli stucchi serpottiani qui rivaleggiano con quelli del castello.",
  },
  {
    name: "Museo Naturalistico Francesco Mina Palumbo",
    distance: "300m dall'hotel",
    duration: "1-1,5 ore",
    description:
      "Intitolato al naturalista ottocentesco che catalogo ogni pianta, insetto e minerale delle Madonie. Collezioni botaniche, geologiche, entomologiche e manoscritti originali. Perfetto per famiglie con bambini.",
  },
  {
    name: "Passeggiata nel Centro Storico",
    distance: "Dall'hotel",
    duration: "1,5-2,5 ore",
    description:
      "Vicoli medievali, fontane (la Fontana di Venere Ciprea rinascimentale in Piazza Margherita), palazzi nobiliari, botteghe artigiane. Perdersi qui non e un problema — e il punto.",
  },
  {
    name: "Chiesa di San Francesco",
    distance: "300m dall'hotel",
    duration: "20-30 minuti",
    description:
      "Gotico siciliano. Navata unica, opere medievali e un chiostro francescano dove il silenzio e ancora quello di secoli fa.",
  },
]

const foods = [
  {
    name: "Pasticceria Fiasconaro",
    note: "5 minuti a piedi dall'hotel",
    description:
      "Il panettone piu famoso di Sicilia nasce qui, in Piazza Margherita. L'Oro di Manna, fatto con la manna raccolta dai frassini delle Madonie, e esportato in tutto il mondo.",
  },
  {
    name: "La Testa di Turco",
    note: "Il dolce simbolo",
    description:
      "Cupola di pasta croccante ripiena di crema di ricotta, cioccolato e frutta candita. Ogni pasticceria ha la sua ricetta. Provatene almeno tre.",
  },
  {
    name: "Nangalarruni",
    note: "Ristorante",
    description: "Cucina madonita tradizionale con tocco creativo. Erbe selvatiche, carni locali, menu stagionali.",
  },
  {
    name: "La Manna delle Madonie",
    note: "Presidio Slow Food",
    description:
      "L'oro bianco delle Madonie. Una linfa dolce raccolta ancora a mano dai frassini, tra luglio e settembre. Usata in pasticceria, medicina e cosmetica.",
  },
]

const events = [
  { month: "Febbraio", name: "Carnevale di Castelbuono", description: "Maschere antiche, sfilate, satira popolare" },
  { month: "Marzo/Aprile", name: "Settimana Santa", description: "Processioni con penitenti incappucciati, bande, statue sacre" },
  { month: "Giugno", name: "Estate Castelbuonese", description: "Concerti, teatro, eventi al castello, cinema all'aperto" },
  { month: "Luglio", name: "Raccolta della Manna", description: "Inizio stagione — visite guidate ai frassineti" },
  { month: "Luglio", name: "DiVino Festival", description: "Degustazioni di vini delle Madonie nelle piazze" },
  { month: "Agosto", name: "YPSIGROCK FESTIVAL", description: "3 giorni di musica indie internazionale nel castello. Dal 1997." },
  { month: "Agosto", name: "Festa di Sant'Anna", description: "Processioni, fuochi d'artificio, musica, street food" },
  { month: "Ottobre", name: "FungiFest / Sagra del Fungo", description: "Degustazione porcini, cooking demo, foraging guidato" },
  { month: "Dicembre", name: "Natale a Castelbuono", description: "Presepe vivente, mercatini, il profumo del panettone Fiasconaro ovunque" },
]

export const metadata: Metadata = {
  title: "Castelbuono: Cosa Vedere e Fare | Guida Completa 2026",
  description:
    "Scopri Castelbuono: Castello dei Ventimiglia, dolci Fiasconaro, manna delle Madonie, chiese medievali. Guida completa dal tuo hotel nel centro storico.",
  keywords:
    "castelbuono cosa vedere, castelbuono cosa fare, visitare castelbuono, castello ventimiglia, fiasconaro castelbuono, manna madonie",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Castelbuono: Cosa Vedere e Fare | Guida Completa 2026",
    description:
      "Guida completa a Castelbuono: attrazioni, ristoranti, eventi e dolci. Dal tuo hotel nel centro storico, tutto a piedi.",
    images: [
      {
        url: "/images/castello.png",
        width: 1200,
        height: 630,
        alt: "Castello dei Ventimiglia - Castelbuono, Sicilia",
      },
    ],
  },
}

export default function CastelbuonoEsperienzePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLandingPageSchema({
        path: "/esperienze/castelbuono",
        title: "Castelbuono: Cosa Vedere e Fare — Guida dal Centro del Borgo",
        description:
          "Guida completa a Castelbuono: Castello dei Ventimiglia, Cappella Palatina, Fiasconaro, manna, eventi e ristoranti.",
        keywords: ["castelbuono cosa vedere", "castelbuono cosa fare", "visitare castelbuono"],
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://paradisodellemadonie.it" },
        { name: "Esperienze", url: "https://paradisodellemadonie.it/esperienze" },
        { name: "Castelbuono", url: PAGE_URL },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Castelbuono",
        description:
          "Borgo medievale siciliano ai piedi delle Madonie, con il Castello dei Ventimiglia, la Cappella Palatina, la manna dei frassini e la Pasticceria Fiasconaro.",
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
            src="/images/borgo-medievale.jpg"
            alt="Vicolo medievale di Castelbuono - borgo storico siciliano"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 100%)" }}
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
              <span style={{ color: "#fff" }}>Castelbuono</span>
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
              Castelbuono: Cosa Vedere e Fare — Guida dal Centro del Borgo
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Castelbuono e un borgo medievale di 9.000 abitanti ai piedi delle Madonie, in provincia di Palermo. Non e
              nei radar del turismo di massa. Ed e esattamente per questo che merita. L'Hotel Paradiso delle Madonie si
              trova nel cuore del centro storico, a 400 metri dal Castello dei Ventimiglia. Tutto quello che trovi in
              questa guida e raggiungibile a piedi.
            </p>
          </div>
        </div>

        <article className="container-shell py-12 sm:py-16">

        {/* Castello reale */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-52 overflow-hidden rounded-2xl">
            <Image
              src="/images/castello.png"
              alt="Castello dei Ventimiglia - Castelbuono"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-52 overflow-hidden rounded-2xl">
            <Image
              src="/images/borghi-campagna.jpg"
              alt="Vista aerea dei borghi medievali siciliani"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Cosa Vedere */}
        <section className="mt-4">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Cosa Vedere a Castelbuono
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {attractions.map((attr) => (
              <div
                key={attr.name}
                className="surface-card p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                    {attr.name}
                  </h3>
                </div>
                <div className="mt-1 flex gap-3 text-xs" style={{ color: "var(--accent-700)" }}>
                  <span>{attr.distance}</span>
                  <span>·</span>
                  <span>{attr.duration}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                  {attr.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cosa Mangiare */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Cosa Mangiare a Castelbuono
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <Image
                src="/images/pasta-madonie.jpg"
                alt="Tagliatelle ai funghi porcini - cucina madonita tipica"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <Image
                src="/images/fiasconaro.png"
                alt="Pasticceria Fiasconaro - Castelbuono"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
          </div>
          <p className="mt-2 text-sm" style={{ color: "var(--neutral-600)" }}>
            Castelbuono ha piu ristoranti che semafori. La cucina madonita e una delle meno conosciute e piu
            sorprendenti di tutta la Sicilia.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {foods.map((food) => (
              <div key={food.name} className="surface-card p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                    {food.name}
                  </h3>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: "var(--accent-50)",
                      color: "var(--accent-700)",
                      border: "1px solid var(--accent-100)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {food.note}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                  {food.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Piatti da non perdere */}
        <section
          className="mt-8 rounded-2xl p-6"
          style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
        >
          <h3 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>
            I Piatti Tipici da Non Perdere
          </h3>
          <ul className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2" style={{ color: "var(--neutral-700)" }}>
            <li>Testa di Turco — il dolce-simbolo di Castelbuono</li>
            <li>Pasta con le sarde e finocchietto selvatico</li>
            <li>Maccheroni al sugo di maiale</li>
            <li>Sfincione — la pizza siciliana soffice</li>
            <li>Funghi porcini (in autunno) — fritti, sulla pasta, alla griglia</li>
            <li>Cannolo con ricotta freschissima</li>
          </ul>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/manna.png"
              alt="Manna delle Madonie - Presidio Slow Food Castelbuono"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/sicily-market.jpg"
              alt="Mercato storico siciliano - atmosfera di Castelbuono"
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
            Eventi a Castelbuono — Mese per Mese
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid var(--neutral-200)" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "var(--neutral-100)" }}>
                <tr>
                  <th
                    className="p-3 text-left font-semibold"
                    style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}
                  >
                    Mese
                  </th>
                  <th
                    className="p-3 text-left font-semibold"
                    style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}
                  >
                    Evento
                  </th>
                  <th
                    className="p-3 text-left font-semibold"
                    style={{ color: "var(--neutral-900)", borderBottom: "1px solid var(--neutral-200)" }}
                  >
                    Descrizione
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((ev, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--neutral-100)" }}>
                    <td
                      className="p-3 font-medium"
                      style={{ color: "var(--neutral-900)", whiteSpace: "nowrap" }}
                    >
                      {ev.month}
                    </td>
                    <td className="p-3 font-medium" style={{ color: "var(--accent-700)" }}>
                      {ev.name}
                    </td>
                    <td className="p-3" style={{ color: "var(--neutral-700)" }}>
                      {ev.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--neutral-900)", fontFamily: "var(--font-serif)" }}
          >
            Domande Frequenti
          </h2>
          <div className="mt-5 space-y-4">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-150)" }}
              >
                <p className="font-semibold" style={{ color: "var(--neutral-900)" }}>{faq.question}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Link ad altre esperienze */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vuoi esplorare le Madonie?
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Dal borgo ai sentieri del Parco delle Madonie. Gole di Tiberio, Pizzo Carbonara, agrifogli giganti.
            </p>
            <Link href="/esperienze/parco-madonie" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Scopri le escursioni →
            </Link>
          </div>
          <div className="surface-card p-5">
            <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
              Vuoi assaggiare le Madonie?
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              Manna, Fiasconaro, funghi porcini, formaggi DOP e vini biodinamici. La guida enogastronomica completa.
            </p>
            <Link href="/esperienze/enogastronomia" className="mt-3 inline-block text-sm font-semibold" style={{ color: "var(--accent-700)" }}>
              Scopri l'enogastronomia →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-10 rounded-2xl p-6"
          style={{ backgroundColor: "var(--primary-900)", color: "#fff" }}
        >
          <h2 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
            Dove Dormire a Castelbuono
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            L'Hotel Paradiso delle Madonie e l'unico hotel 4 stelle nel centro storico di Castelbuono. 16 camere
            eleganti, colazione con prodotti locali inclusa. Da €72/notte.
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
