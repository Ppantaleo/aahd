"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "@/lib/translations"

// Interfaz del post (definida aquí para evitar problemas de importación)
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

export default function BitPostClient({ post }: BitPostClientProps) {
  const { t } = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, text: string, level: number}>>([])

  useEffect(() => {
    setMounted(true)
    
    // Generar tabla de contenidos dinámicamente basada en los headings del contenido
    const generateTableOfContents = () => {
      // Esperar un momento para que el contenido se renderice
      setTimeout(() => {
        const contentElement = document.querySelector('.prose')
        if (contentElement) {
          const headings = contentElement.querySelectorAll('h1, h2, h3, h4')
          const toc = Array.from(headings).map((heading, index) => {
            const id = `heading-${index}`
            heading.id = id
            const level = parseInt(heading.tagName.charAt(1))
            return {
              id,
              text: heading.textContent || '',
              level
            }
          })
          setTableOfContents(toc)
        }
      }, 100)
    }

    generateTableOfContents()
  }, [post.content])

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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-slate-700 mb-4">
                      Tabla de contenidos
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToHeading(item.id)}
                          className={`block text-left w-full text-sm text-gray-600 hover:text-cyan-600 transition-colors ${
                            item.level > 2 ? 'ml-4' : ''
                          }`}
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
              <div className="bg-white rounded-lg shadow-sm">
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

                {/* Contenido Markdown con estilos mejorados */}
                <div className="p-6">
                  <div 
                    className="prose prose-lg max-w-none
                      prose-headings:text-slate-700 prose-headings:font-semibold
                      prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8 prose-h1:text-slate-800
                      prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-slate-700 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
                      prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-slate-600
                      prose-h4:text-lg prose-h4:font-medium prose-h4:mt-4 prose-h4:mb-2 prose-h4:text-slate-600
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
                      prose-strong:text-slate-700 prose-strong:font-semibold
                      prose-em:text-slate-600 prose-em:italic
                      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-slate-800 prose-code:font-mono
                      prose-pre:bg-slate-800 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                      prose-pre:code:bg-transparent prose-pre:code:p-0 prose-pre:code:text-gray-100
                      prose-ul:my-4 prose-ul:text-gray-700 prose-ul:space-y-1
                      prose-ol:my-4 prose-ol:text-gray-700 prose-ol:space-y-1
                      prose-li:my-1 prose-li:text-gray-700 prose-li:leading-relaxed
                      prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:bg-gray-50 prose-blockquote:text-slate-600
                      prose-a:text-cyan-600 prose-a:no-underline prose-a:font-medium hover:prose-a:text-cyan-700 hover:prose-a:underline
                      prose-table:my-6 prose-table:w-full prose-table:border-collapse
                      prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-2 prose-th:text-left prose-th:font-semibold prose-th:text-slate-700
                      prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-td:text-gray-700
                      prose-hr:my-8 prose-hr:border-gray-300"
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
    </div>
  )
}