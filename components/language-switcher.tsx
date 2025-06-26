"use client"

import { useRouter } from "next/router"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale, asPath } = router

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex space-x-1">
        <Button asChild variant={locale === "es" ? "default" : "ghost"} size="sm" className="text-xs">
          <Link href={asPath} locale="es">
            ES
          </Link>
        </Button>
        <Button asChild variant={locale === "en" ? "default" : "ghost"} size="sm" className="text-xs">
          <Link href={asPath} locale="en">
            EN
          </Link>
        </Button>
      </div>
    </div>
  )
}
