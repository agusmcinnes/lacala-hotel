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

      {/* Contenedor principal con centrado vertical */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl">

          {/* Contenido de texto - 60% en desktop */}
          <div className="flex-1 md:w-[60%] space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-white md:text-foreground animate-hero-title flex flex-col md:block">
              Bienvenido a <span className="text-secondary md:text-primary">Hotel Lacala</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed text-white/95 md:text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-hero-subtitle">
              Tu refugio ideal en Florianópolis. A solo 150 metros de la playa, donde el confort se encuentra con la
              hospitalidad brasileña.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 animate-hero-buttons">
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
                className="border-2 border-white md:border-primary text-white md:text-primary hover:text-white md:hover:text-primary bg-black/30 hover:bg-black/50 md:bg-transparent md:hover:bg-primary/20 transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 gap-2 group backdrop-blur-sm md:backdrop-blur-none"
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

          {/* Imagen - 40% en desktop, oculta en mobile */}
          <div className="hidden md:block md:w-[40%] lg:w-[30%] animate-hero-image">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:shadow-3xl hover:scale-[1.02] bg-background">
              <Image
                src="/inicio.png"
                alt="Hotel Lacala - Florianópolis"
                fill
                className="object-cover object-top"
                priority
              />
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
