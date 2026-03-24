import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          David Esteban<span>.dev</span>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} David Esteban Rodríguez. {t('footer.builtWith')}
        </p>
        <ul className="footer-links">
          <li><a href="#hero">{t('footer.home')}</a></li>
          <li><a href="#projects">{t('footer.projects')}</a></li>
          <li><a href="#contact">{t('footer.contact')}</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
