"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Maximize } from "lucide-react"
import Image from "next/image"

const suites = [
  {
    id: 1,
    name: "Madonie Panoramic Suite",
    subtitle: "The Crown Jewel",
    description:
      "Our most exclusive suite featuring 360-degree mountain views, private terrace with infinity pool, and personalized butler service.",
    price: "From €1,200",
    size: "120 sqm",
    guests: "2-4 guests",
    features: ["Private infinity pool", "Butler service", "Mountain views", "Marble bathroom"],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 2,
    name: "Castelbuono Heritage Suite",
    subtitle: "Historic Elegance",
    description:
      "Sophisticated suite blending Sicilian heritage with contemporary luxury, overlooking the medieval castle of Castelbuono.",
    price: "From €800",
    size: "80 sqm",
    guests: "2-3 guests",
    features: ["Castle views", "Heritage design", "Private balcony", "Luxury amenities"],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 3,
    name: "Mountain Retreat Suite",
    subtitle: "Nature's Embrace",
    description:
      "Intimate suite designed for ultimate relaxation, featuring natural materials and seamless indoor-outdoor living.",
    price: "From €600",
    size: "60 sqm",
    guests: "2 guests",
    features: ["Forest views", "Natural materials", "Outdoor shower", "Wellness amenities"],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export default function RoomsShowcase() {
  const [selectedSuite, setSelectedSuite] = useState(0)

  return (
    <section id="suites" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-wide">
            Luxury
            <span className="block text-amber-600">Suites</span>
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Each suite is a masterpiece of design and comfort, offering unparalleled views and personalized luxury that
            defines the art of hospitality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Suite Navigation */}
          <div className="space-y-6">
            {suites.map((suite, index) => (
              <motion.div
                key={suite.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-500 border-0 ${
                    selectedSuite === index
                      ? "bg-amber-50 shadow-xl scale-105"
                      : "bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedSuite(index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-light text-slate-900 mb-1">{suite.name}</h3>
                        <p className="text-amber-600 font-light">{suite.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-light text-slate-900">{suite.price}</p>
                        <p className="text-sm text-slate-500">per night</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 font-light leading-relaxed">{suite.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center space-x-2">
                        <Maximize className="h-4 w-4" />
                        <span>{suite.size}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{suite.guests}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Suite Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSuite}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={suites[selectedSuite].image || "/placeholder.svg"}
                    alt={suites[selectedSuite].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {suites[selectedSuite].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      <span className="text-slate-700 font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-light tracking-wide">
                  Reserve This Suite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
