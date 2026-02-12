"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "it" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  it: {
    // Navigation
    "nav.home": "Home",
    "nav.hotel": "Hotel",
    "nav.rooms": "Camere",
    "nav.castelbuono": "Castelbuono",
    "nav.info": "Info",

    // Hero Section
    "hero.title": "HOTEL PARADISO",
    "hero.subtitle": "delle Madonie",
    "hero.tagline": "La tua miglior scelta!",
    "hero.description":
      "Nel cuore del Parco delle Madonie, a Castelbuono, ti accogliamo in un'oasi di comfort e autenticità per farti vivere la vera essenza della Sicilia",
    "hero.discover": "Scopri le Camere",
    "hero.contact": "Contattaci Ora",
    "hero.location": "Castelbuono, Parco delle Madonie",
    "hero.scroll": "SCORRI PER ESPLORARE",

    // About Section
    "about.title": "Il nostro Hotel",
    "about.description1":
      "Parte del Parco Regionale delle Madonie, l'Hotel Paradiso Delle Madonie si trova nel cuore di Castelbuono e offre camere arredate in stile classico con minibar e WiFi gratuito.",
    "about.description2":
      "Situato in prossimità della campagna che circonda Castelbuono, il Paradiso Delle Madonie vanta sistemazioni climatizzate e dotate di mobili in legno massiccio e bagno completamente attrezzato con doccia.",
    "about.description3":
      "A pochi passi dalla struttura vi attendono i migliori ristoranti di Castelbuono. La colazione viene servita ogni giorno e il bar in loco propone bevande calde e fredde.",
    "about.description4":
      "L'Hotel Paradiso Delle Madonie è ubicato in prossimità di numerose attrazioni culturali e antichi monumenti, tra cui il Museo Naturalistico Minà Palumbo e la città arabo-normanna di Cefalù, e a 10 minuti a piedi dal Castello dei Ventimiglia.",
    "about.services": "I nostri servizi",
    "about.wifi": "WiFi Gratuito",
    "about.parking": "Parcheggio Vicino",
    "about.bar": "Bar",
    "about.tv": "Smart TV",
    "about.bathroom": "Bagno Privato",
    "about.center": "Centro Storico",

    // Rooms Section
    "rooms.title": "Le nostre camere",
    "rooms.description1":
      "L'Hotel Paradiso delle Madonie offre camere eleganti e confortevoli, dotate di arredi in stile classico e rustico. Le camere sono disponibili in diverse categorie, tra cui singole, doppie, triple e quadruple, tutte con bagno privato, TV satellitare, aria condizionata e connessione Wi-Fi gratuita.",
    "rooms.description2":
      "Alcune camere offrono anche una vista panoramica sulle montagne circostanti o sul centro storico di Castelbuono. Gli ospiti possono inoltre usufruire di servizi extra come il servizio in camera, la colazione continentale a buffet e il parcheggio privato gratuito.",
    "rooms.description3":
      "In generale, le camere dell'Hotel Paradiso delle Madonie sono ben arredate e offrono una piacevole esperienza di soggiorno durante la visita a Castelbuono e alle Madonie.",
    "rooms.wifi": "WiFi Gratuito",
    "rooms.tv": "Smart TV",
    "rooms.ac": "Aria Condizionata",
    "rooms.bathroom": "Bagno Privato",
    "rooms.book": "Contattaci per Prenotare",

    // Castelbuono Section
    "castelbuono.title": "Castelbuono",
    "castelbuono.subtitle": "un borgo autentico della Sicilia",
    "castelbuono.description":
      "Castelbuono è un pittoresco comune situato nella provincia di Palermo, in Sicilia, che offre un'esperienza autentica della cultura siciliana, dalla gastronomia alla storia e all'architettura.",
    "castelbuono.history": "Tra storia e cultura",
    "castelbuono.history.desc":
      "Il simbolo di Castelbuono è il castello dei Ventimiglia, una fortezza medievale che ospita il museo civico con opere d'arte di grande valore.",
    "castelbuono.manna": "La manna di Castelbuono",
    "castelbuono.manna.desc":
      "A Castelbuono si può gustare la cucina madonita e la famosa manna, un nettare dolce ottenuto dalla corteccia del frassino.",
    "castelbuono.park": "Parco delle Madonie",
    "castelbuono.park.desc":
      "Il Parco delle Madonie offre sentieri escursionistici di diversa difficoltà e permette di ammirare la flora e la fauna locali.",
    "castelbuono.sweets": "Dolci tipici",
    "castelbuono.sweets.desc":
      "Visita il Museo del Gusto e la pasticceria Fiasconaro, simbolo della tradizione dolciaria siciliana con dolci artigianali.",

    // Location Section
    "location.title": "Posizione Strategica",
    "location.description":
      "Nel cuore delle Madonie, a Castelbuono, in una posizione ideale per esplorare le bellezze della Sicilia",
    "location.distances": "Distanze principali",
    "location.castle": "Castello dei Ventimiglia",
    "location.cefalu": "Cefalù",
    "location.palermo": "Palermo",
    "location.airport": "Aeroporto Palermo",
    "location.walk": "5 min a piedi",
    "location.drive1": "20 km - 25 min",
    "location.drive2": "70 km - 1h",
    "location.drive3": "85 km - 1h 15min",
    "location.howto": "Come raggiungerci",
    "location.car": "In Auto",
    "location.car.desc": "Da Palermo: A19 direzione Messina, prendere uscita Pollina Castelbuono, poi la SS286 fino a Castelbuono",
    "location.public": "Trasporti Pubblici",
    "location.public.desc": "Autobus da Palermo (Stazione Centrale) con fermata a Castelbuono centro",

    // Gallery Section
    "gallery.title": "Galleria Fotografica",
    "gallery.description":
      "Scopri attraverso le immagini gli spazi accoglienti dell'Hotel Paradiso delle Madonie e la bellezza di Castelbuono",
    "gallery.all": "Tutti",
    "gallery.exterior": "Esterno",
    "gallery.interior": "Interni",
    "gallery.rooms": "Camere",
    "gallery.of": "di",

    // Contact Section
    "contact.title": "Info & Contatti",
    "contact.description":
      "Per effettuare la tua prenotazione, non esitare a contattarci. Saremo felici di assisterti e fornirti tutte le informazioni di cui hai bisogno.",
    "contact.direct": "Contatti Diretti",
    "contact.phone": "Telefono",
    "contact.mobile": "Cellulare",
    "contact.email": "Email",
    "contact.address": "Indirizzo",
    "contact.hours": "Orari di Contatto",
    "contact.hours.desc":
      "Il nostro team è disponibile per rispondere a tutte le tue domande e aiutarti a organizzare il tuo soggiorno nel migliore dei modi.",
    "contact.available": "Disponibili tutti i giorni",
    "contact.book": "Prenota il tuo soggiorno",
    "contact.book.desc": "Scopri l'autentica bellezza della Sicilia nel cuore delle Madonie",
    "contact.call": "Chiama Ora: 0921 820683",
    "contact.send": "Invia Email",
    "contact.waiting": "Non vediamo l'ora di sentirti!",
    "contact.whatsapp": "Scrivici su WhatsApp",
    "contact.checkin": "Check-in: dalle 15:00",
    "contact.checkout": "Check-out: entro le 10:00",

    // Booking Form
    "booking.title": "Prenota il tuo Soggiorno",
    "booking.subtitle": "Prenota direttamente con noi con sconto del 10% sul tariffario ufficiale",
    "booking.checkin": "Check-in",
    "booking.checkout": "Check-out",
    "booking.guests": "Ospiti",
    "booking.adults": "Adulti",
    "booking.children": "Bambini",
    "booking.roomType": "Tipo Camera",
    "booking.single": "Camera Singola",
    "booking.double": "Camera Doppia",
    "booking.triple": "Camera Tripla",
    "booking.quad": "Camera Quadrupla",
    "booking.name": "Nome e Cognome",
    "booking.email": "Email",
    "booking.phone": "Telefono",
    "booking.notes": "Richieste Speciali",
    "booking.notesPlaceholder": "Orario di arrivo, allergie, occasioni speciali...",
    "booking.sendWhatsapp": "Prenota via WhatsApp",
    "booking.sendEmail": "Prenota via Email",
    "booking.bestPrice": "Tariffa Diretta -10%",
    "booking.bestPriceDesc": "Prenotando direttamente hai il 10% di sconto sul tariffario ufficiale",
    "booking.freeCancel": "Cancellazione Gratuita",
    "booking.freeCancelDesc": "Cancella gratuitamente fino a 48h prima dell'arrivo",
    "booking.directBenefits": "Vantaggi della prenotazione diretta",
    "booking.benefit1": "Sconto diretto del 10% sul tariffario ufficiale",
    "booking.benefit2": "Cancellazione flessibile",
    "booking.benefit3": "Comunicazione diretta con l'hotel",
    "booking.benefit4": "Servizio personalizzato",

    // Room Types
    "rooms.single.name": "Camera Singola",
    "rooms.single.desc": "Camera accogliente perfetta per viaggiatori singoli, con tutti i comfort essenziali.",
    "rooms.single.price": "da €72 a €90/notte (-10%)",
    "rooms.double.name": "Camera Doppia",
    "rooms.double.desc": "Camera spaziosa con letto matrimoniale, ideale per coppie. Vista sulle Madonie o sul centro storico.",
    "rooms.double.price": "da €90 a €108/notte (-10%)",
    "rooms.triple.name": "Camera Tripla",
    "rooms.triple.desc": "Comoda camera per famiglie o piccoli gruppi, con letto matrimoniale e singolo.",
    "rooms.triple.price": "da €108 a €121,50/notte (-10%)",
    "rooms.quad.name": "Camera Quadrupla",
    "rooms.quad.desc": "La soluzione più spaziosa, perfetta per famiglie. Letto matrimoniale e due singoli.",
    "rooms.quad.price": "da €126 a €144/notte (-10%)",
    "rooms.checkAvailability": "Verifica Disponibilità",
    "rooms.allInclude": "Tutte le camere includono",
    "rooms.breakfast": "Colazione inclusa",
    "rooms.minibar": "Minibar",

    // Reviews
    "reviews.title": "Cosa dicono i nostri ospiti",
    "reviews.subtitle": "Scopri le esperienze di chi ha già soggiornato da noi",
    "reviews.readAll": "Leggi tutte le recensioni",
    "reviews.onBooking": "su Google Maps",
    "reviews.onGoogle": "su Google",
    "reviews.rating": "Valutazione media",
    "reviews.count": "Fonte: Google Maps",

    // FAQ
    "faq.title": "Domande Frequenti",
    "faq.subtitle": "Tutto quello che devi sapere per il tuo soggiorno",
    "faq.q1": "Quali sono gli orari di check-in e check-out?",
    "faq.a1": "Il check-in è dalle 15:00 alle 22:00. Il check-out è entro le 10:00. Per orari diversi, contattateci e faremo il possibile per accomodarvi.",
    "faq.q2": "Il parcheggio è incluso?",
    "faq.a2": "Sì, offriamo parcheggio gratuito nelle vicinanze dell'hotel. Alla prenotazione vi forniremo indicazioni precise.",
    "faq.q3": "Accettate animali domestici?",
    "faq.a3": "Sì, i piccoli animali domestici sono benvenuti previo accordo. Vi preghiamo di comunicarcelo al momento della prenotazione.",
    "faq.q4": "La colazione è inclusa?",
    "faq.a4": "Sì, la colazione continentale a buffet è inclusa in tutte le tariffe. Viene servita ogni mattina dalle 7:30 alle 10:00.",
    "faq.q5": "Come posso raggiungere l'hotel?",
    "faq.a5": "Da Palermo: autostrada A19 direzione Messina, uscita Pollina-Castelbuono, poi SS286. Da Cefalù: circa 25 minuti in auto. Autobus da Palermo Stazione Centrale.",
    "faq.q6": "Qual è la vostra politica di cancellazione?",
    "faq.a6": "Cancellazione gratuita fino a 2 giorni prima dell'arrivo. Oltre tale termine viene addebitata la prima notte; in caso di no-show viene addebitato l'intero soggiorno.",
    "faq.q7": "Avete il WiFi gratuito?",
    "faq.a7": "Sì, il WiFi è gratuito e disponibile in tutte le camere e nelle aree comuni dell'hotel.",
    "faq.q8": "Quanto dista l'hotel dal mare?",
    "faq.a8": "Castelbuono si trova nell'entroterra siciliano, a circa 23 km da Cefalù e dalle sue spiagge. L'hotel è la base perfetta per esplorare sia la montagna che il mare.",

    // Sticky Bar
    "sticky.cta": "Verifica Disponibilità",
    "sticky.bestPrice": "Tariffa diretta -10%",

    // Footer
    "footer.description":
      "Nel cuore del Parco delle Madonie, a Castelbuono, ti accogliamo per farti scoprire l'autentica bellezza della Sicilia tra storia, natura e tradizioni.",
    "footer.links": "Link Rapidi",
    "footer.contact": "Contatti",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Termini e Condizioni",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.hotel": "Hotel",
    "nav.rooms": "Rooms",
    "nav.castelbuono": "Castelbuono",
    "nav.info": "Info",

    // Hero Section
    "hero.title": "HOTEL PARADISO",
    "hero.subtitle": "delle Madonie",
    "hero.tagline": "Your best choice!",
    "hero.description":
      "In the heart of Madonie Park, in Castelbuono, we welcome you to an oasis of comfort and authenticity to experience the true essence of Sicily",
    "hero.discover": "Discover Rooms",
    "hero.contact": "Contact Us Now",
    "hero.location": "Castelbuono, Madonie Park",
    "hero.scroll": "SCROLL TO EXPLORE",

    // About Section
    "about.title": "Our Hotel",
    "about.description1":
      "Part of the Madonie Regional Park, Hotel Paradiso Delle Madonie is located in the heart of Castelbuono and offers classically furnished rooms with minibar and free WiFi.",
    "about.description2":
      "Located near the countryside surrounding Castelbuono, Paradiso Delle Madonie features air-conditioned accommodations with solid wood furniture and fully equipped bathroom with shower.",
    "about.description3":
      "Just steps from the property, the best restaurants in Castelbuono await you. Breakfast is served daily and the on-site bar offers hot and cold drinks.",
    "about.description4":
      "Hotel Paradiso Delle Madonie is located near numerous cultural attractions and ancient monuments, including the Minà Palumbo Natural History Museum and the Arab-Norman city of Cefalù, and a 10-minute walk from Ventimiglia Castle.",
    "about.services": "Our Services",
    "about.wifi": "Free WiFi",
    "about.parking": "Near Parking",
    "about.bar": "Bar",
    "about.tv": "Smart TV",
    "about.bathroom": "Private Bathroom",
    "about.center": "Historic Center",

    // Rooms Section
    "rooms.title": "Our Rooms",
    "rooms.description1":
      "Hotel Paradiso delle Madonie offers elegant and comfortable rooms, furnished in classic and rustic style. Rooms are available in different categories, including single, double, triple and quadruple, all with private bathroom, satellite TV, air conditioning and free Wi-Fi connection.",
    "rooms.description2":
      "Some rooms also offer panoramic views of the surrounding mountains or the historic center of Castelbuono. Guests can also enjoy extra services such as room service, continental buffet breakfast and free private parking.",
    "rooms.description3":
      "Overall, the rooms at Hotel Paradiso delle Madonie are well furnished and offer a pleasant stay experience during your visit to Castelbuono and the Madonie.",
    "rooms.wifi": "Free WiFi",
    "rooms.tv": "Smart TV",
    "rooms.ac": "Air Conditioning",
    "rooms.bathroom": "Private Bathroom",
    "rooms.book": "Contact Us to Book",

    // Castelbuono Section
    "castelbuono.title": "Castelbuono",
    "castelbuono.subtitle": "an authentic Sicilian village",
    "castelbuono.description":
      "Castelbuono is a picturesque town located in the province of Palermo, Sicily, offering an authentic experience of Sicilian culture, from gastronomy to history and architecture.",
    "castelbuono.history": "Between history and culture",
    "castelbuono.history.desc":
      "The symbol of Castelbuono is the Ventimiglia castle, a medieval fortress that houses the civic museum with valuable works of art.",
    "castelbuono.manna": "The manna of Castelbuono",
    "castelbuono.manna.desc":
      "In Castelbuono you can taste the Madonie cuisine and the famous manna, a sweet nectar obtained from the bark of the ash tree.",
    "castelbuono.park": "Madonie Park",
    "castelbuono.park.desc":
      "The Madonie Park offers hiking trails of varying difficulty and allows you to admire the local flora and fauna.",
    "castelbuono.sweets": "Traditional sweets",
    "castelbuono.sweets.desc":
      "Visit the Taste Museum and the Fiasconaro pastry shop, symbol of Sicilian confectionery tradition with artisanal sweets.",

    // Location Section
    "location.title": "Strategic Position",
    "location.description":
      "In the heart of the Madonie, in Castelbuono, in an ideal position to explore the beauties of Sicily",
    "location.distances": "Main distances",
    "location.castle": "Ventimiglia Castle",
    "location.cefalu": "Cefalù",
    "location.palermo": "Palermo",
    "location.airport": "Palermo Airport",
    "location.walk": "5 min walk",
    "location.drive1": "20 km - 25 min",
    "location.drive2": "70 km - 1h",
    "location.drive3": "85 km - 1h 15min",
    "location.howto": "How to reach us",
    "location.car": "By Car",
    "location.car.desc": "From Palermo: A19 towards Messina, then Pollina Castelbuono exit, then SS286 towards Castelbuono",
    "location.public": "Public Transport",
    "location.public.desc": "Bus from Palermo (Central Station) with stop in Castelbuono center",

    // Gallery Section
    "gallery.title": "Photo Gallery",
    "gallery.description":
      "Discover through images the welcoming spaces of Hotel Paradiso delle Madonie and the beauty of Castelbuono",
    "gallery.all": "All",
    "gallery.exterior": "Exterior",
    "gallery.interior": "Interior",
    "gallery.rooms": "Rooms",
    "gallery.of": "of",

    // Contact Section
    "contact.title": "Info & Contacts",
    "contact.description":
      "To make your reservation, do not hesitate to contact us. We will be happy to assist you and provide you with all the information you need.",
    "contact.direct": "Direct Contacts",
    "contact.phone": "Phone",
    "contact.mobile": "Mobile",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Contact Hours",
    "contact.hours.desc":
      "Our team is available to answer all your questions and help you organize your stay in the best way.",
    "contact.available": "Available every day",
    "contact.book": "Book your stay",
    "contact.book.desc": "Discover the authentic beauty of Sicily in the heart of the Madonie",
    "contact.call": "Call Now: 0921 820683",
    "contact.send": "Send Email",
    "contact.waiting": "We look forward to hearing from you!",
    "contact.whatsapp": "Write us on WhatsApp",
    "contact.checkin": "Check-in: from 3:00 PM",
    "contact.checkout": "Check-out: by 10:00 AM",

    // Booking Form
    "booking.title": "Book your Stay",
    "booking.subtitle": "Book directly with a 10% discount on the official tariff",
    "booking.checkin": "Check-in",
    "booking.checkout": "Check-out",
    "booking.guests": "Guests",
    "booking.adults": "Adults",
    "booking.children": "Children",
    "booking.roomType": "Room Type",
    "booking.single": "Single Room",
    "booking.double": "Double Room",
    "booking.triple": "Triple Room",
    "booking.quad": "Quadruple Room",
    "booking.name": "Full Name",
    "booking.email": "Email",
    "booking.phone": "Phone",
    "booking.notes": "Special Requests",
    "booking.notesPlaceholder": "Arrival time, allergies, special occasions...",
    "booking.sendWhatsapp": "Book via WhatsApp",
    "booking.sendEmail": "Book via Email",
    "booking.bestPrice": "Direct Rate -10%",
    "booking.bestPriceDesc": "Book direct and get 10% off the official tariff",
    "booking.freeCancel": "Free Cancellation",
    "booking.freeCancelDesc": "Cancel for free up to 48h before arrival",
    "booking.directBenefits": "Benefits of booking directly",
    "booking.benefit1": "Direct 10% discount on official tariff",
    "booking.benefit2": "Flexible cancellation",
    "booking.benefit3": "Direct communication with the hotel",
    "booking.benefit4": "Personalized service",

    // Room Types
    "rooms.single.name": "Single Room",
    "rooms.single.desc": "Cozy room perfect for solo travelers, with all essential comforts.",
    "rooms.single.price": "from €72 to €90/night (-10%)",
    "rooms.double.name": "Double Room",
    "rooms.double.desc": "Spacious room with double bed, ideal for couples. Views of the Madonie or the historic center.",
    "rooms.double.price": "from €90 to €108/night (-10%)",
    "rooms.triple.name": "Triple Room",
    "rooms.triple.desc": "Comfortable room for families or small groups, with double and single bed.",
    "rooms.triple.price": "from €108 to €121.50/night (-10%)",
    "rooms.quad.name": "Quadruple Room",
    "rooms.quad.desc": "The most spacious option, perfect for families. Double bed and two singles.",
    "rooms.quad.price": "from €126 to €144/night (-10%)",
    "rooms.checkAvailability": "Check Availability",
    "rooms.allInclude": "All rooms include",
    "rooms.breakfast": "Breakfast included",
    "rooms.minibar": "Minibar",

    // Reviews
    "reviews.title": "What our guests say",
    "reviews.subtitle": "Discover the experiences of those who have already stayed with us",
    "reviews.readAll": "Read all reviews",
    "reviews.onBooking": "on Google Maps",
    "reviews.onGoogle": "on Google",
    "reviews.rating": "Average rating",
    "reviews.count": "Source: Google Maps",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know for your stay",
    "faq.q1": "What are the check-in and check-out times?",
    "faq.a1": "Check-in is from 3:00 PM to 10:00 PM. Check-out is by 10:00 AM. For different times, contact us and we'll do our best to accommodate you.",
    "faq.q2": "Is parking included?",
    "faq.a2": "Yes, we offer free parking near the hotel. We'll provide directions upon booking.",
    "faq.q3": "Do you accept pets?",
    "faq.a3": "Yes, small pets are welcome by prior arrangement. Please let us know when booking.",
    "faq.q4": "Is breakfast included?",
    "faq.a4": "Yes, continental buffet breakfast is included in all rates. Served daily from 7:30 AM to 10:00 AM.",
    "faq.q5": "How can I reach the hotel?",
    "faq.a5": "From Palermo: A19 motorway towards Messina, Pollina-Castelbuono exit, then SS286. From Cefalù: about 25 minutes by car. Bus from Palermo Central Station.",
    "faq.q6": "What is your cancellation policy?",
    "faq.a6": "Free cancellation up to 2 days before arrival. After that, the first night is charged; in case of no-show, the full stay is charged.",
    "faq.q7": "Is WiFi free?",
    "faq.a7": "Yes, WiFi is free and available in all rooms and common areas of the hotel.",
    "faq.q8": "How far is the hotel from the sea?",
    "faq.a8": "Castelbuono is in the Sicilian hinterland, about 23 km from Cefalù and its beaches. The hotel is the perfect base to explore both mountains and sea.",

    // Sticky Bar
    "sticky.cta": "Check Availability",
    "sticky.bestPrice": "Direct rate -10%",

    // Footer
    "footer.description":
      "In the heart of the Madonie Park, in Castelbuono, we welcome you to discover the authentic beauty of Sicily between history, nature and traditions.",
    "footer.links": "Quick Links",
    "footer.contact": "Contacts",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms and Conditions",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("it")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "it" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
