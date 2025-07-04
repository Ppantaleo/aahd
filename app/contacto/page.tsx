"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock } from "lucide-react"
import { useTranslations } from "@/lib/translations"

export default function ContactoPage() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">{t.contact.title}</h1>

          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {t.contact.description}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de contacto comentado */}
            {/*
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-700">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input id="nombre" type="text" required />
                    </div>
                    <div>
                      <Label htmlFor="apellido">Apellido *</Label>
                      <Input id="apellido" type="text" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="institucion">Institución</Label>
                    <Input id="institucion" type="text" />
                  </div>

                  <div>
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input id="asunto" type="text" required />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea id="mensaje" rows={6} placeholder="Cuéntanos en qué podemos ayudarte..." required />
                  </div>

                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
            */}

            {/* Botón de contacto por email */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-700 text-center">{t.contact.email_us}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{t.contact.email_description}</p>
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <a href="mailto:hdargentina13@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    {t.contact.email_button}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Información de contacto */}
            <div className="lg:col-span-2">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-700 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-cyan-500" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      <a href="mailto:hdargentina13@gmail.com" className="text-cyan-600 hover:text-cyan-700">
                        hdargentina13@gmail.com
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-700 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-cyan-500" />
                      {t.contact.address_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                     Asociación Argentina de Humanidades Digitales
                      <br />
                     AAHD
                      <br />
                      Argentina
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-700 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-cyan-500" />
                      {t.contact.hours_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {t.contact.hours_weekdays}
                      <br />
                      {t.contact.hours_saturday}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Otras formas de contacto */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700">{t.contact.other_ways_title}</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">{t.contact.memberships_title}</h4>
                    <p className="text-gray-600">
                      <a href="mailto:hdargentina13@gmail.com?subject=Membresía" className="text-cyan-600 hover:text-cyan-700">
                        hdargentina13@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">{t.contact.events_title}</h4>
                    <p className="text-gray-600">
                      <a href="mailto:hdargentina13@gmail.com?subject=Eventos" className="text-cyan-600 hover:text-cyan-700">
                        hdargentina13@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">{t.contact.collaborations_title}</h4>
                    <p className="text-gray-600">
                      <a href="mailto:hdargentina13@gmail.com?subject=Colaboraciones" className="text-cyan-600 hover:text-cyan-700">
                        hdargentina13@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
