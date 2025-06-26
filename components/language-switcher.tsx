"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex space-x-1">
        <Button 
          variant={locale === "es" ? "default" : "ghost"} 
          size="sm" 
          className="text-xs"
          onClick={() => setLocale('es')}
        >
          ES
        </Button>
        <Button 
          variant={locale === "en" ? "default" : "ghost"} 
          size="sm" 
          className="text-xs"
          onClick={() => setLocale('en')}
        >
          EN
        </Button>
      </div>
    </div>
  )
}