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
  // Scroll-triggered reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

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
      <Navbar />
      <Hero />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      <div className="reveal">
        <Projects />
      </div>
      <div className="reveal">
        <Experience />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
