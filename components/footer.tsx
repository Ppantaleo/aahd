import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AAHD</h3>
            <p className="text-gray-300 text-sm">Asociación Argentina de Humanidades Digitales</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Sobre AAHD
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="text-gray-300 hover:text-white">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/manifiesto" className="text-gray-300 hover:text-white">
                  Manifiesto
                </Link>
              </li>
              <li>
                <Link href="/publicaciones" className="text-gray-300 hover:text-white">
                  Publicaciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/podcast" className="text-gray-300 hover:text-white">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/bits" className="text-gray-300 hover:text-white">
                  Bits
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Asociación Argentina de Humanidades Digitales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
