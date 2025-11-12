'use client'

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).showCookieBanner) {
          (window as any).showCookieBanner()
        }
      }}
      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
    >
      🍪 Gestisci Preferenze Cookie
    </button>
  )
}
