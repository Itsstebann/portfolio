/**
 * Education.jsx – Sección de formación académica
 * Cards con información de cada carrera universitaria.
 * Datos provenientes del contexto de idioma — O(1) acceso
 */

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import BentoCard, { cardVariants } from '../ui/BentoCard';
import styles from './Education.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

function Education() {
  const { lang } = useLanguage();
  const t = content[lang].education;

  return (
    <section id="education" className="section">
      <h2 className="section-title">
        <GraduationCap size={22} />
        {t.title}
      </h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {t.items.map((item) => (
          <motion.div key={item.id} variants={cardVariants}>
            <BentoCard tilt={false}>
              <div className={styles.card}>
                {/* Header con icono y periodo */}
                <div className={styles.header}>
                  <div className={styles.iconBadge}>
                    <GraduationCap size={20} />
                  </div>
                  <div className={styles.period}>
                    <Calendar size={13} />
                    {item.period}
                  </div>
                </div>

                {/* Info principal */}
                <div className={styles.body}>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                </div>

                {/* Detalles: semestre, promedio, certificable */}
                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <BookOpen size={14} />
                    <span>{item.semester}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <Award size={14} />
                    <span>GPA {item.gpa}</span>
                  </div>
                </div>

                {/* Badge certificable */}
                <span className={styles.certBadge}>{item.certified}</span>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Education;
