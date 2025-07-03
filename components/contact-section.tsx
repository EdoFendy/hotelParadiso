"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()

  const handleCall = () => {
    window.open("tel:+390921820683", "_self")
  }

  const handleEmail = () => {
    window.open(
      "mailto:info@paradisodellemadonie.it?subject=Richiesta Prenotazione Hotel Paradiso delle Madonie",
      "_self",
    )
  }

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            <span className="text-slate-900">Info &</span>
            <span className="block text-amber-500">Contatti</span>
          </h2>
          <div className="title-divider mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-slate-900 mb-6">{t("contact.direct")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="font-serif text-slate-900">{t("contact.phone")}</p>
                      <button
                        onClick={handleCall}
                        className="text-slate-600 hover:text-slate-900 transition-colors font-sans"
                      >
                        0921 820683
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="font-serif text-slate-900">{t("contact.mobile")}</p>
                      <button
                        onClick={() => window.open("tel:+393929309201", "_self")}
                        className="text-slate-600 hover:text-slate-900 transition-colors font-sans"
                      >
                        392 930 9201
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="font-serif text-slate-900">{t("contact.email")}</p>
                      <button
                        onClick={handleEmail}
                        className="text-slate-600 hover:text-slate-900 transition-colors font-sans"
                      >
                        info@paradisodellemadonie.it
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="font-serif text-slate-900">{t("contact.address")}</p>
                      <p className="text-slate-600 font-sans">
                        Via Dante Alighieri, 82
                        <br />
                        90013 Castelbuono (PA), Sicilia
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{t("contact.hours")}</h3>
                <p className="text-slate-600 mb-6 font-sans">{t("contact.hours.desc")}</p>
                <div className="flex items-center justify-center space-x-2 text-slate-900">
                  <Clock className="h-5 w-5" />
                  <span className="font-serif">{t("contact.available")}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Card className="bg-gradient-to-br from-slate-900 to-black border-0 shadow-2xl text-white w-full">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-serif mb-6">{t("contact.book")}</h3>
                <p className="text-xl mb-8 text-gray-200 font-sans">{t("contact.book.desc")}</p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    onClick={handleCall}
                    className="w-full bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-sans"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {t("contact.call")}
                  </Button>
                  <Button
                    size="lg"
                    onClick={handleEmail}
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-sans bg-transparent"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {t("contact.send")}
                  </Button>
                </div>
                <p className="text-sm text-gray-300 mt-6 font-sans">{t("contact.waiting")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
