import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Wine, Clock, Award } from "lucide-react"
import Image from "next/image"

export default function Restaurant() {
  return (
    <section id="ristorante" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ristorante Gourmet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Il nostro ristorante celebra i sapori autentici della Sicilia e delle Madonie, reinterpretati con creatività
            dal nostro Chef stellato in un ambiente raffinato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ristorante Hotel Paradiso delle Madonie - Cucina Gourmet Siciliana"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-amber-600" />
              <span className="text-amber-600 font-semibold">Stella Michelin 2024</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Cucina Siciliana d'Eccellenza</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Il nostro Chef Giuseppe Madonia, originario delle Madonie, ha creato un menu che racconta la storia
              culinaria di questa terra attraverso ingredienti locali di prima qualità: funghi porcini delle Madonie,
              formaggi di Castelbuono, olio extravergine delle colline circostanti.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <ChefHat className="h-5 w-5 text-amber-600" />
                <span className="text-gray-700">Chef Stellato</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wine className="h-5 w-5 text-amber-600" />
                <span className="text-gray-700">Cantina 500+ Etichette</span>
              </div>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Prenota un Tavolo</Button>
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Menu Degustazione Madonie"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Menu Degustazione Madonie</h4>
              <p className="text-gray-600 mb-4">
                7 portate che raccontano il territorio delle Madonie attraverso sapori autentici e presentazioni
                innovative.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">€85</span>
                <span className="text-sm text-gray-500">a persona</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Menu Siciliano Tradizionale"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tradizione Siciliana</h4>
              <p className="text-gray-600 mb-4">
                I grandi classici della cucina siciliana rivisitati con tecnica moderna e ingredienti di eccellenza.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">€65</span>
                <span className="text-sm text-gray-500">a persona</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Menu Vegetariano Gourmet"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Vegetariano Gourmet</h4>
              <p className="text-gray-600 mb-4">
                Un viaggio tra verdure, erbe spontanee e formaggi locali per un'esperienza vegetariana di alto livello.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">€55</span>
                <span className="text-sm text-gray-500">a persona</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Restaurant Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Orari</h4>
              <p className="text-gray-600">
                Cena: 19:30 - 22:30
                <br />
                Colazione: 07:00 - 10:30
                <br />
                Pranzo: 12:30 - 15:00
              </p>
            </div>
            <div>
              <Wine className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Cantina</h4>
              <p className="text-gray-600">
                Oltre 500 etichette selezionate
                <br />
                Vini siciliani e internazionali
                <br />
                Sommelier certificato
              </p>
            </div>
            <div>
              <ChefHat className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Chef</h4>
              <p className="text-gray-600">
                Giuseppe Madonia
                <br />
                Stella Michelin 2024
                <br />
                Cucina Siciliana Contemporanea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
