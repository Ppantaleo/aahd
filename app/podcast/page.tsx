import { Headphones, Play, Music, Mic } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PodcastPage() {
  const plataformas = [
    {
      nombre: "Spotify",
      url: "https://creators.spotify.com/pod/profile/asociacin-argentina-de-humanidades-digitales/",
    },
    { nombre: "SoundCloud", url: "#" },
    { nombre: "Google Podcasts", url: "#" },
    { nombre: "YouTube", url: "#" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">Podcast</h1>

          {/* Descripción */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 text-center">
            <Headphones className="w-16 h-16 text-cyan-500 mx-auto mb-6" />

            <h2 className="text-2xl font-bold text-slate-700 mb-6">
              ¿Querés saber quiénes están haciendo Humanidades Digitales y cómo lo están haciendo?
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Escuchá nuestro podcast desde esta página o en nuestros canales de Spotify, Soundcloud, Google podcasts y
              YouTube.
            </p>

            {/* Plataformas */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {plataformas.map((plataforma, index) => (
                <Button key={index} asChild variant="outline" className="hover:bg-cyan-50 hover:border-cyan-300">
                  <Link href={plataforma.url} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    {plataforma.nombre}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Créditos */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-slate-700 mb-6 text-center">Créditos</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <Music className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-700 mb-2">Música intro y outro</h4>
                <p className="text-gray-600">Molecular, de Gabriel Calarco</p>
              </div>

              <div className="text-center">
                <Mic className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-700 mb-2">Locución</h4>
                <p className="text-gray-600">Mariano Vilar</p>
              </div>
            </div>
          </div>

          {/* Iframe del podcast */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-700 mb-6 text-center">Escuchar Podcast</h3>

            <div className="w-full">
              <iframe
                src="https://creators.spotify.com/pod/profile/asociacin-argentina-de-humanidades-digitales/"
                width="100%"
                height="500"
                frameBorder="0"
                className="border rounded-lg"
                title="Podcast AAHD - Asociación Argentina de Humanidades Digitales"
                allow="encrypted-media"
              >
                {/* Fallback content */}
                <p className="text-center text-gray-500 py-8">
                  El reproductor de podcast se cargará aquí. Si no puedes verlo, por favor{" "}
                  <Link
                    href="https://creators.spotify.com/pod/profile/asociacin-argentina-de-humanidades-digitales/"
                    className="text-cyan-600 hover:text-cyan-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    haz clic aquí
                  </Link>{" "}
                  para acceder directamente en Spotify.
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
