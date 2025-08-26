// lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const bitsDirectory = path.join(process.cwd(), 'content/bits')

export interface BitPost {
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

// Configurar marked para mejores estilos
marked.setOptions({
  breaks: true,
  gfm: true,
})

export function getAllBits(): BitPost[] {
  if (!fs.existsSync(bitsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(bitsDirectory)
  const allBitsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(bitsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Convertir Markdown a HTML
      const htmlContent = marked(content)

      return {
        slug,
        content: htmlContent,
        ...data,
      } as BitPost
    })

  return allBitsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBitBySlug(slug: string): BitPost | null {
  try {
    if (!fs.existsSync(bitsDirectory)) {
      return null
    }

    const fullPath = path.join(bitsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convertir Markdown a HTML
    const htmlContent = marked(content)

    return {
      slug,
      content: htmlContent,
      ...data,
    } as BitPost
  } catch (error) {
    console.error('Error reading bit post:', error)
    return null
  }
}

export function getAllBitSlugs(): string[] {
  if (!fs.existsSync(bitsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(bitsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}