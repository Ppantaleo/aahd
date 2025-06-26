import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Code, Database, Palette, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BitsPage() {
  const bits = [
    {
      titulo: "Tutorial: Análisis de sentimientos con Python",
      categoria: "Tutorial",
      fecha: "2024-01-18",
      descripcion:
        "Guía paso a paso para implementar análisis de sentimientos en textos históricos usando Python y NLTK.",
      icono: Code,
      url: "#",
    },
    {
      titulo: "Base de datos de manuscritos coloniales",
      categoria: "Recurso",
      fecha: "2024-01-10",
      descripcion: "Acceso a una base de datos digitalizada de manuscritos del período colonial argentino.",
      icono: Database,
      url: "#",
    },
    {
      titulo: "Paleta de colores para visualizaciones históricas",
      categoria: "Herramienta",
      fecha: "2023-12-28",
      descripcion: "Conjunto de paletas de colores diseñadas específicamente para visualizaciones de datos históricos.",
      icono: Palette,
      url: "#",
    },
    {
      titulo: "Guía de buenas prácticas en digitalización",
      categoria: "Guía",
      fecha: "2023-12-15",
      descripcion: "Recomendaciones para la digitalización de documentos y archivos históricos.",
      icono: BookOpen,
      url: "#",
    },
    {
      titulo: "Script para limpieza de datos OCR",
      categoria: "Código",
      fecha: "2023-12-02",
      descripción: "Herramienta automatizada para limpiar y corregir errores comunes en textos procesados con OCR.",
      icono: Code,
      url: "#",
    },
    {
      titulo: "Plantillas para mapas interactivos",
      categoria: "Plantilla",
      fecha: "2023-11-18",
      descripcion: "Plantillas HTML/CSS/JS para crear mapas interactivos de eventos históricos.",
      icono: Palette,
      url: "#",
    },
  ]

  const categorias = ["Todos", "Tutorial", "Recurso", "Herramienta", "Guía", "Código", "Plantilla"]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">Bits</h1>

          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Recursos prácticos, herramientas, tutoriales y fragmentos de código para potenciar tus proyectos de
            humanidades digitales.
          </p>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categorias.map((categoria, index) => (
              <Badge
                key={index}
                variant={categoria === "Todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-cyan-100 transition-colors"
              >
                {categoria}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bits.map((bit, index) => {
              const IconComponent = bit.icono
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{bit.categoria}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(bit.fecha).toLocaleDateString("es-AR")}
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 text-cyan-500 mr-2" />
                      <CardTitle className="text-lg text-slate-700">{bit.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-1">
                    <p className="text-gray-600 mb-4 flex-1">{bit.descripcion}</p>
                    <Link
                      href={bit.url}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      Acceder
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">Contribuye</h3>
              <p className="text-gray-600 mb-6">
                ¿Tienes herramientas, tutoriales o recursos que podrían ser útiles para la comunidad?
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Comparte tu recurso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
