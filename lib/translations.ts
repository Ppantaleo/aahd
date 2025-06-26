"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import es from "../locales/es.json"
import en from "../locales/en.json"

const translations = {
  es,
  en,
}

type Locale = keyof typeof translations
type TranslationContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof es
}

const TranslationContext = createContext<TranslationContextType | null>(null)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    // Cargar idioma guardado en localStorage
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = translations[locale] || translations.es

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider')
  }
  return context
}

// Función para uso en componentes de servidor (fallback)
export function getStaticTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.es
}