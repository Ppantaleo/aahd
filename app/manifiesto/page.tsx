"use client"

import { useTranslations } from "@/lib/translations"

export default function ManifiestoPage() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">{t.manifesto.title}</h1>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                {t.manifesto.main_title}
              </h2>

              <p className="text-gray-600 mb-6">
                {t.manifesto.intro_paragraph1}
              </p>

              <p className="text-gray-600 mb-6">
                {t.manifesto.intro_paragraph2}
              </p>

              <p className="text-gray-600 mb-6">
                {t.manifesto.intro_paragraph3}
              </p>

              <p className="text-gray-600 mb-4">
                {t.manifesto.intro_paragraph4}
              </p>
            </div>
          </div>

          {/* Objetivos de las Humanidades Digitales */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3">
              {t.manifesto.hd_objectives.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{objetivo},</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contexto y antecedentes */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                {t.manifesto.context_paragraph1}
              </p>

              <p className="text-gray-600 mb-6">
                {t.manifesto.context_paragraph2.replace('{link1}', '')}
                <a href="http://www.humanidadesdigitales.org" className="text-cyan-600 hover:text-cyan-700">
                  http://www.humanidadesdigitales.org
                </a>
                {t.manifesto.context_paragraph2.split('{link1}')[1]?.split('{link2}')[0] || ''}
                <a href="http://www.humanidadesdigitales.mx/" className="text-cyan-600 hover:text-cyan-700">
                  http://www.humanidadesdigitales.mx/
                </a>
                {t.manifesto.context_paragraph2.split('{link2}')[1]?.split('{link3}')[0] || ''}
                <a href="http://ahdig.org/" className="text-cyan-600 hover:text-cyan-700">
                  http://ahdig.org/
                </a>
                {t.manifesto.context_paragraph2.split('{link3}')[1] || ''}
              </p>

              <p className="text-gray-600 mb-4">
                {t.manifesto.context_paragraph3.split('{link4}')[0]}
                <a href="http://buenosaires2013.thatcamp.org/" className="text-cyan-600 hover:text-cyan-700">
                  http://buenosaires2013.thatcamp.org/
                </a>
                {t.manifesto.context_paragraph3.split('{link4}')[1]}
              </p>
            </div>
          </div>

          {/* Motivaciones */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3">
              {t.manifesto.motivations.map((motivacion, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{motivacion},</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Objetivos de la AAHD */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">{t.manifesto.objectives_title}</h2>
            <ul className="space-y-3">
              {t.manifesto.aahd_objectives.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{objetivo},</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fecha */}
          <div className="text-center">
            <div className="bg-cyan-50 rounded-lg p-6 inline-block">
              <p className="text-slate-700 font-bold text-lg">{t.manifesto.date}</p>
              {t.manifesto.date.includes('November') && (
                <p className="text-slate-600 text-sm mt-2">Translation by Gimena del Rio</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}