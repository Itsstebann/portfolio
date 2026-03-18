import './Experience.css';

const experiences = [
  {
    date: '2025 — Present',
    role: 'Software Engineer',
    company: 'Falabella',
    description: [
      'Developing web modules using Java and Spring Boot to enhance user experience.',
      'Implementing preventive maintenance routines that increased system stability.',
      'Integrating SQL databases and REST APIs to improve data flow between systems.',
      'Building knowledge in WMOS (Warehouse Management Operating System).'
    ],
    tech: ['Java', 'Spring Boot', 'SQL', 'REST APIs', 'WMOS'],
  },
  {
    date: '2024 — 2025 · 7 months',
    role: 'Systems Engineer — Process Improvement',
    company: 'Karton SAS',
    description: [
      'Improved system performance by 25% through infrastructure optimization.',
      'Designed automation workflows that significantly reduced operational errors.',
      'Collaborated with development teams to deploy scalable cloud solutions.',
      'Managed system monitoring and maintenance, ensuring security and uptime.'
    ],
    tech: ['Python', 'Cloud', 'CI/CD', 'Automation', 'Infrastructure'],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h3 className="section-title">Experience</h3>
        <p className="section-subtitle">
          My professional journey and career milestones
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
