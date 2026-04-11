/**
 * App.jsx – Punto de ensamblaje de todas las secciones
 * Orden: Hero → Experience → Projects → TechContact
 * El RightSidebar es fijo y vive fuera del flujo del documento
 */

import RightSidebar from './components/layout/RightSidebar';
import Hero        from './components/sections/Hero';
import Experience  from './components/sections/Experience';
import Projects    from './components/sections/Projects';
import TechContact from './components/sections/TechContact';

function App() {
  return (
    <div className="app-layout">
      {/* Contenido principal desplazable */}
      <main className="main-content" role="main">
        <Hero />
        <Experience />
        <Projects />
        <TechContact />
      </main>

      {/* Navegación lateral derecha fija */}
      <RightSidebar />
    </div>
  );
}

export default App;
