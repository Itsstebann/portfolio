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
    featured: true,                         // → Hero cell del Bento
    github: 'https://github.com/Itsstebann/sistema-citas-medicas',
    link: 'https://web-production-7c5f6.up.railway.app/docs//',
    demo: null,
    image: null,                         // Se genera imagen placeholder
    techs: ['Python', 'PostgreSQL', 'REST API', 'JWT', 'Docker'],
    es: {
      title: 'Sistema de Citas Médicas',
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
      description: 'Full RESTful backend for efficient and secure management of medical schedules and patients. Implements JWT authentication, role-based access control, and optimized relational database architecture.',
      highlights: [
        'JWT authentication and authorization with role-based control (admin/doctor/patient)',
        'Documented REST API with protected endpoints and centralized error handling',
        'PostgreSQL database with normalized relations and optimized queries',
        'Full containerization with Docker and docker-compose',
      ],
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
