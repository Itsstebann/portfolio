import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          David<span>.dev</span>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} David. Built with React & ☕
        </p>
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
