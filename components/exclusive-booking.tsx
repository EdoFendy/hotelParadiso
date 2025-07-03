"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Award, Star } from "lucide-react"

export default function ExclusiveBooking() {
  const [formData, setFormData] = useState({
    arrival: "",
    departure: "",
    guests: "",
    suite: "",
    name: "",
    email: "",
    phone: "",
    preferences: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Exclusive booking request:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #fbbf24 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Reserve Your
            <span className="block text-amber-400">Extraordinary Stay</span>
          </h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8" />
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto text-gray-300">
            Begin your journey to unparalleled luxury. Our concierge team will craft a bespoke experience tailored to
            your every desire.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-light text-center">Exclusive Reservation</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="arrival" className="text-gray-300 font-light">
                        Arrival Date
                      </Label>
                      <Input
                        id="arrival"
                        type="date"
                        value={formData.arrival}
                        onChange={(e) => handleInputChange("arrival", e.target.value)}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="departure" className="text-gray-300 font-light">
                        Departure Date
                      </Label>
                      <Input
                        id="departure"
                        type="date"
                        value={formData.departure}
                        onChange={(e) => handleInputChange("departure", e.target.value)}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="guests" className="text-gray-300 font-light">
                        Number of Guests
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5+">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="suite" className="text-gray-300 font-light">
                        Preferred Suite
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("suite", value)}>
                        <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select suite" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="panoramic">Madonie Panoramic Suite</SelectItem>
                          <SelectItem value="heritage">Castelbuono Heritage Suite</SelectItem>
                          <SelectItem value="retreat">Mountain Retreat Suite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-light">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-300 font-light">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300 font-light">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferences" className="text-gray-300 font-light">
                      Special Preferences
                    </Label>
                    <Textarea
                      id="preferences"
                      value={formData.preferences}
                      onChange={(e) => handleInputChange("preferences", e.target.value)}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Dietary requirements, celebration details, spa preferences, or any special requests..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-light tracking-wide"
                  >
                    Submit Exclusive Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Awards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-amber-400">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="font-light">Reservations</p>
                      <p className="text-gray-300">+39 0921 677 888</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="font-light">Concierge</p>
                      <p className="text-gray-300">concierge@paradisodellemadonie.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="font-light">Address</p>
                      <p className="text-gray-300">
                        Via Panoramica delle Madonie, 1<br />
                        90013 Castelbuono, Sicily
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="font-light">Concierge Hours</p>
                      <p className="text-gray-300">24/7 Service</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards & Recognition */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 backdrop-blur-md border-amber-400/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-amber-400">Awards & Recognition</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-amber-400 fill-current" />
                    <span className="font-light">Michelin Guide Recommended 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-400" />
                    <span className="font-light">World Luxury Hotel Awards 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-400" />
                    <span className="font-light">Condé Nast Traveler Gold List</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-amber-400 fill-current" />
                    <span className="font-light">Forbes 5-Star Rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exclusive Benefits */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-amber-400">Exclusive Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-light">Complimentary helicopter transfer from Palermo</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-light">Private chef consultation for dietary preferences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-light">Personalized Madonie National Park experiences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-light">24/7 dedicated concierge service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
