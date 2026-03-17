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
    github: '#',
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
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description:
      'Modern e-commerce application with user auth, payment processing, product catalog, and admin panel built with React & Django.',
    tech: ['React', 'Django', 'PostgreSQL', 'Stripe', 'Redux'],
    icon: <FaReact />,
    gradient: 'linear-gradient(135deg, #61DAFB, #6c63ff)',
    github: '#',
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
    github: '#',
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
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    category: 'Full Stack',
    description:
      'Real-time collaborative task manager with drag-and-drop, user roles, notifications, and a polished UI built with Next.js.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind', 'Vercel'],
    icon: <FaReact />,
    gradient: 'linear-gradient(135deg, #6c63ff, #4facfe)',
    github: '#',
    live: '#',
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
