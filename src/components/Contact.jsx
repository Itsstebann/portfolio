import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements['contact-name'].value;
    const email = e.target.elements['contact-email'].value;
    const subject = e.target.elements['contact-subject'].value;
    const message = e.target.elements['contact-message'].value;
    const mailtoLink = `mailto:devstack.drodriguez@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Hi David,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3 className="section-title">Get In Touch</h3>
        <p className="section-subtitle">
          Have a project in mind? Let's work together to make it happen
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>
              Let's <span className="highlight">Connect</span>
            </h3>
            <p>
              I'm always open to discussing tech, business ideas, or potential career opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-methods">
              <a href="mailto:devstack.drodriguez@gmail.com" className="contact-method">
                <div className="contact-method-icon">
                  <FiMail />
                </div>
                <div>
                  <div className="contact-method-label">Email</div>
                  <div className="contact-method-value">
                    devstack.drodriguez@gmail.com
                  </div>
                </div>
              </a>
              <div className="contact-method">
                <div className="contact-method-icon">
                  <FiMapPin />
                </div>
                <div>
                  <div className="contact-method-label">Location</div>
                  <div className="contact-method-value">
                    Bogotá, Colombia
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/itsstebann"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/devdavidrodriguez"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/itssteban_"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="Project idea or collaboration"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
