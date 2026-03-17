import { FiCode, FiMapPin, FiMail, FiCalendar } from 'react-icons/fi';
import { FaPython } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h3 className="section-title">About Me</h3>
        <p className="section-subtitle">
          Get to know the developer behind the code
        </p>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 50%, #4facfe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: 'white',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                D
              </div>
            </div>
            <div className="about-image-decoration"></div>
            <div className="about-float-badge">
              <div className="badge-icon">
                <FaPython />
              </div>
              <div className="badge-text">
                <strong>3+ Years</strong>
                <span>Python Development</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2>
              Crafting <span className="highlight">Digital Solutions</span> with Code & Data
            </h2>
            <p>
              I'm a passionate software developer specializing in Python, React, 
              and cutting-edge AI technologies. I love turning complex problems 
              into elegant, efficient solutions that make a real impact.
            </p>
            <p>
              From building intelligent automation pipelines to crafting modern 
              web applications, I combine technical expertise with creative 
              problem-solving to deliver exceptional results. My focus on data-driven 
              development ensures every project is built on solid analytical foundations.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="info-icon"><FiCode /></div>
                <div className="info-label">Specialization</div>
                <div className="info-value">Full Stack & AI</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiMapPin /></div>
                <div className="info-label">Location</div>
                <div className="info-value">Remote-Ready</div>
              </div>
              <div className="about-info-item">
                <div className="info-icon"><FiMail /></div>
                <div className="info-label">Email</div>
                <div className="info-value">david@dev.com</div>
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
