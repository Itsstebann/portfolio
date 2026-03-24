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
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const categoriesContext = t('skills.categories');

  const skillCategories = [
    {
      title: categoriesContext[0].title,
      description: categoriesContext[0].desc,
      icon: <FaPython />,
      color: 'linear-gradient(135deg, #3776AB, #FFD43B)',
      skills: [
        { name: categoriesContext[0].skills[0], icon: <SiDjango /> },
        { name: categoriesContext[0].skills[1], icon: <SiFlask /> },
        { name: categoriesContext[0].skills[2], icon: <SiFastapi /> },
        { name: categoriesContext[0].skills[3], icon: <SiPandas /> },
        { name: categoriesContext[0].skills[4], icon: <SiNumpy /> },
        { name: categoriesContext[0].skills[5], icon: <FaPython /> },
      ],
    },
    {
      title: categoriesContext[1].title,
      description: categoriesContext[1].desc,
      icon: <FaReact />,
      color: 'linear-gradient(135deg, #61DAFB, #6c63ff)',
      skills: [
        { name: categoriesContext[1].skills[0], icon: <FaReact /> },
        { name: categoriesContext[1].skills[1], icon: <SiNextdotjs /> },
        { name: categoriesContext[1].skills[2], icon: <SiRedux /> },
        { name: categoriesContext[1].skills[3], icon: <SiJavascript /> },
        { name: categoriesContext[1].skills[4], icon: <FaReact /> },
      ],
    },
    {
      title: categoriesContext[2].title,
      description: categoriesContext[2].desc,
      icon: <FaCloud />,
      color: 'linear-gradient(135deg, #00d4aa, #4facfe)',
      skills: [
        { name: categoriesContext[2].skills[0], icon: <SiSelenium /> },
        { name: categoriesContext[2].skills[1], icon: <SiDocker /> },
        { name: categoriesContext[2].skills[2], icon: <SiGithubactions /> },
        { name: categoriesContext[2].skills[3], icon: <FaCloud /> },
        { name: categoriesContext[2].skills[4], icon: <FaPython /> },
      ],
    },
    {
      title: categoriesContext[3].title,
      description: categoriesContext[3].desc,
      icon: <FaRobot />,
      color: 'linear-gradient(135deg, #ff6b9d, #f093fb)',
      skills: [
        { name: categoriesContext[3].skills[0], icon: <SiTensorflow /> },
        { name: categoriesContext[3].skills[1], icon: <SiScikitlearn /> },
        { name: categoriesContext[3].skills[2], icon: <SiOpenai /> },
        { name: categoriesContext[3].skills[3], icon: <SiLangchain /> },
        { name: categoriesContext[3].skills[4], icon: <FaRobot /> },
      ],
    },
    {
      title: categoriesContext[4].title,
      description: categoriesContext[4].desc,
      icon: <FaDatabase />,
      color: 'linear-gradient(135deg, #ffd700, #ff6b9d)',
      skills: [
        { name: categoriesContext[4].skills[0], icon: <SiPostgresql /> },
        { name: categoriesContext[4].skills[1], icon: <SiMongodb /> },
        { name: categoriesContext[4].skills[2], icon: <FaChartBar /> },
        { name: categoriesContext[4].skills[3], icon: <SiApacheairflow /> },
        { name: categoriesContext[4].skills[4], icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h3 className="section-title">{t('skills.title')}</h3>
        <p className="section-subtitle">
          {t('skills.subtitle')}
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
