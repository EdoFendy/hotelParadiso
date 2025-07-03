"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Car, Coffee, Tv, Bath, MapPin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  const amenities = [
    { icon: Wifi, name: t("about.wifi") },
    { icon: Car, name: t("about.parking") },
    { icon: Coffee, name: t("about.bar") },
    { icon: Tv, name: t("about.tv") },
    { icon: Bath, name: t("about.bathroom") },
    { icon: MapPin, name: t("about.center") },
  ]

  return (
    <section id="hotel" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            <span className="text-slate-900">Il nostro</span>
            <span className="block text-amber-500">Hotel</span>
          </h2>
          <div className="title-divider mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">{t("about.description1")}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">{t("about.description2")}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-sans">{t("about.description3")}</p>
            <p className="text-lg text-slate-600 leading-relaxed font-sans">{t("about.description4")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/reception.png"
                alt="Reception Hotel Paradiso delle Madonie"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ingresso-hotel.jpg"
                alt="Ingresso Hotel Paradiso delle Madonie"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-center mb-8">
                <span className="text-slate-900">I nostri</span>
                <span className="text-amber-500 ml-2">Servizi</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center flex flex-col items-center"
                  >
                    <div className="bg-slate-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <amenity.icon className="h-8 w-8 text-slate-900" />
                    </div>
                    <p className="text-sm font-sans text-slate-800 text-center">{amenity.name}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
