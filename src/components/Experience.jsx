import './Experience.css';

const experiences = [
  {
    date: '2024 — Present',
    role: 'Python Developer & AI Engineer',
    company: 'Freelance / Personal Projects',
    description:
      'Building AI-powered applications using LangChain, OpenAI, and TensorFlow. Developing full-stack web apps with React and Django. Creating automated data pipelines and ETL processes.',
    tech: ['Python', 'React', 'LangChain', 'TensorFlow', 'FastAPI'],
  },
  {
    date: '2023 — 2024',
    role: 'Full Stack Developer',
    company: 'Tech Startup',
    description:
      'Developed and maintained web applications using React and Django REST Framework. Implemented CI/CD pipelines, automated testing, and database optimization strategies.',
    tech: ['Django', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    date: '2022 — 2023',
    role: 'Data Analyst & Automation Engineer',
    company: 'Business Solutions Company',
    description:
      'Created interactive dashboards with Power BI and automated data collection using Python and Selenium. Designed ETL pipelines to streamline reporting workflows.',
    tech: ['Python', 'Pandas', 'Selenium', 'Power BI', 'SQL'],
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
