"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Panoramic suite with infinity pool and mountain views",
    category: "Suites",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Michelin-starred restaurant elegant dining room",
    category: "Dining",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Luxury spa treatment room with natural light",
    category: "Wellness",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Hotel exterior at golden hour with Madonie backdrop",
    category: "Exterior",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Infinity pool overlooking Castelbuono castle",
    category: "Amenities",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Gourmet dish presentation by Chef Giuseppe",
    category: "Dining",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Luxury bathroom with marble finishes and mountain views",
    category: "Suites",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Sunset yoga session on panoramic terrace",
    category: "Wellness",
  },
]

const categories = ["All", "Suites", "Dining", "Wellness", "Exterior", "Amenities"]

export default function LuxuryGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(lightboxImage === 0 ? filteredImages.length - 1 : lightboxImage - 1)
    }
  }

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-wide">
            Visual
            <span className="block text-amber-600">Journey</span>
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Immerse yourself in the beauty and elegance that defines every corner of Paradiso delle Madonie through our
            curated collection of moments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`font-light tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-slate-300 text-slate-600 hover:border-amber-600 hover:text-amber-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setLightboxImage(index)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-6xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-[80vh] w-full">
                  <Image
                    src={filteredImages[lightboxImage].src || "/placeholder.svg"}
                    alt={filteredImages[lightboxImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 text-white hover:bg-white/10"
                  onClick={() => setLightboxImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
                  <p className="text-lg font-light">{filteredImages[lightboxImage].alt}</p>
                  <p className="text-sm text-gray-300 mt-2">
                    {lightboxImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
