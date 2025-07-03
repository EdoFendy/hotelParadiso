"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Vista panoramica Hotel Paradiso delle Madonie",
    category: "Esterno",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Suite Panoramica con vista Madonie",
    category: "Camere",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Ristorante gourmet Hotel Paradiso",
    category: "Ristorante",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Centro benessere e spa",
    category: "Spa",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Terrazza panoramica Castelbuono",
    category: "Esterno",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Camera Deluxe arredamento siciliano",
    category: "Camere",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Piatti gourmet cucina siciliana",
    category: "Ristorante",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Piscina riscaldata con vista",
    category: "Spa",
  },
]

const categories = ["Tutti", "Esterno", "Camere", "Ristorante", "Spa"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "Tutti" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Galleria Fotografica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scoprite attraverso le immagini la bellezza dell'Hotel Paradiso delle Madonie e i panorami mozzafiato di
            Castelbuono.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4">{filteredImages[selectedImage].alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
