import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Global Mouse tracking for Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll-triggered reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="app">
      {/* Dynamic Background Elements */}
      <div className="tech-grid-overlay"></div>
      <div className="global-spotlight"></div>
      <div className="tracer-line left"></div>
      <div className="tracer-line right"></div>

      <Navbar />
      <Hero />
      
      <div className="reveal-left">
        <About />
      </div>
      
      <div className="reveal-right">
        <Skills />
      </div>
      
      <div className="reveal-up">
        <Projects />
      </div>
      
      <div className="reveal-left">
        <Experience />
      </div>
      
      <div className="reveal-scale">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
