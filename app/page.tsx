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

export const metadata: Metadata = {
  title: "Hotel Paradiso delle Madonie | Castelbuono Sicilia | La tua miglior scelta",
  description:
    "Hotel Paradiso delle Madonie a Castelbuono, nel cuore del Parco delle Madonie. Camere confortevoli, posizione strategica, WiFi gratuito. Scopri l'autentica Sicilia tra storia e natura.",
  keywords:
    "hotel castelbuono, hotel madonie, hotel sicilia, paradiso delle madonie, albergo castelbuono, soggiorno madonie, hotel parco madonie, castelbuono sicilia, hotel famiglia sicilia, vacanze madonie",
  openGraph: {
    title: "Hotel Paradiso delle Madonie | Castelbuono Sicilia",
    description: "Nel cuore del Parco delle Madonie, la tua miglior scelta per scoprire l'autentica Sicilia",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    siteName: "Hotel Paradiso delle Madonie",
    images: [
      {
        url: "/images/fronte.png",
        width: 1200,
        height: 630,
        alt: "Hotel Paradiso delle Madonie - Facciata principale",
      },
    ],
  },
  alternates: {
    canonical: "https://paradisodellemadonie.it",
    languages: {
      "it-IT": "https://paradisodellemadonie.it/it",
      "en-US": "https://paradisodellemadonie.it/en",
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

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Hotel Paradiso delle Madonie",
            description: "Hotel nel cuore del Parco delle Madonie a Castelbuono, Sicilia",
            url: "https://paradisodellemadonie.it",
            telephone: "+39 0921 820683",
            email: "info@paradisodellemadonie.it",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via Dante Alighieri, 82",
              addressLocality: "Castelbuono",
              addressRegion: "Sicilia",
              postalCode: "90013",
              addressCountry: "IT",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "37.9341",
              longitude: "14.0436",
            },
            starRating: {
              "@type": "Rating",
              ratingValue: "3",
              bestRating: "5",
            },
            priceRange: "€€",
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "WiFi gratuito" },
              { "@type": "LocationFeatureSpecification", name: "Aria condizionata" },
              { "@type": "LocationFeatureSpecification", name: "TV satellitare" },
              { "@type": "LocationFeatureSpecification", name: "Parcheggio privato" },
              { "@type": "LocationFeatureSpecification", name: "Colazione continentale" },
              { "@type": "LocationFeatureSpecification", name: "Bar" },
            ],
            hasMap: "https://maps.google.com/maps?q=Via+Dante+Alighieri+82+Castelbuono",
            photo: [
              "https://paradisodellemadonie.it/images/fronte.png",
              "https://paradisodellemadonie.it/images/reception.png",
              "https://paradisodellemadonie.it/images/camera1.jpg",
            ],
          }),
        }}
      />
    </LanguageProvider>
  )
}
