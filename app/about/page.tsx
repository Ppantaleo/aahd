export default function AboutPage() {
  const coordinacion = [
    { cargo: "Presidenta", nombre: "Gimena del Rio Riande", institucion: "CONICET" },
    { cargo: "Vicepresidenta", nombre: "Virginia Brussa", institucion: "UNR" },
    { cargo: "Secretaría", nombre: "Romina De León", institucion: "CONICET" },
    { cargo: "Vocal 1", nombre: "Lucía Cantamutto", institucion: "UNRN" },
    { cargo: "Vocal 2", nombre: "María Bernarda Torres", institucion: "UNCo" },
    { cargo: "Vocal 3", nombre: "Carlos Nusch", institucion: "UNLP" },
    { cargo: "Vocal 4", nombre: "Marisol Fila", institucion: "UBA /UMICH" },
    { cargo: "Vocal 5", nombre: "Andrés Olaizola", institucion: "CONICET" },
  ]

  const equipoAdicional = [
    { cargo: "Difusión", nombre: "Nicolás Lázaro", institucion: "UCSF" },
    { cargo: "Web Manager", nombre: "Patricio Pantaleo", institucion: "Universidad Nacional de Córdoba" },
  ]

  const objetivos = [
    "aportar nuevos enfoques sobre las tecnologías de la información y su uso en áreas disciplinares específicas del campo humanístico y social",
    "fomentar el estudio y la formación en el campo de las Humanidades Digitales",
    "impulsar el desarrollo y evaluación de nuevas herramientas digitales para preservar, analizar y poner a disposición recursos digitales accesibles en nuestras bibliotecas, archivos y museos",
    "trabajar conjuntamente para introducir contenidos afines en los programas educativos de todos los niveles",
    "promover el intercambio de experiencias de carácter científico entre investigadores, docentes, críticos, estudiantes e interesados en el campo de las Humanidades Digitales",
    "contribuir a la difusión y al acceso de recursos informáticos para la investigación, docencia y crítica en ciencias sociales y humanidades",
    "organizar encuentros sobre temas de investigación en Humanidades",
    "constituir un observatorio de prácticas en el uso de las tecnologías para la investigación en esas áreas",
    "fortalecer la comunidad de investigación en Humanidades Digitales en nuestro país, obrando como un ejemplo modélico de trabajo colaborativo",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">Quienes somos</h1>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                La Asociación Argentina de Humanidades Digitales, fundada en 2013 en Buenos Aires, Argentina, es una
                comunidad de práctica abierta cuyo propósito esencial es promover la investigación, transmisión y
                difusión del conocimiento en el campo de las Humanidades Digitales fomentando, desde un lugar de cruce
                entre la teoría y la práctica y desde la pluralidad y la interdisciplinariedad, el intercambio de ideas,
                métodos y enfoques practicados por sus miembros: docentes, investigadorxs, documentadorxs,
                bibliotecarixs, críticxs, estudiantes e interesadxs provenientes de diferentes instituciones y áreas.
              </p>

              <p className="text-gray-600 mb-6">
                Las Humanidades Digitales no constituyen una disciplina temática sino un conjunto de procedimientos que
                atraviesan nuestras áreas de interés.
              </p>

              <p className="text-gray-600 mb-6">
                En efecto, si bien las tecnologías digitales se encuentran presentes hoy día en las diferentes etapas de
                los procesos de investigación acerca de producciones textuales, discursivas, simbólicas y culturales (la
                búsqueda, difusión, acceso y almacenamiento de información), las Humanidades Digitales plantean la
                superación de este simple uso instrumental.
              </p>

              <p className="text-gray-600 mb-8">
                Creemos que solo cumpliendo con este objetivo es que pueden permitir un nuevo abordaje sobre objetos y
                problemáticas relacionadas con la investigación social y humanística en nuestro país.
              </p>
            </div>
          </div>

          {/* Objetivos */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Nuestros Objetivos</h2>
            <p className="text-gray-600 mb-4">Entre nuestros objetivos se encuentran:</p>
            <ul className="space-y-3">
              {objetivos.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{objetivo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinación */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Coordinación de la AAHD</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {coordinacion.map((miembro, index) => (
                <div key={index} className="border-l-4 border-cyan-500 pl-4 py-2">
                  <h3 className="font-semibold text-slate-700">{miembro.cargo}</h3>
                  <p className="text-gray-600">{miembro.nombre}</p>
                  <p className="text-sm text-gray-500">({miembro.institucion})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo Adicional */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              {equipoAdicional.map((miembro, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">{miembro.cargo}</h3>
                  <div className="border-l-4 border-cyan-500 pl-4 py-2">
                    <p className="text-gray-600 font-medium">{miembro.nombre}</p>
                    <p className="text-sm text-gray-500">({miembro.institucion})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
