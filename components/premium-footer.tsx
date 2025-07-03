import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function PremiumFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-4xl font-light tracking-wider mb-2">PARADISO</h3>
              <p className="text-xl text-amber-400 font-light tracking-[0.2em]">DELLE MADONIE</p>
            </div>
            <p className="text-gray-300 font-light leading-relaxed mb-8 max-w-md">
              Where ancient Sicilian heritage meets contemporary luxury in the heart of Madonie National Park.
              Experience unparalleled hospitality in Sicily's most exclusive mountain resort.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-6 text-amber-400">Experiences</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#suites" className="text-gray-300 hover:text-white transition-colors font-light">
                  Luxury Suites
                </Link>
              </li>
              <li>
                <Link href="#dining" className="text-gray-300 hover:text-white transition-colors font-light">
                  Michelin Dining
                </Link>
              </li>
              <li>
                <Link href="#wellness" className="text-gray-300 hover:text-white transition-colors font-light">
                  Wellness Sanctuary
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-gray-300 hover:text-white transition-colors font-light">
                  Madonie Adventures
                </Link>
              </li>
              <li>
                <Link href="/wine-cellar" className="text-gray-300 hover:text-white transition-colors font-light">
                  Wine Cellar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-light mb-6 text-amber-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300 font-light">
                  Via Panoramica delle Madonie, 1<br />
                  90013 Castelbuono, Sicily, Italy
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300 font-light">+39 0921 677 888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300 font-light">concierge@paradisodellemadonie.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              © {new Date().getFullYear()} Paradiso delle Madonie. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 lg:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors font-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors font-light">
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-white text-sm transition-colors font-light"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
