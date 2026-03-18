import { FiCode, FiMapPin, FiMail, FiCalendar } from 'react-icons/fi';
import { FaPython, FaReact, FaRobot, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiDocker, SiPostgresql, SiDjango } from 'react-icons/si';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h3 className="section-title">About Me</h3>
        <p className="section-subtitle">
          More about my background and approach
        </p>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div className="tech-grid-bg">
                <FaPython className="tech-icon-float" style={{ animationDelay: '0s' }} />
                <FaReact className="tech-icon-float" style={{ animationDelay: '0.5s' }} />
                <FaRobot className="tech-icon-float" style={{ animationDelay: '1s' }} />
                <FaDatabase className="tech-icon-float" style={{ animationDelay: '1.5s' }} />
                <SiJavascript className="tech-icon-float" style={{ animationDelay: '2s' }} />
                <SiDocker className="tech-icon-float" style={{ animationDelay: '2.5s' }} />
                <SiPostgresql className="tech-icon-float" style={{ animationDelay: '3s' }} />
                <SiDjango className="tech-icon-float" style={{ animationDelay: '3.5s' }} />
                <FaGithub className="tech-icon-float" style={{ animationDelay: '4s' }} />
              </div>
            </div>
            <div className="about-image-decoration"></div>
            <div className="about-float-badge">
              <div className="badge-icon">
                <FaPython />
              </div>
              <div className="badge-text">
                <strong>Python First</strong>
                <span>Core Language</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2>
              Connecting <span className="highlight">Business Strategy</span> with Engineering
            </h2>
            <p>
              Hi, I'm David Esteban Rodríguez Cárdenas, a 20-year-old developer from Bogotá, Colombia. 
              Currently, I'm pursuing two degrees simultaneously: <strong>Business Administration and Systems Engineering</strong>. 
              This dual focus gives me a unique perspective on software development — I don't just write code; 
              I look at how technology can solve actual operational problems and improve workflows.
            </p>
            <p>
              My primary focus is <strong>Python</strong>. Whether it's building backend APIs, writing automation scripts 
              to replace manual tasks, or exploring data integrations, I enjoy creating software that is efficient 
              and genuinely useful. As I continue to learn and grow, I'm constantly adding new tools to my stack.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="info-icon"><FiCode /></div>
                <div className="info-label">Specialization</div>
                <div className="info-value">Python & AI</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiMapPin /></div>
                <div className="info-label">Location</div>
                <div className="info-value">Bogotá, Colombia</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiMail /></div>
                <div className="info-label">Email</div>
                <div className="info-value">devstack.drodriguez@gmail.com</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiCalendar /></div>
                <div className="info-label">Availability</div>
                <div className="info-value">Open to Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
