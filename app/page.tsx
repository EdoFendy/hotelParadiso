import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RoomsSection from "@/components/rooms-section"
import CastelbuonoSection from "@/components/castelbuono-section"
import LocationSection from "@/components/location-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import ReviewsSection from "@/components/reviews-section"
import BookingForm from "@/components/booking-form"
import FAQSection from "@/components/faq-section"
import LocalSeoSection from "@/components/local-seo-section"
import WhatsAppFloat from "@/components/whatsapp-float"
import StickyBookingBarShell from "@/components/sticky-booking-bar-shell"
import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import ScrollAnimationsClient from "@/components/ScrollAnimationsClient"
import { generateCompleteHomeSchema } from "@/lib/seo-schema"

export const metadata: Metadata = {
  title: "Hotel Castelbuono Centro Storico | Vicino Cefalu | Hotel Paradiso delle Madonie",
  description:
    "Hotel a Castelbuono nel centro storico, a 23 km da Cefalu: camere singole, doppie, triple e quadruple con colazione inclusa. Contatto diretto via telefono o WhatsApp.",
  keywords:
    "hotel castelbuono, alloggio castelbuono, camere castelbuono, hotel vicino cefalu, hotel cefalu dintorni, dove dormire tra cefalu e madonie, hotel paradiso delle madonie",
  openGraph: {
    title: "Hotel Castelbuono | Hotel Paradiso delle Madonie",
    description:
      "Hotel a Castelbuono nel centro storico, a 23 km da Cefalu, con camere confortevoli e colazione inclusa.",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US"],
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
    title: "Hotel Castelbuono | Hotel Paradiso delle Madonie",
    description: "Hotel a Castelbuono vicino Cefalu. Camere e alloggio con contatto diretto.",
    images: ["/images/fronte.png"],
  },
  alternates: {
    canonical: "https://paradisodellemadonie.it",
  },
}

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <StickyBookingBarShell />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <ReviewsSection />
        <CastelbuonoSection />
        <GallerySection />
        <FAQSection />
        <BookingForm />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollAnimationsClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCompleteHomeSchema()),
        }}
      />
    </>
  )
}
