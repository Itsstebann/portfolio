import { FiCode, FiMapPin, FiMail, FiCalendar } from 'react-icons/fi';
import { FaPython, FaReact, FaRobot, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiDocker, SiPostgresql, SiDjango } from 'react-icons/si';
import './About.css';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="about" id="about">
      <div className="container">
        <h3 className="section-title">{t('about.title')}</h3>
        <p className="section-subtitle">
          {t('about.subtitle')}
        </p>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div className="tech-grid-bg">
                <FaPython className="tech-icon-float" style={{ animationDelay: '0s' }} />
                <FaReact className="tech-icon-float" style={{ animationDelay: '0.5s' }} />
                <FaRobot className="tech-icon-float" style={{ animationDelay: '1s' }} />
                <FaDatabase className="tech-icon-float" style={{ animationDelay: '1.5s' }} />
                <SiJavascript className="tech-icon-float" style={{ animationDelay: '2s' }} />
                <SiDocker className="tech-icon-float" style={{ animationDelay: '2.5s' }} />
                <SiPostgresql className="tech-icon-float" style={{ animationDelay: '3s' }} />
                <SiDjango className="tech-icon-float" style={{ animationDelay: '3.5s' }} />
                <FaGithub className="tech-icon-float" style={{ animationDelay: '4s' }} />
              </div>
            </div>
            <div className="about-image-decoration"></div>
            <div className="about-float-badge">
              <div className="badge-icon">
                <FaPython />
              </div>
              <div className="badge-text">
                <strong>{t('about.pythonFirst')}</strong>
                <span>{t('about.coreLanguage')}</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2>
              {t('about.heading1')} <span className="highlight">{t('about.headingBusiness')}</span> {t('about.heading2')}
            </h2>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="info-icon"><FiCode /></div>
                <div className="info-label">{t('about.info.specialization')}</div>
                <div className="info-value">Python & AI</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiMapPin /></div>
                <div className="info-label">{t('about.info.location')}</div>
                <div className="info-value">Bogotá, Colombia</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiMail /></div>
                <div className="info-label">{t('about.info.email')}</div>
                <div className="info-value">devstack.drodriguez@gmail.com</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiCalendar /></div>
                <div className="info-label">{t('about.info.availability')}</div>
                <div className="info-value">{t('about.info.openToWork')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
