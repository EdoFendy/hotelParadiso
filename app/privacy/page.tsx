import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo-utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy | Hotel Paradiso delle Madonie',
  description: 'Informativa sulla privacy e trattamento dei dati personali - Hotel Paradiso delle Madonie, Castelbuono. GDPR compliant.',
  path: '/privacy',
  type: 'website',
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-amber-400 hover:text-amber-300 mb-4 inline-block">
            ← Torna alla Home
          </Link>
          <h1 className="text-4xl font-serif mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)</p>
          <p className="text-sm text-gray-400 mt-2">Ultimo aggiornamento: 12 novembre 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">

          {/* Introduzione */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">1. Titolare del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il Titolare del trattamento dei dati personali è:
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="font-semibold text-slate-900">Hotel Paradiso delle Madonie</p>
              <p className="text-gray-700">Via Dante Alighieri, 82</p>
              <p className="text-gray-700">90013 Castelbuono (PA), Sicilia - Italia</p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> <a href="mailto:info@paradisodellemadonie.it" className="text-amber-600 hover:underline">info@paradisodellemadonie.it</a>
              </p>
              <p className="text-gray-700">
                <strong>Telefono:</strong> <a href="tel:+390921820683" className="text-amber-600 hover:underline">+39 0921 820683</a>
              </p>
            </div>
          </section>

          {/* Tipologie di dati raccolti */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">2. Tipologie di Dati Raccolti</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il nostro hotel raccoglie e tratta le seguenti categorie di dati personali:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Dati forniti volontariamente</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Dati di contatto:</strong> nome, cognome, indirizzo email, numero di telefono</li>
              <li><strong>Dati di prenotazione:</strong> date soggiorno, numero ospiti, preferenze camere, richieste speciali</li>
              <li><strong>Dati di fatturazione:</strong> indirizzo fiscale, codice fiscale, partita IVA (se richiesto)</li>
              <li><strong>Dati di pagamento:</strong> tramite gateway sicuri di terze parti (non conserviamo dati carte di credito)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Dati raccolti automaticamente</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate</li>
              <li><strong>Cookie tecnici e analitici:</strong> per migliorare l'esperienza utente e analizzare il traffico del sito</li>
              <li><strong>Dati di geolocalizzazione:</strong> solo se espressamente autorizzati dall'utente</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.3 Dati di soggiorno (Legge Alpi - D.Lgs. 159/2011)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Documento di identità (copia conforme)</li>
              <li>Nazionalità, data e luogo di nascita</li>
              <li>Residenza o domicilio</li>
              <li>Date di arrivo e partenza</li>
              <li className="text-amber-700">
                <strong>Obbligo di legge:</strong> questi dati vengono comunicati obbligatoriamente alle autorità di pubblica sicurezza (Questura) entro 24 ore dall'arrivo
              </li>
            </ul>
          </section>

          {/* Finalità del trattamento */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">3. Finalità del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali sono trattati per le seguenti finalità:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">A) Finalità contrattuali (base giuridica: esecuzione contratto)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Gestione prenotazioni e soggiorni</li>
                  <li>Emissione fatture e documenti fiscali</li>
                  <li>Comunicazioni relative al soggiorno (conferme, modifiche, cancellazioni)</li>
                  <li>Servizi di accoglienza e assistenza clienti</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2 italic">Consenso: non necessario (obbligo contrattuale)</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">B) Finalità di legge (base giuridica: obbligo normativo)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Comunicazione dati ospiti alla Questura (Legge Alpi)</li>
                  <li>Adempimenti fiscali e contabili</li>
                  <li>Conservazione documenti contabili (10 anni)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2 italic">Consenso: non necessario (obbligo di legge)</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">C) Finalità di marketing (base giuridica: consenso)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Invio newsletter con offerte speciali e novità</li>
                  <li>Comunicazioni commerciali su eventi locali (Ypsigrock, DiVino Festival, ecc.)</li>
                  <li>Sondaggi di soddisfazione post-soggiorno</li>
                </ul>
                <p className="text-sm text-green-600 mt-2 italic font-semibold">✓ Consenso: NECESSARIO - può essere revocato in qualsiasi momento</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-slate-800 mb-2">D) Finalità analitiche (base giuridica: legittimo interesse)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Analisi statistiche sul traffico del sito (Google Analytics 4)</li>
                  <li>Miglioramento dell'esperienza utente</li>
                  <li>Ottimizzazione servizi offerti</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2 italic">Consenso: gestito tramite Cookie Banner</p>
              </div>
            </div>
          </section>

          {/* Modalità di trattamento */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">4. Modalità di Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il trattamento dei dati personali avviene mediante strumenti elettronici e cartacei, con logiche strettamente correlate alle finalità indicate e con l'adozione delle misure di sicurezza previste dal GDPR.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Sicurezza:</strong> utilizziamo protocollo HTTPS, firewall, backup regolari e accesso limitato ai dati</li>
              <li><strong>Riservatezza:</strong> i dati sono accessibili solo al personale autorizzato formato sulla privacy</li>
              <li><strong>Integrità:</strong> verifichiamo regolarmente l'accuratezza e l'aggiornamento dei dati</li>
              <li><strong>Minimizzazione:</strong> raccogliamo solo i dati strettamente necessari alle finalità dichiarate</li>
            </ul>
          </section>

          {/* Destinatari dei dati */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">5. Destinatari dei Dati Personali</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali possono essere comunicati a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Autorità di Pubblica Sicurezza:</strong> Questura di Palermo (obbligo Legge Alpi)</li>
              <li><strong>Agenzia delle Entrate:</strong> per adempimenti fiscali</li>
              <li><strong>Fornitori di servizi tecnici:</strong> hosting web, email marketing (con garanzie GDPR)</li>
              <li><strong>Gateway di pagamento:</strong> Stripe, PayPal (non conserviamo dati carte di credito)</li>
              <li><strong>Google Analytics:</strong> dati anonimi per statistiche (IP anonimizzato)</li>
              <li><strong>Consulenti fiscali e legali:</strong> solo se necessario per adempimenti specifici</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              Tutti i destinatari sono nominati Responsabili del Trattamento ai sensi dell'art. 28 GDPR o sono soggetti a obbligo di legge.
            </p>
          </section>

          {/* Trasferimento dati extra-UE */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">6. Trasferimento Dati Extra-UE</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alcuni fornitori di servizi (es. Google Analytics) possono trasferire dati in paesi extra-UE. In questi casi, garantiamo che:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Siano applicate le <strong>Clausole Contrattuali Standard</strong> approvate dalla Commissione Europea</li>
              <li>I fornitori rispettino il <strong>EU-US Data Privacy Framework</strong></li>
              <li>Vengano implementate <strong>misure di sicurezza tecniche supplementari</strong></li>
            </ul>
          </section>

          {/* Periodo di conservazione */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">7. Periodo di Conservazione</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Tipologia Dati</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Periodo Conservazione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Dati prenotazione (non conclusa)</td>
                    <td className="border border-slate-300 px-4 py-2">12 mesi dalla richiesta</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-slate-300 px-4 py-2">Dati soggiorno e fatturazione</td>
                    <td className="border border-slate-300 px-4 py-2"><strong>10 anni</strong> (obbligo fiscale)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Dati marketing (newsletter)</td>
                    <td className="border border-slate-300 px-4 py-2">Fino a revoca consenso o 24 mesi inattività</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-slate-300 px-4 py-2">Cookie analitici</td>
                    <td className="border border-slate-300 px-4 py-2">14 mesi (Google Analytics 4)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Log di sistema</td>
                    <td className="border border-slate-300 px-4 py-2">6 mesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Diritti dell'interessato */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">8. Diritti dell'Interessato (Artt. 15-22 GDPR)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In qualità di interessato, Lei ha diritto di:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Accesso (Art. 15)</h4>
                <p className="text-sm text-gray-700">Ottenere conferma che sia in corso un trattamento dei Suoi dati e riceverne copia</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Rettifica (Art. 16)</h4>
                <p className="text-sm text-gray-700">Correggere dati inesatti o integrare dati incompleti</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Cancellazione (Art. 17)</h4>
                <p className="text-sm text-gray-700">Ottenere la cancellazione dei dati (salvo obblighi di legge)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Limitazione (Art. 18)</h4>
                <p className="text-sm text-gray-700">Richiedere la limitazione del trattamento</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Portabilità (Art. 20)</h4>
                <p className="text-sm text-gray-700">Ricevere i dati in formato strutturato per trasferirli ad altro titolare</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Opposizione (Art. 21)</h4>
                <p className="text-sm text-gray-700">Opporsi al trattamento per marketing diretto in qualsiasi momento</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mt-6">
              <h4 className="font-semibold text-slate-800 mb-2">Come esercitare i diritti:</h4>
              <p className="text-gray-700 mb-2">
                Può esercitare i Suoi diritti inviando richiesta scritta a:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>Email:</strong> <a href="mailto:info@paradisodellemadonie.it" className="text-amber-600 hover:underline">info@paradisodellemadonie.it</a></li>
                <li><strong>PEC:</strong> (se disponibile)</li>
                <li><strong>Posta ordinaria:</strong> Via Dante Alighieri 82, 90013 Castelbuono (PA)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                Risponderemo entro 30 giorni dalla ricezione della richiesta, fornendo gratuitamente le informazioni richieste (salvo richieste manifestamente infondate o eccessive).
              </p>
            </div>
          </section>

          {/* Reclamo al Garante */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">9. Diritto di Reclamo</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In caso di violazione della normativa privacy, Lei ha diritto di proporre reclamo all'Autorità di Controllo:
            </p>
            <div className="bg-slate-100 p-4 rounded">
              <p className="font-semibold text-slate-900">Garante per la Protezione dei Dati Personali</p>
              <p className="text-gray-700">Piazza Venezia, 11 - 00187 Roma</p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:garante@gpdp.it" className="text-blue-600 hover:underline">garante@gpdp.it</a>
              </p>
              <p className="text-gray-700">
                <strong>PEC:</strong> <a href="mailto:protocollo@pec.gpdp.it" className="text-blue-600 hover:underline">protocollo@pec.gpdp.it</a>
              </p>
              <p className="text-gray-700">
                <strong>Sito:</strong> <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.garanteprivacy.it</a>
              </p>
            </div>
          </section>

          {/* Cookie */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">10. Cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il sito utilizza cookie tecnici, analitici e di profilazione. Per maggiori informazioni e per gestire le preferenze, consulta la nostra:
            </p>
            <Link
              href="/cookie-policy"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Cookie Policy Completa →
            </Link>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">11. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per eventuali aggiornamenti.
            </p>
          </section>

          {/* Contatti */}
          <section className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif text-slate-900 mb-4">Hai domande sulla privacy?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Per qualsiasi dubbio o richiesta relativa al trattamento dei tuoi dati personali, non esitare a contattarci:
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
