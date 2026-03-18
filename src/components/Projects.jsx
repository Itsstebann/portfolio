import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaPython, FaReact, FaRobot, FaDatabase, FaCloud } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Business Workflow Automation',
    category: 'Python Scripting',
    description:
      'A practical data collection and workflow automation script built to eliminate repetitive manual data entry tasks.',
    tech: ['Python', 'Selenium', 'Pandas'],
    icon: <FaRobot />,
    gradient: 'linear-gradient(135deg, #ff6b9d, #f093fb)',
    github: 'https://github.com/itsstebann',
    live: '#',
  },
  {
    title: 'Developer Portfolio',
    category: 'Full Stack Web',
    description:
      'My personal portfolio website built with React and Vite. Features a custom glassmorphism design, CSS animations, and responsive layout.',
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
          Projects I've built to solve real problems (more coming soon).
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
