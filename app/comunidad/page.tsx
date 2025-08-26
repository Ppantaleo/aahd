"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"

export default function ComunidadPage() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            {t.community.title}
          </h1>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                {t.community.description}
              </p>

              <h2 className="text-2xl font-bold text-slate-700 mb-6">{t.community.form_title}</h2>

              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfjWHgcxzMNTuYeVZkBng1e62qExNEyhksk-2wn7cFVhbgAZw/viewform?usp=sharing&ouid=118377425556003857167" target="_blank" rel="noopener noreferrer">
                  {t.community.form_button}
                </Link>
              </Button>
            </div>
          </div>

          {/* Tabla de miembros de la comunidad */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">{t.community.members_title}</h2>
            <p className="text-gray-600 mb-6 text-center">
              {t.community.members_description}
            </p>

            {/* Iframe con la tabla de Google Sheets */}
            <div className="w-full">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUGiZlsLSa3OZQSBByKmIO9HAxCxwjljotfe1LPdA5UoCRfYEAkQNaonIALFM7ZJuj-nQoT04nXPcn/pubhtml?gid=213142222&single=true"
                width="100%"
                height="600"
                frameBorder="0"
                className="border rounded-lg"
                title="Tabla de miembros de la comunidad AAHD"
              >
                {/* Fallback content */}
                <p className="text-center text-gray-500 py-8">
                  {t.community.fallback_text}{" "}
                  <Link 
                    href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUGiZlsLSa3OZQSBByKmIO9HAxCxwjljotfe1LPdA5UoCRfYEAkQNaonIALFM7ZJuj-nQoT04nXPcn/pubhtml?gid=213142222&single=true" 
                    className="text-cyan-600 hover:text-cyan-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.community.fallback_link}
                  </Link>{" "}
                  {t.community.fallback_suffix}
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}