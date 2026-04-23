/**
 * Projects.jsx – Sección de proyectos personales
 * Bento Grid con el proyecto estrella ocupando mayor espacio.
 * Hover: shimmer line + glow border + overlay con doble CTA + icon morphing.
 *
 * Complejidad de renderizado: O(n) donde n = proyectos
 */

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, FolderGit2, ArrowUpRight, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { projects } from '../../data/projects';
import BentoCard, { cardVariants } from '../ui/BentoCard';
import styles from './Projects.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function ProjectCard({ project }) {
  const { lang } = useLanguage();
  const localized = project[lang];

  const repoLabel = lang === 'es' ? 'Ver repo' : 'View repo';
  const demoLabel = lang === 'es' ? 'Ver demo' : 'View demo';

  return (
    <BentoCard
      className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
      tilt={!project.featured}
    >
      {/* Shimmer line animado en hover */}
      <div className={styles.shimmerLine} aria-hidden="true" />

      {/* Featured badge */}
      {project.featured && (
        <div className={styles.featuredBadge}>
          <Star size={12} fill="currentColor" />
          {lang === 'es' ? 'Proyecto destacado' : 'Featured project'}
        </div>
      )}

      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <FolderGit2 size={24} strokeWidth={1.6} className={styles.iconDefault} />
            <ArrowUpRight size={24} strokeWidth={1.6} className={styles.iconHover} />
          </div>
          {/* Subtitle badge (Backend/API, Frontend, Fullstack) */}
          {localized.subtitle && (
            <span className={styles.subtitleBadge}>{localized.subtitle}</span>
          )}
        </div>
        <div className={styles.links}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              aria-label="Live"
              title={lang === 'es' ? 'Ver en vivo' : 'Live site'}
            >
              <ExternalLink size={18} strokeWidth={1.6} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={18} strokeWidth={1.6} />
            </a>
          )}
        </div>
      </div>

      {/* Title y Description */}
      <h3 className={styles.title}>{localized.title}</h3>
      <p className={styles.description}>{localized.description}</p>

      {/* Highlights — solo en featured */}
      {project.featured && localized.highlights && (
        <ul className={styles.highlights}>
          {localized.highlights.map((h, i) => (
            <li key={i} className={styles.highlight}>
              <span className={styles.highlightDot} aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className={styles.techTags}>
        {project.techs.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      {/* Hover Overlay con doble CTA */}
      <div className={styles.hoverOverlay} aria-hidden="true">
        <div className={styles.overlayButtons}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.overlayCta} ${styles.ctaRepo}`}
            >
              <Code2 size={15} />
              {repoLabel}
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.overlayCta} ${styles.ctaDemo}`}
            >
              <Globe size={15} />
              {demoLabel}
              <ArrowUpRight size={14} className={styles.ctaArrow} />
            </a>
          )}
        </div>
      </div>
    </BentoCard>
  );
}

function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;

  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        <FolderGit2 size={22} />
        {t.title}
      </h2>

      <motion.div
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className={project.featured ? styles.featuredWrapper : styles.cardWrapper}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
