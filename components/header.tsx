"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 md:px-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-8 flex md:grid md:grid-cols-3 items-center justify-between md:gap-4">
        <div className="flex justify-start">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center transition-all duration-500 ease-out hover:scale-105 hover:-rotate-2 active:scale-95 active:rotate-0 group"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lacala-logo%20%281%29-leEdtfIpqmCmA7rlGpWJJbVZZXe1z3.png"
              alt="Hotel Lacala"
              width={120}
              height={80}
              className={`w-auto transition-all duration-300 ease-out group-hover:brightness-110 ${
                isScrolled ? "h-12" : "h-16"
              }`}
            />
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8 justify-center">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("caracteristicas")}
            className={`text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            Características
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className={`text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            Contacto
          </button>
        </nav>

        <div className="flex justify-end">
          <Button
            onClick={() => window.open("https://wa.me/5548999999999", "_blank")}
            className="font-semibold transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 hover:shadow-xl hover:shadow-secondary/50 bg-secondary hover:bg-secondary/90 text-white cursor-pointer"
          >
            Reserva ahora!
          </Button>
        </div>
      </div>
    </header>
  )
}
