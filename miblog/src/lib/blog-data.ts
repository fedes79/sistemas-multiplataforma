export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    author: string
    date: string
    image: string
    category: string
    readTime: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "tecnologia-futuro",
      title: "El Futuro de la Tecnología Web",
      excerpt:
        "Exploramos las tendencias emergentes que están transformando el desarrollo web y cómo impactarán en los próximos años.",
      content:
        "La tecnología web está evolucionando a un ritmo acelerado. Desde la inteligencia artificial hasta las aplicaciones web progresivas, el futuro promete experiencias más inmersivas y eficientes. Los desarrolladores deben mantenerse actualizados con las últimas tendencias para crear aplicaciones que no solo funcionen bien, sino que también ofrezcan experiencias excepcionales a los usuarios.",
      author: "María González",
      date: "2025-06-26",
      image: "/responsive_big_webp_V3vG4COD7YBe9gBqOQNt4eSu3THQXvoASinhSGUiePo.webp",
      category: "Tecnología",
      readTime: "5 min",
    },
    {
      id: "diseno-ux-moderno",
      title: "Principios de Diseño UX Moderno",
      excerpt:
        "Descubre los principios fundamentales del diseño de experiencia de usuario que todo desarrollador debería conocer.",
      content:
        "El diseño UX moderno se centra en crear experiencias intuitivas y accesibles. Los principios incluyen la simplicidad, la consistencia, la retroalimentación inmediata y la accesibilidad universal. Un buen diseño UX no solo se ve bien, sino que también funciona de manera eficiente para todos los usuarios, independientemente de sus habilidades o dispositivos.",
      author: "Carlos Rodríguez",
      date: "2025-06-27",
      image: "/ux_image.jpg",
      category: "Diseño",
      readTime: "7 min",
    },
    {
      id: "desarrollo-movil-2025",
      title: "Desarrollo Móvil en 2025",
      excerpt: "Las mejores prácticas y herramientas para el desarrollo de aplicaciones móviles multiplataforma.",
      content:
        "El desarrollo móvil ha evolucionado significativamente. Con frameworks como React Native, Flutter y tecnologías web progresivas, los desarrolladores pueden crear aplicaciones que funcionan perfectamente en múltiples plataformas. La clave está en elegir la herramienta adecuada para cada proyecto y mantener un enfoque centrado en el usuario.",
      author: "Ana Martínez",
      date: "2025-06-29",
      image: "/desarrollo_mobile.jpg",
      category: "Desarrollo",
      readTime: "6 min",
    },
  ] 