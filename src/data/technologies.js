/**
 * technologies.js – Stack tecnológico categorizado
 * Separado en: Advanced (conocimiento avanzado) y Basic
 *
 * Complejidad de filtrado por categoría: O(n) donde n = total de tecnologías
 */

export const technologies = [
  // ── Lenguajes & Core ──────────────────────────────────
  { id: 'python',      label: 'Python',      category: 'core',    level: 'advanced' },
  { id: 'javascript',  label: 'JavaScript',  category: 'core',    level: 'advanced' },
  { id: 'sql',         label: 'SQL',         category: 'core',    level: 'advanced' },

  // ── Bases de Datos ────────────────────────────────────
  { id: 'postgresql',  label: 'PostgreSQL',  category: 'db',      level: 'advanced' },
  { id: 'mysql',       label: 'MySQL',       category: 'db',      level: 'advanced' },
  { id: 'oracle',      label: 'Oracle DB',   category: 'db',      level: 'advanced' },

  // ── APIs & Autenticación ──────────────────────────────
  { id: 'rest',        label: 'REST APIs',   category: 'api',     level: 'advanced' },
  { id: 'json',        label: 'JSON',        category: 'api',     level: 'advanced' },
  { id: 'jwt',         label: 'JWT',         category: 'auth',    level: 'advanced' },
  { id: 'oauth',       label: 'OAuth 2.0',   category: 'auth',    level: 'advanced' },
  { id: 'openid',      label: 'OpenID',      category: 'auth',    level: 'advanced' },
  { id: 'cookie-auth', label: 'Cookie Auth', category: 'auth',    level: 'advanced' },

  // ── DevOps & Control de Versiones ─────────────────────
  { id: 'git',         label: 'Git',         category: 'devops',  level: 'advanced' },
  { id: 'github',      label: 'GitHub',      category: 'devops',  level: 'advanced' },
  { id: 'gitlab',      label: 'GitLab',      category: 'devops',  level: 'advanced' },
  { id: 'docker',      label: 'Docker',      category: 'devops',  level: 'advanced' },
  { id: 'cicd',        label: 'CI/CD',       category: 'devops',  level: 'advanced' },

  // ── Seguridad & Performance ───────────────────────────
  { id: 'security',    label: 'Web Security', category: 'security', level: 'advanced' },
  { id: 'hashing',     label: 'Hashing',     category: 'security', level: 'advanced' },
  { id: 'caching',     label: 'Caching',     category: 'security', level: 'advanced' },

  // ── AI & Integraciones ────────────────────────────────
  { id: 'ai',          label: 'AI / LLMs',   category: 'ai',      level: 'advanced' },
  { id: 'prompting',   label: 'Prompting',   category: 'ai',      level: 'advanced' },
  { id: 'ai-agents',   label: 'AI Agents',   category: 'ai',      level: 'advanced' },
  { id: 'claude-code', label: 'Claude Code', category: 'ai',      level: 'advanced' },
  { id: 'codex',       label: 'Codex',       category: 'ai',      level: 'advanced' },
  { id: 'integrations',label: 'Integrations',category: 'ai',      level: 'advanced' },

  // ── Frontend ───────────────────────────────────────────
  { id: 'html',        label: 'HTML',        category: 'frontend', level: 'basic' },
  { id: 'css',         label: 'CSS',         category: 'frontend', level: 'basic' },
  { id: 'react',       label: 'React',       category: 'frontend', level: 'advanced' },
  { id: 'bootstrap',   label: 'Bootstrap',   category: 'frontend', level: 'basic' },
];

/**
 * Filtra tecnologías por categoría — O(n)
 * @param {string} category
 * @returns {Array}
 */
export const getTechByCategory = (category) =>
  technologies.filter((t) => t.category === category);

/**
 * Obtiene solo las tecnologías avanzadas — O(n)
 * @returns {Array}
 */
export const getAdvancedTech = () =>
  technologies.filter((t) => t.level === 'advanced');
