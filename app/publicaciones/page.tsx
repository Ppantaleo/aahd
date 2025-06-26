"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/translations"

export default function PublicacionesPage() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">{t.publications.title}</h1>

          {/* Descripción */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">{t.publications.subtitle}</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                {t.publications.description1}
              </p>

              <p className="text-gray-600 mb-6">
                {t.publications.description2}
              </p>

              <p className="text-gray-600">
                {t.publications.description3}
              </p>
            </div>
          </div>

          {/* Publicaciones */}
          <div className="grid gap-8">
            {t.publications.publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={pub.isJournal ? "default" : "secondary"} className="mb-2">
                      {pub.type}
                    </Badge>
                    <BookOpen className="w-6 h-6 text-cyan-500" />
                  </div>

                  <CardTitle className="text-2xl text-slate-700 mb-2">{pub.title}</CardTitle>

                  {pub.subtitle && <p className="text-lg text-gray-600 font-medium">{pub.subtitle}</p>}
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pub.organization && <p className="text-gray-600">{pub.organization}</p>}

                    {pub.date && (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {pub.date}
                      </div>
                    )}

                    {pub.location && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {pub.location}
                      </div>
                    )}

                    {pub.isbn && (
                      <p className="text-sm text-gray-500">
                        <strong>{t.publications.isbn}</strong> {pub.isbn}
                      </p>
                    )}

                    {pub.description && <p className="text-gray-600">{pub.description}</p>}
                  </div>

                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center">
                        {t.publications.access}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">{t.publications.cta_title}</h3>
              <p className="text-gray-600 mb-6">
                {t.publications.cta_description}
              </p>
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/contacto">{t.publications.cta_button}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}