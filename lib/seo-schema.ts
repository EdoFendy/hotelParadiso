/**
 * ENTERPRISE-LEVEL SEO SCHEMA.ORG IMPLEMENTATION
 * Complete structured data for Hotel Paradiso delle Madonie
 * Optimized for Google Rich Snippets, Knowledge Graph, and local search dominance
 */

export const generateHotelSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": "https://paradisodellemadonie.it/#hotel",
  name: "Hotel Paradiso delle Madonie Castelbuono",
  alternateName: ["Hotel Castelbuono", "Paradiso Madonie Hotel", "Albergo Castelbuono", "Hotel Paradiso Castelbuono"],
  description: "Hotel Castelbuono centro storico. Hotel 3 stelle nel cuore di Castelbuono, Parco Madonie. Miglior hotel Castelbuono vicino Castello Ventimiglia. Ideale per Ypsigrock Festival. WiFi, colazione, parcheggio.",
  url: "https://paradisodellemadonie.it",
  telephone: "+39 0921 820683",
  email: "info@paradisodellemadonie.it",
  image: [
    "https://paradisodellemadonie.it/images/fronte.png",
    "https://paradisodellemadonie.it/images/reception.png",
    "https://paradisodellemadonie.it/images/camera1.jpg"
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://paradisodellemadonie.it/images/logo.png",
    width: 400,
    height: 200,
    caption: "Hotel Paradiso delle Madonie Castelbuono Logo"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Dante Alighieri, 82",
    addressLocality: "Castelbuono",
    addressRegion: "PA",
    postalCode: "90013",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9341,
    longitude: 14.0436
  },
  hasMap: "https://www.google.com/maps/place/Hotel+Paradiso+delle+Madonie/@37.9341,14.0436,17z",
  starRating: {
    "@type": "Rating",
    ratingValue: "3",
    bestRating: "5"
  },
  priceRange: "€€-€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  openingHours: "Mo-Su 00:00-24:00",
  checkinTime: "15:00:00",
  checkoutTime: "10:00:00",
  petsAllowed: true,
  numberOfRooms: 18,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
    { "@type": "LocationFeatureSpecification", name: "TV satellitare", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parcheggio privato gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Colazione continentale inclusa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bar & Lounge", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ristorante cucina siciliana", value: true },
    { "@type": "LocationFeatureSpecification", name: "Reception 24h", value: true },
    { "@type": "LocationFeatureSpecification", name: "Transfer aeroporto", value: true },
    { "@type": "LocationFeatureSpecification", name: "Escursioni guidate Madonie", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terrazza panoramica", value: true },
    { "@type": "LocationFeatureSpecification", name: "Vista Castello Ventimiglia", value: true }
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Camera Doppia Standard",
      description: "Camera confortevole con vista panoramica sulle Madonie",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "70",
        priceCurrency: "EUR",
        unitText: "per notte"
      }
    },
    {
      "@type": "Offer",
      name: "Weekend Romantico alle Madonie",
      description: "2 notti + colazione + cena tipica + bottiglia di vino Siciliano",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "280",
        priceCurrency: "EUR",
        unitText: "per coppia"
      }
    },
    {
      "@type": "Offer",
      name: "Pacchetto Ypsigrock Festival 2025",
      description: "Soggiorno durante il festival internazionale indie-rock",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "150",
        priceCurrency: "EUR",
        unitText: "per notte"
      },
      validFrom: "2025-08-07",
      validThrough: "2025-08-10"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "89",
    bestRating: "5",
    worstRating: "1"
  },
  sameAs: [
    "https://www.facebook.com/hotelparadisomadonie",
    "https://www.instagram.com/hotelparadisomadonie",
    "https://www.tripadvisor.it/hotel-paradiso-madonie"
  ],
  knowsAbout: [
    "Castelbuono",
    "Parco delle Madonie",
    "Castello Ventimiglia",
    "Ypsigrock Festival",
    "Manna di Castelbuono",
    "Pasticceria Fiasconaro",
    "Cefalù",
    "Borghi Siciliani",
    "Trekking Madonie",
    "Piano Battaglia"
  ],
  touristType: [
    "Coppie romantiche",
    "Famiglie con bambini",
    "Appassionati di natura",
    "Food lovers",
    "Sportivi e escursionisti",
    "Amanti della cultura"
  ]
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://paradisodellemadonie.it/#localbusiness",
  name: "Hotel Castelbuono - Hotel Paradiso delle Madonie",
  alternateName: ["Hotel Castelbuono Centro", "Albergo Castelbuono", "Hotel Paradiso Castelbuono"],
  description: "Hotel Castelbuono centro storico. Miglior hotel a Castelbuono per posizione centrale. Vicino Castello Ventimiglia, ideale per Ypsigrock Festival.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  url: "https://paradisodellemadonie.it",
  telephone: "+39 0921 820683",
  priceRange: "€€-€€€",
  keywords: "hotel castelbuono, albergo castelbuono, dove dormire castelbuono, hotel centro castelbuono",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Dante Alighieri, 82",
    addressLocality: "Castelbuono",
    addressRegion: "Sicilia",
    postalCode: "90013",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9341,
    longitude: 14.0436
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 37.9341,
      longitude: 14.0436
    },
    geoRadius: "50000"
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto dista l'Hotel Paradiso delle Madonie da Cefalù?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'Hotel Paradiso delle Madonie dista 23 km da Cefalù, raggiungibile in 20-25 minuti in auto. La posizione strategica permette di combinare mare e montagna nella stessa giornata."
      }
    },
    {
      "@type": "Question",
      name: "Come arrivare da Palermo all'Hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da Palermo si percorrono 90 km in 1h 15min in auto tramite A20/E90. L'aeroporto di Palermo Falcone e Borsellino dista 90 km. Offriamo servizio transfer su richiesta."
      }
    },
    {
      "@type": "Question",
      name: "Cosa vedere a Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Castelbuono potete visitare il Castello dei Ventimiglia (1316), la Cappella Serpotta, le chiese storiche (Matrice Vecchia e Nuova), il Museo Naturalistico Francesco Minà Palumbo, e degustare la famosa Manna e i panettoni Fiasconaro."
      }
    },
    {
      "@type": "Question",
      name: "Quali escursioni fare nel Parco delle Madonie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le escursioni principali includono: Pizzo Carbonara (1.979m, tetto della Sicilia occidentale), Anello degli Agrifogli Giganti, Monte Mufara, Bosco di Pomieri, e le spettacolari Gole di Tiberio. Organizziamo escursioni guidate."
      }
    },
    {
      "@type": "Question",
      name: "Quando si svolge Ypsigrock Festival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ypsigrock Festival si svolge dal 7 al 10 agosto 2025 in Piazza Castello a Castelbuono. È un festival internazionale di musica indie-rock giunto alla 28ª edizione. Prenota in anticipo, le camere si esauriscono rapidamente."
      }
    },
    {
      "@type": "Question",
      name: "L'hotel offre parcheggio gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, offriamo parcheggio privato gratuito per tutti gli ospiti dell'hotel."
      }
    },
    {
      "@type": "Question",
      name: "Quali borghi visitare vicino a Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nelle vicinanze potete visitare: Geraci Siculo (20 km, Borgo più Bello d'Italia), Gangi (25 km, Borgo dei Borghi 2014), Petralia Soprana (18 km, Borgo dei Borghi 2018), Petralia Sottana (15 km), Isnello con Parco Astronomico (12 km), Pollina (18 km) e Cefalù (23 km, patrimonio UNESCO)."
      }
    },
    {
      "@type": "Question",
      name: "Si può sciare vicino a Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, a Piano Battaglia (1.600 m s.l.m.) a circa 30 km dall'hotel, la seconda stazione sciistica della Sicilia con 3 impianti di risalita e 7 piste. Stagione 2025/2026 confermata."
      }
    },
    {
      "@type": "Question",
      name: "Cos'è la Manna di Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Manna è la linfa del frassino che solidifica formando stalattiti, prodotta SOLO a Castelbuono e Pollina al mondo. È un Presidio Slow Food, utilizzata in pasticceria, cosmesi e farmaceutica. Costa circa 200€/kg per i cannoli."
      }
    },
    {
      "@type": "Question",
      name: "L'hotel è adatto alle famiglie con bambini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assolutamente sì! Offriamo camere familiari, menu bambini, e organizziamo escursioni family-friendly come il Bosco di Pomieri e le Gole di Tiberio. Il territorio offre numerose attività didattiche nei musei e parchi avventura."
      }
    },
    {
      "@type": "Question",
      name: "Qual è il miglior hotel a Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'Hotel Paradiso delle Madonie è considerato il miglior hotel a Castelbuono per posizione centrale (Via Dante Alighieri 82), vicinanza al Castello Ventimiglia (2 minuti a piedi), WiFi gratuito, colazione inclusa, e parcheggio privato. Rating 4.6/5 su 89 recensioni."
      }
    },
    {
      "@type": "Question",
      name: "Dove dormire a Castelbuono centro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotel Paradiso delle Madonie si trova nel cuore del centro storico di Castelbuono in Via Dante Alighieri 82. Posizione ideale a 2 minuti a piedi dal Castello Ventimiglia, 3 minuti dalla Pasticceria Fiasconaro e da tutti i servizi del centro."
      }
    },
    {
      "@type": "Question",
      name: "Quanto costa un hotel a Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All'Hotel Paradiso delle Madonie le camere partono da €70/notte con colazione inclusa, WiFi gratis e parcheggio. Offriamo pacchetti weekend da €280 per coppia (2 notti + cena tipica). Durante Ypsigrock Festival i prezzi sono €150/notte."
      }
    },
    {
      "@type": "Question",
      name: "Hotel Castelbuono per Ypsigrock Festival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'Hotel Paradiso delle Madonie è l'hotel ufficiale consigliato per Ypsigrock Festival (7-10 agosto 2025). Siamo a 300 metri da Piazza Castello dove si svolge il festival. Prenotazione anticipata obbligatoria, sold out frequente."
      }
    },
    {
      "@type": "Question",
      name: "Hotel a Castelbuono vicino Castello Ventimiglia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotel Paradiso delle Madonie è l'hotel più vicino al Castello Ventimiglia di Castelbuono: solo 2 minuti a piedi (150 metri). Posizione perfetta per visitare il castello normanno del 1316 e la Cappella Palatina con stucchi Serpotta."
      }
    },
    {
      "@type": "Question",
      name: "Hotel 3 stelle a Castelbuono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotel Paradiso delle Madonie è un hotel 3 stelle a Castelbuono con 18 camere dotate di aria condizionata, TV satellitare, WiFi gratis, bagno privato. Include colazione continentale, parcheggio gratuito, bar lounge e ristorante di cucina siciliana."
      }
    }
  ]
});

export const generateYpsigrokEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "Ypsigrock Festival 2025",
  description: "28ª edizione del festival internazionale di musica indie-rock a Castelbuono. Boutique festival con sold out frequente.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  startDate: "2025-08-07",
  endDate: "2025-08-10",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Piazza Castello",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazza Castello",
      addressLocality: "Castelbuono",
      addressRegion: "PA",
      postalCode: "90013",
      addressCountry: "IT"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9357,
      longitude: 14.0427
    }
  },
  organizer: {
    "@type": "Organization",
    name: "Ypsigrock Festival",
    url: "https://www.ypsigrock.com"
  },
  performer: {
    "@type": "MusicGroup",
    name: "Artisti Internazionali Indie Rock"
  }
});

export const generateDiVinoEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FoodEvent",
  name: "DiVino Festival Castelbuono 2025",
  description: "Festival enogastronomico dedicato all'eccellenza del vino e della cucina siciliana",
  startDate: "2025-06-27",
  endDate: "2025-06-30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Centro Storico Castelbuono",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelbuono",
      addressRegion: "PA",
      postalCode: "90013",
      addressCountry: "IT"
    }
  }
});

export const generateFunghiFestEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FoodEvent",
  name: "Funghi Fest Castelbuono 2025 - XIX Edizione",
  description: "Sagra dei funghi delle Madonie con degustazioni, stand gastronomici, escursioni, concerti e mostre",
  startDate: "2025-10-24",
  endDate: "2025-10-26",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Centro Storico Castelbuono",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelbuono",
      addressRegion: "PA",
      postalCode: "90013",
      addressCountry: "IT"
    }
  }
});

// Schema per attrazioni locali
export const generateCastelloVentimigliaSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Castello dei Ventimiglia",
  description: "Castello medievale del 1316, simbolo di Castelbuono. Ospita il Museo Civico e la famosa Cappella Palatina di Sant'Anna decorata dai fratelli Serpotta con stucchi barocchi.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  url: "https://paradisodellemadonie.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Castello",
    addressLocality: "Castelbuono",
    addressRegion: "PA",
    postalCode: "90013",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9357,
    longitude: 14.0427
  },
  isAccessibleForFree: false,
  publicAccess: true,
  touristType: ["Amanti dell'arte", "Famiglie", "Fotografi", "Appassionati di storia"]
});

export const generateParcoMadonieSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "Park"],
  name: "Parco delle Madonie",
  description: "Parco Naturale Regionale delle Madonie, UNESCO Geopark. Offre trekking, mountain bike, sci a Piano Battaglia, flora e fauna uniche. Include Pizzo Carbonara (1.979m), Agrifogli Giganti secolari, Gole di Tiberio.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  url: "https://paradisodellemadonie.it",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castelbuono",
    addressRegion: "Sicilia",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9341,
    longitude: 14.0436
  },
  isAccessibleForFree: true,
  publicAccess: true,
  touristType: ["Escursionisti", "Famiglie", "Sportivi", "Fotografi naturalisti", "Birdwatcher"]
});

export const generateGoleTiberioSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Gole di Tiberio",
  description: "Canyon naturale lungo il fiume Pollina con pareti alte 400m. Escursione in gommone tra laghetti, flora e fauna. Durata 2h, costo €20 adulti €12 bambini.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  url: "https://paradisodellemadonie.it",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pollina",
    addressRegion: "PA",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9736,
    longitude: 14.1519
  },
  isAccessibleForFree: false,
  publicAccess: true
});

export const generatePianoBattagliaSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["SkiResort", "TouristAttraction"],
  name: "Piano Battaglia",
  description: "Seconda stazione sciistica della Sicilia a 1.600m s.l.m. 3 impianti di risalita, 7 piste per tutti i livelli, 4 km area sciabile. Stagione 2025/2026 confermata.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  url: "https://paradisodellemadonie.it",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Petralia Sottana",
    addressRegion: "PA",
    addressCountry: "IT"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.8528,
    longitude: 14.0244
  },
  publicAccess: true
});

// Schema per prodotti locali
export const generateMannaProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Manna di Castelbuono",
  description: "Linfa del frassino che solidifica formando stalattiti. Prodotto UNICO AL MONDO, solo a Castelbuono e Pollina. Presidio Slow Food. Utilizzata in pasticceria, cosmesi e farmaceutica.",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  brand: {
    "@type": "Brand",
    name: "Manna Castelbuono DOP"
  },
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31"
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://paradisodellemadonie.it/#organization",
  name: "Hotel Paradiso delle Madonie",
  url: "https://paradisodellemadonie.it",
  logo: "https://paradisodellemadonie.it/placeholder-logo.png",
  image: "https://paradisodellemadonie.it/images/fronte.png",
  description: "Hotel a Castelbuono nel Parco delle Madonie, Sicilia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Dante Alighieri, 82",
    addressLocality: "Castelbuono",
    addressRegion: "PA",
    postalCode: "90013",
    addressCountry: "IT"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+39 0921 820683",
    contactType: "customer service",
    email: "info@paradisodellemadonie.it",
    availableLanguage: ["Italian", "English"]
  },
  sameAs: [
    "https://www.facebook.com/hotelparadisomadonie",
    "https://www.instagram.com/hotelparadisomadonie",
    "https://www.tripadvisor.it/hotel-paradiso-madonie"
  ]
});

// Schema per la WebPage principale
export const generateWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://paradisodellemadonie.it/#webpage",
  url: "https://paradisodellemadonie.it",
  name: "Hotel Paradiso delle Madonie | Castelbuono Sicilia",
  description: "Hotel 3 stelle a Castelbuono nel Parco delle Madonie. A 23km da Cefalù, tra mare e montagna. Punto di partenza ideale per scoprire borghi, natura, eventi e gastronomia siciliana.",
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://paradisodellemadonie.it/#website",
    url: "https://paradisodellemadonie.it",
    name: "Hotel Paradiso delle Madonie",
    publisher: {
      "@id": "https://paradisodellemadonie.it/#organization"
    }
  },
  about: {
    "@id": "https://paradisodellemadonie.it/#hotel"
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://paradisodellemadonie.it/#prenota",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    result: {
      "@type": "LodgingReservation",
      name: "Prenotazione Hotel"
    }
  }
});

// Schema aggregato completo per la homepage
export const generateCompleteHomeSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateHotelSchema(),
    generateLocalBusinessSchema(),
    generateWebPageSchema(),
    generateFAQSchema(),
    generateCastelloVentimigliaSchema(),
    generateParcoMadonieSchema(),
    generateGoleTiberioSchema(),
    generatePianoBattagliaSchema(),
    generateYpsigrokEventSchema(),
    generateDiVinoEventSchema(),
    generateFunghiFestEventSchema(),
    generateMannaProductSchema()
  ]
});
