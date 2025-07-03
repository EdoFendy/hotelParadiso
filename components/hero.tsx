"use client"

import { Button } from "@/components/ui/button"
import { Star, MapPin, Award } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Vista panoramica delle Madonie da Hotel Paradiso"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hotel Paradiso
          <span className="block text-3xl md:text-4xl font-light text-amber-200">delle Madonie</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Nel cuore delle Madonie siciliane, a Castelbuono, vi accogliamo in un'oasi di lusso e tranquillità. Scoprite
          l'autentica bellezza della Sicilia in un ambiente raffinato e accogliente.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="text-lg">Castelbuono, Madonie</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-amber-400" />
            <span className="text-lg">Hotel 5 Stelle</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Prenota il Tuo Soggiorno
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
          >
            Scopri le Camere
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
