# Portfolio – David Rodriguez

**[Ver sitio en vivo](https://itsstebann.github.io/portfolio/)**

Soy David, desarrollador Backend con foco en Python. Construi este portafolio para mostrar de forma honesta en que soy bueno, en que estoy creciendo y que tipo de problemas me interesa resolver.

No es un portafolio de diseñador — es el portafolio de alguien que piensa en arquitectura, en seguridad y en que el codigo funcione bien en produccion.

---

## Que vas a encontrar aqui?

- Mi experiencia real trabajando con datos, sistemas y APIs.
- Mi formacion academica en Administracion de Empresas e Ingenieria de Sistemas.
- Proyectos propios donde aplico lo que se de Python, bases de datos y seguridad.
- Mi stack completo: desde autenticacion JWT hasta Docker y CI/CD.
- Una paleta de comandos (Ctrl+K) para navegar rapido por todo el sitio.
- Soporte bilingue completo (ES/EN).
- Como contactarme si hay algo interesante que conversar.

---

## Stack del proyecto

Lo construi con React + Vite. Elegi estas herramientas porque queria algo rapido, modular y facil de mantener — los mismos criterios que uso cuando trabajo en el backend.

| Herramienta | Por que la use |
|---|---|
| **React 18 + Vite** | Rapido, modular, HMR agil en desarrollo |
| **Framer Motion** | Animaciones fluidas sin exagerar |
| **react-parallax-tilt** | Efecto 3D sutil en las cards |
| **lucide-react** | Iconos SVG limpios, sin peso innecesario |
| **CSS Modules** | Estilos encapsulados, sin conflictos |

---

## Estructura del proyecto

Cada carpeta tiene una responsabilidad clara. No mezclo logica con presentacion, y los datos estan separados del componente que los consume.

```
src/
├── context/          # Estado global de idioma (ES/EN)
├── data/             # Contenido, experiencia, educacion, proyectos y tech stack
├── components/
│   ├── layout/       # Sidebar de navegacion
│   ├── ui/           # Componentes reutilizables (BentoCard, CommandPalette, Status, etc.)
│   └── sections/     # Secciones principales del portafolio
├── styles/           # Variables CSS y estilos globales
├── App.jsx
└── main.jsx
```

---

## Funcionalidades

- **Bento Grid Layout** — Diseño modular con tarjetas interactivas y efecto tilt 3D.
- **Light Mode Premium** — Paleta calida con glassmorphism y sombras suaves.
- **Command Palette (Ctrl+K)** — Navegacion rapida, acciones y links sociales desde teclado.
- **Bilingue (ES/EN)** — Cambio de idioma en tiempo real sin recargar la pagina.
- **Responsive** — Barra lateral en desktop, barra inferior en movil con safe-area para notch.
- **Animaciones staggered** — Entrada progresiva de secciones con Framer Motion.

---

## Como correrlo localmente

```bash
git clone https://github.com/Itsstebann/portfolio.git
cd portfolio
npm install
npm run dev
# → http://localhost:5173/portfolio/
```

---

## Deploy

El sitio se despliega automaticamente a GitHub Pages con `gh-pages`:

```bash
npm run deploy
```

---

## Contacto

Si llegaste hasta aca y quieres hablar, aqui estoy:

- **LinkedIn:** [linkedin.com/in/devdavidrodriguez](https://www.linkedin.com/in/devdavidrodriguez)
- **GitHub:** [github.com/Itsstebann](https://github.com/Itsstebann)
- **Email:** devstack.drodriguez@gmail.com
