/**
 * content.js – Textos bilingües del sitio
 * Estructura: { es: {...}, en: {...} }
 *
 * Complejidad de acceso: O(1) – acceso directo por clave
 */

export const content = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Educación',
      projects: 'Proyectos',
      tech: 'Tecnologías',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'David Rodriguez',
      role: 'Python Developer',
      bio: 'Desarrollador Backend especializado en Python con enfoque en automatización, integración de APIs y arquitecturas de datos robustas. Apasionado por crear sistemas escalables e integrar herramientas impulsadas por inteligencia artificial.',
      available: 'Disponible para trabajar',
      cta: 'Ver proyectos',
      ctaSecond: 'Contáctame',
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          id: 'falabella',
          company: 'Falabella',
          role: 'Software, Data & Systems Analyst – WMS Environment',
          period: '2025 – 2026',
          type: 'Jornada completa',
          bullets: [
            'Análisis de datos con SQL para validar, conciliar y monitorear información en sistemas de almacén (WMS) y corporativos.',
            'Integración y consumo de APIs REST para mejorar el flujo de datos e interoperabilidad de sistemas.',
            'Construcción y entrega de reportes de rendimiento operativo para stakeholders internos.',
            'Soporte en monitoreo, mantenimiento preventivo y resolución de incidentes para mejorar la estabilidad.',
            'Participación en proyectos de migración de datos y modernización de sistemas, garantizando integridad y seguridad.',
            'Trabajo en entornos ágiles, contribuyendo en tareas técnicas y resolución analítica de problemas.',
          ],
        },
        {
          id: 'freelance',
          company: 'Autónomo',
          role: 'Desarrollador Backend',
          period: '2022 – 2025',
          type: 'Freelance',
          bullets: [
            'Liderazgo en el ciclo de vida completo de desarrollo de software utilizando Python y bases de datos relacionales (MySQL/PostgreSQL).',
            'Diseño de arquitecturas Backend seguras implementando flujos de autenticación: JWT, OAuth y Cookie-Based Auth.',
            'Orquestación de entornos de despliegue con Docker y automatización de pipelines CI/CD para entregas continuas.',
            'Integración de servicios de IA y patrones de agentes para automatización de flujos de trabajo complejos.',
            'Aplicación de principios de seguridad web: hashing de contraseñas, manejo de tokens y protección de endpoints.',
          ],
        },
      ],
    },
    education: {
      title: 'Educación',
      items: [
        {
          id: 'admin',
          institution: 'Universidad Mayor de Cundinamarca',
          degree: 'Administración en Empresas Comerciales',
          period: '2023 – Actualidad',
          semester: '7mo semestre',
          gpa: '4.4 / 5.0',
          certified: 'Estudio certificable',
        },
        {
          id: 'sistemas',
          institution: 'Universidad Nacional Abierta y a Distancia',
          degree: 'Ingeniería de Sistemas',
          period: '2023 – Actualidad',
          semester: '7mo semestre',
          gpa: '4.6 / 5.0',
          certified: 'Estudio certificable',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      viewCode: 'Ver código',
      viewDemo: 'Demo',
      techs: 'Tecnologías',
    },
    tech: {
      title: 'Tecnologías',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? Hablemos.',
      email: 'Enviar correo',
      linkedin: 'Conectar en LinkedIn',
      github: 'Ver GitHub',
      copySuccess: '¡Email copiado!',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      tech: 'Tech Stack',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'David Rodriguez',
      role: 'Backend Developer (Data Analysis, Cybersecurity and ML)',
      bio: 'Backend Developer specialized in Python, focused on automation, API integration, and robust data architectures. Passionate about building scalable systems and integrating AI-powered tools.',
      available: 'Available for work',
      cta: 'View projects',
      ctaSecond: 'Contact me',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          id: 'falabella',
          company: 'Falabella',
          role: 'Software, Data & Systems Analyst – WMS Environment',
          period: '2025 – 2026',
          type: 'Full-time',
          bullets: [
            'Performed data analysis using SQL to validate, reconcile, and monitor information across warehouse (WMS) and enterprise systems.',
            'Integrated and consumed REST APIs to improve data flow and system interoperability.',
            'Built and delivered periodic performance and operational reports for internal stakeholders.',
            'Supported system monitoring, preventive maintenance, and troubleshooting to improve stability and performance.',
            'Participated in data migration and system modernization projects, ensuring data integrity and security.',
            'Collaborated in agile environments, contributing to both technical development tasks and analytical problem-solving.',
          ],
        },
        {
          id: 'freelance',
          company: 'Self-employed',
          role: 'Backend Developer',
          period: '2022 – 2025',
          type: 'Freelance',
          bullets: [
            'Led the full software development lifecycle using Python and relational databases (MySQL/PostgreSQL).',
            'Designed secure Backend architectures implementing authentication flows: JWT, OAuth and Cookie-Based Auth.',
            'Orchestrated deployment environments with Docker and automated CI/CD pipelines for continuous delivery.',
            'Integrated AI services and agent patterns to automate complex business workflows.',
            'Applied web security principles: password hashing, token management, and endpoint protection.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          id: 'admin',
          institution: 'Universidad Mayor de Cundinamarca',
          degree: 'Business Administration',
          period: '2023 – Present',
          semester: '7th semester',
          gpa: '4.6 / 5.0',
          certified: 'Certifiable degree',
        },
        {
          id: 'sistemas',
          institution: 'Universidad Nacional Abierta y a Distancia',
          degree: 'Systems Engineering',
          period: '2023 – Present',
          semester: '7th semester',
          gpa: '4.5 / 5.0',
          certified: 'Certifiable degree',
        },
      ],
    },
    projects: {
      title: 'Projects',
      viewCode: 'View code',
      viewDemo: 'Demo',
      techs: 'Technologies',
    },
    tech: {
      title: 'Tech Stack',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? Let\'s talk.',
      email: 'Send email',
      linkedin: 'Connect on LinkedIn',
      github: 'View GitHub',
      copySuccess: 'Email copied!',
    },
  },
};
