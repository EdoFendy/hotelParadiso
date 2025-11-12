"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative w-128 h-48 mb-4">
                <Image src="/images/chiaro.png" alt="Hotel Paradiso delle Madonie" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-sans">{t("footer.description")}</p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-amber-400">{t("footer.links")}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#hotel")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-sans"
                >
                  {t("nav.hotel")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#camere")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-sans"
                >
                  {t("nav.rooms")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#castelbuono")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-sans"
                >
                  {t("nav.castelbuono")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contatti")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-sans"
                >
                  {t("nav.info")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-amber-400">{t("footer.contact")}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300 font-sans">
                  Via Dante Alighieri, 82
                  <br />
                  90013 Castelbuono (PA), Sicilia
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <button
                  onClick={() => window.open("tel:+390921820683", "_self")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  0921 820683
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <button
                  onClick={() => window.open("tel:+393929309201", "_self")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  392 930 9201
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <button
                  onClick={() => window.open("mailto:info@paradisodellemadonie.it", "_self")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  info@paradisodellemadonie.it
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-sans">
              © {new Date().getFullYear()} Hotel Paradiso delle Madonie. {t("footer.rights")}
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors font-sans">
                {t("footer.privacy")}
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors font-sans">
                Cookie Policy
              </Link>
              <Link href="/termini" className="text-gray-400 hover:text-white text-sm transition-colors font-sans">
                {t("footer.terms")}
              </Link>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).showCookieBanner) {
                    (window as any).showCookieBanner()
                  }
                }}
                className="text-gray-400 hover:text-white text-sm transition-colors font-sans cursor-pointer"
              >
                Gestisci Cookie
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
