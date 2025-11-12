"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Send, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-background">
      {/* Mobile: Imagen como background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/inicio.png"
          alt="Hotel Lacala - Florianopolis"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80" />
      </div>

      {/* Desktop: Imagen de fondo con overlay negro */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/hero-desktop-fondo.jpg"
          alt="Hotel Lacala - Florianopolis"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay negro para desktop */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenedor principal con centrado vertical */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="flex flex-col items-center w-full max-w-4xl">

          {/* Contenido de texto - centrado en desktop */}
          <div className="w-full space-y-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-hero-title flex flex-col md:block">
              Bienvenido a <span className="text-secondary md:text-secondary">Hotel Lacala</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-2xl mx-auto animate-hero-subtitle">
              Tu refugio ideal en Florianópolis. A solo 150 metros de la playa, donde el confort se encuentra con la
              hospitalidad brasileña.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-hero-buttons">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-base transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:translate-y-0 gap-2 group"
                onClick={() => window.open("https://wa.me/5548999999999", "_blank")}
              >
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Reservar ahora
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:text-white bg-black/30 hover:bg-white/20 transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 gap-2 group backdrop-blur-sm"
                onClick={() => {
                  const element = document.getElementById("caracteristicas")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Conocer más
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll (opcional, minimalista) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-60">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
