/**
 * LanguageSwitcher.jsx
 * Toggle compacto ES / EN para el sidebar.
 * Sin dependencias externas — O(1) render y toggle
 */

import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();
  const isEN = lang === 'en';

  return (
    <button
      className={styles.switcher}
      onClick={toggleLang}
      aria-label={isEN ? 'Cambiar a Español' : 'Switch to English'}
      title={isEN ? 'Cambiar a Español' : 'Switch to English'}
    >
      <span className={`${styles.option} ${!isEN ? styles.active : ''}`}>ES</span>
      <span className={styles.divider}>/</span>
      <span className={`${styles.option} ${isEN ? styles.active : ''}`}>EN</span>
    </button>
  );
}

export default LanguageSwitcher;
