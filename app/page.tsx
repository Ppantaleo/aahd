"use client"

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
import { useTranslations } from "@/lib/translations"

export default function HomePage() {
  const { t } = useTranslations()

  const stats = [
    { label: t.home.stats.years, value: "10", suffix: "+" },
    { label: t.home.stats.participants, value: "1000", suffix: "+" },
    { label: t.home.stats.events, value: "15", suffix: "+" },
    { label: t.home.stats.publications, value: "5", suffix: "+" },
  ]

  const pillars = [
    {
      title: t.home.pillars.digital_turn.title,
      description: t.home.pillars.digital_turn.description,
      icon: RotateCcw,
    },
    {
      title: t.home.pillars.data.title,
      description: t.home.pillars.data.description,
      icon: Database,
    },
    {
      title: t.home.pillars.collaboration.title,
      description: t.home.pillars.collaboration.description,
      icon: Users,
    },
    {
      title: t.home.pillars.humanities.title,
      description: t.home.pillars.humanities.description,
      icon: BookOpen,
    },
    {
      title: t.home.pillars.open.title,
      description: t.home.pillars.open.description,
      icon: Unlock,
    },
    {
      title: t.home.pillars.processes.title,
      description: t.home.pillars.processes.description,
      icon: Settings,
    },
  ]

  const activities = [
    {
      title: t.home.activities.facebook.title,
      description: t.home.activities.facebook.description,
      icon: Facebook,
      url: "https://www.facebook.com/groups/humanidadesdigitalesargentina",
    },
    {
      title: t.home.activities.zenodo.title,
      description: t.home.activities.zenodo.description,
      icon: FileText,
      url: "https://zenodo.org/communities/humanidades_digitales/",
    },
    {
      title: t.home.activities.mailing.title,
      description: t.home.activities.mailing.description,
      icon: Mail,
      url: "https://groups.google.com/u/0/g/novedadesdelaAAHD/about",
    },
    {
      title: t.home.activities.wiki.title,
      description: t.home.activities.wiki.description,
      icon: List,
      url: "http://www.larhud.ibict.br/index.php?title=Herramientas",
    },
    {
      title: t.home.activities.youtube.title,
      description: t.home.activities.youtube.description,
      icon: Youtube,
      url: "https://www.youtube.com/channel/UCVw7jhPkN0URG92Abnvs5MA",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nube-humanidades-digitales.png"
            alt="Nube de palabras de Humanidades Digitales"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-cyan-500/10"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight hero-text-shadow">
            {t.home.title}
          </h1>

          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 transition-all duration-300 px-8 py-3 text-lg"
          >
            <Link href="/about">{t.home.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Sobre la AAHD Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-8">{t.home.about.title}</h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>{t.home.about.description1}</p>
              <p>{t.home.about.description2}</p>
              <p>{t.home.about.description3}</p>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="/about">{t.home.about.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">{t.home.stats.title}</h2>

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
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">{t.home.pillars.title}</h2>

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
            <h2 className="text-3xl font-bold text-slate-700 mb-8">{t.home.twitter.title}</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-600 mb-4">{t.home.twitter.description}</p>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="https://twitter.com/aahdArg" target="_blank">
                  {t.home.twitter.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">{t.home.activities.title}</h2>

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
                      <Link href={activity.url}>{t.home.activities.access}</Link>
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