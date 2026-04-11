/**
 * StatusWidget.jsx
 * Badge "Disponible para trabajar" con dot parpadeante animado por CSS.
 * Componente puro sin estado — O(1) render
 */

import styles from './StatusWidget.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';

function StatusWidget() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <div className={styles.widget} role="status" aria-label={t.available}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>{t.available}</span>
    </div>
  );
}

export default StatusWidget;
