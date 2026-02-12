"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 420)
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    const timer = setTimeout(() => setIsPulsing(false), 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/393929309201?text=Salve%2C%20vorrei%20informazioni%20sull%27Hotel%20Paradiso%20delle%20Madonie"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`group fixed right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1EBE5D] sm:right-6 ${isPulsing ? "animate-pulse-soft" : ""
            } bottom-24 md:bottom-7`}
          style={{ zIndex: "var(--z-floating)" }}
        >
          <MessageCircle className="h-7 w-7" />
          <span
            className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block"
            style={{
              backgroundColor: "var(--primary-900)",
              transitionDuration: "var(--duration-fast)",
            }}
          >
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
