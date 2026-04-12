/**
 * Projects.jsx – Sección de proyectos personales
 * Bento Grid con el proyecto estrella ocupando mayor espacio.
 * Hover: zoom en imagen + slide-up de overlay con tech tags.
 *
 * Complejidad de renderizado: O(n) donde n = proyectos
 */

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, FolderGit2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { projects } from '../../data/projects';
import BentoCard, { cardVariants } from '../ui/BentoCard';
import styles from './Projects.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function ProjectCard({ project, t }) {
  const { lang } = useLanguage();
  const localized = project[lang];

  return (
    <BentoCard
      href={project.link}
      className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
      tilt={!project.featured}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className={styles.featuredBadge}>
          <Star size={12} fill="currentColor" />
          {lang === 'es' ? 'Proyecto destacado' : 'Featured project'}

        </div>
      )
      }

      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <FolderGit2 size={24} strokeWidth={1.6} />
        </div>
        <div className={styles.links}>
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
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              aria-label="Demo"
              title="Demo"
            >
              <ExternalLink size={18} strokeWidth={1.6} />
            </a>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className={styles.title}>{localized.title}</h3>
      <p className={styles.description}>{localized.description}</p>

      {/* Highlights — solo en featured */}
      {
        project.featured && localized.highlights && (
          <ul className={styles.highlights}>
            {localized.highlights.map((h, i) => (
              <li key={i} className={styles.highlight}>
                <span className={styles.highlightDot} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )
      }

      {/* Tech tags */}
      <div className={styles.techTags}>
        {project.techs.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </BentoCard >
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
            <ProjectCard project={project} t={t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
