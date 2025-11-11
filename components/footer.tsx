import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          <div className="text-center group transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <Phone className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-lg font-semibold mb-3">WhatsApp</h3>
            <a
              href="https://wa.me/5548999999999"
              className="text-white/90 hover:text-white transition-all duration-300 text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 (48) 99999-9999
            </a>
          </div>

          <div className="text-center group transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <Mail className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Email</h3>
            <a
              href="mailto:reservas@hotellacala.com"
              className="text-white/90 hover:text-white transition-all duration-300 text-sm hover:underline"
            >
              reservas@hotellacala.com
            </a>
          </div>

          <div className="text-center group transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <MapPin className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Ubicación</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Apóstolo+Paschoal+1359,+Florianópolis,+SC,+Brasil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-all duration-300 text-sm hover:underline inline-block"
            >
              Apóstolo Paschoal 1359
              <br />
              Florianópolis - SC
              <br />
              Brasil
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo-lacala-fondoblanco.png"
              alt="Hotel Lacala"
              width={120}
              height={80}
              className="w-auto h-30 rounded-2xl"
            />
          </div>
          <p className="text-white/80">© {new Date().getFullYear()} Hotel Lacala. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
