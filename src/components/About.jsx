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
                fontSize: '5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: 'white',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                DE
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
              Merging <span className="highlight">Business & Technology</span> to Build the Future
            </h2>
            <p>
              I'm David Esteban Rodríguez Cárdenas — a 20-year-old from Bogotá, Colombia 
              studying <strong>Business Administration & Systems Engineering</strong>. I live 
              at the intersection of business strategy and cutting-edge technology, using code 
              to bridge the gap between data and decisions.
            </p>
            <p>
              My core is Python — from automation scripts and AI-powered tools to full-stack 
              web applications. I believe the best software is born when engineering precision 
              meets business insight, and that's exactly what I bring to every project.
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
