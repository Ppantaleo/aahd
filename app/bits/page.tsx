"use server"

import { Metadata } from 'next'
import { getAllBits, BitPost } from '@/lib/blog'
import BitsClient from './bits-client'

// Datos hardcodeados como fallback (del sistema actual)
const fallbackBits: BitPost[] = [
  {
    slug: 'tutorial-analisis-sentimientos-python',
    title: 'Tutorial: Análisis de sentimientos con Python',
    excerpt: 'Guía paso a paso para implementar análisis de sentimientos en textos históricos usando Python y NLTK.',
    content: '', // Se llena en el template individual
    category: 'Tutorial',
    author: 'Dr. María González',
    date: '2024-01-18',
    readTime: '12 min',
    tags: ['Python', 'NLTK', 'Análisis de Sentimientos', 'Procesamiento de Texto'],
    url: 'https://github.com/aahd/tutorial-sentimientos',
    difficulty: 'Intermedio'
  },
  {
    slug: 'base-datos-manuscritos-coloniales',
    title: 'Base de datos de manuscritos coloniales',
    excerpt: 'Acceso a una base de datos digitalizada de manuscritos del período colonial argentino.',
    content: '',
    category: 'Recurso',
    author: 'Dra. Ana Martínez',
    date: '2024-01-10',
    readTime: '6 min',
    tags: ['Manuscritos', 'Historia Colonial', 'Base de Datos', 'API'],
    url: 'https://manuscritos-coloniales.org'
  },
  {
    slug: 'paleta-colores-visualizaciones',
    title: 'Paleta de colores para visualizaciones históricas',
    excerpt: 'Conjunto de paletas de colores diseñadas específicamente para visualizaciones de datos históricos.',
    content: '',
    category: 'Herramienta',
    author: 'Lic. Carlos Ruiz',
    date: '2023-12-28',
    readTime: '4 min',
    tags: ['Visualización', 'Colores', 'Diseño', 'CSS'],
    url: 'https://github.com/aahd/historical-colors'
  },
  {
    slug: 'guia-buenas-practicas-digitalizacion',
    title: 'Guía de buenas prácticas en digitalización',
    excerpt: 'Recomendaciones para la digitalización de documentos y archivos históricos.',
    content: '',
    category: 'Guía',
    author: 'Dr. Fernando López',
    date: '2023-12-15',
    readTime: '10 min',
    tags: ['Digitalización', 'Archivos', 'Metodología', 'Conservación']
  },
  {
    slug: 'script-limpieza-datos-ocr',
    title: 'Script para limpieza de datos OCR',
    excerpt: 'Herramienta automatizada para limpiar y corregir errores comunes en textos procesados con OCR.',
    content: '',
    category: 'Código',
    author: 'Dr. Carlos Martín',
    date: '2023-12-02',
    readTime: '8 min',
    tags: ['Python', 'OCR', 'Limpieza de Datos', 'Automatización'],
    url: 'https://github.com/aahd/ocr-cleanup'
  },
  {
    slug: 'plantillas-mapas-interactivos',
    title: 'Plantillas para mapas interactivos',
    excerpt: 'Plantillas HTML/CSS/JS para crear mapas interactivos de eventos históricos.',
    content: '',
    category: 'Plantilla',
    author: 'Lic. Sofia Vega',
    date: '2023-11-18',
    readTime: '6 min',
    tags: ['JavaScript', 'Mapas', 'Interactividad', 'HTML'],
    url: 'https://github.com/aahd/interactive-maps'
  }
]

async function getBitsData(): Promise<BitPost[]> {
  try {
    // Intentar leer desde Markdown primero
    const markdownPosts = getAllBits()
    if (markdownPosts.length > 0) {
      return markdownPosts
    }
  } catch (error) {
    console.warn('No se pudieron leer posts de Markdown, usando fallback')
  }

  // Fallback a datos hardcodeados
  return fallbackBits
}

export const metadata: Metadata = {
  title: 'Bits - Recursos para Humanidades Digitales | AAHD',
  description: 'Recursos prácticos, herramientas, tutoriales y fragmentos de código para potenciar tus proyectos de humanidades digitales.',
  openGraph: {
    title: 'Bits - Recursos para Humanidades Digitales',
    description: 'Recursos prácticos, herramientas, tutoriales y fragmentos de código para potenciar tus proyectos de humanidades digitales.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bits - Recursos para Humanidades Digitales',
    description: 'Recursos prácticos, herramientas, tutoriales y fragmentos de código para potenciar tus proyectos de humanidades digitales.',
  },
}

export default async function BitsPage() {
  const posts = await getBitsData()

  return <BitsClient posts={posts} />
}