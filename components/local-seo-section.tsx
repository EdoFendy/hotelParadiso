import Link from "next/link"

export default function LocalSeoSection() {
  return (
    <section id="guida-castelbuono" className="section-shell bg-section-light">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">Guida rapida</span>
          <h2 className="section-title text-balance">
            Hotel a Castelbuono, esperienze nelle Madonie e vicino Cefalu: dove dormire e cosa fare.
          </h2>
          <p className="section-subtitle">
            Se stai cercando un hotel a Castelbuono, un alloggio in centro storico, camere comode per visitare
            Madonie e Cefalu, o vuoi scoprire cosa fare in zona, qui trovi una sintesi utile e aggiornata.
          </p>

          <div
            className="mt-8 grid gap-4 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6"
            style={{
              backgroundColor: "var(--neutral-0)",
              border: "1px solid var(--neutral-150)",
            }}
          >
            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Hotel Castelbuono
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Posizione centrale, contatto diretto e supporto rapido: ideale per chi vuole visitare il borgo a
                piedi e raggiungere Cefalu in giornata.
              </p>
              <Link href="/hotel-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Vai alla guida hotel
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Alloggio Castelbuono
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Confronta soluzione, periodo e logistica: trova un alloggio a Castelbuono adatto a coppie,
                famiglie e soggiorni brevi nel Parco delle Madonie.
              </p>
              <Link href="/alloggio-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Vai alla guida alloggio
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Camere Castelbuono
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Camere singole, doppie, triple e quadruple: capienza, comfort e consigli pratici per scegliere la
                camera giusta senza perdere tempo.
              </p>
              <Link href="/camere-castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Vai alla guida camere
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Hotel vicino Cefalu
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Se stai cercando hotel a Cefalu, valuta anche la soluzione a 23 km per un soggiorno tra costa e borgo.
              </p>
              <Link href="/hotel-cefalu" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Vai alla guida Cefalu
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Esperienze Castelbuono
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Castello medievale, borgo storico, dolci Fiasconaro, manna. Cosa vedere e fare a Castelbuono
                a piedi dall'hotel.
              </p>
              <Link href="/esperienze/castelbuono" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Guida a Castelbuono
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Parco delle Madonie Escursioni
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Sentieri, Gole di Tiberio in gommone, Pizzo Carbonara, agrifogli giganti. Escursioni per tutti
                i livelli nel Geoparco UNESCO.
              </p>
              <Link href="/esperienze/parco-madonie" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Guida escursioni Madonie
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Enogastronomia Madonie
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Manna, Fiasconaro, funghi porcini, formaggi DOP, vini biodinamici. I sapori unici delle Madonie
                da assaggiare dal vivo.
              </p>
              <Link href="/esperienze/enogastronomia" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Guida enogastronomia
              </Link>
            </article>

            <article>
              <h3 className="text-base font-semibold" style={{ color: "var(--neutral-900)" }}>
                Quando Visitare Castelbuono
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--neutral-600)" }}>
                Primavera per i fiori, estate per il mare, autunno per i funghi, inverno per il Natale. La guida
                stagionale completa.
              </p>
              <Link href="/esperienze/quando-venire" className="mt-3 inline-block text-sm font-semibold text-accent-700">
                Guida stagionale
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
