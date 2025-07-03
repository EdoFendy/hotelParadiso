"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-amber-600" />
              <span>+39 0921 123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-amber-600" />
              <span>info@hotelparadisomadonie.it</span>
            </div>
          </div>
          <div className="text-amber-600 font-medium">Via delle Madonie, 1 - Castelbuono (PA)</div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-amber-700">
            Hotel Paradiso
            <span className="block text-sm font-normal text-gray-600">delle Madonie</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="#camere" className="text-gray-700 hover:text-amber-600 transition-colors">
              Camere
            </Link>
            <Link href="#servizi" className="text-gray-700 hover:text-amber-600 transition-colors">
              Servizi
            </Link>
            <Link href="#ristorante" className="text-gray-700 hover:text-amber-600 transition-colors">
              Ristorante
            </Link>
            <Link href="#territorio" className="text-gray-700 hover:text-amber-600 transition-colors">
              Territorio
            </Link>
            <Link href="#contatti" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contatti
            </Link>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Prenota Ora</Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="#camere" className="text-gray-700 hover:text-amber-600 transition-colors">
                Camere
              </Link>
              <Link href="#servizi" className="text-gray-700 hover:text-amber-600 transition-colors">
                Servizi
              </Link>
              <Link href="#ristorante" className="text-gray-700 hover:text-amber-600 transition-colors">
                Ristorante
              </Link>
              <Link href="#territorio" className="text-gray-700 hover:text-amber-600 transition-colors">
                Territorio
              </Link>
              <Link href="#contatti" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contatti
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Prenota Ora</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
