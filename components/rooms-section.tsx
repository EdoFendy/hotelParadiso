"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Bath, Wind } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const roomImages = ["/images/camera1.jpg", "/images/camera2.jpg", "/images/camera3.jpg", "/images/bagno.png"]

export default function RoomsSection() {
  const [selectedImage, setSelectedImage] = useState(0)
  const { t } = useLanguage()

  const roomFeatures = [
    { icon: Wifi, name: t("rooms.wifi") },
    { icon: Tv, name: t("rooms.tv") },
    { icon: Wind, name: t("rooms.ac") },
    { icon: Bath, name: t("rooms.bathroom") },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="camere" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            <span className="text-slate-900">Le nostre</span>
            <span className="block text-amber-500">Camere</span>
          </h2>
          <div className="title-divider mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">{t("rooms.description1")}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">{t("rooms.description2")}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-sans">{t("rooms.description3")}</p>

            {/* Room Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {roomFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-slate-900" />
                  </div>
                  <span className="text-slate-800 font-sans">{feature.name}</span>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection("#contatti")}
              className="bg-slate-900 hover:bg-black text-white px-8 py-3 font-sans"
            >
              {t("rooms.book")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Image Display */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  <Image
                    src={roomImages[selectedImage] || "/placeholder.svg"}
                    alt={`Camera Hotel Paradiso delle Madonie ${selectedImage + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {roomImages.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? "ring-2 ring-slate-900 scale-105" : "hover:scale-105"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
