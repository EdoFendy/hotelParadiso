import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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
    default: "Hotel Paradiso delle Madonie | Castelbuono Sicilia | La tua miglior scelta",
    template: "%s | Hotel Paradiso delle Madonie",
  },
  description:
    "Hotel Paradiso delle Madonie a Castelbuono, nel cuore del Parco delle Madonie. Camere confortevoli, posizione strategica, WiFi gratuito. Scopri l'autentica Sicilia tra storia e natura.",
  keywords:
    "hotel castelbuono, hotel madonie, hotel sicilia, paradiso delle madonie, albergo castelbuono, soggiorno madonie, hotel parco madonie, castelbuono sicilia, hotel famiglia sicilia, vacanze madonie, castello ventimiglia, manna castelbuono",
  authors: [{ name: "Hotel Paradiso delle Madonie", url: "https://paradisodellemadonie.it" }],
  creator: "Hotel Paradiso delle Madonie",
  publisher: "Hotel Paradiso delle Madonie",
  robots: {
    index: true,
    follow: true,
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
    siteName: "Hotel Paradiso delle Madonie",
    title: "Hotel Paradiso delle Madonie | Castelbuono Sicilia",
    description: "Nel cuore del Parco delle Madonie, la tua miglior scelta per scoprire l'autentica Sicilia",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel Paradiso delle Madonie - Facciata principale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Paradiso delle Madonie | Castelbuono Sicilia",
    description: "Nel cuore del Parco delle Madonie, scopri l'autentica Sicilia",
    images: ["/images/fronte.png"],
  },
  verification: {
    google: "hotel-madonie-verification",
  },
  alternates: {
    canonical: "https://paradisodellemadonie.it",
    languages: {
      "it-IT": "https://paradisodellemadonie.it/it",
      "en-US": "https://paradisodellemadonie.it/en",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${serifFont.variable}`}>
      <head>
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="geo.region" content="IT-PA" />
        <meta name="geo.placename" content="Castelbuono, Sicilia" />
        <meta name="geo.position" content="37.9341;14.0436" />
        <meta name="ICBM" content="37.9341, 14.0436" />
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
