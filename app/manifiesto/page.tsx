export default function ManifiestoPage() {
  const objetivosHD = [
    "formular nuevas preguntas y maneras de indagar objetos preexistentes",
    'revisar ciertas nociones clásicas como las de "corpus" o "canon"',
    "considerar un cambio de escala para los objetos a investigar, tanto en lo cualitativo como en lo cuantitativo",
    "postular e indagar acerca nuevas formas de lectura e interpretación posibilitadas por la digitalización de textos",
    "proponer nuevos métodos de conservación y acceso a información culturalmente significativa",
    "observar y comprender las discursividades producidas en los nuevos medios digitales",
    "considerar los cambios epistémicos y cognitivos en el ámbito de las humanidades y las ciencias de la información y la comunicación",
  ]

  const motivaciones = [
    "el impacto de la materialidad digital y sus herramientas en todos los ámbitos de las Humanidades",
    "la creación de nuevas identidades en el medio virtual y su proyección en la docencia, el aprendizaje y la investigación en Humanidades",
    "la necesidad de reflexionar acerca de las dinámicas culturales, la construcción del conocimiento y los parámetros de comunicación de las Humanidades en su trasvase a lo virtual",
    "la comprensión de las Humanidades Digitales como lugar de cruce entre un cambio de escala de la información a nivel mundial y su interpretación y práctica en distintos países",
  ]

  const objetivosAAHD = [
    "aportar nuevos enfoques sobre las tecnologías de la información y su uso en áreas disciplinares específicas del campo humanístico y social",
    "fomentar el estudio y la formación en el campo de las Humanidades Digitales",
    "impulsar el desarrollo y evaluación de nuevas herramientas digitales para preservar, analizar y poner a disposición recursos digitales accesibles en nuestras bibliotecas, archivos y museos",
    "trabajar conjuntamente para introducir contenidos afines en los programas educativos de todos los niveles",
    "promover el intercambio de experiencias de carácter científico entre investigadores, docentes, críticos, estudiantes e interesados en el campo de las Humanidades Digitales",
    "contribuir a la difusión y al acceso de recursos informáticos para la investigación, docencia y crítica en ciencias sociales y humanidades",
    "organizar encuentros sobre temas de investigación en Humanidades Digitales",
    "constituir un observatorio de prácticas en el uso de las tecnologías para la investigación en esas áreas",
    "fortalecer la comunidad de investigación en Humanidades Digitales en nuestro país, obrando como un ejemplo modélico de trabajo colaborativo",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-700 mb-8 text-center">Manifiesto</h1>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                ¿Qué son y para qué sirven las Humanidades Digitales?
              </h2>

              <p className="text-gray-600 mb-6">
                En Argentina, un grupo abierto formado por docentes, investigadores, documentadores, críticos,
                estudiantes e interesados provenientes de diferentes instituciones y áreas decidimos pensar en conjunto
                las Humanidades Digitales desde un lugar de cruce entre la teoría y la práctica, y desde la pluralidad y
                la interdisciplinariedad.
              </p>

              <p className="text-gray-600 mb-6">
                Después de un primer encuentro, realizado a partir de una convocatoria abierta, el día viernes 27 de
                septiembre de 2013 en la Biblioteca Nacional Argentina, el viernes 22 de noviembre de este año nos
                reunimos en la Facultad de Humanidades de la Universidad Nacional de La Plata con el propósito de
                constituir una Asociación Argentina de Humanidades Digitales.
              </p>

              <p className="text-gray-600 mb-6">
                Coincidimos en que las Humanidades Digitales no constituyen una disciplina temática sino un conjunto de
                procedimientos que atraviesan nuestras áreas de interés. En efecto, si bien las tecnologías digitales se
                encuentran presentes hoy día en las diferentes etapas de los procesos de investigación acerca de
                producciones textuales, discursivas, simbólicas y culturales (la búsqueda, difusión, acceso y
                almacenamiento de información), las Humanidades Digitales plantean la superación de este simple uso
                instrumental.
              </p>

              <p className="text-gray-600 mb-4">
                Creemos que solo cumpliendo con este objetivo es que pueden permitir un nuevo modo abordaje sobre
                objetos y problemáticas relacionadas con la investigación humanística para:
              </p>
            </div>
          </div>

          {/* Objetivos de las Humanidades Digitales */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3">
              {objetivosHD.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{objetivo},</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contexto y antecedentes */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Entendemos que la incorporación intrínseca de las tecnologías informáticas a los procesos de
                investigación en el ámbito de las Humanidades da lugar a nuevas metodologías, prácticas, recursos,
                evidencias, y preguntas para las disciplinas afines que requieren de una indagación, formación y
                actualización continua. Es por ello que, más allá de nuestro trabajo individual y/o relacionado con
                nuestros centros de producción, hemos decidido agruparnos en una asociación que nos permita compartir
                recursos, métodos, formación y resultados.
              </p>

              <p className="text-gray-600 mb-6">
                Existen en distintos ámbitos culturales diversas asociaciones y redes en Humanidades Digitales; en el
                ámbito iberoamericano nos preceden la asociación española HDH-Humanidades Digitales Hispánicas (
                <a href="http://www.humanidadesdigitales.org" className="text-cyan-600 hover:text-cyan-700">
                  http://www.humanidadesdigitales.org
                </a>
                ), la RedHD de México (
                <a href="http://www.humanidadesdigitales.mx/" className="text-cyan-600 hover:text-cyan-700">
                  http://www.humanidadesdigitales.mx/
                </a>
                ) y la AHDig en Brasil (
                <a href="http://ahdig.org/" className="text-cyan-600 hover:text-cyan-700">
                  http://ahdig.org/
                </a>
                ), cada una de ellas con un perfil y unos objetivos afines y otros relacionados con el desarrollo
                particular de ciertas disciplinas académicas de sus países o región.
              </p>

              <p className="text-gray-600 mb-4">
                En Argentina varios grupos y personas desarrollan su actividad dentro de los supuestos y principios de
                las Humanidades Digitales. Los presentes en el encuentro de La Plata y la Biblioteca Nacional Argentina,
                y en los otros organizados previamente como el ThatCAMP Buenos Aires (
                <a href="http://buenosaires2013.thatcamp.org/" className="text-cyan-600 hover:text-cyan-700">
                  http://buenosaires2013.thatcamp.org/
                </a>
                ), así como los convocados a través de la página web aahd.com.ar, manifiestamos aquí nuestra intención
                de asociarnos para constituir una asociación de Humanidades Digitales en Argentina, a partir de las
                siguientes motivaciones:
              </p>
            </div>
          </div>

          {/* Motivaciones */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <ul className="space-y-3">
              {motivaciones.map((motivacion, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{motivacion},</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Objetivos de la AAHD */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Entre nuestros objetivos se encuentran:</h2>
            <ul className="space-y-3">
              {objetivosAAHD.map((objetivo, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{objetivo},</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fecha */}
          <div className="text-center">
            <div className="bg-cyan-50 rounded-lg p-6 inline-block">
              <p className="text-slate-700 font-bold text-lg">22 de noviembre de 2013</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
