"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Castle, Mountain, TreePine, Utensils } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function CastelbuonoSection() {
  const { t } = useLanguage()

  const attractions = [
    {
      icon: Castle,
      title: t("castelbuono.history"),
      description: t("castelbuono.history.desc"),
      image: "/images/castello.png",
    },
    {
      icon: Utensils,
      title: t("castelbuono.manna"),
      description: t("castelbuono.manna.desc"),
      image: "/images/manna.png",
    },
    {
      icon: Mountain,
      title: t("castelbuono.park"),
      description: t("castelbuono.park.desc"),
      image: "/images/parcomadonie.png",
    },
    {
      icon: TreePine,
      title: t("castelbuono.sweets"),
      description: t("castelbuono.sweets.desc"),
      image: "/images/fiasconaro.png",
    },
  ]

  return (
    <section id="castelbuono" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            <span className="text-slate-900">Castelbuono</span>
            <span className="block text-2xl md:text-3xl font-serif text-amber-500 mt-2">
              {t("castelbuono.subtitle")}
            </span>
          </h2>
          <div className="title-divider mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans">
            {t("castelbuono.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border-0 h-full">
                <div className="relative h-64">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <attraction.icon className="h-8 w-8 mb-3 text-amber-400" />
                    <h3 className="text-2xl font-serif mb-2">{attraction.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed font-sans">{attraction.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
