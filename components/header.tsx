"use client"

import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "@/lib/translations"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslations()

  return (
    <header className="bg-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-aahd.jpg"
              alt="AAHD Logo"
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/comunidad" className="hover:text-cyan-300 transition-colors">
              {t.nav.community}
            </Link>
            <Link href="/manifiesto" className="hover:text-cyan-300 transition-colors">
              {t.nav.manifesto}
            </Link>
            <Link href="/publicaciones" className="hover:text-cyan-300 transition-colors">
              {t.nav.publications}
            </Link>
            <Link href="/podcast" className="hover:text-cyan-300 transition-colors">
              {t.nav.podcast}
            </Link>
            <Link href="/bits" className="hover:text-cyan-300 transition-colors">
              {t.nav.bits}
            </Link>
          </nav>

          {/* Language Switcher and Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="flex items-center space-x-2">
              <Link
                href="http://twitter.com/aahdArg"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/aahdArg/"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCVw7jhPkN0URG92Abnvs5MA"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/humanidadesdigitalesargentina/"
                className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-300 transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                {t.nav.about}
              </Link>
              <Link
                href="/comunidad"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.community}
              </Link>
              <Link
                href="/manifiesto"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.manifesto}
              </Link>
              <Link
                href="/publicaciones"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.publications}
              </Link>
              <Link
                href="/podcast"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.podcast}
              </Link>
              <Link
                href="/bits"
                className="text-white hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.bits}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-slate-600">
                <LanguageSwitcher />
              </div>

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-600">
                <Link
                  href="http://twitter.com/aahdArg"
                  className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.facebook.com/aahdArg/"
                  className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCVw7jhPkN0URG92Abnvs5MA"
                  className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/humanidadesdigitalesargentina/"
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