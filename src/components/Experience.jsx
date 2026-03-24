import './Experience.css';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const expItems = t('experience.items');

  const experiences = [
    {
      date: expItems[0].date,
      role: expItems[0].role,
      company: expItems[0].company,
      description: expItems[0].desc,
      tech: expItems[0].tech,
    },
    {
      date: expItems[1].date,
      role: expItems[1].role,
      company: expItems[1].company,
      description: expItems[1].desc,
      tech: expItems[1].tech,
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h3 className="section-title">{t('experience.title')}</h3>
        <p className="section-subtitle">
          {t('experience.subtitle')}
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">{exp.date}</span>
                <h4 className="timeline-role">{exp.role}</h4>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-description" style={{ margin: '12px 0', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.tech.map((t, i) => (
                    <span className="timeline-tech-tag" key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
