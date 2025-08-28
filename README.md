# AAHD - Sitio Web Oficial

Sitio web de la **Asociación Argentina de Humanidades Digitales** (AAHD), construido con tecnologías modernas y desplegado automáticamente en GitHub Pages.

## 🌐 Sitio Web

**URL**: [https://aahd.net.ar/](https://aahd.net.ar/)

## 🛠️ Tecnologías

- **[Next.js 15](https://nextjs.org/)** - Framework de React para sitios web
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos estáticos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS para estilos
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de interfaz reutilizables

## 📁 Estructura del Proyecto

```
aahd/
├── app/                          # Páginas del sitio
│   ├── page.tsx                  # Página principal
│   ├── about/page.tsx            # Quienes somos
│   ├── comunidad/page.tsx        # Comunidad
│   ├── manifiesto/page.tsx       # Manifiesto
│   ├── publicaciones/page.tsx    # Publicaciones
│   ├── podcast/page.tsx          # Podcast
│   ├── contacto/page.tsx         # Contacto
│   └── bits/                     # Sistema de blog Bits
│       ├── page.tsx              # Página principal de Bits
│       ├── bits-client.tsx       # Componente cliente para listado
│       └── [slug]/               # Posts individuales
│           ├── page.tsx          # Página de post individual
│           └── bit-post-client.tsx # Componente cliente del post
├── components/                   # Componentes reutilizables
│   ├── header.tsx               # Encabezado del sitio
│   ├── footer.tsx               # Pie de página
│   └── ui/                      # Componentes de interfaz
├── content/                     # Contenido Markdown
│   └── bits/                    # Posts de Bits en Markdown
│       └── *.md                 # Archivos Markdown de posts
├── locales/                     # Traducciones
│   ├── es.json                  # Español (predeterminado)
│   └── en.json                  # Inglés
├── public/                      # Archivos estáticos
│   └── images/                 # Imágenes del sitio
└── lib/                        # Utilidades
    ├── translations.ts         # Sistema de traducciones
    ├── blog.ts                 # Funciones para procesar Markdown
    └── blog-data.ts            # Lista de slugs para generación estática
```

## ✏️ Editar Contenido

### 📝 Textos y Traducciones

Los textos del sitio están en los archivos de traducciones:

#### **1. Español** (`locales/es.json`)
```json
{
  "nav": {
    "about": "Sobre AAHD",
    "community": "Comunidad"
  },
  "home": {
    "title": "Asociación Argentina de Humanidades Digitales"
  },
  "bits": {
    "title": "Bits",
    "description": "Recursos prácticos para humanidades digitales"
  }
}
```

#### **2. Inglés** (`locales/en.json`)
```json
{
  "nav": {
    "about": "About AAHD", 
    "community": "Community"
  },
  "home": {
    "title": "Argentine Association of Digital Humanities"
  },
  "bits": {
    "title": "Bits",
    "description": "Practical resources for digital humanities"
  }
}
```

### 📝 Sistema de Blog - Bits

El sistema de blog permite crear posts en Markdown que se convierten automáticamente en páginas web.

#### **Crear un nuevo post:**

**1. Crear archivo Markdown** en `content/bits/`:
```markdown
---
title: "Mi Nuevo Post"
excerpt: "Descripción breve del post"
category: "Tutorial" 
author: "Tu Nombre"
date: "2024-12-30"
readTime: "5 min"
tags: ["tag1", "tag2", "tag3"]
url: "https://enlace-opcional.com"
difficulty: "Básico"
---

# Mi Nuevo Post

Contenido del post en **Markdown**.

## Sección 1

Lorem ipsum...

## Sección 2

Más contenido...
```

**2. Agregar slug a la lista estática** en `lib/blog-data.ts`:
```typescript
export const bitSlugs = [
  'nueva-web',
  'mi-nuevo-post', // ← Agregar aquí
  // ... otros slugs
]
```

**3. Commit y push**:
```bash
git add .
git commit -m "Agregar nuevo post: Mi Nuevo Post"
git push
```

#### **Frontmatter (metadatos del post):**
- `title`: Título del post
- `excerpt`: Descripción breve
- `category`: Categoría ("Tutorial", "Recurso", "Herramienta", "Guía", "Código", "Plantilla")
- `author`: Nombre del autor
- `date`: Fecha en formato YYYY-MM-DD
- `readTime`: Tiempo estimado de lectura
- `tags`: Array de tags
- `url`: (Opcional) Enlace externo
- `difficulty`: (Opcional) Nivel de dificultad

#### **Características del sistema:**
- **Tabla de contenidos automática**: Se genera a partir de los headings (H1, H2, H3, etc.)
- **Navegación funcional**: Click en TOC navega suavemente a la sección
- **Categorías dinámicas**: Los filtros se generan automáticamente
- **Búsqueda en tiempo real**: Busca en título, excerpt, autor y tags
- **SEO optimizado**: Metadatos automáticos para cada post
- **Responsive design**: Optimizado para móvil y desktop

### 🖼️ Imágenes

Las imágenes se guardan en `public/images/` y se referencian así:
```typescript
<Image src="/images/nombre-imagen.jpg" alt="Descripción" />
```

### 📄 Contenido de Páginas

Para editar el contenido de las páginas, modifica los archivos en `app/`:

- **Página principal**: `app/page.tsx`
- **Quienes somos**: `app/about/page.tsx`
- **Comunidad**: `app/comunidad/page.tsx`
- **Bits**: `app/bits/page.tsx` y `app/bits/bits-client.tsx`
- **Etc.**

## 🚀 Desarrollo Local

### Requisitos
- Node.js 18 o superior
- pnpm (recomendado) o npm

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Ppantaleo/aahd.git
cd aahd

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

### Scripts Disponibles
```bash
pnpm dev      # Desarrollo local
pnpm build    # Construir sitio estático
pnpm start    # Servir build localmente
pnpm lint     # Revisar código
```

## 📤 Despliegue

El sitio se despliega **automáticamente** en GitHub Pages cuando se hace push a la rama `main`.

### Proceso Automático:
1. Se hace push a `main`
2. GitHub Actions ejecuta el build
3. Se genera el sitio estático
4. Se publica en GitHub Pages

## 🔧 Tareas Comunes

### ✏️ Cambiar un texto

1. **Localizar el texto** en `locales/es.json` o `locales/en.json`
2. **Editar el valor**:
   ```json
   {
     "home": {
       "title": "Nuevo título aquí"
     }
   }
   ```
3. **Hacer commit y push**

### 📝 Agregar un nuevo post de Bits

1. **Crear archivo Markdown** en `content/bits/mi-post.md`:
   ```markdown
   ---
   title: "Mi Post"
   excerpt: "Descripción"
   category: "Tutorial"
   author: "Mi Nombre"
   date: "2024-12-30"
   readTime: "5 min"
   tags: ["tag1", "tag2"]
   ---
   
   # Mi Post
   
   Contenido aquí...
   ```

2. **Agregar slug** a `lib/blog-data.ts`:
   ```typescript
   export const bitSlugs = [
     'nueva-web',
     'mi-post', // ← Nuevo slug
   ]
   ```

3. **Commit y push**:
   ```bash
   git add .
   git commit -m "Agregar post: Mi Post"
   git push
   ```

### 🆕 Agregar nueva página

1. **Crear archivo** en `app/nueva-seccion/page.tsx`:
   ```typescript
   export default function NuevaSeccionPage() {
     return (
       <div className="min-h-screen bg-gray-50">
         <h1>Nueva Sección</h1>
       </div>
     )
   }
   ```

2. **Agregar navegación** en header y traducciones

### 🌐 Agregar nueva traducción

1. **Agregar clave** en ambos archivos de idioma:
   ```json
   // locales/es.json
   { "nueva_seccion": { "titulo": "Mi Título" } }
   
   // locales/en.json  
   { "nueva_seccion": { "titulo": "My Title" } }
   ```

2. **Usar en componente**:
   ```typescript
   const { t } = useTranslations()
   return <h1>{t.nueva_seccion.titulo}</h1>
   ```

## ⚠️ Notas Importantes

### Para GitHub Pages (Producción):
- **Siempre agregar nuevos slugs** a `lib/blog-data.ts` para que se generen las páginas estáticas
- **El sistema detecta automáticamente** si estás en desarrollo (lee archivos MD dinámicamente) o producción (usa lista estática)
- **Las categorías se generan automáticamente** a partir de los posts existentes

### Sistema de Blog:
- **Naming**: El nombre del archivo `.md` será el slug de la URL
- **Orden**: Los posts se ordenan por fecha (más recientes primero)
- **Markdown**: Soporta todo Markdown estándar + tablas, código, etc.
- **Estilos**: Los posts tienen estilos automáticos para headings, párrafos, listas, etc.

## 🤝 Contribuir

1. **Fork** del repositorio
2. **Crear rama** para tu feature: `git checkout -b nueva-funcionalidad`
3. **Hacer cambios** y commit: `git commit -m "Agregar nueva funcionalidad"`
4. **Push** a la rama: `git push origin nueva-funcionalidad`
5. **Crear Pull Request**

## 📞 Soporte

Para problemas técnicos o preguntas sobre el desarrollo:
- **Issues**: [GitHub Issues](https://github.com/Ppantaleo/aahd/issues)
- **Email**: hdargentina13@gmail.com

## 📄 Licencia

Este proyecto está bajo la Licencia GPL v3 - ver el archivo [LICENSE](LICENSE) para más detalles.

---

**Asociación Argentina de Humanidades Digitales**  
🌐 [aahd.net.ar](https://aahd.net.ar/)  
📧 [hdargentina13@gmail.com](mailto:hdargentina13@gmail.com)