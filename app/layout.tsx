import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Using a serif font that's more widely available
const serifFont = {
  variable: "--font-playfair",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://paradisodellemadonie.it"),
  title: {
    default: "Hotel Castelbuono - Hotel Paradiso delle Madonie | Centro Storico Castelbuono Sicilia",
    template: "%s | Hotel Paradiso Madonie Castelbuono",
  },
  description:
    "Hotel Castelbuono centro storico. Hotel Paradiso delle Madonie, 3 stelle nel cuore di Castelbuono. A 23km da Cefalù, vicino Castello Ventimiglia. Camere confortevoli, WiFi gratis, colazione inclusa. Miglior hotel Castelbuono per Ypsigrock.",
  keywords:
    "hotel castelbuono, hotel castelbuono centro, hotel castelbuono sicilia, albergo castelbuono, hotel paradiso madonie, dove dormire castelbuono, hotel castello ventimiglia castelbuono, hotel ypsigrock castelbuono, hotel 3 stelle castelbuono, pensione castelbuono, bed and breakfast castelbuono, hotel economico castelbuono, hotel centro storico castelbuono, alloggio castelbuono, pernottamento castelbuono, hotel madonie, hotel parco madonie, hotel vicino cefalù, hotel tra mare e montagna, castelbuono dove dormire, castelbuono alloggio, castelbuono hotel centro, migliore hotel castelbuono, hotel consigliato castelbuono",
  authors: [{ name: "Hotel Paradiso delle Madonie", url: "https://paradisodellemadonie.it" }],
  creator: "Hotel Paradiso delle Madonie",
  publisher: "Hotel Paradiso delle Madonie",
  category: "Hotel & Accommodation",
  classification: "Hotel 3 Stelle",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "de_DE", "fr_FR"],
    url: "https://paradisodellemadonie.it",
    siteName: "Hotel Paradiso delle Madonie Castelbuono",
    title: "Hotel Castelbuono - Hotel Paradiso delle Madonie | Centro Storico",
    description: "Hotel Castelbuono centro storico. Hotel Paradiso delle Madonie, albergo 3 stelle nel cuore di Castelbuono Sicilia. Camere confortevoli, WiFi, colazione. Miglior hotel per Ypsigrock e Castello Ventimiglia.",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel Paradiso delle Madonie - Facciata principale a Castelbuono",
        type: "image/png",
      },
      {
        url: "/images/reception.png",
        width: 1200,
        height: 630,
        alt: "Reception Hotel Paradiso delle Madonie",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotelparadisomadonie",
    creator: "@hotelparadisomadonie",
    title: "Hotel Paradiso delle Madonie ★★★ | Castelbuono Sicilia",
    description: "Hotel a Castelbuono nel Parco Madonie, 23km da Cefalù. Tra mare e montagna, vicino Castello Ventimiglia e borghi UNESCO.",
    images: ["/images/fronte.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  alternates: {
    canonical: "https://paradisodellemadonie.it",
    languages: {
      "it-IT": "https://paradisodellemadonie.it",
      "en-US": "https://paradisodellemadonie.it/en",
      "de-DE": "https://paradisodellemadonie.it/de",
      "fr-FR": "https://paradisodellemadonie.it/fr",
    },
  },
  icons: {
    icon: [
      { url: "/icon/favicon.ico", sizes: "any" },
      { url: "/icon/favicon.svg", type: "image/svg+xml" },
      { url: "/icon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${serifFont.variable}`}>
      <head>
        {/* Theme & Mobile Optimization */}
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Paradiso Madonie" />

        {/* Geo Location Tags */}
        <meta name="geo.region" content="IT-PA" />
        <meta name="geo.placename" content="Castelbuono, Sicilia" />
        <meta name="geo.position" content="37.9341;14.0436" />
        <meta name="ICBM" content="37.9341, 14.0436" />

        {/* Additional SEO Tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Business Contact */}
        <meta name="contact" content="info@paradisodellemadonie.it" />
        <meta name="phone" content="+39 0921 820683" />
        <meta name="address" content="Via Dante Alighieri, 82, 90013 Castelbuono PA, Italia" />

        {/* Location Specific */}
        <meta name="locality" content="Castelbuono" />
        <meta name="region" content="Sicilia" />
        <meta name="country" content="Italia" />
        <meta name="postal-code" content="90013" />

        {/* Hotel Specific */}
        <meta property="hotel:latitude" content="37.9341" />
        <meta property="hotel:longitude" content="14.0436" />
        <meta property="hotel:locality" content="Castelbuono" />
        <meta property="hotel:region" content="PA" />
        <meta property="hotel:country-name" content="IT" />
        <meta property="hotel:price_range" content="€€-€€€" />
        <meta property="hotel:rating" content="4.6" />
        <meta property="hotel:rating:scale" content="5" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --font-playfair: "Times New Roman", "Georgia", "Playfair Display", serif;
              --font-inter: "Helvetica Neue", "Arial", "Inter", sans-serif;
            }
          `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
