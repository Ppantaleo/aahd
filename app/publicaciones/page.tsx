import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function PublicacionesPage() {
  const publicaciones = [
    {
      tipo: "Revista de investigación",
      titulo: "PublicAAHD",
      subtitulo: "Publicaciones de la Asociación Argentina de Humanidades Digitales",
      url: "https://revistas.unlp.edu.ar/publicaahd/",
      descripcion: "Revista académica sobre Humanidades Digitales",
      esRevista: true,
    },
    {
      tipo: "Actas de Congreso",
      titulo: "La Cultura de los Datos",
      subtitulo: "III Congreso Internacional de la AAHD",
      organizacion: "Asociación Argentina de Humanidades Digitales",
      fecha: "7 al 9 de noviembre de 2018",
      lugar: "Rosario, Argentina",
      isbn: "978-950-34-1840-6",
      url: "#",
      esRevista: false,
    },
    {
      tipo: "Actas de Congreso",
      titulo: "Construcciones locales en contextos globales",
      subtitulo: "Congreso Internacional de Humanidades Digitales",
      organizacion: "Asociación Argentina de Humanidades Digitales",
      fecha: "7 al 9 de noviembre de 2016",
      lugar: "Buenos Aires, Argentina",
      isbn: "978-987-4019-97-4",
      url: "#",
      esRevista: false,
    },
    {
      tipo: "Actas de Jornadas",
      titulo: "Culturas, tecnologías, saberes",
      subtitulo: "I Jornadas Nacionales de Humanidades Digitales",
      organizacion: "Asociación Argentina de Humanidades Digitales",
      fecha: "17 al 19 de noviembre de 2014",
      lugar: "Buenos Aires, Argentina",
      isbn: "978-987-3617-89-8",
      url: "#",
      esRevista: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">Publicaciones</h1>

          {/* Descripción */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Actas, revistas, libros de la AAHD</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                La AAHD viene publicando todos los resultados de sus congresos y encuentros mediante libros de actas con
                atribución de ISBN o ISSN y el depósito de trabajos y presentaciones en Zenodo.
              </p>

              <p className="text-gray-600 mb-6">
                Adicionalmente, también hemos comenzado a publicar nuestra propia revista académica sobre Humanidades
                Digitales, Publicaciones de la AAHD.
              </p>

              <p className="text-gray-600">
                Conocé y accedé a nuestras publicaciones o envianos tu trabajo para las PublicAAHD a continuación.
              </p>
            </div>
          </div>

          {/* Publicaciones */}
          <div className="grid gap-8">
            {publicaciones.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={pub.esRevista ? "default" : "secondary"} className="mb-2">
                      {pub.tipo}
                    </Badge>
                    <BookOpen className="w-6 h-6 text-cyan-500" />
                  </div>

                  <CardTitle className="text-2xl text-slate-700 mb-2">{pub.titulo}</CardTitle>

                  {pub.subtitulo && <p className="text-lg text-gray-600 font-medium">{pub.subtitulo}</p>}
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pub.organizacion && <p className="text-gray-600">{pub.organizacion}</p>}

                    {pub.fecha && (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {pub.fecha}
                      </div>
                    )}

                    {pub.lugar && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {pub.lugar}
                      </div>
                    )}

                    {pub.isbn && (
                      <p className="text-sm text-gray-500">
                        <strong>ISBN:</strong> {pub.isbn}
                      </p>
                    )}

                    {pub.descripcion && <p className="text-gray-600">{pub.descripcion}</p>}
                  </div>

                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center">
                        Acceder
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
              <h3 className="text-2xl font-bold text-slate-700 mb-4">¿Tienes un trabajo para publicar?</h3>
              <p className="text-gray-600 mb-6">
                Envíanos tu trabajo para las PublicAAHD y forma parte de nuestra revista académica.
              </p>
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/contacto">Enviar propuesta</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
