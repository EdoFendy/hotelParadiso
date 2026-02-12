import Link from "next/link"

export default function LocalSeoSection() {
  return (
    <section id="guida-castelbuono" className="section-shell bg-section-light">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">Guida rapida</span>
          <h2 className="section-title text-balance">
            Hotel a Castelbuono e vicino Cefalu: dove dormire e come scegliere bene.
          </h2>
          <p className="section-subtitle">
            Se stai cercando un hotel a Castelbuono, un alloggio in centro storico o camere comode per visitare
            Madonie e Cefalu, qui trovi una sintesi utile, ordinata e aggiornata.
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
          </div>
        </div>
      </div>
    </section>
  )
}
