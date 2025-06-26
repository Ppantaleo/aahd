"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Code, Database, Palette, BookOpen } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/translations"

export default function BitsPage() {
  const { t } = useTranslations()

  const getIcon = (category: string) => {
    switch (category) {
      case "Tutorial": return Code
      case "Recurso": 
      case "Resource": return Database
      case "Herramienta":
      case "Tool": return Palette
      case "Guía":
      case "Guide": return BookOpen
      case "Código":
      case "Code": return Code
      case "Plantilla":
      case "Template": return Palette
      default: return Code
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">{t.bits.title}</h1>

          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {t.bits.description}
          </p>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {t.bits.categories.map((categoria, index) => (
              <Badge
                key={index}
                variant={categoria === t.bits.categories[0] ? "default" : "outline"}
                className="cursor-pointer hover:bg-cyan-100 transition-colors"
              >
                {categoria}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.bits.bits.map((bit, index) => {
              const IconComponent = getIcon(bit.category)
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{bit.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(bit.date).toLocaleDateString("es-AR")}
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 text-cyan-500 mr-2" />
                      <CardTitle className="text-lg text-slate-700">{bit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-1">
                    <p className="text-gray-600 mb-4 flex-1">{bit.description}</p>
                    <Link
                      href={bit.url}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      {t.bits.access}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">{t.bits.contribute_title}</h3>
              <p className="text-gray-600 mb-6">
                {t.bits.contribute_description}
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                {t.bits.contribute_button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}