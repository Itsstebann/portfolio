import {
  FaPython, FaReact, FaRobot, FaDatabase, FaCloud, FaChartBar,
} from 'react-icons/fa';
import {
  SiDjango, SiFlask, SiFastapi, SiPandas, SiNumpy,
  SiNextdotjs, SiRedux, SiJavascript,
  SiSelenium, SiDocker, SiGithubactions,
  SiTensorflow, SiScikitlearn, SiOpenai, SiLangchain,
  SiPostgresql, SiMongodb, SiApacheairflow,
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Python',
    description: 'Backend & scripting',
    icon: <FaPython />,
    color: 'linear-gradient(135deg, #3776AB, #FFD43B)',
    skills: [
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Python 3.12+', icon: <FaPython /> },
    ],
  },
  {
    title: 'React & Frontend',
    description: 'Modern web apps',
    icon: <FaReact />,
    color: 'linear-gradient(135deg, #61DAFB, #6c63ff)',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Hooks & Context', icon: <FaReact /> },
    ],
  },
  {
    title: 'Automation',
    description: 'CI/CD & testing',
    icon: <FaCloud />,
    color: 'linear-gradient(135deg, #00d4aa, #4facfe)',
    skills: [
      { name: 'Selenium', icon: <SiSelenium /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'REST APIs', icon: <FaCloud /> },
      { name: 'Web Scraping', icon: <FaPython /> },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent systems',
    icon: <FaRobot />,
    color: 'linear-gradient(135deg, #ff6b9d, #f093fb)',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'OpenAI API', icon: <SiOpenai /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'NLP', icon: <FaRobot /> },
    ],
  },
  {
    title: 'Data & Databases',
    description: 'Analytics & storage',
    icon: <FaDatabase />,
    color: 'linear-gradient(135deg, #ffd700, #ff6b9d)',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'ETL Pipelines', icon: <SiApacheairflow /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h3 className="section-title">Skills & Technologies</h3>
        <p className="section-subtitle">
          The technical stack I use for engineering and data analysis.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={index}
              style={{ '--category-color': category.color }}
            >
              <div className="skill-category-header">
                <div
                  className="skill-category-icon"
                  style={{ background: category.color }}
                >
                  {category.icon}
                </div>
                <div>
                  <div className="skill-category-title">{category.title}</div>
                  <div className="skill-category-desc">{category.description}</div>
                </div>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    <span className="tag-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
