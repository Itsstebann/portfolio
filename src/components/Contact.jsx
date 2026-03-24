import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements['contact-name'].value;
    const email = e.target.elements['contact-email'].value;
    const subject = e.target.elements['contact-subject'].value;
    const message = e.target.elements['contact-message'].value;
    const mailtoLink = `mailto:devstack.drodriguez@gmail.com?subject=${encodeURIComponent(subject || t('contact.form.defaultSubject'))}&body=${encodeURIComponent(`Hi David,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3 className="section-title">{t('contact.title')}</h3>
        <p className="section-subtitle">
          {t('contact.subtitle')}
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>
              {t('contact.heading1')} <span className="highlight">{t('contact.headingConnect')}</span>
            </h3>
            <p>
              {t('contact.p1')}
            </p>

            <div className="contact-methods">
              <a href="mailto:devstack.drodriguez@gmail.com" className="contact-method">
                <div className="contact-method-icon">
                  <FiMail />
                </div>
                <div>
                  <div className="contact-method-label">{t('contact.methods.email')}</div>
                  <div className="contact-method-value">
                    devstack.drodriguez@gmail.com
                  </div>
                </div>
              </a>
              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiMapPin />
                </div>
                <div>
                  <div className="contact-method-label">{t('contact.methods.location')}</div>
                  <div className="contact-method-value">
                    Bogotá, Colombia
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/itsstebann"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/devdavidrodriguez"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/itssteban_"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">{t('contact.form.message')}</label>
                <textarea
                  id="contact-message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                <FiSend /> {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
