"use server"

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBitBySlug, BitPost } from '@/lib/blog'
import { getBitSlugs } from '@/lib/blog-data'
import BitPostClient from './bit-post-client'

interface BitPostPageProps {
  params: {
    slug: string
  }
}

// Datos hardcodeados como fallback (compatible con el sistema actual)
const fallbackBits: Record<string, BitPost> = {
  'tutorial-analisis-sentimientos-python': {
    slug: 'tutorial-analisis-sentimientos-python',
    title: 'Tutorial: Análisis de sentimientos con Python',
    excerpt: 'Guía paso a paso para implementar análisis de sentimientos en textos históricos usando Python y NLTK.',
    content: `
      <h1>Tutorial: Análisis de sentimientos con Python</h1>
      <p>Los textos históricos contienen una riqueza emocional que puede analizarse sistemáticamente usando técnicas de procesamiento de lenguaje natural.</p>
      
      <h2>Requisitos</h2>
      <ul>
        <li>Python 3.8+</li>
        <li>NLTK</li>
        <li>TextBlob</li>
        <li>Pandas</li>
      </ul>

      <h2>Instalación</h2>
      <pre><code>pip install nltk textblob pandas matplotlib</code></pre>

      <h2>Código Básico</h2>
      <pre><code>import nltk
from textblob import TextBlob
import pandas as pd

# Descargar recursos necesarios
nltk.download('vader_lexicon')

def analizar_sentimiento(texto):
    """
    Analiza el sentimiento de un texto
    Retorna: polaridad (-1 a 1) y subjetividad (0 a 1)
    """
    blob = TextBlob(texto)
    return {
        'polaridad': blob.sentiment.polarity,
        'subjetividad': blob.sentiment.subjectivity
    }

# Ejemplo de uso
texto = "Las crónicas coloniales revelan una compleja red de emociones"
resultado = analizar_sentimiento(texto)
print(f"Polaridad: {resultado['polaridad']}")
print(f"Subjetividad: {resultado['subjetividad']}")</code></pre>

      <h2>Análisis de Corpus Histórico</h2>
      <p>Para analizar múltiples documentos históricos:</p>
      
      <pre><code>def procesar_corpus(documentos):
    """
    Procesa una lista de documentos históricos
    """
    resultados = []
    
    for i, doc in enumerate(documentos):
        sentimiento = analizar_sentimiento(doc)
        resultados.append({
            'documento': i,
            'polaridad': sentimiento['polaridad'],
            'subjetividad': sentimiento['subjetividad']
        })
    
    return pd.DataFrame(resultados)

# Crear visualización
import matplotlib.pyplot as plt

df = procesar_corpus(documentos_historicos)
plt.scatter(df['polaridad'], df['subjetividad'])
plt.xlabel('Polaridad (Negativo ← → Positivo)')
plt.ylabel('Subjetividad (Objetivo ← → Subjetivo)')
plt.title('Análisis de Sentimientos - Corpus Histórico')
plt.show()</code></pre>

      <h2>Interpretación de Resultados</h2>
      <ul>
        <li><strong>Polaridad > 0</strong>: Sentimiento positivo</li>
        <li><strong>Polaridad < 0</strong>: Sentimiento negativo</li>
        <li><strong>Subjetividad > 0.5</strong>: Texto subjetivo/opinativo</li>
        <li><strong>Subjetividad < 0.5</strong>: Texto objetivo/factual</li>
      </ul>

      <h2>Próximos Pasos</h2>
      <p>Una vez domines estos conceptos básicos, puedes avanzar hacia:</p>
      <ul>
        <li>Análisis de sentimientos específicos para español histórico</li>
        <li>Comparación temporal de emociones en textos</li>
        <li>Integración con bases de datos de manuscritos</li>
      </ul>
    `,
    category: 'Tutorial',
    author: 'Dr. María González',
    date: '2024-01-18',
    readTime: '12 min',
    tags: ['Python', 'NLTK', 'Análisis de Sentimientos', 'Procesamiento de Texto'],
    url: 'https://github.com/aahd/tutorial-sentimientos',
    difficulty: 'Intermedio'
  },
  
  'base-datos-manuscritos-coloniales': {
    slug: 'base-datos-manuscritos-coloniales',
    title: 'Base de datos de manuscritos coloniales',
    excerpt: 'Acceso a una base de datos digitalizada de manuscritos del período colonial argentino.',
    content: `
      <h1>Base de datos de manuscritos coloniales</h1>
      <p>Una colección digitalizada de más de 2,000 manuscritos del período colonial argentino (1580-1810).</p>
      
      <h2>Características de la Base de Datos</h2>
      <ul>
        <li><strong>2,847 manuscritos</strong> digitalizados en alta resolución</li>
        <li><strong>Metadatos completos</strong>: fecha, autor, ubicación, tipo de documento</li>
        <li><strong>Transcripciones paleográficas</strong> para el 60% de los documentos</li>
        <li><strong>Búsqueda avanzada</strong> por múltiples criterios</li>
        <li><strong>API REST</strong> para acceso programático</li>
        <li><strong>Licencia abierta</strong> Creative Commons BY-SA 4.0</li>
      </ul>

      <h2>Tipos de Documentos</h2>
      <ul>
        <li><strong>Actas capitulares</strong> (432 documentos)</li>
        <li><strong>Correspondencia oficial</strong> (789 documentos)</li>
        <li><strong>Registros comerciales</strong> (651 documentos)</li>
        <li><strong>Documentos eclesiásticos</strong> (543 documentos)</li>
        <li><strong>Expedientes judiciales</strong> (432 documentos)</li>
      </ul>

      <h2>Acceso a los Datos</h2>
      <p>La base de datos está disponible en múltiples formatos:</p>

      <h3>Interfaz Web</h3>
      <p>Accede a través del portal web con herramientas de búsqueda avanzada y visualización de documentos.</p>

      <h3>API REST</h3>
      <pre><code># Ejemplo de consulta
curl -X GET "https://api.manuscritos-coloniales.org/v1/documents?year_range=1650-1700&type=acta"

# Respuesta ejemplo
{
  "total": 45,
  "documents": [
    {
      "id": "MC_001234",
      "title": "Acta del Cabildo de Buenos Aires",
      "date": "1678-03-15",
      "author": "Escribano Juan de Garay",
      "type": "acta_capitular",
      "transcription_available": true,
      "image_url": "https://cdn.manuscritos/MC_001234.jpg"
    }
  ]
}</code></pre>

      <h3>Dataset Completo</h3>
      <p>Descarga el dataset completo en formato CSV, JSON o XML para análisis offline.</p>

      <h2>Casos de Uso</h2>
      <ul>
        <li><strong>Investigación histórica</strong>: Análisis de patrones sociales y económicos</li>
        <li><strong>Lingüística histórica</strong>: Evolución del español rioplatense</li>
        <li><strong>Análisis de redes</strong>: Relaciones entre actores coloniales</li>
        <li><strong>Paleografía digital</strong>: Entrenamiento de modelos de reconocimiento</li>
      </ul>

      <h2>Metodología de Digitalización</h2>
      <p>Todos los documentos han sido procesados siguiendo estándares internacionales:</p>
      <ul>
        <li><strong>Digitalización</strong>: 600 DPI, formato TIFF sin compresión</li>
        <li><strong>Metadatos</strong>: Dublin Core extendido</li>
        <li><strong>Transcripción</strong>: Criterios paleográficos modernos</li>
        <li><strong>Control de calidad</strong>: Verificación por expertos paleógrafos</li>
      </ul>

      <h2>Colaboradores</h2>
      <p>Este proyecto es resultado de la colaboración entre:</p>
      <ul>
        <li>Archivo General de la Nación Argentina</li>
        <li>Universidad de Buenos Aires - Instituto Ravignani</li>
        <li>CONICET - Grupo de Estudios Coloniales</li>
        <li>Asociación Argentina de Humanidades Digitales</li>
      </ul>
    `,
    category: 'Recurso',
    author: 'Dra. Ana Martínez',
    date: '2024-01-10',
    readTime: '6 min',
    tags: ['Manuscritos', 'Historia Colonial', 'Base de Datos', 'API'],
    url: 'https://manuscritos-coloniales.org'
  }
  // ... más posts hardcodeados como fallback
}

async function getBitData(slug: string): Promise<BitPost | null> {
  // Intentar leer desde Markdown primero
  const markdownPost = getBitBySlug(slug)
  if (markdownPost) {
    return markdownPost
  }

  // Fallback a datos hardcodeados
  return fallbackBits[slug] || null
}

export async function generateStaticParams() {
  const slugs = getBitSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: BitPostPageProps): Promise<Metadata> {
  const post = await getBitData(params.slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: `${post.title} | AAHD Bits`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BitPostPage({ params }: BitPostPageProps) {
  const post = await getBitData(params.slug)

  if (!post) {
    notFound()
  }

  return <BitPostClient post={post} />
}