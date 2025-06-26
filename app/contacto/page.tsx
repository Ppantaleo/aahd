import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">Contacto</h1>

          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            ¿Tienes preguntas, propuestas o quieres formar parte de nuestra comunidad? Nos encantaría escucharte.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
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

            {/* Información de contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-cyan-500" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">info@aahd.net.ar</p>
                  <p className="text-gray-600">secretaria@aahd.net.ar</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-cyan-500" />
                    Dirección
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Universidad de Buenos Aires
                    <br />
                    Facultad de Filosofía y Letras
                    <br />
                    Buenos Aires, Argentina
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-cyan-500" />
                    Horarios de atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 - 17:00
                    <br />
                    Sábados: 9:00 - 13:00
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700">Otras formas de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">Para membresías:</h4>
                    <p className="text-gray-600">membresias@aahd.net.ar</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">Para eventos:</h4>
                    <p className="text-gray-600">eventos@aahd.net.ar</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">Para colaboraciones:</h4>
                    <p className="text-gray-600">colaboraciones@aahd.net.ar</p>
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
