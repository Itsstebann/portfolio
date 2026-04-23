/**
 * Hero.jsx – Sección "Acerca de mí"
 * Celda más grande del Bento Grid con presentación, status y social links.
 * Animaciones: staggered container + cardVariants importados de BentoCard
 */

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, Terminal, Command } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import BentoCard, { cardVariants } from '../ui/BentoCard';
import MemojiAvatar from '../ui/MemojiAvatar';
import StatusWidget from '../ui/StatusWidget';
import styles from './Hero.module.css';

// Rutas de los Memojis (servidos desde public/)
const MEMOJI_LAPTOP = `${import.meta.env.BASE_URL}assets/memoji/memoji-laptop.png`;
const MEMOJI_WINK   = `${import.meta.env.BASE_URL}assets/memoji/memoji-wink.png`;

// Variante del contenedor staggered — O(1) config
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  // Despachar Ctrl+K sintético para abrir el CommandPalette
  const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: true,
      bubbles: true,
    }));
  };

  return (
    <section id="about" className="section">
      <motion.div
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Hero Cell (2x2 grande) --- */}
        <BentoCard className={styles.heroCell} size="xl">
          <div className={styles.heroContent}>
            {/* Top row */}
            <div className={styles.heroTop}>
              <StatusWidget />
              <div className={styles.terminalBadge}>
                <Terminal size={12} />
                <span>python dev</span>
              </div>
              <motion.button
                className={styles.kbdHint}
                onClick={openCommandPalette}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                aria-label={lang === 'es' ? 'Abrir navegación rápida' : 'Open quick navigation'}
                title={lang === 'es' ? 'Navegación rápida' : 'Quick navigation'}
              >
                <Command size={12} className={styles.kbdHintIcon} />
                <span className={styles.kbdHintLabel}>
                  {lang === 'es' ? 'Navegación rápida' : 'Quick nav'}
                </span>
                <kbd className={styles.kbdKey}>Ctrl</kbd>
                <kbd className={styles.kbdKey}>K</kbd>
              </motion.button>
            </div>

            {/* Main text */}
            <div className={styles.heroText}>
              <p className={styles.greeting}>{t.greeting}</p>
              <h1 className={styles.name}>
                David<br />
                <span className="gradient-text">Rodriguez</span>
              </h1>
              <p className={styles.role}>// {t.role}</p>
            </div>

            {/* Bio */}
            <p className={styles.bio}>{t.bio}</p>

            {/* CTAs */}
            <div className={styles.ctaRow}>
              <button className={styles.ctaPrimary} onClick={scrollToProjects}>
                {t.cta}
                <ArrowDown size={16} />
              </button>
              <button className={styles.ctaSecondary} onClick={scrollToContact}>
                {t.ctaSecond}
              </button>
            </div>
          </div>
        </BentoCard>

        {/* ─── Memoji + Personal Card ─── */}
        <BentoCard className={styles.memojiCell} tilt={false}>
          <div className={styles.memojiWrapper}>
            <div className={styles.memojiContainer}>
              <MemojiAvatar
                src={MEMOJI_LAPTOP}
                hoverSrc={MEMOJI_WINK}
                alt="David Rodriguez Memoji"
                size={120}
                floatRange={6}
              />
            </div>
            <div className={styles.personalBlock}>
              <p className={styles.personalText}>{t.personal}</p>
              <blockquote className={styles.quote}>
                <span className={styles.quoteText}>{t.quote}</span>
                <cite className={styles.quoteAuthor}>{t.quoteAuthor}</cite>
              </blockquote>
            </div>
          </div>
        </BentoCard>

        {/* ─── GitHub Card ─── */}
        <BentoCard className={styles.socialCell}>
          <a
            href="https://github.com/Itsstebann"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <Github size={32} strokeWidth={1.4} />
            <span className={styles.socialLabel}>GitHub</span>
            <span className={styles.socialHandle}>@Itsstebann</span>
          </a>
        </BentoCard>

        {/* ─── LinkedIn Card ─── */}
        <BentoCard className={styles.linkedinCell}>
          <a
            href="https://www.linkedin.com/in/devdavidrodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <Linkedin size={32} strokeWidth={1.4} />
            <span className={styles.socialLabel}>LinkedIn</span>
            <span className={styles.socialHandle}>/devdavidrodriguez</span>
          </a>
        </BentoCard>

        {/* ─── Quick Info Card ─── */}
        <BentoCard className={styles.infoCell} tilt={false}>
          <div className={styles.infoGrid}>
            {[
              { label: lang === 'es' ? 'Ubicación' : 'Location',   value: 'Bogotá, CO' },
              { label: lang === 'es' ? 'Experiencia' : 'Experience', value: '3+ años' },
              { label: 'Stack',                                       value: 'Python · SQL · APIs' },
              { label: lang === 'es' ? 'Enfoque' : 'Focus',          value: 'Backend · DevOps · AI' },
            ].map(({ label, value }) => (
              <div key={label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{label}</span>
                <span className={styles.infoValue}>{value}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </motion.div>
    </section>
  );
}

export default Hero;
