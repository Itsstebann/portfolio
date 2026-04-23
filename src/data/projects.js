/**
 * projects.js – Proyectos personales del portafolio
 * Cada proyecto tiene soporte bilingüe (es/en)
 *
 * Complejidad de acceso por id: O(n) lineal con find()
 * Para acceso O(1) usar projectsMap exportado abajo
 */

export const projects = [
  {
    id: 'sistema-citas-medicas',
    featured: true,
    github: 'https://github.com/Itsstebann/sistema-citas-medicas',
    link: 'https://web-production-7c5f6.up.railway.app/',
    demo: null,
    image: null,
    techs: ['Python', 'PostgreSQL', 'REST API', 'JWT', 'Docker'],
    es: {
      title: 'Sistema de Citas Médicas',
      subtitle: 'Backend / API',
      description: 'Backend RESTful completo para la gestión eficiente y segura de agendas médicas y pacientes. Implementa autenticación JWT, control de roles, y arquitectura de base de datos relacional optimizada.',
      highlights: [
        'Autenticación y autorización con JWT y control de roles (admin/médico/paciente)',
        'API REST documentada con endpoints protegidos y manejo de errores centralizado',
        'Base de datos PostgreSQL con relaciones normalizadas y consultas optimizadas',
        'Containerización completa con Docker y docker-compose',
      ],
    },
    en: {
      title: 'Medical Appointment System',
      subtitle: 'Backend / API',
      description: 'Full RESTful backend for efficient and secure management of medical schedules and patients. Implements JWT authentication, role-based access control, and optimized relational database architecture.',
      highlights: [
        'JWT authentication and authorization with role-based control (admin/doctor/patient)',
        'Documented REST API with protected endpoints and centralized error handling',
        'PostgreSQL database with normalized relations and optimized queries',
        'Full containerization with Docker and docker-compose',
      ],
    },
  },
  {
    id: 'frontend-citas-medicas',
    featured: false,
    github: 'https://github.com/Itsstebann/frontend-citas-medicas',
    link: 'https://itsstebann.github.io/frontend-citas-medicas',
    demo: null,
    image: null,
    techs: ['React', 'JavaScript', 'CSS', 'REST API'],
    es: {
      title: 'Frontend Citas Médicas',
      subtitle: 'Frontend',
      description: 'Interfaz de usuario moderna para el sistema de gestión de citas médicas. Consume la API REST del backend con manejo de sesiones, formularios dinámicos y vistas según rol del usuario.',
    },
    en: {
      title: 'Medical Appointments Frontend',
      subtitle: 'Frontend',
      description: 'Modern user interface for the medical appointment management system. Consumes the backend REST API with session handling, dynamic forms, and role-based views.',
    },
  },
  {
    id: 'sistema-notificaciones',
    featured: false,
    github: 'https://github.com/Itsstebann/sistema-notificaciones',
    link: null,
    demo: null,
    image: null,
    techs: ['Python', 'WebSockets', 'PostgreSQL', 'Docker'],
    es: {
      title: 'Sistema de Notificaciones',
      subtitle: 'Backend / API',
      description: 'Backend de notificaciones en tiempo real utilizando WebSockets. Arquitectura escalable con persistencia en PostgreSQL y despliegue containerizado.',
    },
    en: {
      title: 'Notification System',
      subtitle: 'Backend / API',
      description: 'Real-time notification backend using WebSockets. Scalable architecture with PostgreSQL persistence and containerized deployment.',
    },
  },
  {
    id: 'frontend-notificaciones',
    featured: false,
    github: 'https://github.com/Itsstebann/frontend-notificaciones',
    link: null,
    demo: null,
    image: null,
    techs: ['React', 'JavaScript', 'WebSockets', 'CSS'],
    es: {
      title: 'Frontend Notificaciones',
      subtitle: 'Frontend',
      description: 'Interfaz interactiva para el sistema de notificaciones en tiempo real. Integración con WebSockets para actualizaciones instantáneas y experiencia de usuario fluida.',
    },
    en: {
      title: 'Notifications Frontend',
      subtitle: 'Frontend',
      description: 'Interactive interface for the real-time notification system. WebSocket integration for instant updates and seamless user experience.',
    },
  },
  {
    id: 'e-commerce',
    featured: false,
    github: 'https://github.com/Itsstebann/e-commerce',
    link: 'https://e-commerce-2blk.vercel.app',
    demo: null,
    image: null,
    techs: ['Next.js', 'Supabase', 'MercadoPago', 'CSS'],
    es: {
      title: 'Tienda Online',
      subtitle: 'Fullstack',
      description: 'E-commerce completo para cliente con catálogo de productos, carrito de compras, pasarela de pagos con MercadoPago y panel de administración. Backend serverless con Supabase.',
    },
    en: {
      title: 'Online Store',
      subtitle: 'Fullstack',
      description: 'Full e-commerce for client with product catalog, shopping cart, MercadoPago payment gateway, and admin panel. Serverless backend with Supabase.',
    },
  },
  {
    id: 'portfolio',
    featured: false,
    github: 'https://github.com/Itsstebann/portfolio',
    link: 'https://itsstebann.github.io/portfolio/',
    demo: null,
    image: null,
    techs: ['React', 'Vite', 'Framer Motion', 'CSS'],
    es: {
      title: 'Portfolio Personal',
      subtitle: 'Frontend',
      description: 'Sitio web personal con diseño Bento Grid, soporte bilingüe, Command Palette, animaciones con Framer Motion y despliegue en GitHub Pages.',
    },
    en: {
      title: 'Personal Portfolio',
      subtitle: 'Frontend',
      description: 'Personal website with Bento Grid design, bilingual support, Command Palette, Framer Motion animations, and GitHub Pages deployment.',
    },
  },
];

/**
 * Mapa de proyectos por id para acceso O(1)
 * @type {Object.<string, Object>}
 */
export const projectsMap = Object.fromEntries(
  projects.map((p) => [p.id, p])
);
