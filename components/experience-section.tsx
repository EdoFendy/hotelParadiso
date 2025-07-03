"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Utensils, Waves, Crown } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    icon: Crown,
    title: "Luxury Redefined",
    description:
      "Experience unparalleled luxury in our meticulously designed suites, each offering breathtaking views of the Madonie mountains and personalized service that exceeds expectations.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    icon: Utensils,
    title: "Michelin-Starred Dining",
    description:
      "Savor the artistry of our Michelin-starred chef who transforms local Sicilian ingredients into extraordinary culinary masterpieces that tell the story of our land.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    icon: Waves,
    title: "Wellness Sanctuary",
    description:
      "Rejuvenate your body and soul in our world-class spa, featuring ancient Sicilian wellness traditions combined with modern therapeutic techniques.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    icon: Mountain,
    title: "Mountain Adventures",
    description:
      "Explore the pristine wilderness of Madonie National Park through exclusive guided experiences, from sunrise hikes to private helicopter tours.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="experiences" ref={containerRef} className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div style={{ opacity }} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-wide">
              Extraordinary
              <span className="block text-amber-600">Experiences</span>
            </h2>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Every moment at Paradiso delle Madonie is crafted to create memories that last a lifetime. Discover
              experiences that go beyond luxury to touch the soul.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
            >
              {index % 2 === 0 ? (
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 border-0">
                  <div className="relative h-80">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <experience.icon className="h-8 w-8 mb-3 text-amber-400" />
                      <h3 className="text-2xl font-light mb-2">{experience.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-slate-600 leading-relaxed font-light text-lg">{experience.description}</p>
                  </CardContent>
                </Card>
              ) : (
                <motion.div style={{ y }} className="space-y-8">
                  <div className="bg-amber-50 p-2 rounded-full w-16 h-16 flex items-center justify-center">
                    <experience.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-light text-slate-900 mb-6">{experience.title}</h3>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">{experience.description}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
