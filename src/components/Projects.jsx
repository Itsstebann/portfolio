import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaPython, FaReact, FaRobot, FaDatabase, FaCloud } from 'react-icons/fa';
import './Projects.css';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const pItems = t('projects.items');

  const projects = [
    {
      title: pItems[0].title,
      category: pItems[0].category,
      description: pItems[0].description,
      tech: pItems[0].tech,
      icon: <FaRobot />,
      gradient: 'linear-gradient(135deg, #ff6b9d, #f093fb)',
      github: 'https://github.com/itsstebann',
      live: '#',
    },
    {
      title: pItems[1].title,
      category: pItems[1].category,
      description: pItems[1].description,
      tech: pItems[1].tech,
      icon: <FaReact />,
      gradient: 'linear-gradient(135deg, #6c63ff, #4facfe)',
      github: 'https://github.com/itsstebann/portfolio',
      live: 'https://itsstebann.github.io/portfolio',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3 className="section-title">{t('projects.title')}</h3>
        <p className="section-subtitle">
          {t('projects.subtitle')}
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
                    <FiGithub /> {t('projects.btnCode')}
                  </a>
                  <a
                    href={project.live}
                    className="project-overlay-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> {t('projects.btnLive')}
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
