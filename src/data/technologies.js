/**
 * technologies.js – Stack tecnológico categorizado
 * Separado en: Advanced (conocimiento avanzado) y Basic
 *
 * Complejidad de filtrado por categoría: O(n) donde n = total de tecnologías
 */

export const technologies = [
  // ── Lenguajes & Core ──────────────────────────────────
  { id: 'python',      label: 'Python',      category: 'core',    level: 'advanced', emoji: '🐍' },
  { id: 'sql',         label: 'SQL',         category: 'core',    level: 'advanced', emoji: '🗄️' },

  // ── Bases de Datos ────────────────────────────────────
  { id: 'postgresql',  label: 'PostgreSQL',  category: 'db',      level: 'advanced', emoji: '🐘' },
  { id: 'mysql',       label: 'MySQL',       category: 'db',      level: 'advanced', emoji: '💽' },
  { id: 'oracle',      label: 'Oracle DB',   category: 'db',      level: 'advanced', emoji: '🔶' },

  // ── APIs & Autenticación ──────────────────────────────
  { id: 'rest',        label: 'REST APIs',   category: 'api',     level: 'advanced', emoji: '🔌' },
  { id: 'json',        label: 'JSON',        category: 'api',     level: 'advanced', emoji: '📋' },
  { id: 'jwt',         label: 'JWT',         category: 'auth',    level: 'advanced', emoji: '🔑' },
  { id: 'oauth',       label: 'OAuth 2.0',   category: 'auth',    level: 'advanced', emoji: '🛡️' },
  { id: 'openid',      label: 'OpenID',      category: 'auth',    level: 'advanced', emoji: '🪪' },
  { id: 'cookie-auth', label: 'Cookie Auth', category: 'auth',    level: 'advanced', emoji: '🍪' },

  // ── DevOps & Control de Versiones ─────────────────────
  { id: 'git',         label: 'Git',         category: 'devops',  level: 'advanced', emoji: '🌿' },
  { id: 'github',      label: 'GitHub',      category: 'devops',  level: 'advanced', emoji: '🐙' },
  { id: 'gitlab',      label: 'GitLab',      category: 'devops',  level: 'advanced', emoji: '🦊' },
  { id: 'docker',      label: 'Docker',      category: 'devops',  level: 'advanced', emoji: '🐳' },
  { id: 'cicd',        label: 'CI/CD',       category: 'devops',  level: 'advanced', emoji: '⚙️' },

  // ── Seguridad & Performance ───────────────────────────
  { id: 'security',    label: 'Web Security', category: 'security', level: 'advanced', emoji: '🔒' },
  { id: 'hashing',     label: 'Hashing',     category: 'security', level: 'advanced', emoji: '#️⃣' },
  { id: 'caching',     label: 'Caching',     category: 'security', level: 'advanced', emoji: '⚡' },

  // ── AI & Integraciones ────────────────────────────────
  { id: 'ai',          label: 'AI / LLMs',   category: 'ai',      level: 'advanced', emoji: '🤖' },
  { id: 'prompting',   label: 'Prompting',   category: 'ai',      level: 'advanced', emoji: '💬' },
  { id: 'ai-agents',   label: 'AI Agents',   category: 'ai',      level: 'advanced', emoji: '🧠' },
  { id: 'integrations',label: 'Integrations',category: 'ai',      level: 'advanced', emoji: '🔗' },

  // ── Frontend Básico ───────────────────────────────────
  { id: 'html',        label: 'HTML',        category: 'frontend', level: 'basic',    emoji: '🌐' },
  { id: 'css',         label: 'CSS',         category: 'frontend', level: 'basic',    emoji: '🎨' },
  { id: 'javascript',  label: 'JavaScript',  category: 'frontend', level: 'basic',    emoji: '✨' },
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
