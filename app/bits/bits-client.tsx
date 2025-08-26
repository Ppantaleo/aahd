"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Search, Calendar, ExternalLink, Code, Database, Palette, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BitPost } from "@/lib/blog"
import { useTranslations } from "@/lib/translations"

interface BitsClientProps {
  posts: BitPost[]
}

export default function BitsClient({ posts }: BitsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [postsToShow, setPostsToShow] = useState(6)
  const [mounted, setMounted] = useState(false)
  
  // Hook de traducciones con fallback
  const { t } = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Textos de fallback para SSR
  const fallbackTexts = {
    title: "Bits",
    description: "Recursos prácticos, herramientas, tutoriales y fragmentos de código para potenciar tus proyectos de humanidades digitales.",
    searchPlaceholder: "Buscar recursos...",
    categories: ["Todos", "Tutorial", "Recurso", "Herramienta", "Guía", "Código", "Plantilla"],
    totalResources: "recursos disponibles",
    filteredResources: "recursos encontrados",
    readMore: "Leer más",
    loadMore: "Cargar más",
    remaining: "restantes",
    noResults: "No se encontraron recursos",
    noResultsDescription: "Intenta cambiar los filtros de búsqueda o usar términos diferentes.",
    clearFilters: "Limpiar filtros",
    contribute_title: "Contribuye",
    contribute_description: "¿Tienes herramientas, tutoriales o recursos que podrían ser útiles para la comunidad?",
    contribute_button: "Comparte tu recurso"
  }

  // Usar traducciones si están disponibles, sino fallback
  const getText = (key: string) => {
    if (!mounted) return fallbackTexts[key as keyof typeof fallbackTexts] || key
    
    try {
      // Intentar acceder a la traducción de forma segura
      const keys = key.split('.')
      let value: any = t
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          return fallbackTexts[key as keyof typeof fallbackTexts] || key
        }
      }
      return value || fallbackTexts[key as keyof typeof fallbackTexts] || key
    } catch {
      return fallbackTexts[key as keyof typeof fallbackTexts] || key
    }
  }

  // Categorías disponibles
  const categories = ["Todos", "Tutorial", "Recurso", "Herramienta", "Guía", "Código", "Plantilla"]

  // Filtrar y buscar posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      return matchesCategory && matchesSearch
    })
  }, [posts, selectedCategory, searchTerm])

  // Posts a mostrar (paginación)
  const visiblePosts = filteredPosts.slice(0, postsToShow)
  const hasMorePosts = filteredPosts.length > postsToShow

  const getIcon = (category: string) => {
    switch (category) {
      case "Tutorial": return Code
      case "Recurso": 
      case "Resource": return Database
      case "Herramienta":
      case "Tool": return Palette
      case "Guía":
      case "Guide": return BookOpen
      case "Código":
      case "Code": return Code
      case "Plantilla":
      case "Template": return Palette
      default: return Code
    }
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

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + 6)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section con búsqueda */}
      <div className="bg-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{getText('title')}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {getText('description')}
            </p>
            
            {/* Buscador */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder={getText('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Filtros por categoría */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((categoria, index) => (
                <Badge
                  key={index}
                  variant={categoria === selectedCategory ? "default" : "outline"}
                  className="cursor-pointer hover:bg-cyan-100 transition-colors px-4 py-2"
                  onClick={() => setSelectedCategory(categoria)}
                >
                  {categoria}
                </Badge>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredPosts.length === posts.length 
                ? `${posts.length} ${getText('totalResources')}`
                : `${filteredPosts.length} de ${posts.length} ${getText('filteredResources')}`
              }
            </p>
          </div>

          {/* Grid de posts */}
          {visiblePosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {visiblePosts.map((bit, index) => {
                const IconComponent = getIcon(bit.category)
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                    <CardHeader className="flex-none">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {getCategoryIcon(bit.category)} {bit.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(bit.date).toLocaleDateString("es-AR")}
                        </div>
                      </div>
                      <div className="flex items-start mb-3">
                        <IconComponent className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0 mt-1" />
                        <CardTitle className="text-lg text-slate-700 line-clamp-2">
                          {bit.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col justify-between flex-1">
                      <div className="flex-1">
                        <p className="text-gray-600 mb-4 line-clamp-3">{bit.excerpt}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <span className="mr-4">👤 {bit.author}</span>
                          <span>⏱️ {bit.readTime}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {bit.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {bit.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{bit.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/bits/${bit.slug}`} className="flex-1">
                          <Button variant="default" size="sm" className="w-full">
                            {getText('readMore')}
                          </Button>
                        </Link>
                        
                        {bit.url && (
                          <Button asChild variant="outline" size="sm">
                            <a href={bit.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            /* Estado vacío */
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {getText('noResults')}
              </h3>
              <p className="text-gray-500 mb-4">
                {getText('noResultsDescription')}
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todos")
                }}
              >
                {getText('clearFilters')}
              </Button>
            </div>
          )}

          {/* Botón Cargar Más */}
          {hasMorePosts && (
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={loadMorePosts}
                className="px-8"
              >
                {getText('loadMore')} ({filteredPosts.length - postsToShow} {getText('remaining')})
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                {getText('contribute_title')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {getText('contribute_description')}
              </p>
              <Link href="/contacto">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  {getText('contribute_button')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}