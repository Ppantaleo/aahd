import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ComunidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">
            Asociación Argentina de Humanidades Digitales
          </h1>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Somos una comunidad de práctica y nuestro objetivo es funcionar como un nodo sobre Humanidades
                Digitales. ¿Querés ser parte de nuestra comunidad y estar en contacto con humanistas digitales? Solo
                tenés que completar este formulario.
              </p>

              <h2 className="text-2xl font-bold text-slate-700 mb-6">Formulario de registro</h2>

              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Completar formulario de registro
                </Link>
              </Button>
            </div>
          </div>

          {/* Tabla de miembros de la comunidad */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Miembros de la Comunidad</h2>
            <p className="text-gray-600 mb-6 text-center">
              En esta tabla encontrarás los detalles de las personas que conforman nuestra comunidad, con una breve
              biografía y sus intereses.
            </p>

            {/* Iframe placeholder para tabla de Google Drive */}
            <div className="w-full">
              {/* 
                Reemplazar el src con la URL real del iframe de Google Drive
                Ejemplo: src="https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pubhtml?widget=true&headers=false"
              */}
              <iframe
                src="#"
                width="100%"
                height="600"
                frameBorder="0"
                className="border rounded-lg"
                title="Tabla de miembros de la comunidad AAHD"
              >
                {/* Fallback content */}
                <p className="text-center text-gray-500 py-8">
                  La tabla de miembros se cargará aquí. Si no puedes verla, por favor{" "}
                  <Link href="#" className="text-cyan-600 hover:text-cyan-700">
                    haz clic aquí
                  </Link>{" "}
                  para acceder directamente.
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
