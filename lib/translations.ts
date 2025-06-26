"use client"

import React from "react"
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

const TranslationContext = React.createContext<TranslationContextType | null>(null)

interface TranslationProviderProps {
  children: React.ReactNode
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [locale, setLocaleState] = React.useState<Locale>('es')

  React.useEffect(() => {
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

  const value = React.useMemo(() => ({
    locale,
    setLocale,
    t
  }), [locale, t])

  return React.createElement(
    TranslationContext.Provider,
    { value },
    children
  )
}

export function useTranslations() {
  const context = React.useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider')
  }
  return context
}

// Función para uso en componentes de servidor (fallback)
export function getStaticTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.es
}