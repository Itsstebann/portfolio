/**
 * TechContact.jsx – Sección combinada: Tech Stack + Contacto
 * Tech grid con todas las tecnologías categorizadas.
 * Contact: email (copiable), LinkedIn, GitHub.
 *
 * Complejidad render: O(n) donde n = tecnologías totales
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { technologies } from '../../data/technologies';
import BentoCard, { cardVariants } from '../ui/BentoCard';
import MemojiAvatar from '../ui/MemojiAvatar';
import styles from './TechContact.module.css';

const MEMOJI_WAVE = `${import.meta.env.BASE_URL}assets/memoji/memoji-wave.png`;

const CONTACT_EMAIL = 'devstack.drodriguez@gmail.com';

// Categorías ordenadas para mostrar en el grid — O(1) lookup en Map
const CATEGORY_ORDER = ['core', 'db', 'api', 'auth', 'devops', 'security', 'ai', 'frontend'];

const CATEGORY_LABELS = {
  core:     { es: 'Lenguajes',    en: 'Languages' },
  db:       { es: 'Bases de Datos', en: 'Databases' },
  api:      { es: 'APIs',         en: 'APIs' },
  auth:     { es: 'Autenticación', en: 'Auth' },
  devops:   { es: 'DevOps',       en: 'DevOps' },
  security: { es: 'Seguridad',    en: 'Security' },
  ai:       { es: 'AI & Agentes', en: 'AI & Agents' },
  frontend: { es: 'Frontend',     en: 'Frontend' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function TechContact() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [copied, setCopied] = useState(false);

  /**
   * Copia el email al portapapeles — O(1)
   */
  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  }, []);

  // Agrupa tecnologías por categoría — O(n)
  const groupedTech = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = technologies.filter((tech) => tech.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <>
      {/* ─── Tech Stack Section ─────────────────────── */}
      <section id="tech" className="section">
        <h2 className="section-title">
          <Cpu size={22} />
          {t.tech.title}
        </h2>

        <motion.div
          className={styles.techGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CATEGORY_ORDER.map((cat) => {
            const items = groupedTech[cat];
            if (!items) return null;
            const catLabel = CATEGORY_LABELS[cat][lang];

            return (
              <motion.div key={cat} variants={cardVariants}>
                <BentoCard className={styles.techCard} tilt={false}>
                  <span className={styles.catLabel}>{catLabel}</span>
                  <div className={styles.techItems}>
                    {items.map((tech) => (
                      <div
                        key={tech.id}
                        className={`${styles.techItem} ${tech.level === 'basic' ? styles.basic : ''}`}
                        title={tech.level === 'basic'
                          ? (lang === 'es' ? 'Conocimiento básico' : 'Basic knowledge')
                          : (lang === 'es' ? 'Conocimiento avanzado' : 'Advanced knowledge')}
                      >
                        <span className={styles.techName}>{tech.label}</span>
                        {tech.level === 'basic' && (
                          <span className={styles.basicBadge}>basic</span>
                        )}
                      </div>
                    ))}
                  </div>
                </BentoCard>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── Contact Section ────────────────────────── */}
      <section id="contact" className="section">
        <h2 className="section-title">
          <Mail size={22} />
          {t.contact.title}
        </h2>

        <motion.div
          className={styles.contactGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Email card (grande) */}
          <motion.div variants={cardVariants} className={styles.emailWrapper}>
            <BentoCard className={styles.emailCard} tilt={false}>
              <div className={styles.emailTop}>
                <div>
                  <p className={styles.contactSubtitle}>{t.contact.subtitle}</p>
                  <div className={styles.emailRow}>
                    <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailAddress}>
                      {CONTACT_EMAIL}
                    </a>
                    <button
                      className={styles.copyBtn}
                      onClick={handleCopyEmail}
                      aria-label={t.contact.copySuccess}
                      title="Copiar email"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied
                          ? <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={16} /></motion.span>
                          : <motion.span key="copy"  initial={{ scale: 0 }} animate={{ scale: 1 }}><Copy size={16} /></motion.span>
                        }
                      </AnimatePresence>
                    </button>
                  </div>
                  {copied && (
                    <p className={styles.copiedMsg}>{t.contact.copySuccess}</p>
                  )}
                </div>
                <MemojiAvatar
                  src={MEMOJI_WAVE}
                  alt="Memoji saludando"
                  size={100}
                  floatRange={5}
                  className={styles.contactMemoji}
                />
              </div>
            </BentoCard>
          </motion.div>

          {/* LinkedIn card */}
          <motion.div variants={cardVariants}>
            <BentoCard className={styles.socialContactCard}>
              <a
                href="https://www.linkedin.com/in/devdavidrodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialContactLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={28} strokeWidth={1.5} />
                <div>
                  <p className={styles.socialContactLabel}>LinkedIn</p>
                  <p className={styles.socialContactHandle}>/devdavidrodriguez</p>
                </div>
              </a>
            </BentoCard>
          </motion.div>

          {/* GitHub card */}
          <motion.div variants={cardVariants}>
            <BentoCard className={styles.socialContactCard}>
              <a
                href="https://github.com/Itsstebann"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialContactLink}
                aria-label="GitHub"
              >
                <Github size={28} strokeWidth={1.5} />
                <div>
                  <p className={styles.socialContactLabel}>GitHub</p>
                  <p className={styles.socialContactHandle}>@Itsstebann</p>
                </div>
              </a>
            </BentoCard>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <p className={styles.footer}>
          {lang === 'es'
            ? 'Construido con React · Vite · Framer Motion'
            : 'Built with React · Vite · Framer Motion'}
        </p>
      </section>
    </>
  );
}

export default TechContact;
