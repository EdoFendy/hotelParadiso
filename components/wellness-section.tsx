"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Waves, Leaf, Sun, Heart } from "lucide-react"
import Image from "next/image"

const treatments = [
  {
    icon: Waves,
    name: "Sicilian Sea Ritual",
    duration: "90 minutes",
    description: "Rejuvenating treatment using Mediterranean sea salts and local olive oil",
  },
  {
    icon: Leaf,
    name: "Madonie Herb Therapy",
    duration: "75 minutes",
    description: "Healing massage with aromatic herbs harvested from our mountain gardens",
  },
  {
    icon: Sun,
    name: "Golden Hour Meditation",
    duration: "60 minutes",
    description: "Guided meditation session on our panoramic terrace at sunset",
  },
  {
    icon: Heart,
    name: "Couples Sanctuary",
    duration: "120 minutes",
    description: "Intimate spa experience designed for two in our private treatment suite",
  },
]

export default function WellnessSection() {
  return (
    <section id="wellness" className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-wide">
            Wellness
            <span className="block text-amber-600">Sanctuary</span>
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Reconnect with your inner self in our world-class spa, where ancient Sicilian wellness traditions meet
            modern therapeutic techniques in perfect harmony.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Luxury spa treatment room with mountain views"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-light mb-2">Infinity Pool & Spa</h3>
                <p className="text-lg font-light text-gray-200">Panoramic views of the Madonie mountains</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-amber-50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Waves className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-3">Thermal Waters</h3>
                <p className="text-slate-600 font-light">Natural mineral springs with healing properties</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-3">Organic Treatments</h3>
                <p className="text-slate-600 font-light">Products made from local Sicilian botanicals</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Treatment Menu */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light text-slate-900 text-center mb-12">Signature Treatments</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-50 rounded-full p-3 flex-shrink-0">
                        <treatment.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-light text-slate-900">{treatment.name}</h4>
                          <span className="text-sm text-amber-600 font-medium">{treatment.duration}</span>
                        </div>
                        <p className="text-slate-600 font-light leading-relaxed">{treatment.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-light tracking-wide">
              Book Spa Experience
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
