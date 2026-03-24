import { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          David<span>.dev</span>
        </div>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="theme-switch-wrapper">
            <span className={`lang-label ${language === 'en' ? 'active' : ''}`}>EN</span>
            <label className="theme-switch" htmlFor="checkbox">
              <input 
                type="checkbox" 
                id="checkbox" 
                checked={language === 'es'} 
                onChange={toggleLanguage} 
                aria-label="Toggle language"
              />
              <div className="slider round"></div>
            </label>
            <span className={`lang-label ${language === 'es' ? 'active' : ''}`}>ES</span>
          </div>

          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>{t('navbar.experience')}</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t('navbar.about')}</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>{t('navbar.skills')}</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t('navbar.projects')}</a></li>
          <li><a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>{t('navbar.contact')}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
