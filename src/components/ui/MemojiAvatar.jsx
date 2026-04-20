/**
 * MemojiAvatar.jsx – Componente reutilizable de Memoji
 * Muestra un Memoji con animación flotante y opcionalmente
 * cambia a una pose alternativa en hover.
 *
 * Props:
 *   src         {string}  – ruta de la imagen principal
 *   hoverSrc    {string}  – ruta de la imagen en hover (opcional)
 *   alt         {string}  – texto alternativo
 *   size        {number}  – tamaño en px (default 120)
 *   className   {string}  – clases adicionales
 *   floatRange  {number}  – rango de la animación flotante en px (default 8)
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MemojiAvatar.module.css';

// Animación flotante continua
const floatAnimation = (range = 8) => ({
  y: [-range, range, -range],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

function MemojiAvatar({
  src,
  hoverSrc,
  alt = 'Memoji avatar',
  size = 120,
  className = '',
  floatRange = 8,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const currentSrc = hoverSrc && isHovered ? hoverSrc : src;

  return (
    <motion.div
      className={`${styles.wrapper} ${className}`}
      style={{ width: size, height: size }}
      animate={floatAnimation(floatRange)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Resplandor sutil detrás del avatar */}
      <div className={styles.glow} />

      {/* Imagen principal */}
      <motion.img
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        className={styles.image}
        draggable={false}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

export default MemojiAvatar;
