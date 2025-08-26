import { Metadata } from 'next'
import { getAllBits } from '@/lib/blog'
import BitsClient from './bits-client'

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
  const posts = getAllBits()
  return <BitsClient posts={posts} />
}