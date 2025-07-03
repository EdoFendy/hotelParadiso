"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, ChefHat, Wine } from "lucide-react"
import Image from "next/image"

export default function CulinaryJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="dining" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1200&width=1920"
          alt="Michelin-starred restaurant interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: textY }} className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <Star className="h-6 w-6 text-amber-400 fill-current" />
                <span className="text-amber-400 font-light tracking-wide">MICHELIN STARRED</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-wide leading-tight">
                Culinary
                <span className="block text-amber-400">Artistry</span>
              </h2>

              <div className="w-24 h-px bg-amber-400 mb-8" />

              <p className="text-xl font-light leading-relaxed mb-8 text-gray-200">
                Chef Giuseppe Madonia transforms the finest Sicilian ingredients into extraordinary culinary experiences
                that celebrate our island's rich gastronomic heritage while pushing the boundaries of contemporary
                cuisine.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="text-center">
                  <Award className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-2xl font-light mb-1">Michelin Star</div>
                  <div className="text-sm text-gray-300">2024 Guide</div>
                </div>
                <div className="text-center">
                  <ChefHat className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-2xl font-light mb-1">Local Sourcing</div>
                  <div className="text-sm text-gray-300">100% Sicilian</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-light tracking-wide">
                  Reserve Table
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 font-light tracking-wide"
                >
                  View Menu
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Signature tasting menu"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-light mb-3">Madonie Tasting Menu</h3>
                <p className="text-gray-200 font-light mb-4">
                  A 9-course journey through Sicily's culinary landscape, featuring ingredients sourced exclusively from
                  the Madonie mountains.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-light text-amber-400">€185</span>
                  <span className="text-sm text-gray-300">per person</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Wine className="h-8 w-8 text-amber-400" />
                  <div>
                    <h3 className="text-xl font-light">Wine Cellar</h3>
                    <p className="text-gray-300 text-sm">Over 800 Sicilian & International Labels</p>
                  </div>
                </div>
                <p className="text-gray-200 font-light">
                  Our sommelier curates an exceptional collection featuring rare Sicilian vintages and prestigious
                  international wines.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
