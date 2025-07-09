# Mi Blog - Plataforma de Blog Moderna

Una plataforma moderna para compartir conocimientos sobre tecnología, diseño y desarrollo web, construida con Next.js y Bootstrap.

## 🚀 Características

- **Diseño Responsivo**: Interfaz moderna y adaptable a todos los dispositivos
- **Sistema de Búsqueda**: Búsqueda en tiempo real por título, extracto y autor
- **Filtrado por Categorías**: Navegación por categorías (Tecnología, Diseño, Desarrollo, Tutoriales)
- **Artículo Destacado**: Sección especial para el artículo principal
- **Páginas Individuales**: Cada artículo tiene su propia página detallada
- **Optimización de Imágenes**: Uso del componente Image de Next.js para mejor rendimiento

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React para el servidor
- **TypeScript**: Tipado estático para mayor robustez
- **Bootstrap 5**: Framework CSS para el diseño
- **Lucide React**: Iconos modernos y ligeros
- **React Hooks**: useState y useEffect para el estado y efectos

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd miblog
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto (si es necesario):

```env
# Variables de entorno (si las necesitas)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Preparar Imágenes

Asegúrate de que las siguientes imágenes estén en la carpeta `public/`:

- `responsive_big_webp_V3vG4COD7YBe9gBqOQNt4eSu3THQXvoASinhSGUiePo.webp`
- `ux_image.jpg`
- `desarrollo_mobile.jpg`
- `placeholder.svg`

### 5. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
miblog/
├── public/                 # Archivos estáticos
│   ├── ux_image.jpg
│   ├── desarrollo_mobile.jpg
│   ├── responsive_big_webp_*.webp
│   └── placeholder.svg
├── src/
│   ├── app/               # App Router de Next.js
│   │   ├── blog/          # Páginas del blog
│   │   │   ├── page.tsx   # Lista de artículos
│   │   │   └── [slug]/    # Páginas individuales
│   │   │       └── page.tsx
│   │   ├── globals.css    # Estilos globales
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página de inicio
│   ├── components/        # Componentes reutilizables
│   │   ├── blog-card.tsx  # Tarjeta de artículo
│   │   ├── header.tsx     # Encabezado
│   │   └── footer.tsx     # Pie de página
│   └── lib/              # Utilidades y datos
│       └── blog-data.ts   # Datos de los artículos
├── next.config.ts        # Configuración de Next.js
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias del proyecto
```

## 🎨 Personalización

### Agregar Nuevos Artículos

Edita el archivo `src/lib/blog-data.ts` y agrega nuevos objetos al array `blogPosts`:

```typescript
{
  id: "nuevo-articulo",
  title: "Título del Artículo",
  excerpt: "Resumen del artículo...",
  content: "Contenido completo del artículo...",
  author: "Nombre del Autor",
  date: "2025-01-01",
  image: "/nueva-imagen.jpg",
  category: "Categoría",
  readTime: "5 min"
}
```

### Modificar Estilos

Los estilos personalizados están en `src/app/globals.css`. Las clases principales incluyen:

- `.gradient-primary`: Gradiente principal
- `.hover-primary`: Efectos hover
- `.line-clamp-2/3`: Limitación de líneas de texto
- `.card-hover`: Efectos hover en tarjetas

### Agregar Imágenes

1. Coloca las imágenes en la carpeta `public/`
2. Referencia las imágenes en `blog-data.ts` con la ruta `/nombre-imagen.extensión`

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar linter
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El despliegue se realizará automáticamente

### Otros Proveedores

El proyecto puede desplegarse en cualquier proveedor que soporte Node.js:

- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🐛 Solución de Problemas

### Imágenes No Se Muestran

1. Verifica que las imágenes estén en la carpeta `public/`
2. Confirma que las rutas en `blog-data.ts` sean correctas
3. Limpia la caché: `rm -rf .next`
4. Reinicia el servidor de desarrollo

### Errores de TypeScript

1. Ejecuta `npm run lint` para ver errores específicos
2. Verifica que todas las importaciones sean correctas
3. Asegúrate de que los tipos estén bien definidos

### Problemas de Rendimiento

1. Las imágenes ya están optimizadas con el componente `Image` de Next.js
2. El código está optimizado para SSR (Server Side Rendering)
3. Bootstrap está configurado para cargar solo los estilos necesarios

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

