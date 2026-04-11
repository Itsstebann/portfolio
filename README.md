# Portfolio – David Rodriguez

Soy David, desarrollador Backend con foco en Python. Construí este portafolio para mostrar de forma honesta en qué soy bueno, en qué estoy creciendo y qué tipo de problemas me interesa resolver.

No es un portafolio de diseñador — es el portafolio de alguien que piensa en arquitectura, en seguridad y en que el código funcione bien en producción.

---

## ¿Qué vas a encontrar aquí?

- Mi experiencia real trabajando con datos, sistemas y APIs.
- Proyectos propios donde aplico lo que sé de Python, bases de datos y seguridad.
- Mi stack completo: desde autenticación JWT hasta Docker y CI/CD.
- Cómo contactarme si hay algo interesante que conversar.

---

## Stack del proyecto

Lo construí con React + Vite. Elegí estas herramientas porque quería algo rápido, modular y fácil de mantener — los mismos criterios que uso cuando trabajo en el backend.

| Herramienta | Por qué la usé |
|---|---|
| **React 18 + Vite** | Rápido, modular, HMR ágil en desarrollo |
| **Framer Motion** | Animaciones fluidas sin exagerar |
| **react-parallax-tilt** | Efecto 3D sutil en las cards |
| **lucide-react** | Íconos SVG limpios, sin peso innecesario |
| **CSS Modules** | Estilos encapsulados, sin conflictos |

---

## Estructura del proyecto

Cada carpeta tiene una responsabilidad clara. No mezclo lógica con presentación, y los datos están separados del componente que los consume.

```
src/
├── context/          # Estado global de idioma (ES/EN)
├── data/             # Contenido, experiencia, proyectos y tech stack
├── components/
│   ├── layout/       # Sidebar de navegación
│   ├── ui/           # Componentes reutilizables (BentoCard, Status, etc.)
│   └── sections/     # Secciones principales del portafolio
├── styles/           # Variables CSS y estilos globales
├── App.jsx
└── main.jsx
```

---

## Cómo correrlo localmente

```bash
git clone https://github.com/Itsstebann/portfolio.git
cd portfolio
npm install
npm run dev
# → http://localhost:5173
```

---

## Contacto

Si llegaste hasta acá y quieres hablar, aquí estoy:

- **LinkedIn:** [linkedin.com/in/devdavidrodriguez](https://www.linkedin.com/in/devdavidrodriguez)
- **GitHub:** [github.com/Itsstebann](https://github.com/Itsstebann)
- **Email:** devstack.drodriguez@gmail.com
