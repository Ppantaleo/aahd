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
│   ├── bits/page.tsx            # Bits (recursos)
│   └── contacto/page.tsx        # Contacto
├── components/                   # Componentes reutilizables
│   ├── header.tsx               # Encabezado del sitio
│   ├── footer.tsx               # Pie de página
│   └── ui/                      # Componentes de interfaz
├── locales/                     # Traducciones
│   ├── es.json                  # Español (predeterminado)
│   └── en.json                  # Inglés
├── public/                      # Archivos estáticos
│   └── images/                 # Imágenes del sitio
└── lib/                        # Utilidades
    └── translations.ts         # Sistema de traducciones
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
  }
}
```

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
🌐 [aahd.net.ar](https://aahd-argentina.github.io/aahd/)  
📧 [hdargentina13@gmail.com](mailto:hdargentina13@gmail.com)