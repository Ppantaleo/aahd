"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "@/lib/translations"

interface BitPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
  url?: string
  difficulty?: string
}

interface BitPostClientProps {
  post: BitPost
}

interface TocItem {
  id: string
  text: string
  level: number
}

export default function BitPostClient({ post }: BitPostClientProps) {
  const { t } = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [tableOfContents, setTableOfContents] = useState<TocItem[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !contentRef.current) return

    const generateTableOfContents = () => {
      const headings = contentRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6')
      
      if (!headings || headings.length === 0) return

      const toc: TocItem[] = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`
        heading.id = id
        heading.scrollMarginTop = '100px' // Espacio para el header fijo
        
        const level = parseInt(heading.tagName.charAt(1))
        const text = heading.textContent || ''
        
        return { id, text, level }
      })
      
      setTableOfContents(toc)
    }

    // Delay para asegurar que el DOM esté completamente renderizado
    const timer = setTimeout(generateTableOfContents, 200)
    return () => clearTimeout(timer)
  }, [mounted, post.content])

  const handleShare = async () => {
    if (!mounted) return

    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    if (!mounted) return
    
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('¡Enlace copiado al portapapeles!')
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tutorial': return "📚"
      case 'recurso': case 'resource': return "📊"
      case 'herramienta': case 'tool': return "🛠️"
      case 'guía': case 'guide': return "📖"
      case 'código': case 'code': return "💻"
      case 'plantilla': case 'template': return "🎨"
      default: return "📄"
    }
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // Offset para el header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con fondo */}
      <div className="bg-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/bits" 
              className="inline-flex items-center text-cyan-300 hover:text-cyan-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Bits
            </Link>

            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">
                {getCategoryIcon(post.category)} {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-6 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('es-AR')}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              {post.difficulty && (
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  {post.difficulty}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Tabla de contenidos (solo en desktop) */}
            {tableOfContents.length > 0 && (
              <div className="hidden lg:block">
                <div className="sticky top-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h3 className="font-semibold text-slate-700 mb-4">
                      Tabla de contenidos
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToHeading(item.id)}
                          className={`block text-left w-full text-sm text-gray-600 hover:text-cyan-600 transition-colors py-1 ${
                            item.level === 1 ? '' :
                            item.level === 2 ? 'ml-2' :
                            item.level === 3 ? 'ml-4' :
                            'ml-6'
                          }`}
                          style={{ textAlign: 'left' }}
                        >
                          {item.text}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            )}

            {/* Contenido del post */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border">
                {/* Acciones del post */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleShare}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Compartir
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Contenido Markdown */}
                <div className="p-6">
                  <div 
                    ref={contentRef}
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>

                {/* Footer del post */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Publicado por
                      </p>
                      <p className="font-medium text-slate-700">
                        {post.author}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">
                        Publicado el
                      </p>
                      <p className="font-medium text-slate-700">
                        {new Date(post.date).toLocaleDateString('es-AR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navegación a otros posts */}
              <div className="mt-8 text-center">
                <Link href="/bits">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver a Bits
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .markdown-content {
          max-width: none;
          line-height: 1.7;
          color: #374151;
        }

        .markdown-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 2rem 0 1rem 0;
          scroll-margin-top: 100px;
        }

        .markdown-content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #374151;
          margin: 2rem 0 1rem 0;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.5rem;
          scroll-margin-top: 100px;
        }

        .markdown-content h3 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #4b5563;
          margin: 1.5rem 0 0.75rem 0;
          scroll-margin-top: 100px;
        }

        .markdown-content h4 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #4b5563;
          margin: 1.25rem 0 0.5rem 0;
          scroll-margin-top: 100px;
        }

        .markdown-content p {
          margin: 1rem 0;
          line-height: 1.7;
        }

        .markdown-content strong {
          font-weight: 600;
          color: #1f2937;
        }

        .markdown-content em {
          font-style: italic;
          color: #4b5563;
        }

        .markdown-content ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .markdown-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .markdown-content li {
          margin: 0.25rem 0;
          line-height: 1.6;
        }

        .markdown-content blockquote {
          border-left: 4px solid #06b6d4;
          background-color: #f8fafc;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #4b5563;
        }

        .markdown-content code {
          background-color: #f1f5f9;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-family: 'Courier New', monospace;
          color: #1e293b;
        }

        .markdown-content pre {
          background-color: #1e293b;
          color: #f1f5f9;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
          color: #f1f5f9;
        }

        .markdown-content a {
          color: #06b6d4;
          text-decoration: none;
          font-weight: 500;
        }

        .markdown-content a:hover {
          color: #0891b2;
          text-decoration: underline;
        }

        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }

        .markdown-content th,
        .markdown-content td {
          border: 1px solid #d1d5db;
          padding: 0.5rem;
          text-align: left;
        }

        .markdown-content th {
          background-color: #f9fafb;
          font-weight: 600;
          color: #1f2937;
        }

        .markdown-content hr {
          border: none;
          border-top: 1px solid #d1d5db;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  )
}