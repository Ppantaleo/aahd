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
import type { GetStaticProps } from "next"
import { getStaticTranslations } from "@/lib/translations"

interface HomePageProps {
  translations: any
}

export default function HomePage({ translations }: HomePageProps) {
  const stats = [
    { label: translations.home.stats.years, value: "10", suffix: "+" },
    { label: translations.home.stats.participants, value: "1000", suffix: "+" },
    { label: translations.home.stats.events, value: "15", suffix: "+" },
    { label: translations.home.stats.publications, value: "5", suffix: "+" },
  ]

  const pillars = [
    {
      title: translations.home.pillars.digital_turn.title,
      description: translations.home.pillars.digital_turn.description,
      icon: RotateCcw,
    },
    {
      title: translations.home.pillars.data.title,
      description: translations.home.pillars.data.description,
      icon: Database,
    },
    {
      title: translations.home.pillars.collaboration.title,
      description: translations.home.pillars.collaboration.description,
      icon: Users,
    },
    {
      title: translations.home.pillars.humanities.title,
      description: translations.home.pillars.humanities.description,
      icon: BookOpen,
    },
    {
      title: translations.home.pillars.open.title,
      description: translations.home.pillars.open.description,
      icon: Unlock,
    },
    {
      title: translations.home.pillars.processes.title,
      description: translations.home.pillars.processes.description,
      icon: Settings,
    },
  ]

  const activities = [
    {
      title: translations.home.activities.facebook.title,
      description: translations.home.activities.facebook.description,
      icon: Facebook,
      url: "#",
    },
    {
      title: translations.home.activities.zenodo.title,
      description: translations.home.activities.zenodo.description,
      icon: FileText,
      url: "#",
    },
    {
      title: translations.home.activities.mailing.title,
      description: translations.home.activities.mailing.description,
      icon: Mail,
      url: "#",
    },
    {
      title: translations.home.activities.wiki.title,
      description: translations.home.activities.wiki.description,
      icon: List,
      url: "#",
    },
    {
      title: translations.home.activities.youtube.title,
      description: translations.home.activities.youtube.description,
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
            {translations.home.title}
          </h1>

          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 transition-all duration-300 px-8 py-3 text-lg"
          >
            <Link href="/about">{translations.home.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Sobre la AAHD Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-8">{translations.home.about.title}</h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>{translations.home.about.description1}</p>
              <p>{translations.home.about.description2}</p>
              <p>{translations.home.about.description3}</p>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="/about">{translations.home.about.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">{translations.home.stats.title}</h2>

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
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">{translations.home.pillars.title}</h2>

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
            <h2 className="text-3xl font-bold text-slate-700 mb-8">{translations.home.twitter.title}</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-600 mb-4">{translations.home.twitter.description}</p>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="https://twitter.com/aahdArg" target="_blank">
                  {translations.home.twitter.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">{translations.home.activities.title}</h2>

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
                      <Link href={activity.url}>{translations.home.activities.access}</Link>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = getStaticTranslations(locale || "es")

  return {
    props: {
      translations,
    },
  }
}