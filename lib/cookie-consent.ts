/**
 * COOKIE CONSENT MANAGER
 * Sistema di gestione consensi cookie GDPR-compliant
 */

export type CookieCategory = 'necessary' | 'analytics' | 'marketing'

export interface CookieConsent {
  necessary: boolean // Sempre true
  analytics: boolean
  marketing: boolean
  timestamp: number
}

const CONSENT_COOKIE_NAME = 'cookie_consent'
const CONSENT_COOKIE_EXPIRY = 365 // giorni

/**
 * Get current cookie consent from localStorage
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME)
    if (!stored) return null

    const consent: CookieConsent = JSON.parse(stored)

    // Check if consent is older than 12 months (GDPR best practice)
    const twelveMonthsAgo = Date.now() - (365 * 24 * 60 * 60 * 1000)
    if (consent.timestamp < twelveMonthsAgo) {
      // Consent expired, remove it
      localStorage.removeItem(CONSENT_COOKIE_NAME)
      return null
    }

    return consent
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

/**
 * Save cookie consent to localStorage
 */
export function saveCookieConsent(consent: Omit<CookieConsent, 'timestamp' | 'necessary'>): void {
  if (typeof window === 'undefined') return

  const fullConsent: CookieConsent = {
    necessary: true, // Always true
    analytics: consent.analytics,
    marketing: consent.marketing,
    timestamp: Date.now(),
  }

  try {
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(fullConsent))

    // Emit custom event for components to react
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: fullConsent }))

    // Apply consent immediately
    applyConsent(fullConsent)
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

/**
 * Check if user has given consent for a specific category
 */
export function hasConsent(category: CookieCategory): boolean {
  const consent = getCookieConsent()
  if (!consent) return false

  return consent[category]
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  saveCookieConsent({
    analytics: true,
    marketing: true,
  })
}

/**
 * Reject all non-necessary cookies
 */
export function rejectAllCookies(): void {
  saveCookieConsent({
    analytics: false,
    marketing: false,
  })
}

/**
 * Apply consent by loading/removing scripts
 */
function applyConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return

  // Google Analytics
  if (consent.analytics) {
    loadGoogleAnalytics()
  } else {
    removeGoogleAnalytics()
  }

  // Facebook Pixel
  if (consent.marketing) {
    loadFacebookPixel()
  } else {
    removeFacebookPixel()
  }

  // Google Ads
  if (consent.marketing) {
    loadGoogleAds()
  } else {
    removeGoogleAds()
  }
}

/**
 * Load Google Analytics 4
 */
function loadGoogleAnalytics(): void {
  if (typeof window === 'undefined') return
  if ((window as any).ga) return // Already loaded

  const GA_ID = 'G-XXXXXXXXXX' // Replace with your GA4 ID

  // Load gtag.js
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Initialize GA4
  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) {
    ;(window as any).dataLayer.push(args)
  }
  ;(window as any).gtag = gtag

  gtag('js', new Date())
  gtag('config', GA_ID, {
    anonymize_ip: true, // IP anonymization for GDPR
    cookie_flags: 'SameSite=None;Secure',
  })

  console.log('Google Analytics loaded')
}

/**
 * Remove Google Analytics cookies
 */
function removeGoogleAnalytics(): void {
  if (typeof window === 'undefined') return

  // Remove GA cookies
  const gaCookies = ['_ga', '_gat', '_gid']
  gaCookies.forEach((cookie) => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  })

  // Remove gtag script
  const scripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]')
  scripts.forEach((script) => script.remove())

  delete (window as any).gtag
  delete (window as any).ga

  console.log('Google Analytics removed')
}

/**
 * Load Facebook Pixel
 */
function loadFacebookPixel(): void {
  if (typeof window === 'undefined') return
  if ((window as any).fbq) return // Already loaded

  const FB_PIXEL_ID = 'XXXXXXXXXX' // Replace with your Facebook Pixel ID

  // Facebook Pixel Code
  ;(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  ;(window as any).fbq('init', FB_PIXEL_ID)
  ;(window as any).fbq('track', 'PageView')

  console.log('Facebook Pixel loaded')
}

/**
 * Remove Facebook Pixel cookies
 */
function removeFacebookPixel(): void {
  if (typeof window === 'undefined') return

  // Remove FB cookies
  const fbCookies = ['_fbp', 'fr']
  fbCookies.forEach((cookie) => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  })

  delete (window as any).fbq

  console.log('Facebook Pixel removed')
}

/**
 * Load Google Ads
 */
function loadGoogleAds(): void {
  if (typeof window === 'undefined') return
  if ((window as any).google_tag_manager) return // Already loaded

  const AW_ID = 'AW-XXXXXXXXXX' // Replace with your Google Ads ID

  // Google Ads script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`
  document.head.appendChild(script)

  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) {
    ;(window as any).dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', AW_ID)

  console.log('Google Ads loaded')
}

/**
 * Remove Google Ads cookies
 */
function removeGoogleAds(): void {
  if (typeof window === 'undefined') return

  // Remove Google Ads cookies
  const adsCookies = ['_gcl_au', 'test_cookie']
  adsCookies.forEach((cookie) => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  })

  console.log('Google Ads removed')
}

/**
 * Check if consent banner should be shown
 */
export function shouldShowConsentBanner(): boolean {
  return getCookieConsent() === null
}

/**
 * Initialize cookie consent on page load
 */
export function initializeCookieConsent(): void {
  if (typeof window === 'undefined') return

  const consent = getCookieConsent()
  if (consent) {
    applyConsent(consent)
  }
}
