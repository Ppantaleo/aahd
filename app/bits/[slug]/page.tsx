import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBitBySlug } from '@/lib/blog'
import { getBitSlugs } from '@/lib/blog-data'
import BitPostClient from './bit-post-client'

interface BitPostPageProps {
  params: {
    slug: string
  }
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
  const post = getBitBySlug(params.slug)

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
  const post = getBitBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BitPostClient post={post} />
}