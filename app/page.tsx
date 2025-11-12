import type { Metadata } from "next"
import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RoomsSection from "@/components/rooms-section"
import CastelbuonoSection from "@/components/castelbuono-section"
import LocationSection from "@/components/location-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import LoadingScreen from "@/components/loading-screen"
import { LanguageProvider } from "@/contexts/language-context"
import ScrollAnimationsClient from "@/components/ScrollAnimationsClient"
import { generateCompleteHomeSchema } from "@/lib/seo-schema"

export const metadata: Metadata = {
  title: "Hotel Paradiso delle Madonie ★★★ Castelbuono | 23km da Cefalù | Tra Mare e Montagna",
  description:
    "Hotel 3 stelle a Castelbuono nel Parco delle Madonie. A 23km da Cefalù, vicino Castello Ventimiglia, Ypsigrock Festival, Gole Tiberio, Piano Battaglia. Trekking, borghi UNESCO, gastronomia siciliana. Prenota ora la tua esperienza autentica!",
  keywords:
    "hotel castelbuono, hotel madonie, hotel cefalù montagna, dove dormire castelbuono, hotel 3 stelle sicilia, hotel parco madonie, castelbuono sicilia, castello ventimiglia, ypsigrock festival, weekend madonie, trekking madonie, hotel vicino cefalù, borghi sicilia, manna castelbuono, fiasconaro, divino festival, funghi fest, piano battaglia, gole tiberio, geraci siculo, gangi, petralia soprana, hotel tra mare e montagna, vacanze natura sicilia, soggiorno romantico madonie",
  openGraph: {
    title: "Hotel Paradiso delle Madonie ★★★ | Castelbuono | 23km da Cefalù",
    description: "Hotel a Castelbuono nel Parco Madonie, tra mare e montagna. Castello Ventimiglia, Ypsigrock, borghi UNESCO, trekking. La tua base per scoprire l'autentica Sicilia!",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "de_DE", "fr_FR"],
    siteName: "Hotel Paradiso delle Madonie",
    url: "https://paradisodellemadonie.it",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel Paradiso delle Madonie - Facciata principale a Castelbuono nel Parco delle Madonie",
      },
      {
        url: "/images/reception.png",
        width: 1200,
        height: 630,
        alt: "Reception accogliente Hotel Paradiso delle Madonie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotelparadisomadonie",
    title: "Hotel Paradiso delle Madonie ★★★ | Castelbuono Sicilia",
    description: "Hotel 3 stelle a Castelbuono, Parco Madonie. 23km da Cefalù, tra mare e montagna.",
    images: ["/images/fronte.png"],
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
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <NavigationBar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <CastelbuonoSection />
        <LocationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollAnimationsClient />

      {/* Complete Enterprise-Level Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCompleteHomeSchema()),
        }}
      />
    </LanguageProvider>
  )
}
