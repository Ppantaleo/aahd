"use client"

import { useRouter } from "next/router"
import es from "../locales/es.json"
import en from "../locales/en.json"

const translations = {
  es,
  en,
}

export function useTranslations() {
  const { locale } = useRouter()
  const t = translations[locale as keyof typeof translations] || translations.es

  return { t, locale }
}

export function getStaticTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.es
}
