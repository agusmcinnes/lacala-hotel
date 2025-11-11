"use client"

import { Coffee, Waves, MapPin, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Coffee,
    title: "Desayuno incluido",
    description: "Comienza tu día con un delicioso desayuno continental",
  },
  {
    icon: Waves,
    title: "A 150m de la playa",
    description: "Disfruta del mar a pocos pasos del hotel",
  },
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    description: "En el corazón de Florianópolis, cerca de todo",
  },
  {
    icon: Sparkles,
    title: "Comfort asegurado",
    description: "Instalaciones modernas y servicio de primera",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="caracteristicas" className="py-20 px-10 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="text-primary">Hotel Lacala</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las ventajas que hacen de tu estadía una experiencia inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { query: "modern hotel room with ocean view in Florianopolis", aspect: "aspect-square" },
            { query: "hotel breakfast buffet spread", aspect: "aspect-square" },
            { query: "hotel lobby with modern design", aspect: "aspect-[2/3]" },
            { query: "comfortable hotel bedroom with balcony", aspect: "aspect-square" },
            { query: "hotel pool area with sun loungers", aspect: "aspect-square" },
            { query: "hotel bathroom with modern fixtures", aspect: "aspect-square" },
            { query: "florianopolis beach sunset view", aspect: "aspect-[2/3]" },
            { query: "hotel exterior at golden hour", aspect: "aspect-square" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.aspect} overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group ${
                index === 2 ? "row-span-2" : ""
              } ${index === 6 ? "row-span-2" : ""} ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${(index + 4) * 80}ms` }}
            >
              <img
                src={`/.jpg?height=600&width=600&query=${item.query}`}
                alt={`Hotel Lacala - ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
