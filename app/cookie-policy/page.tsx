import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo-utils'
import CookiePreferencesButton from '@/components/cookie-preferences-button'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Cookie Policy | Hotel Paradiso delle Madonie',
    description: 'Informativa sull\'uso dei cookie - Hotel Paradiso delle Madonie. Scopri quali cookie utilizziamo e come gestire le tue preferenze.',
    path: '/cookie-policy',
    type: 'website',
  }),
  robots: {
    index: false,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-amber-400 hover:text-amber-300 mb-4 inline-block">
            ← Torna alla Home
          </Link>
          <h1 className="text-4xl font-serif mb-4">Cookie Policy</h1>
          <p className="text-gray-300">Informativa sull'uso dei cookie sul sito paradisodellemadonie.it</p>
          <p className="text-sm text-gray-400 mt-2">Ultimo aggiornamento: 12 novembre 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">

          {/* Cosa sono i cookie */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell'utente (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al sito, facilitare la fruizione dei contenuti online.
            </p>
          </section>

          {/* Tipologie di cookie */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">2. Tipologie di Cookie Utilizzati</h2>

            <div className="space-y-6">
              {/* Cookie Tecnici */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">A) Cookie Tecnici (Non richiedono consenso)</h3>
                <p className="text-gray-700 mb-3">
                  Sono necessari per il corretto funzionamento del sito e per permettere la navigazione. Senza questi cookie, alcune funzionalità del sito non potrebbero essere disponibili.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Cookie di Navigazione o di Sessione</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Garantiscono la normale navigazione e fruizione del sito</li>
                    <li>Permettono di mantenere lo stato di login durante la sessione</li>
                    <li>Memorizzano le preferenze di lingua selezionate</li>
                    <li><strong>Durata:</strong> scadono alla chiusura del browser</li>
                    <li><strong>Provider:</strong> Hotel Paradiso delle Madonie (first-party)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Cookie Funzionali</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Memorizzano le preferenze di consenso cookie</li>
                    <li>Ricordano le impostazioni di accessibilità</li>
                    <li><strong>Durata:</strong> 12 mesi</li>
                    <li><strong>Cookie name:</strong> cookie_consent, user_preferences</li>
                  </ul>
                </div>
              </div>

              {/* Cookie Analitici */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">B) Cookie Analitici (Richiedono consenso)</h3>
                <p className="text-gray-700 mb-3">
                  Utilizzati per raccogliere informazioni statistiche sull'uso del sito (pagine visitate, tempo di permanenza, sorgenti di traffico) al fine di migliorare l'esperienza utente.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">🔹 Google Analytics 4 (GA4)</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li><strong>Provider:</strong> Google Ireland Limited</li>
                    <li><strong>Finalità:</strong> Analisi statistiche anonime del traffico web</li>
                    <li><strong>IP Anonymization:</strong> Attiva (ultimi 2 ottetti oscurati)</li>
                    <li><strong>Durata:</strong> 14 mesi</li>
                    <li><strong>Cookie principali:</strong> _ga, _ga_*, _gid</li>
                    <li><strong>Trasferimento dati:</strong> USA (EU-US Data Privacy Framework)</li>
                    <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy</a></li>
                    <li><strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Browser Add-on</a></li>
                  </ul>
                </div>
              </div>

              {/* Cookie di Profilazione */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">C) Cookie di Profilazione (Richiedono consenso)</h3>
                <p className="text-gray-700 mb-3">
                  Utilizzati per creare profili utente e mostrare messaggi pubblicitari in linea con le preferenze manifestate dall'utente durante la navigazione.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">🔹 Facebook Pixel</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li><strong>Provider:</strong> Meta Platforms Ireland Limited</li>
                    <li><strong>Finalità:</strong> Remarketing, conversioni, pubblico personalizzato</li>
                    <li><strong>Durata:</strong> 90 giorni</li>
                    <li><strong>Cookie:</strong> _fbp, fr</li>
                    <li><strong>Privacy Policy:</strong> <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Meta Privacy</a></li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">🔹 Google Ads Conversion Tracking</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li><strong>Provider:</strong> Google Ireland Limited</li>
                    <li><strong>Finalità:</strong> Misurazione conversioni campagne pubblicitarie</li>
                    <li><strong>Durata:</strong> 90 giorni</li>
                    <li><strong>Cookie:</strong> _gcl_au, test_cookie</li>
                  </ul>
                </div>
              </div>

              {/* Cookie di Terze Parti */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">D) Cookie di Terze Parti</h3>
                <p className="text-gray-700 mb-3">
                  Il sito potrebbe contenere contenuti embedded di terze parti (mappe, video, social media) che installano propri cookie.
                </p>

                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <h5 className="font-semibold text-sm">🗺️ Google Maps</h5>
                    <p className="text-xs text-gray-600">Cookie: NID, 1P_JAR - <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Privacy Policy</a></p>
                  </div>

                  <div className="bg-amber-50 p-3 rounded">
                    <h5 className="font-semibold text-sm">📹 YouTube (video embedded)</h5>
                    <p className="text-xs text-gray-600">Cookie: VISITOR_INFO1_LIVE, YSC - <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Privacy Policy</a></p>
                  </div>

                  <div className="bg-amber-50 p-3 rounded">
                    <h5 className="font-semibold text-sm">📱 Instagram Feed</h5>
                    <p className="text-xs text-gray-600">Cookie: ig_did, csrftoken - <a href="https://help.instagram.com/519522125107875" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Privacy Policy</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tabella riepilogativa */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">3. Tabella Riepilogativa Cookie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2 text-left">Nome</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Tipo</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Provider</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Durata</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Finalità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-xs">cookie_consent</td>
                    <td className="border border-slate-300 px-3 py-2">Tecnico</td>
                    <td className="border border-slate-300 px-3 py-2">First-party</td>
                    <td className="border border-slate-300 px-3 py-2">12 mesi</td>
                    <td className="border border-slate-300 px-3 py-2">Memorizza preferenze cookie</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-slate-300 px-3 py-2 font-mono text-xs">_ga</td>
                    <td className="border border-slate-300 px-3 py-2">Analitico</td>
                    <td className="border border-slate-300 px-3 py-2">Google</td>
                    <td className="border border-slate-300 px-3 py-2">2 anni</td>
                    <td className="border border-slate-300 px-3 py-2">Distingue utenti univoci</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-xs">_gid</td>
                    <td className="border border-slate-300 px-3 py-2">Analitico</td>
                    <td className="border border-slate-300 px-3 py-2">Google</td>
                    <td className="border border-slate-300 px-3 py-2">24 ore</td>
                    <td className="border border-slate-300 px-3 py-2">Distingue utenti univoci</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-slate-300 px-3 py-2 font-mono text-xs">_fbp</td>
                    <td className="border border-slate-300 px-3 py-2">Profilazione</td>
                    <td className="border border-slate-300 px-3 py-2">Facebook</td>
                    <td className="border border-slate-300 px-3 py-2">90 giorni</td>
                    <td className="border border-slate-300 px-3 py-2">Tracking conversioni ads</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-xs">_gcl_au</td>
                    <td className="border border-slate-300 px-3 py-2">Profilazione</td>
                    <td className="border border-slate-300 px-3 py-2">Google Ads</td>
                    <td className="border border-slate-300 px-3 py-2">90 giorni</td>
                    <td className="border border-slate-300 px-3 py-2">Conversioni campagne</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Base giuridica */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">4. Base Giuridica del Trattamento</h2>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Cookie Tecnici</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Base giuridica:</strong> Legittimo interesse del titolare (art. 6.1.f GDPR) + Esenzione dal consenso (Provvedimento Garante 8 maggio 2014)
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Cookie Analitici</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Base giuridica:</strong> Consenso esplicito dell'utente (art. 6.1.a GDPR) raccolto tramite cookie banner
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">✓ Cookie di Profilazione</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Base giuridica:</strong> Consenso esplicito e preventivo dell'utente (art. 6.1.a GDPR + art. 122 Codice Privacy)
                </p>
              </div>
            </div>
          </section>

          {/* Come gestire i cookie */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">5. Come Gestire i Cookie</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">A) Tramite Cookie Banner</h3>
            <p className="text-gray-700 mb-4">
              Al primo accesso al sito, viene visualizzato un banner che ti permette di:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Accettare tutti i cookie (tecnici, analitici, profilazione)</li>
              <li>Rifiutare cookie analitici e di profilazione (solo tecnici)</li>
              <li>Personalizzare le tue preferenze selezionando singole categorie</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">B) Tramite Impostazioni Browser</h3>
            <p className="text-gray-700 mb-4">
              Puoi modificare le impostazioni del tuo browser per bloccare o cancellare i cookie:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🌐 Google Chrome</h4>
                <p className="text-sm text-gray-600">Impostazioni → Privacy e sicurezza → Cookie</p>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="text-blue-600 text-xs hover:underline">Guida completa →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🦊 Mozilla Firefox</h4>
                <p className="text-sm text-gray-600">Opzioni → Privacy e sicurezza → Cookie</p>
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener" className="text-blue-600 text-xs hover:underline">Guida completa →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🧭 Safari (Mac/iOS)</h4>
                <p className="text-sm text-gray-600">Preferenze → Privacy → Gestisci dati siti web</p>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener" className="text-blue-600 text-xs hover:underline">Guida completa →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚡ Microsoft Edge</h4>
                <p className="text-sm text-gray-600">Impostazioni → Privacy → Cookie</p>
                <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" className="text-blue-600 text-xs hover:underline">Guida completa →</a>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mt-6">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Attenzione:</strong> La disabilitazione totale dei cookie tecnici potrebbe compromettere la corretta fruizione del sito e di alcuni suoi servizi.
              </p>
            </div>
          </section>

          {/* Modifiche cookie banner */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">6. Modificare le Preferenze Cookie</h2>
            <p className="text-gray-700 mb-4">
              Puoi modificare in qualsiasi momento le tue preferenze sui cookie cliccando sul pulsante sottostante:
            </p>
            <CookiePreferencesButton />
          </section>

          {/* Privacy Policy */}
          <section className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif text-slate-900 mb-4">7. Privacy e Diritti GDPR</h2>
            <p className="text-gray-700 mb-4">
              Per informazioni complete sul trattamento dei dati personali e sui tuoi diritti ai sensi del GDPR, consulta la nostra:
            </p>
            <Link
              href="/privacy"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Privacy Policy Completa →
            </Link>
          </section>

          {/* Contatti */}
          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">8. Contatti</h2>
            <p className="text-gray-700 mb-4">
              Per domande o richieste relative all'uso dei cookie:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Hotel Paradiso delle Madonie</strong></p>
              <p className="text-gray-700">Via Dante Alighieri, 82 - 90013 Castelbuono (PA)</p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:info@paradisodellemadonie.it" className="text-amber-600 hover:underline">info@paradisodellemadonie.it</a>
              </p>
              <p className="text-gray-700">
                <strong>Tel:</strong> <a href="tel:+390921820683" className="text-amber-600 hover:underline">+39 0921 820683</a>
              </p>
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
