"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden pt-44">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fronte.png"
          alt="Hotel Paradiso delle Madonie - Vista frontale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-white drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <span className="text-white">{t("hero.title")}</span>
              <span className="block text-3xl md:text-4xl font-serif text-amber-400 mt-4 drop-shadow-lg">
                {t("hero.subtitle")}
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mb-16"
          >
            <p className="text-xl md:text-2xl font-sans leading-relaxed mb-8 max-w-3xl mx-auto text-white drop-shadow-lg">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("#camere")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-sans transition-all duration-300"
              >
                {t("hero.discover")}
              </Button>

              <Button
                size="lg"
                onClick={() => scrollToSection("#contatti")}
                className="bg-slate-900 hover:bg-black text-white px-8 py-4 text-lg font-sans border-2 border-slate-900 transition-all duration-300"
              >
                {t("hero.contact")}
              </Button>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="text-lg font-sans">{t("hero.location")}</span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => scrollToSection("#hotel")}
            >
              <span className="text-sm font-sans mb-4">{t("hero.scroll")}</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
