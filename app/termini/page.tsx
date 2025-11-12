import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo-utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Termini e Condizioni | Hotel Paradiso delle Madonie',
  description: 'Termini e condizioni di utilizzo del sito e prenotazione - Hotel Paradiso delle Madonie, Castelbuono.',
  path: '/termini',
  type: 'website',
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-amber-400 hover:text-amber-300 mb-4 inline-block">
            ← Torna alla Home
          </Link>
          <h1 className="text-4xl font-serif mb-4">Termini e Condizioni</h1>
          <p className="text-gray-300">Condizioni generali di utilizzo del sito e di prenotazione</p>
          <p className="text-sm text-gray-400 mt-2">Ultimo aggiornamento: 12 novembre 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">

          {/* Accettazione termini */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">1. Accettazione dei Termini</h2>
            <p className="text-gray-700 leading-relaxed">
              L'utilizzo del sito web <strong>paradisodellemadonie.it</strong> e l'effettuazione di prenotazioni tramite il sito implica l'accettazione integrale dei presenti Termini e Condizioni. Se non accetti questi termini, ti invitiamo a non utilizzare il sito.
            </p>
          </section>

          {/* Informazioni hotel */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">2. Informazioni sull'Hotel</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="font-semibold text-slate-900">Hotel Paradiso delle Madonie</p>
              <p className="text-gray-700">Via Dante Alighieri, 82</p>
              <p className="text-gray-700">90013 Castelbuono (PA), Sicilia - Italia</p>
              <p className="text-gray-700 mt-2"><strong>P.IVA:</strong> [Inserire P.IVA]</p>
              <p className="text-gray-700"><strong>Email:</strong> info@paradisodellemadonie.it</p>
              <p className="text-gray-700"><strong>Telefono:</strong> +39 0921 820683</p>
            </div>
          </section>

          {/* Prenotazioni */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">3. Prenotazioni</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Procedura di Prenotazione</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Le prenotazioni possono essere effettuate online tramite il sito, via email o telefono</li>
              <li>La prenotazione si intende confermata solo dopo ricezione di conferma scritta da parte dell'hotel</li>
              <li>Per confermare la prenotazione potrebbe essere richiesto il versamento di un acconto</li>
              <li>L'hotel si riserva il diritto di rifiutare prenotazioni in caso di mancata disponibilità</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.2 Check-in e Check-out</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Check-in:</strong> dalle ore 15:00 (early check-in su richiesta, soggetto a disponibilità)</li>
                <li><strong>Check-out:</strong> entro le ore 10:00 (late check-out su richiesta, con supplemento)</li>
                <li><strong>Documenti richiesti:</strong> documento d'identità valido per tutti gli ospiti (obbligo di legge)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.3 Tariffe e Pagamenti</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Le tariffe sono espresse in Euro (€) e includono IVA</li>
              <li><strong>Incluso:</strong> colazione continentale, WiFi, parcheggio privato</li>
              <li><strong>Non incluso:</strong> tassa di soggiorno (se applicabile secondo normativa comunale)</li>
              <li><strong>Metodi di pagamento accettati:</strong> contanti, carte di credito/debito (Visa, Mastercard, AmEx), bonifico bancario</li>
              <li>Il saldo completo è richiesto al check-in o secondo accordi specifici</li>
            </ul>
          </section>

          {/* Cancellazioni */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">4. Politica di Cancellazione</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Cancellazione Gratuita</h4>
                <p className="text-gray-700">
                  La cancellazione è <strong>gratuita fino a 7 giorni prima</strong> della data di arrivo prevista. L'eventuale acconto versato verrà rimborsato integralmente entro 10 giorni lavorativi.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">⚠️ Cancellazione con Penale</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Da 6 a 3 giorni prima:</strong> penale del 50% dell'importo totale</li>
                  <li><strong>Entro 2 giorni o no-show:</strong> penale del 100% dell'importo totale</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">🎉 Periodi Speciali ed Eventi</h4>
                <p className="text-gray-700 mb-2">
                  Durante periodi di alta stagione e eventi speciali (es. Ypsigrock Festival, Ferragosto, Natale), potrebbero applicarsi condizioni di cancellazione diverse:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Cancellazione gratuita fino a 14 giorni prima</li>
                  <li>Penale 100% per cancellazioni successive o no-show</li>
                  <li>Le condizioni specifiche verranno comunicate al momento della prenotazione</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic mt-4">
              Per cancellare una prenotazione, inviare richiesta scritta via email a info@paradisodellemadonie.it o chiamare il numero +39 0921 820683.
            </p>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">5. Modifiche alla Prenotazione</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Le modifiche alle date o al tipo di camera sono soggette a disponibilità</li>
              <li>Modifiche gratuite se richieste almeno 7 giorni prima del check-in</li>
              <li>Modifiche successive potrebbero comportare penali o differenze tariffarie</li>
              <li>L'hotel si riserva di accettare o rifiutare modifiche sostanziali</li>
            </ul>
          </section>

          {/* Responsabilità ospite */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">6. Responsabilità dell'Ospite</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>L'ospite è responsabile di eventuali danni causati alla camera o alle strutture dell'hotel</li>
              <li>È vietato fumare nelle camere (penale €250 per pulizia straordinaria)</li>
              <li>Animali domestici ammessi solo previo accordo e con supplemento</li>
              <li>Numero massimo di occupanti per camera come indicato in fase di prenotazione</li>
              <li>È richiesto un comportamento rispettoso verso altri ospiti e personale</li>
              <li>L'hotel si riserva il diritto di allontanare ospiti che tengano comportamenti inappropriati</li>
            </ul>
          </section>

          {/* Responsabilità hotel */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">7. Responsabilità dell'Hotel</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>L'hotel declina ogni responsabilità per oggetti di valore non depositati in reception</li>
              <li>L'hotel non è responsabile per danni o perdite dovuti a furto, salvo dolo o colpa grave</li>
              <li>In caso di forza maggiore (calamità naturali, emergenze sanitarie, etc.) che impediscano l'erogazione del servizio, l'hotel rimborserà quanto pagato ma non risarcirà ulteriori danni</li>
              <li>L'hotel si impegna a mantenere gli standard di qualità e pulizia dichiarati</li>
              <li>Eventuali disservizi verranno gestiti con massima tempestività</li>
            </ul>
          </section>

          {/* Forza maggiore */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">8. Forza Maggiore</h2>
            <p className="text-gray-700 leading-relaxed">
              L'hotel non sarà responsabile per inadempimenti dovuti a cause di forza maggiore, inclusi ma non limitati a: calamità naturali, guerre, terrorismo, epidemie/pandemie, scioperi, interruzioni dei servizi pubblici, provvedimenti dell'autorità governativa. In tali casi, l'ospite ha diritto al rimborso delle somme pagate ma non a ulteriori risarcimenti.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">9. Privacy e Protezione Dati</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il trattamento dei dati personali degli ospiti avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 (Codice Privacy). Per informazioni complete:
            </p>
            <Link
              href="/privacy"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Privacy Policy Completa →
            </Link>
          </section>

          {/* Proprietà intellettuale */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">10. Proprietà Intellettuale</h2>
            <p className="text-gray-700 leading-relaxed">
              Tutti i contenuti del sito (testi, immagini, loghi, grafica, video) sono protetti da copyright e di proprietà esclusiva di Hotel Paradiso delle Madonie o dei legittimi proprietari. È vietata la riproduzione, modifica o distribuzione non autorizzata dei contenuti.
            </p>
          </section>

          {/* Legge applicabile */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">11. Legge Applicabile e Foro Competente</h2>
            <p className="text-gray-700 leading-relaxed">
              I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia è competente esclusivamente il Foro di Termini Imerese (PA), salvo diversa norma inderogabile di legge.
            </p>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">12. Modifiche ai Termini</h2>
            <p className="text-gray-700 leading-relaxed">
              L'hotel si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. Prenotazioni già confermate rimangono soggette ai termini accettati al momento della prenotazione.
            </p>
          </section>

          {/* Risoluzione controversie */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">13. Risoluzione delle Controversie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In caso di contestazioni o reclami, l'ospite è invitato a contattare direttamente la direzione dell'hotel per una risoluzione amichevole. In alternativa, è possibile ricorrere a:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-slate-800 mb-2">Piattaforma ODR (Online Dispute Resolution)</p>
              <p className="text-gray-700 text-sm mb-2">
                Per consumatori UE, risoluzione online delle controversie:
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </div>
          </section>

          {/* Contatti */}
          <section className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif text-slate-900 mb-4">Hai domande sui Termini?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per qualsiasi dubbio o chiarimento sui Termini e Condizioni, contattaci:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@paradisodellemadonie.it"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Invia Email
              </a>
              <a
                href="tel:+390921820683"
                className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Chiama Ora
              </a>
            </div>
          </section>

        </div>

        {/* Back to home */}
        <div className="text-center mt-8">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  )
}
