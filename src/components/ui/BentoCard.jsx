/**
 * BentoCard.jsx
 * Componente base reutilizable para todas las celdas del Bento Grid.
 * Incluye: Tilt 3D, Hover Scale, Glassmorphism border y animación Framer Motion.
 *
 * Props:
 *   className  {string}         – clases adicionales
 *   children   {React.ReactNode}
 *   size       {'sm'|'md'|'lg'|'xl'} – controla el span en el grid (default 'md')
 *   tilt       {boolean}        – activa efecto 3D tilt (default true)
 *   onClick    {function}       – handler de click opcional
 *   style      {object}         – estilos inline adicionales
 */

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import styles from './BentoCard.module.css';

// Variante de animación staggered – O(1) por tarjeta
export const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function BentoCard({
  className = '',
  children,
  size = 'md',
  tilt = true,
  onClick,
  style,
}) {
  const card = (
    <motion.div
      variants={cardVariants}
      className={`${styles.card} ${styles[size]} ${className}`}
      style={style}
      onClick={onClick}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );

  if (!tilt) return card;

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable={false}
      transitionSpeed={800}
      className={styles.tiltWrapper}
    >
      {card}
    </Tilt>
  );
}

export default BentoCard;
