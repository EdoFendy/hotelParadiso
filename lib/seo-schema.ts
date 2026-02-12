/**
 * SEO schema focused on verifiable data only.
 * Avoids speculative claims (prices, ratings, event dates, room counts).
 */

const BASE_URL = "https://paradisodellemadonie.it"
const CONTACT_EMAIL = "info@paradisodellemadonie.it"
const CONTACT_PHONE = "+39 0921 820683"
const PHONE_E164 = "+390921820683"
const WHATSAPP_URL = "https://wa.me/393929309201"

const HOTEL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Via Dante Alighieri, 82",
  addressLocality: "Castelbuono",
  addressRegion: "PA",
  postalCode: "90013",
  addressCountry: "IT",
}

const GEO = {
  "@type": "GeoCoordinates",
  latitude: 37.9341,
  longitude: 14.0436,
}

const SAME_AS = [
  "https://www.facebook.com/hotelparadisomadonie",
  "https://www.instagram.com/hotelparadisomadonie",
  "https://www.tripadvisor.it/hotel-paradiso-madonie",
]

const AREA_SERVED = [
  {
    "@type": "Place",
    name: "Castelbuono",
  },
  {
    "@type": "Place",
    name: "Cefalu",
  },
  {
    "@type": "Place",
    name: "Parco delle Madonie",
  },
]

const ROOM_TYPES = [
  {
    id: "single",
    name: "Camera Singola",
    maxOccupancy: 1,
  },
  {
    id: "double",
    name: "Camera Doppia",
    maxOccupancy: 2,
  },
  {
    id: "triple",
    name: "Camera Tripla",
    maxOccupancy: 3,
  },
  {
    id: "quad",
    name: "Camera Quadrupla",
    maxOccupancy: 4,
  },
]

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Hotel Paradiso delle Madonie",
  inLanguage: "it-IT",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
})

export const generateHotelSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": `${BASE_URL}/#hotel`,
  name: "Hotel Paradiso delle Madonie",
  alternateName: [
    "Hotel Paradiso delle Madonie Castelbuono",
    "Hotel Castelbuono",
    "Alloggio Castelbuono Centro Storico",
    "Hotel vicino Cefalu",
  ],
  description:
    "Hotel a Castelbuono, nel Parco delle Madonie, a circa 23 km da Cefalu.",
  url: BASE_URL,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  image: [
    `${BASE_URL}/images/fronte.png`,
    `${BASE_URL}/images/reception.png`,
    `${BASE_URL}/images/camera1.jpg`,
    `${BASE_URL}/images/camera2.jpg`,
    `${BASE_URL}/images/camera3.jpg`,
  ],
  logo: `${BASE_URL}/images/logo.png`,
  address: HOTEL_ADDRESS,
  geo: GEO,
  hasMap: "https://maps.google.com/?q=Hotel+Paradiso+delle+Madonie+Castelbuono",
  checkinTime: "15:00:00",
  checkoutTime: "10:00:00",
  priceRange: "EUR 55-150",
  petsAllowed: true,
  starRating: {
    "@type": "Rating",
    ratingValue: "3",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
    { "@type": "LocationFeatureSpecification", name: "TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Colazione inclusa", value: true },
  ],
  containsPlace: ROOM_TYPES.map((room) => ({
    "@type": "HotelRoom",
    "@id": `${BASE_URL}/#room-${room.id}`,
    name: room.name,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.maxOccupancy,
    },
  })),
  sameAs: SAME_AS,
})

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Hotel Paradiso delle Madonie",
  url: BASE_URL,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  image: `${BASE_URL}/images/fronte.png`,
  address: HOTEL_ADDRESS,
  geo: GEO,
  areaServed: AREA_SERVED,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    availableLanguage: ["Italian", "English"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  sameAs: SAME_AS,
})

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const generateRoomListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/#room-list`,
  name: "Camere Hotel Paradiso delle Madonie",
  itemListElement: ROOM_TYPES.map((room, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "HotelRoom",
      "@id": `${BASE_URL}/#room-${room.id}`,
      name: room.name,
      url: `${BASE_URL}/camere-castelbuono`,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: room.maxOccupancy,
      },
    },
  })),
})

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Quali sono gli orari di check-in e check-out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il check-in e dalle 15:00 alle 22:00. Il check-out e entro le 10:00.",
      },
    },
    {
      "@type": "Question",
      name: "La colazione e inclusa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, la colazione continentale a buffet e inclusa nelle tariffe indicate sul sito.",
      },
    },
    {
      "@type": "Question",
      name: "Come posso contattare l'hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puoi contattare l'hotel via telefono, email o WhatsApp usando i contatti presenti nella pagina.",
      },
    },
  ],
})

export const generateYpsigrokEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Ypsigrock Festival",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelbuono",
      addressRegion: "PA",
      addressCountry: "IT",
    },
  },
})

export const generateDiVinoEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "DiVino Festival Castelbuono",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelbuono",
      addressRegion: "PA",
      addressCountry: "IT",
    },
  },
})

export const generateFunghiFestEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Funghi Fest Castelbuono",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelbuono",
      addressRegion: "PA",
      addressCountry: "IT",
    },
  },
})

export const generateCastelloVentimigliaSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${BASE_URL}/#castello-ventimiglia`,
  name: "Castello dei Ventimiglia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castelbuono",
    addressRegion: "PA",
    addressCountry: "IT",
  },
})

export const generateParcoMadonieSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${BASE_URL}/#parco-madonie`,
  name: "Parco delle Madonie",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castelbuono",
    addressRegion: "Sicilia",
    addressCountry: "IT",
  },
})

export const generateGoleTiberioSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${BASE_URL}/#gole-tiberio`,
  name: "Gole di Tiberio",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pollina",
    addressRegion: "PA",
    addressCountry: "IT",
  },
})

export const generatePianoBattagliaSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${BASE_URL}/#piano-battaglia`,
  name: "Piano Battaglia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Petralia Sottana",
    addressRegion: "PA",
    addressCountry: "IT",
  },
})

export const generateMannaProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Manna di Castelbuono",
  brand: {
    "@type": "Brand",
    name: "Manna di Castelbuono",
  },
})

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Hotel Paradiso delle Madonie",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/fronte.png`,
  description: "Hotel a Castelbuono nel Parco delle Madonie",
  address: HOTEL_ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_PHONE,
    contactType: "customer service",
    email: CONTACT_EMAIL,
    availableLanguage: ["Italian", "English"],
  },
  sameAs: SAME_AS,
})

export const generateWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Hotel Paradiso delle Madonie | Hotel a Castelbuono",
  description:
    "Hotel a Castelbuono nel cuore del Parco delle Madonie, a 23 km da Cefalu, con contatto diretto per richieste e prenotazioni.",
  inLanguage: "it-IT",
  isPartOf: {
    "@id": `${BASE_URL}/#website`,
  },
  about: {
    "@id": `${BASE_URL}/#hotel`,
  },
  breadcrumb: {
    "@id": `${BASE_URL}/#breadcrumb-home`,
  },
  potentialAction: [
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/#prenota`,
      },
    },
    {
      "@type": "CommunicateAction",
      target: [
        {
          "@type": "EntryPoint",
          urlTemplate: WHATSAPP_URL,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        {
          "@type": "EntryPoint",
          urlTemplate: `tel:${PHONE_E164}`,
        },
      ],
    },
  ],
})

export const generateHomeBreadcrumbSchema = () =>
  generateBreadcrumbSchema([
    {
      name: "Home",
      url: BASE_URL,
    },
  ])

export const generateLandingPageSchema = (input: {
  path: string
  title: string
  description: string
  keywords: string[]
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}${input.path}#webpage`,
  url: `${BASE_URL}${input.path}`,
  name: input.title,
  description: input.description,
  inLanguage: "it-IT",
  keywords: input.keywords.join(", "),
  isPartOf: {
    "@id": `${BASE_URL}/#website`,
  },
  about: {
    "@id": `${BASE_URL}/#hotel`,
  },
  potentialAction: {
    "@type": "CommunicateAction",
    target: [`tel:${PHONE_E164}`, WHATSAPP_URL, `mailto:${CONTACT_EMAIL}`],
  },
})

export const generateCompleteHomeSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
    generateHotelSchema(),
    generateLocalBusinessSchema(),
    {
      ...generateHomeBreadcrumbSchema(),
      "@id": `${BASE_URL}/#breadcrumb-home`,
    },
    generateWebPageSchema(),
    generateRoomListSchema(),
    generateFAQSchema(),
    generateCastelloVentimigliaSchema(),
    generateParcoMadonieSchema(),
    generateGoleTiberioSchema(),
    generatePianoBattagliaSchema(),
  ],
})
