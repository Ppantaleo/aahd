import { getAllBitSlugs } from './blog'

// Lista estática para GitHub Pages export
export const bitSlugs = [
  'nueva-web',
  'tutorial-analisis-sentimientos-python',
  'base-datos-manuscritos-coloniales', 
  'paleta-colores-visualizaciones',
  'guia-buenas-practicas-digitalizacion',
  'script-limpieza-datos-ocr',
  'plantillas-mapas-interactivos'
]

export function getBitSlugs() {
  // En desarrollo, intenta leer archivos MD dinámicamente
  if (process.env.NODE_ENV === 'development') {
    try {
      const markdownSlugs = getAllBitSlugs()
      // Si encuentra archivos MD, los usa. Si no, usa la lista estática
      return markdownSlugs.length > 0 ? markdownSlugs : bitSlugs
    } catch (error) {
      console.warn('No se pudieron leer archivos MD, usando lista estática')
      return bitSlugs
    }
  }
  
  // En producción (export), siempre usa lista estática para GitHub Pages
  return bitSlugs
}