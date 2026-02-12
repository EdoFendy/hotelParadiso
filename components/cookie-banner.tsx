"use client"

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
        className="fixed inset-0 z-[9998] backdrop-blur-sm animate-in fade-in duration-300"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        onClick={handleClose}
      />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-in slide-in-from-bottom duration-300">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div
            className="surface-card overflow-hidden"
            style={{ boxShadow: "var(--shadow-2xl)" }}
          >
            {/* Simple View */}
            {!showPreferences && (
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent-50)", color: "var(--accent-600)" }}
                    >
                      <Cookie className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--primary-900)" }}
                    >
                      Questo sito utilizza i cookie
                    </h3>
                    <p
                      className="leading-relaxed mb-4 text-sm"
                      style={{ color: "var(--neutral-600)" }}
                    >
                      Utilizziamo cookie tecnici, analitici e di profilazione per migliorare la tua esperienza di navigazione e mostrarti contenuti personalizzati.
                      Cliccando su "Accetta tutti" acconsenti all'uso di tutti i cookie. Per maggiori dettagli consulta la nostra{' '}
                      <Link href="/cookie-policy" className="hover:underline font-semibold" style={{ color: "var(--accent-700)" }}>
                        Cookie Policy
                      </Link>
                      {' '}e{' '}
                      <Link href="/privacy" className="hover:underline font-semibold" style={{ color: "var(--accent-700)" }}>
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="cta-pill-accent justify-center"
                      >
                        <Shield className="w-4 h-4" />
                        Accetta Tutti
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="cta-pill-outline justify-center"
                      >
                        Rifiuta Tutti
                      </button>
                      <button
                        onClick={() => setShowPreferences(true)}
                        className="cta-pill-ghost justify-center"
                      >
                        Personalizza
                      </button>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 transition-colors"
                    style={{ color: "var(--neutral-400)" }}
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
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--primary-900)" }}
                    >
                      Gestisci le tue preferenze
                    </h3>
                    <p style={{ color: "var(--neutral-600)" }} className="text-sm">
                      Scegli quali cookie accettare per personalizzare la tua esperienza
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="transition-colors"
                    style={{ color: "var(--neutral-400)" }}
                    aria-label="Indietro"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-200)" }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ backgroundColor: "var(--success-50)", color: "var(--success-600)" }}
                        >
                          <Shield className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1" style={{ color: "var(--primary-900)" }}>Cookie Tecnici (Necessari)</h4>
                          <p className="text-sm mb-2" style={{ color: "var(--neutral-600)" }}>
                            Essenziali per il funzionamento del sito. Permettono la navigazione base e le funzionalità di sicurezza.
                          </p>
                          <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
                            Esempi: sessione, preferenze lingua, consenso cookie
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div
                          className="px-3 py-1 rounded-full text-sm font-semibold"
                          style={{ backgroundColor: "var(--success-500)", color: "#fff" }}
                        >
                          Sempre Attivi
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div
                    className="rounded-lg p-4 transition-colors"
                    style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-200)" }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ backgroundColor: "var(--info-50)", color: "var(--info-500)" }}
                        >
                          <BarChart className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1" style={{ color: "var(--primary-900)" }}>Cookie Analitici</h4>
                          <p className="text-sm mb-2" style={{ color: "var(--neutral-600)" }}>
                            Ci aiutano a capire come utilizzi il sito per migliorare l'esperienza utente. I dati sono anonimi.
                          </p>
                          <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
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
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div
                    className="rounded-lg p-4 transition-colors"
                    style={{ backgroundColor: "var(--neutral-0)", border: "1px solid var(--neutral-200)" }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ backgroundColor: "var(--primary-50)", color: "var(--primary-600)" }}
                        >
                          <Target className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1" style={{ color: "var(--primary-900)" }}>Cookie di Marketing</h4>
                          <p className="text-sm mb-2" style={{ color: "var(--neutral-600)" }}>
                            Utilizzati per mostrarti pubblicità personalizzata e misurare l'efficacia delle campagne.
                          </p>
                          <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
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
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-3 pt-4"
                  style={{ borderTop: "1px solid var(--neutral-200)" }}
                >
                  <button
                    onClick={handleSavePreferences}
                    className="cta-pill-accent flex-1 justify-center"
                  >
                    Salva Preferenze
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="cta-pill-outline flex-1 justify-center"
                  >
                    Accetta Tutti
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="cta-pill-ghost justify-center sm:w-auto"
                  >
                    Rifiuta Tutti
                  </button>
                </div>

                {/* Links */}
                <div className="mt-4 text-center text-sm" style={{ color: "var(--neutral-500)" }}>
                  <Link href="/cookie-policy" className="hover:underline" style={{ color: "var(--accent-700)" }}>
                    Cookie Policy
                  </Link>
                  {' · '}
                  <Link href="/privacy" className="hover:underline" style={{ color: "var(--accent-700)" }}>
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
