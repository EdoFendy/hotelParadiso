import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Car, Coffee, Tv, Bath, Mountain } from "lucide-react"
import Image from "next/image"

const rooms = [
  {
    name: "Suite Panoramica Madonie",
    description:
      "La nostra suite più esclusiva con vista mozzafiato sulle Madonie. 60 mq di puro lusso con terrazza privata.",
    price: "€280",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Vista Madonie", "Terrazza Privata", "Jacuzzi", "60 mq"],
  },
  {
    name: "Camera Deluxe Castelbuono",
    description: "Elegante camera con vista sul borgo medievale di Castelbuono. Arredata con mobili d'epoca siciliani.",
    price: "€180",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Vista Borgo", "Balcone", "Mobili d'Epoca", "35 mq"],
  },
  {
    name: "Camera Superior Nebrodi",
    description: "Confortevole camera con vista sui monti Nebrodi. Perfetta per una fuga romantica.",
    price: "€140",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Vista Nebrodi", "Comfort Moderni", "Bagno Marmo", "28 mq"],
  },
]

const amenities = [
  { icon: Wifi, name: "WiFi Gratuito" },
  { icon: Car, name: "Parcheggio" },
  { icon: Coffee, name: "Minibar" },
  { icon: Tv, name: "Smart TV" },
  { icon: Bath, name: "Bagno Lusso" },
  { icon: Mountain, name: "Vista Panoramica" },
]

export default function Rooms() {
  return (
    <section id="camere" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Le Nostre Camere</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ogni camera dell'Hotel Paradiso delle Madonie è un rifugio di eleganza e comfort, progettata per offrire
            un'esperienza indimenticabile nel cuore della Sicilia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={`${room.name} - Hotel Paradiso delle Madonie Castelbuono`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
                  da {room.price}/notte
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-amber-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Prenota Ora</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Servizi in Camera</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <amenity.icon className="h-8 w-8 text-amber-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
