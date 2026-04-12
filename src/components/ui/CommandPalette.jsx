/**
 * CommandPalette.jsx – Modal de comandos estilo Ctrl+K
 * Permite navegación rápida, acceso a redes sociales e impresión.
 * Se abre con Ctrl+K (Windows) o Cmd+K (Mac).
 *
 * Navegación: flechas arriba/abajo para seleccionar, Enter para ejecutar, Escape para cerrar.
 */

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Printer, Linkedin, Github, User, Briefcase, GraduationCap,
  FolderGit2, Cpu, Mail, ArrowUp, ArrowDown, CornerDownLeft, Command,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './CommandPalette.module.css';

/**
 * Definición de comandos bilingüe — cada grupo tiene un label y un array de items.
 * Cada item: { id, label, shortcut, icon, action }
 */
function getCommands(lang) {
  const isEs = lang === 'es';

  return [
    {
      group: isEs ? 'Navegación' : 'Navigation',
      items: [
        {
          id: 'nav-about',
          label: isEs ? 'Ir a Sobre mí' : 'Go to About',
          icon: User,
          shortcut: null,
          action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
        },
        {
          id: 'nav-experience',
          label: isEs ? 'Ir a Experiencia' : 'Go to Experience',
          icon: Briefcase,
          shortcut: null,
          action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
        },
        {
          id: 'nav-education',
          label: isEs ? 'Ir a Educación' : 'Go to Education',
          icon: GraduationCap,
          shortcut: null,
          action: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }),
        },
        {
          id: 'nav-projects',
          label: isEs ? 'Ir a Proyectos' : 'Go to Projects',
          icon: FolderGit2,
          shortcut: null,
          action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
        },
        {
          id: 'nav-tech',
          label: isEs ? 'Ir a Tecnologías' : 'Go to Tech Stack',
          icon: Cpu,
          shortcut: null,
          action: () => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' }),
        },
        {
          id: 'nav-contact',
          label: isEs ? 'Ir a Contacto' : 'Go to Contact',
          icon: Mail,
          shortcut: null,
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
        },
      ],
    },
    {
      group: isEs ? 'Acciones' : 'Actions',
      items: [
        {
          id: 'action-print',
          label: isEs ? 'Imprimir' : 'Print',
          icon: Printer,
          shortcut: ['Ctrl', 'P'],
          action: () => window.print(),
        },
      ],
    },
    {
      group: 'Social',
      items: [
        {
          id: 'social-linkedin',
          label: isEs ? 'Visitar LinkedIn' : 'Visit LinkedIn',
          icon: Linkedin,
          shortcut: ['Ctrl', 'L'],
          action: () => window.open('https://www.linkedin.com/in/devdavidrodriguez', '_blank'),
        },
        {
          id: 'social-github',
          label: isEs ? 'Visitar GitHub' : 'Visit GitHub',
          icon: Github,
          shortcut: ['Ctrl', 'G'],
          action: () => window.open('https://github.com/Itsstebann', '_blank'),
        },
      ],
    },
  ];
}

// Variantes de animación del overlay y el modal
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -10,
    transition: { duration: 0.15 },
  },
};

function CommandPalette() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = useMemo(() => getCommands(lang), [lang]);

  // Filtrar comandos según la búsqueda — O(n) donde n = total de items
  const filtered = useMemo(() => {
    if (!query.trim()) return commands;

    const q = query.toLowerCase();
    return commands
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [commands, query]);

  // Lista plana de items visibles para navegación por índice — O(n)
  const flatItems = useMemo(
    () => filtered.flatMap((group) => group.items),
    [filtered]
  );

  // Reset del estado al abrir/cerrar
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  // Mantener activeIndex dentro de los límites
  useEffect(() => {
    if (activeIndex >= flatItems.length) {
      setActiveIndex(Math.max(0, flatItems.length - 1));
    }
  }, [flatItems.length, activeIndex]);

  // Listener global para Ctrl+K / Cmd+K
  useEffect(() => {
    function handleGlobalKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    }

    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  // Ejecutar un comando y cerrar
  const executeCommand = useCallback((item) => {
    setIsOpen(false);
    // Se ejecuta con un delay mínimo para que la animación de cierre se vea
    requestAnimationFrame(() => item.action());
  }, []);

  // Navegación por teclado dentro del modal
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % flatItems.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (flatItems[activeIndex]) {
          executeCommand(flatItems[activeIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  }, [flatItems, activeIndex, executeCommand]);

  // Scroll automático al item activo
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  // Contador absoluto para mapear índices planos
  let flatIndex = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-label={lang === 'es' ? 'Paleta de comandos' : 'Command palette'}
          >
            {/* Barra de búsqueda */}
            <div className={styles.searchBar}>
              <Search size={18} className={styles.searchIcon} />
              <input
                ref={inputRef}
                type="text"
                className={styles.searchInput}
                placeholder={lang === 'es' ? 'Buscar comando...' : 'Search command...'}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            {/* Lista de comandos */}
            <div className={styles.commandList} ref={listRef}>
              {filtered.length === 0 && (
                <p className={styles.empty}>
                  {lang === 'es' ? 'Sin resultados' : 'No results'}
                </p>
              )}

              {filtered.map((group) => (
                <div key={group.group} className={styles.group}>
                  <span className={styles.groupLabel}>{group.group}</span>
                  {group.items.map((item) => {
                    flatIndex++;
                    const idx = flatIndex;
                    const isActive = idx === activeIndex;
                    const IconComp = item.icon;

                    return (
                      <button
                        key={item.id}
                        data-index={idx}
                        className={`${styles.commandItem} ${isActive ? styles.active : ''}`}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => executeCommand(item)}
                        type="button"
                      >
                        <IconComp size={18} className={styles.commandIcon} />
                        <span className={styles.commandLabel}>{item.label}</span>
                        {item.shortcut && (
                          <span className={styles.shortcutGroup}>
                            {item.shortcut.map((key) => (
                              <kbd key={key} className={styles.kbd}>{key}</kbd>
                            ))}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Footer con indicaciones de teclado */}
            <div className={styles.footer}>
              <span className={styles.hint}>
                <CornerDownLeft size={12} />
                <span>{lang === 'es' ? 'seleccionar' : 'select'}</span>
              </span>
              <span className={styles.hint}>
                <ArrowUp size={12} />
                <ArrowDown size={12} />
                <span>{lang === 'es' ? 'navegar' : 'navigate'}</span>
              </span>
              <span className={styles.hint}>
                <kbd className={styles.kbdSmall}>Ctrl + K</kbd>
                <kbd className={styles.kbdSmall}>Escape</kbd>
                <span>{lang === 'es' ? 'cerrar' : 'close'}</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
