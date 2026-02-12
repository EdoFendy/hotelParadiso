import type React from "react"
import type { Metadata } from "next"
import { Lexend_Deca, Montserrat } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import CookieBanner from "@/components/cookie-banner"

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://paradisodellemadonie.it"),
  title: {
    default: "Hotel a Castelbuono Centro Storico | Vicino Cefalu | Hotel Paradiso delle Madonie",
    template: "%s | Hotel Paradiso delle Madonie",
  },
  description:
    "Hotel a Castelbuono nel centro storico, a 23 km da Cefalu. Camere confortevoli con colazione inclusa, WiFi gratuito e contatto diretto.",
  keywords:
    "hotel castelbuono, alloggio castelbuono, camere castelbuono, hotel vicino cefalu, hotel cefalu e dintorni, alloggio vicino cefalu, dove dormire tra cefalu e madonie, hotel paradiso delle madonie",
  authors: [{ name: "Hotel Paradiso delle Madonie", url: "https://paradisodellemadonie.it" }],
  creator: "Hotel Paradiso delle Madonie",
  publisher: "Hotel Paradiso delle Madonie",
  category: "Hotel & Accommodation",
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
    alternateLocale: ["en_US"],
    url: "https://paradisodellemadonie.it",
    siteName: "Hotel Paradiso delle Madonie Castelbuono",
    title: "Hotel a Castelbuono Centro Storico | Hotel Paradiso delle Madonie",
    description:
      "Hotel a Castelbuono, a 23 km da Cefalu: camere e alloggio tra Madonie e costa con contatto diretto.",
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
    title: "Hotel a Castelbuono | Hotel Paradiso delle Madonie",
    description:
      "Hotel a Castelbuono vicino Cefalu: camere e alloggio con prenotazione diretta via telefono o WhatsApp.",
    images: ["/images/fronte.png"],
  },
  // verification: { google: "INSERT_REAL_CODE_FROM_SEARCH_CONSOLE" },
  alternates: {
    canonical: "https://paradisodellemadonie.it",
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
  manifest: "/manifest.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "geo.region": "IT-PA",
    "geo.placename": "Castelbuono, Sicilia",
    "geo.position": "37.9341;14.0436",
    ICBM: "37.9341, 14.0436",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${lexend.variable} ${montserrat.variable}`}>
      <head>
        {/* Theme & Mobile Optimization */}
        <meta name="theme-color" content="#1c1c1e" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Paradiso Madonie" />

        {/* Business Contact */}
        <meta name="contact" content="info@paradisodellemadonie.it" />
        <meta name="phone" content="+39 0921 820683" />
        <meta name="address" content="Via Dante Alighieri, 82, 90013 Castelbuono PA, Italia" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${lexend.className} antialiased`}>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
