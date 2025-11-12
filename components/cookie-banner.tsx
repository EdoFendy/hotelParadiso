'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie, Shield, BarChart, Target } from 'lucide-react'
import {
  shouldShowConsentBanner,
  acceptAllCookies,
  rejectAllCookies,
  saveCookieConsent,
  initializeCookieConsent,
} from '@/lib/cookie-consent'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Initialize consent system
    initializeCookieConsent()

    // Check if banner should be shown
    const shouldShow = shouldShowConsentBanner()
    setShowBanner(shouldShow)

    // Listen for manual banner trigger
    const handleShowBanner = () => {
      setShowBanner(true)
      setShowPreferences(true)
    }

    window.showCookieBanner = handleShowBanner
    ;(window as any).showCookieBanner = handleShowBanner

    return () => {
      delete (window as any).showCookieBanner
    }
  }, [])

  const handleAcceptAll = () => {
    acceptAllCookies()
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleRejectAll = () => {
    rejectAllCookies()
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleSavePreferences = () => {
    saveCookieConsent(preferences)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleClose = () => {
    // Closing without choice = reject all
    handleRejectAll()
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-in slide-in-from-bottom duration-300">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

            {/* Simple View */}
            {!showPreferences && (
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                      Questo sito utilizza i cookie
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Utilizziamo cookie tecnici, analitici e di profilazione per migliorare la tua esperienza di navigazione e mostrarti contenuti personalizzati.
                      Cliccando su "Accetta tutti" acconsenti all'uso di tutti i cookie. Per maggiori dettagli consulta la nostra{' '}
                      <Link href="/cookie-policy" className="text-amber-600 hover:underline font-semibold">
                        Cookie Policy
                      </Link>
                      {' '}e{' '}
                      <Link href="/privacy" className="text-amber-600 hover:underline font-semibold">
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <Shield className="w-4 h-4" />
                        Accetta Tutti
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Rifiuta Tutti
                      </button>
                      <button
                        onClick={() => setShowPreferences(true)}
                        className="bg-white hover:bg-gray-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border-2 border-slate-300 transition-colors"
                      >
                        Personalizza
                      </button>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Chiudi"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Preferences View */}
            {showPreferences && (
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                      Gestisci le tue preferenze
                    </h3>
                    <p className="text-gray-600">
                      Scegli quali cookie accettare per personalizzare la tua esperienza
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Indietro"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1">Cookie Tecnici (Necessari)</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Essenziali per il funzionamento del sito. Permettono la navigazione base e le funzionalità di sicurezza.
                          </p>
                          <p className="text-xs text-gray-500">
                            Esempi: sessione, preferenze lingua, consenso cookie
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Sempre Attivi
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <BarChart className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1">Cookie Analitici</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Ci aiutano a capire come utilizzi il sito per migliorare l'esperienza utente. I dati sono anonimi.
                          </p>
                          <p className="text-xs text-gray-500">
                            Provider: Google Analytics 4 (IP anonimizzato)
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) =>
                              setPreferences({ ...preferences, analytics: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-purple-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1">Cookie di Marketing</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Utilizzati per mostrarti pubblicità personalizzata e misurare l'efficacia delle campagne.
                          </p>
                          <p className="text-xs text-gray-500">
                            Provider: Facebook Pixel, Google Ads
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) =>
                              setPreferences({ ...preferences, marketing: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Salva Preferenze
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Accetta Tutti
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="sm:w-auto bg-white hover:bg-gray-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border-2 border-slate-300 transition-colors"
                  >
                    Rifiuta Tutti
                  </button>
                </div>

                {/* Links */}
                <div className="mt-4 text-center text-sm text-gray-600">
                  <Link href="/cookie-policy" className="hover:text-amber-600 underline">
                    Cookie Policy
                  </Link>
                  {' · '}
                  <Link href="/privacy" className="hover:text-amber-600 underline">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
