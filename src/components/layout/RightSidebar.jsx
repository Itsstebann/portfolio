/**
 * RightSidebar.jsx
 * Navegación vertical anclada al lado derecho de la pantalla.
 * Íconos con tooltips y resaltado de sección activa por scroll (IntersectionObserver).
 *
 * Complejidad de observación: O(n) donde n = número de secciones observadas
 */

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  User, Briefcase, GraduationCap, FolderGit2, Cpu, Mail, Github, Linkedin,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import styles from './RightSidebar.module.css';

// Definición de secciones — O(1) acceso por índice
const SECTIONS = [
  { id: 'about',      Icon: User },
  { id: 'experience', Icon: Briefcase },
  { id: 'education',  Icon: GraduationCap },
  { id: 'projects',   Icon: FolderGit2 },
  { id: 'tech',       Icon: Cpu },
  { id: 'contact',    Icon: Mail },
];

function RightSidebar() {
  const { lang } = useLanguage();
  const t = content[lang].nav;
  const [activeSection, setActiveSection] = useState('about');

  /**
   * IntersectionObserver para detectar sección visible — O(n) setup
   * Actualiza activeSection con la sección más visible en viewport
   */
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Cleanup — O(n)
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.nav
      className={styles.sidebar}
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Navegación principal"
    >
      {/* Nav links */}
      <div className={styles.navLinks}>
        {SECTIONS.map(({ id, Icon }) => {
          const label = t[id] ?? id;
          const isActive = activeSection === id;

          return (
            <div key={id} className={styles.navItemWrapper}>
              <button
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                onClick={() => handleNavClick(id)}
                aria-label={label}
                title={label}
              >
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
                {isActive && (
                  <motion.span
                    className={styles.activeDot}
                    layoutId="activeDot"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
              <span className={styles.tooltip}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/Itsstebann"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
          aria-label="GitHub"
          title="GitHub"
        >
          <Github size={18} strokeWidth={1.6} />
        </a>
        <a
          href="https://www.linkedin.com/in/devdavidrodriguez"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin size={18} strokeWidth={1.6} />
        </a>
      </div>

      {/* Language toggle */}
      <div className={styles.langToggle}>
        <LanguageSwitcher />
      </div>
    </motion.nav>
  );
}

export default RightSidebar;
