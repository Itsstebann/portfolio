import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaPython, FaReact, FaRobot, FaDatabase, FaCloud } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'AI Chat Assistant',
    category: 'Artificial Intelligence',
    description:
      'A conversational AI chatbot built with LangChain and OpenAI, featuring memory, RAG retrieval, and a modern React frontend.',
    tech: ['Python', 'LangChain', 'OpenAI', 'React', 'FastAPI'],
    icon: <FaRobot />,
    gradient: 'linear-gradient(135deg, #ff6b9d, #f093fb)',
    github: 'https://github.com/itsstebann',
    live: '#',
  },
  {
    title: 'Data Analytics Dashboard',
    category: 'Data Science',
    description:
      'Interactive business intelligence dashboard with real-time visualizations, ETL pipelines, and automated reporting.',
    tech: ['Python', 'Pandas', 'Power BI', 'PostgreSQL', 'Plotly'],
    icon: <FaDatabase />,
    gradient: 'linear-gradient(135deg, #ffd700, #ff6b9d)',
    github: 'https://github.com/itsstebann',
    live: '#',
  },
  {
    title: 'Web Scraping Automation',
    category: 'Automation',
    description:
      'Automated data collection system using Selenium and BeautifulSoup, with scheduled tasks, proxy rotation, and data cleaning.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Docker', 'Celery'],
    icon: <FaCloud />,
    gradient: 'linear-gradient(135deg, #00d4aa, #4facfe)',
    github: 'https://github.com/itsstebann',
    live: '#',
  },
  {
    title: 'ML Prediction Engine',
    category: 'Machine Learning',
    description:
      'End-to-end machine learning pipeline for predictive analytics, including feature engineering, model training, and API deployment.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'Docker'],
    icon: <FaPython />,
    gradient: 'linear-gradient(135deg, #3776AB, #FFD43B)',
    github: 'https://github.com/itsstebann',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    category: 'Full Stack',
    description:
      'This portfolio site — a modern React + Vite single-page app with particle animations, glassmorphism design, and responsive layout.',
    tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
    icon: <FaReact />,
    gradient: 'linear-gradient(135deg, #6c63ff, #4facfe)',
    github: 'https://github.com/itsstebann/portfolio',
    live: 'https://itsstebann.github.io/portfolio',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3 className="section-title">Featured Projects</h3>
        <p className="section-subtitle">
          A selection of projects that showcase my skills and passion for building
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <div
                  className="project-image-bg"
                  style={{ background: project.gradient }}
                >
                  {project.icon}
                </div>
                <div className="project-overlay">
                  <a
                    href={project.github}
                    className="project-overlay-btn outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="project-overlay-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.tech.map((t, i) => (
                    <span className="project-tech-tag" key={i}>
                      {t}
                    </span>
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

export default Projects;
