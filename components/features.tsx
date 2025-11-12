"use client"

import { Coffee, Waves, MapPin, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

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

        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Nuestras <span className="text-primary">Habitaciones</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {[
            { src: "/habitaciones/lacala-habitacion1.jpg", alt: "Habitación Hotel Lacala 1", rowSpan: 1 },
            { src: "/habitaciones/lacala-habitacion2.jpg", alt: "Habitación Hotel Lacala 2", rowSpan: 3 },
            { src: "/habitaciones/lacala-habitacion3.jpg", alt: "Habitación Hotel Lacala 3", rowSpan: 1 },
            { src: "/habitaciones/lacala-habitacion4.jpg", alt: "Habitación Hotel Lacala 4", rowSpan: 1 },
            { src: "/habitaciones/lacala-habitacion5.jpg", alt: "Habitación Hotel Lacala 5", rowSpan: 2 },
            { src: "/habitaciones/lacala-habitacion6.jpg", alt: "Habitación Hotel Lacala 6", rowSpan: 1 },
          ].map((room, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl hover:shadow-secondary/50 group aspect-[4/3] md:aspect-auto md:h-full transition-opacity transition-transform duration-700 ${
                room.rowSpan === 3 ? "md:row-span-3" : room.rowSpan === 2 ? "md:row-span-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${(index + 4) * 80}ms`,
                transition: 'opacity 0.7s, transform 0.7s, box-shadow 0.15s'
              }}
            >
              <Image
                src={room.src}
                alt={room.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        <div
          className={`text-center mb-12 mt-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Nuestro <span className="text-primary">Desayuno</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: "/desayuno/lacala-desayuno1-cuadrado.jpg", alt: "Desayuno Hotel Lacala 1" },
            { src: "/desayuno/lacala-desayuno2-cuadrado.jpg", alt: "Desayuno Hotel Lacala 2" },
            { src: "/desayuno/lacala-desayuno3-cuadrado.jpg", alt: "Desayuno Hotel Lacala 3" },
            { src: "/desayuno/lacala-desayuno4-vertical.jpg", alt: "Desayuno Hotel Lacala 4" },
          ].map((breakfast, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl hover:shadow-secondary/50 group aspect-square h-full transition-opacity transition-transform duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${(index + 10) * 80}ms`,
                transition: 'opacity 0.7s, transform 0.7s, box-shadow 0.15s'
              }}
            >
              <Image
                src={breakfast.src}
                alt={breakfast.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
