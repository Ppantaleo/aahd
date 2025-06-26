"use client"

import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/aahd/images/logo-aahd.jpg" alt="AAHD Logo" width={50} height={50} className="rounded-full mr-3" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              Sobre AAHD
            </Link>
            <Link href="/comunidad" className="hover:text-cyan-300 transition-colors">
              Comunidad
            </Link>
            <Link href="/manifiesto" className="hover:text-cyan-300 transition-colors">
              Manifiesto
            </Link>
            <Link href="/publicaciones" className="hover:text-cyan-300 transition-colors">
              Publicaciones
            </Link>
            <Link href="/podcast" className="hover:text-cyan-300 transition-colors">
              Podcast
            </Link>
            <Link href="/bits" className="hover:text-cyan-300 transition-colors">
              Bits
            </Link>
          </nav>

          {/* Social Icons and Login */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
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
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
            {/* Login button commented out - no longer used
            <Button variant="outline" size="sm" className="bg-white text-slate-700 hover:bg-gray-100">
              Log in | Registro
            </Button>
            */}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-600">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre AAHD
              </Link>
              <Link
                href="/comunidad"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comunidad
              </Link>
              <Link
                href="/manifiesto"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Manifiesto
              </Link>
              <Link
                href="/publicaciones"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publicaciones
              </Link>
              <Link
                href="/podcast"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Podcast
              </Link>
              <Link
                href="/bits"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bits
              </Link>

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-600">
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
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
