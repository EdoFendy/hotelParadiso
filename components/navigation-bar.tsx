"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-700 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2 lg:py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center lg:justify-start">
          {/* Logo - Centrato su mobile */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="flex flex-col items-center mx-auto lg:items-start lg:mr-auto lg:mx-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative transition-all duration-700 w-96 h-32">
              <Image
                src={isScrolled ? "/images/logo.png" : "/images/chiaro.png"}
                alt="Hotel Paradiso delle Madonie"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("#home")}
              className={`font-serif text-lg relative group transition-all duration-500 ${
                isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-gray-200"
              }`}
            >
              {t("nav.home")}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("#hotel")}
              className={`font-serif text-lg relative group transition-all duration-500 ${
                isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-gray-200"
              }`}
            >
              {t("nav.hotel")}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("#camere")}
              className={`font-serif text-lg relative group transition-all duration-500 ${
                isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-gray-200"
              }`}
            >
              {t("nav.rooms")}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("#castelbuono")}
              className={`font-serif text-lg relative group transition-all duration-500 ${
                isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-gray-200"
              }`}
            >
              {t("nav.castelbuono")}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("#contatti")}
              className={`font-serif text-lg relative group transition-all duration-500 ${
                isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-gray-200"
              }`}
            >
              {t("nav.info")}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-500 transition-all duration-500 group-hover:w-full" />
            </button>

            {/* Language Switcher */}
            <div
              className={`flex items-center space-x-3 ml-8 pl-8 ${
                isScrolled ? "border-l border-slate-300" : "border-l border-white/30"
              }`}
            >
              <Globe className={`h-4 w-4 ${isScrolled ? "text-slate-900" : "text-white"}`} />
              <button
                onClick={() => setLanguage("it")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-sans transition-all duration-300 ${
                  language === "it"
                    ? "bg-slate-900 text-white shadow-md"
                    : isScrolled
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white hover:text-gray-200 hover:bg-white/10"
                }`}
              >
                <span>🇮🇹</span>
                <span className="text-sm">IT</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-sans transition-all duration-300 ${
                  language === "en"
                    ? "bg-slate-900 text-white shadow-md"
                    : isScrolled
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white hover:text-gray-200 hover:bg-white/10"
                }`}
              >
                <span>🇬🇧</span>
                <span className="text-sm">EN</span>
              </button>
            </div>

            <Button
              onClick={() => scrollToSection("#contatti")}
              className="bg-slate-900 hover:bg-black text-white font-sans px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("hero.contact")}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden absolute inset-y-0 left-6 flex items-center p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            ) : (
              <Menu
                className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden mt-6 py-8 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl"
            >
              <div className="flex flex-col space-y-8 px-6">
                <button
                  onClick={() => scrollToSection("#home")}
                  className="font-serif text-lg text-center py-2 text-slate-900 hover:text-slate-700 transition-colors duration-300"
                >
                  {t("nav.home")}
                </button>
                <button
                  onClick={() => scrollToSection("#hotel")}
                  className="font-serif text-lg text-center py-2 text-slate-900 hover:text-slate-700 transition-colors duration-300"
                >
                  {t("nav.hotel")}
                </button>
                <button
                  onClick={() => scrollToSection("#camere")}
                  className="font-serif text-lg text-center py-2 text-slate-900 hover:text-slate-700 transition-colors duration-300"
                >
                  {t("nav.rooms")}
                </button>
                <button
                  onClick={() => scrollToSection("#castelbuono")}
                  className="font-serif text-lg text-center py-2 text-slate-900 hover:text-slate-700 transition-colors duration-300"
                >
                  {t("nav.castelbuono")}
                </button>
                <button
                  onClick={() => scrollToSection("#contatti")}
                  className="font-serif text-lg text-center py-2 text-slate-900 hover:text-slate-700 transition-colors duration-300"
                >
                  {t("nav.info")}
                </button>

                {/* Mobile Language Switcher */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-center space-x-4">
                  <Globe className="h-4 w-4 text-slate-900" />
                  <button
                    onClick={() => setLanguage("it")}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-sans transition-all duration-300 ${
                      language === "it"
                        ? "bg-slate-900 text-white shadow-md"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <span>🇮🇹</span>
                    <span className="text-sm">Italiano</span>
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-sans transition-all duration-300 ${
                      language === "en"
                        ? "bg-slate-900 text-white shadow-md"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span className="text-sm">English</span>
                  </button>
                </div>

                <Button
                  onClick={() => scrollToSection("#contatti")}
                  className="w-full mt-6 bg-slate-900 hover:bg-black text-white font-sans py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("hero.contact")}
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
