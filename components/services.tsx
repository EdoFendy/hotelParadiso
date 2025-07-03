import { Card, CardContent } from "@/components/ui/card"
import { Waves, Dumbbell, Car, Utensils, Wifi, Users } from "lucide-react"

const services = [
  {
    icon: Waves,
    title: "Centro Benessere & Spa",
    description:
      "Rilassatevi nella nostra spa con sauna, bagno turco, piscina riscaldata e trattamenti benessere con prodotti naturali siciliani.",
  },
  {
    icon: Dumbbell,
    title: "Palestra & Fitness",
    description:
      "Centro fitness completamente attrezzato con vista panoramica sulle Madonie. Aperto 24h per i nostri ospiti.",
  },
  {
    icon: Car,
    title: "Parcheggio Privato",
    description:
      "Parcheggio custodito gratuito per tutti gli ospiti dell'hotel. Servizio di parcheggiatore disponibile su richiesta.",
  },
  {
    icon: Utensils,
    title: "Servizio in Camera",
    description:
      "Room service 24h con specialità della cucina siciliana e internazionale. Menu degustazione disponibile.",
  },
  {
    icon: Wifi,
    title: "WiFi Alta Velocità",
    description: "Connessione internet gratuita ad alta velocità in tutte le aree dell'hotel e nelle camere.",
  },
  {
    icon: Users,
    title: "Concierge Service",
    description:
      "Il nostro team di concierge è a vostra disposizione per organizzare escursioni, prenotazioni e esperienze uniche.",
  },
]

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All'Hotel Paradiso delle Madonie ogni dettaglio è pensato per il vostro comfort. Scoprite i nostri servizi
            esclusivi per un soggiorno indimenticabile a Castelbuono.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Services */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Servizi Esclusivi</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">24/7</div>
                <p className="text-gray-700">Reception</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Free</div>
                <p className="text-gray-700">Transfer Aeroporto*</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Pet</div>
                <p className="text-gray-700">Friendly</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Eco</div>
                <p className="text-gray-700">Sostenibile</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">*Su prenotazioni minimo 3 notti</p>
          </div>
        </div>
      </div>
    </section>
  )
}
