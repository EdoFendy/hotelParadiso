"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Booking() {
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    guests: "",
    room: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking request:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Prenota il Tuo Soggiorno</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contattaci per prenotare la tua esperienza indimenticabile all'Hotel Paradiso delle Madonie. Il nostro team
            è a tua disposizione per ogni esigenza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Richiesta Prenotazione</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin" className="text-gray-700">
                      Check-in
                    </Label>
                    <Input
                      id="checkin"
                      type="date"
                      value={formData.checkin}
                      onChange={(e) => handleInputChange("checkin", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkout" className="text-gray-700">
                      Check-out
                    </Label>
                    <Input
                      id="checkout"
                      type="date"
                      value={formData.checkout}
                      onChange={(e) => handleInputChange("checkout", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guests" className="text-gray-700">
                      Ospiti
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleziona ospiti" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Ospite</SelectItem>
                        <SelectItem value="2">2 Ospiti</SelectItem>
                        <SelectItem value="3">3 Ospiti</SelectItem>
                        <SelectItem value="4">4 Ospiti</SelectItem>
                        <SelectItem value="5+">5+ Ospiti</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="room" className="text-gray-700">
                      Tipo Camera
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("room", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleziona camera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="superior">Camera Superior</SelectItem>
                        <SelectItem value="deluxe">Camera Deluxe</SelectItem>
                        <SelectItem value="suite">Suite Panoramica</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1"
                    placeholder="Il tuo nome completo"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      placeholder="la-tua-email@esempio.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      Telefono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      placeholder="+39 123 456 7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Richieste Speciali
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1"
                    placeholder="Eventuali richieste speciali o note..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                  Invia Richiesta di Prenotazione
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contatti Diretti</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefono</p>
                      <p className="text-gray-600">+39 0921 123456</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@hotelparadisomadonie.it</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Indirizzo</p>
                      <p className="text-gray-600">
                        Via delle Madonie, 1<br />
                        90013 Castelbuono (PA)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Reception</p>
                      <p className="text-gray-600">24 ore su 24</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Offerte Speciali</h3>
                <p className="text-gray-600 mb-6">
                  Prenota direttamente con noi e risparmia fino al 15%. Cancellazione gratuita fino a 48h prima
                  dell'arrivo.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">15%</div>
                    <div className="text-sm text-gray-600">Sconto Diretto</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">48h</div>
                    <div className="text-sm text-gray-600">Cancellazione</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
