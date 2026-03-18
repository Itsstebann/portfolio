import './Experience.css';

const experiences = [
  {
    date: '2025 — Present',
    role: 'Software Engineer',
    company: 'Falabella',
    description:
      'Developing web modules using Java and Spring Boot, enhancing user experience across Falabella\'s platforms. Implementing preventive maintenance routines that increased system stability. Integrating SQL databases and REST APIs to improve data flow between systems. Supporting the migration of legacy systems to modern, secure platforms. Building knowledge in WMOS (Warehouse Management Operating System).',
    tech: ['Java', 'Spring Boot', 'SQL', 'REST APIs', 'WMOS'],
  },
  {
    date: '2024 — 2025 · 7 months',
    role: 'Systems Engineer — Process Improvement',
    company: 'Karton SAS',
    description:
      'Improved system performance by 25% through infrastructure optimization. Designed automation workflows that reduced operational errors significantly. Collaborated with development and support teams to deploy scalable cloud solutions. Managed system monitoring and maintenance to ensure security and uptime.',
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
                <p className="timeline-description">{exp.description}</p>
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
