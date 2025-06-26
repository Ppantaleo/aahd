"use client"

import { useTranslations } from "@/lib/translations"

export default function AboutPage() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">{t.about.title}</h1>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                {t.about.description1}
              </p>

              <p className="text-gray-600 mb-6">
                {t.about.description2}
              </p>

              <p className="text-gray-600 mb-6">
                {t.about.description3}
              </p>

              <p className="text-gray-600 mb-8">
                {t.about.description4}
              </p>
            </div>
          </div>

          {/* Objetivos */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">{t.about.objectives_title}</h2>
            <p className="text-gray-600 mb-4">{t.about.objectives_intro}</p>
            <ul className="space-y-3">
              {t.about.objectives.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{objetivo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinación */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">{t.about.coordination_title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.about.coordination.map((miembro, index) => (
                <div key={index} className="border-l-4 border-cyan-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-700">{miembro.position}</h3>
                  <p className="text-gray-600">{miembro.name}</p>
                  <p className="text-sm text-gray-500">({miembro.institution})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo Adicional */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              {t.about.additional_team.map((miembro, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">{miembro.position}</h3>
                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <p className="text-gray-600 font-medium">{miembro.name}</p>
                    <p className="text-sm text-gray-500">({miembro.institution})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}