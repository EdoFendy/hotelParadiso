"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mountain, TreePine, Castle, Camera } from "lucide-react"
import Image from "next/image"

const attractions = [
  {
    icon: Castle,
    name: "Castelbuono Castle",
    distance: "3 minutes walk",
    description: "14th-century Norman castle, symbol of medieval Sicily",
  },
  {
    icon: Mountain,
    name: "Madonie National Park",
    distance: "At your doorstep",
    description: "UNESCO Geopark with pristine hiking trails",
  },
  {
    icon: TreePine,
    name: "Piano Battaglia",
    distance: "25 minutes drive",
    description: "Alpine skiing and summer mountain adventures",
  },
  {
    icon: Camera,
    name: "Cefalù",
    distance: "45 minutes drive",
    description: "UNESCO World Heritage coastal town",
  },
]

export default function LocationStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="location" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1200&width=1920"
          alt="Aerial view of Castelbuono and Madonie mountains"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 text-white"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Where History
            <span className="block text-amber-400">Meets Nature</span>
          </h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8" />
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto text-gray-200">
            Nestled in the heart of Madonie National Park, Castelbuono is a medieval jewel where ancient Sicilian
            culture thrives amidst breathtaking mountain landscapes and pristine wilderness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-amber-400" />
              <span className="text-amber-400 font-light tracking-wide">CASTELBUONO, SICILY</span>
            </div>

            <h3 className="text-4xl font-light mb-6 leading-tight">A Thousand Years of Stories</h3>

            <p className="text-xl font-light leading-relaxed mb-8 text-gray-200">
              From our elevated position at 1,200 meters, witness the timeless beauty of Sicily unfold before you.
              Ancient olive groves cascade down mountain slopes, while medieval villages dot the landscape like precious
              gems scattered across velvet.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-light text-amber-400 mb-2">1,200m</div>
                <div className="text-sm text-gray-300">Elevation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-400 mb-2">45min</div>
                <div className="text-sm text-gray-300">To Palermo</div>
              </div>
            </div>

            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-light tracking-wide">
              Explore Experiences
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-400/20 rounded-full p-3 flex-shrink-0">
                        <attraction.icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-light">{attraction.name}</h4>
                          <span className="text-sm text-amber-400 font-medium">{attraction.distance}</span>
                        </div>
                        <p className="text-gray-200 font-light text-sm">{attraction.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
