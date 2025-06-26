import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  RotateCcw,
  Database,
  Users,
  BookOpen,
  Unlock,
  Settings,
  Facebook,
  Youtube,
  Mail,
  FileText,
  List,
} from "lucide-react"

export default function HomePage() {
  const stats = [
    { label: "Años de la comunidad", value: "10", suffix: "+" },
    { label: "Participantes", value: "1000", suffix: "+" },
    { label: "Eventos y congresos", value: "15", suffix: "+" },
    { label: "Publicaciones", value: "5", suffix: "+" },
  ]

  const pillars = [
    {
      title: "Giro Digital",
      description:
        "Nos interesa reflexionar en el impacto de la digitalización en la investigación y enseñanza de las Humanidades.",
      icon: RotateCcw,
    },
    {
      title: "Datos",
      description:
        "Los datos como cultura, la cultura de los datos, y los datos contextualizados para su correcta comprensión.",
      icon: Database,
    },
    {
      title: "Colaboración",
      description:
        "Somos una comunidad de práctica que explora las nuevas formas de trabajo y colaboración en las Humanidades.",
      icon: Users,
    },
    {
      title: "Humanidades",
      description:
        "Nuestro punto de partida para pensar y hacer investigación con medios digitales son las Ciencias Humanas.",
      icon: BookOpen,
    },
    {
      title: "Abierto",
      description: "Nos interpelan las nuevas formas de hacer investigación con datos y metodologías abiertas.",
      icon: Unlock,
    },
    {
      title: "Procesos",
      description:
        "Buscamos identificar, documentar y dar mayor visibilidad a los procesos, no solo a los resultados de investigación.",
      icon: Settings,
    },
  ]

  const activities = [
    {
      title: "Grupo de Facebook",
      description: "Grupo de novedades e información abierto.",
      icon: Facebook,
      url: "#",
    },
    {
      title: "Repositorio Zenodo",
      description: "Artículos y escritos de acceso libre.",
      icon: FileText,
      url: "#",
    },
    {
      title: "Lista de distribución",
      description: "Recibí todas las novedades por e-mail.",
      icon: Mail,
      url: "#",
    },
    {
      title: "Wiki de herramientas",
      description: "Explorá herramientas de Humanidades Digitales",
      icon: List,
      url: "#",
    },
    {
      title: "Canal de YouTube",
      description: "Podcast, eventos y más.",
      icon: Youtube,
      url: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aahd/images/nube-humanidades-digitales.png"
            alt="Nube de palabras de Humanidades Digitales"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-cyan-500/20"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight hero-text-shadow">
            Asociación
            <br />
            Argentina de
            <br />
            Humanidades
            <br />
            Digitales
          </h1>

          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 transition-all duration-300 px-8 py-3 text-lg"
          >
            <Link href="/about">Conocenos</Link>
          </Button>
        </div>
      </section>

      {/* Sobre la AAHD Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-8">Sobre la AAHD</h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                La Asociación Argentina de Humanidades Digitales (AAHD) es una comunidad de práctica abierta cuyo
                objetivo es promover la investigación, transmisión y difusión del conocimiento en el campo de las
                Humanidades Digitales, tendiendo puentes entre distintas disciplinas y líneas de investigación.
              </p>

              <p>
                Las Humanidades Digitales no constituyen una disciplina temática sino un conjunto de procedimientos que
                atraviesan nuestras áreas de interés.
              </p>

              <p>
                En efecto, si bien las tecnologías digitales se encuentran presentes hoy día en las diferentes etapas de
                los procesos de investigación acerca de producciones textuales, discursivas, simbólicas y culturales (la
                búsqueda, difusión, acceso y almacenamiento de información), las Humanidades Digitales plantean la
                superación de este simple uso instrumental.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="/about">Conocé más sobre AAHD</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">La AAHD en números</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">
                  {stat.value}
                  <span className="text-cyan-500">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Humanidades Digitales Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">Humanidades Digitales</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                    <CardTitle className="text-xl text-slate-700">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{pillar.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Twitter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-8">Tweets by aahdArg</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-600 mb-4">Síguenos en Twitter para las últimas novedades</p>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="https://twitter.com/aahdArg" target="_blank">
                  Seguir @aahdArg
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">Nuestras Actividades</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                    <CardTitle className="text-lg text-slate-700">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={activity.url}>Acceder</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
