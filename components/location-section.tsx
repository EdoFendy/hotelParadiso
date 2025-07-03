"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Car, Train } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LocationSection() {
  const { t } = useLanguage()

  const distances = [
    { destination: t("location.castle"), distance: t("location.walk"), icon: MapPin },
    { destination: t("location.cefalu"), distance: t("location.drive1"), icon: Car },
    { destination: t("location.palermo"), distance: t("location.drive2"), icon: Car },
    { destination: t("location.airport"), distance: t("location.drive3"), icon: Car },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            <span className="text-slate-900">Posizione</span>
            <span className="block text-amber-500">Strategica</span>
          </h2>
          <div className="title-divider mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans">
            {t("location.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-slate-900 mb-8">{t("location.distances")}</h3>
            <div className="space-y-4">
              {distances.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 rounded-full p-2">
                            <item.icon className="h-5 w-5 text-slate-900" />
                          </div>
                          <span className="text-slate-800 font-sans">{item.destination}</span>
                        </div>
                        <span className="text-slate-900 font-sans">{item.distance}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-slate-900 mb-6">{t("location.howto")}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 rounded-full p-3 flex-shrink-0">
                      <Car className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-serif text-slate-900 mb-2">{t("location.car")}</h4>
                      <p className="text-slate-600 font-sans">{t("location.car.desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 rounded-full p-3 flex-shrink-0">
                      <Train className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-serif text-slate-900 mb-2">{t("location.public")}</h4>
                      <p className="text-slate-600 font-sans">{t("location.public.desc")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.725357922899!2d14.04364631546913!3d37.934092779728605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1314af4a9655a909%3A0x98bf7682586af40d!2sVia%20Dante%20Alighieri%2C%2082%2C%2090043%20Castelbuono%20PA%2C%20Italy!5e0!3m2!1sen!2sus!4v1622181231657!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
