/**
 * Experience.jsx – Sección de experiencia laboral
 * Timeline vertical con BentoCards animadas en stagger.
 * Datos provenientes del contexto de idioma — O(1) acceso
 */

import { motion } from 'framer-motion';
import { Building2, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import BentoCard, { cardVariants } from '../ui/BentoCard';
import styles from './Experience.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

function Experience() {
  const { lang } = useLanguage();
  const t = content[lang].experience;

  return (
    <section id="experience" className="section">
      <h2 className="section-title">
        <Building2 size={22} />
        {t.title}
      </h2>

      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {t.items.map((job, idx) => (
          <motion.div
            key={job.id}
            variants={cardVariants}
            className={styles.timelineItem}
          >
            {/* Vertical line connector */}
            {idx < t.items.length - 1 && (
              <div className={styles.connector} aria-hidden="true" />
            )}

            {/* Timeline dot */}
            <div className={styles.dot} aria-hidden="true">
              <div className={styles.dotInner} />
            </div>

            {/* Card */}
            <BentoCard className={styles.card} tilt={false}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <div className={styles.meta}>
                    <span className={styles.company}>{job.company}</span>
                    <span className={styles.metaDivider}>·</span>
                    <span className={styles.type}>{job.type}</span>
                  </div>
                </div>
                <div className={styles.period}>
                  <Calendar size={13} />
                  {job.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i} className={styles.bullet}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
