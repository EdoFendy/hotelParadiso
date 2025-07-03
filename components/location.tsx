import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mountain, TreePine, Castle, Utensils } from "lucide-react"
import Image from "next/image"

const attractions = [
  {
    icon: Castle,
    name: "Castello di Castelbuono",
    distance: "5 min a piedi",
    description: "Castello medievale del XIV secolo, simbolo del borgo",
  },
  {
    icon: Mountain,
    name: "Parco delle Madonie",
    distance: "10 min in auto",
    description: "Parco naturale con sentieri e panorami mozzafiato",
  },
  {
    icon: TreePine,
    name: "Piano Battaglia",
    distance: "30 min in auto",
    description: "Stazione sciistica e area naturalistica",
  },
  {
    icon: Utensils,
    name: "Sagra del Fungo",
    distance: "Centro storico",
    description: "Famosa sagra autunnale (Ottobre-Novembre)",
  },
]

export default function Location() {
  return (
    <section id="territorio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Castelbuono e le Madonie</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scoprite la magia di Castelbuono, borgo medievale nel cuore delle Madonie siciliane. Un territorio ricco di
            storia, natura incontaminata e tradizioni culinarie uniche.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-amber-600" />
              <span className="text-amber-600 font-semibold">Castelbuono, Sicilia</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nel Cuore delle Madonie</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Castelbuono è un gioiello medievale incastonato tra le montagne delle Madonie, a soli 70 km da Palermo. Il
              borgo è famoso per il suo castello normanno, le tradizioni gastronomiche legate ai funghi porcini e la
              produzione di formaggi d'eccellenza come la Tuma.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Le Madonie offrono un paesaggio unico dove montagne, boschi secolari e borghi storici si fondono in
              un'armonia perfetta. Un territorio ideale per escursioni, trekking e per scoprire l'autentica Sicilia.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Scopri le Escursioni</Button>
          </div>
          <div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Panorama di Castelbuono e delle Madonie dalla terrazza dell'Hotel Paradiso"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Attractions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {attractions.map((attraction, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <attraction.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{attraction.name}</h4>
                <p className="text-amber-600 font-semibold text-sm mb-2">{attraction.distance}</p>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Posizione Strategica</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Palermo</span>
                  <span className="font-semibold text-amber-600">70 km - 1h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Cefalù</span>
                  <span className="font-semibold text-amber-600">35 km - 45min</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Aeroporto Palermo</span>
                  <span className="font-semibold text-amber-600">85 km - 1h 15min</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Taormina</span>
                  <span className="font-semibold text-amber-600">180 km - 2h 30min</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-gray-600">Mappa Interattiva</p>
                  <p className="text-sm text-gray-500">Castelbuono, Madonie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
