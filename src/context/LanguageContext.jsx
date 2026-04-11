/**
 * LanguageContext.jsx
 * Contexto global para la gestión del idioma (ES/EN)
 * Persiste la selección en localStorage — O(1) read/write
 */

import { createContext, useContext, useState, useCallback } from 'react';

const STORAGE_KEY = 'portfolio-lang';
const DEFAULT_LANG = 'es';

const LanguageContext = createContext(null);

/**
 * Provider que envuelve toda la aplicación
 * @param {{ children: React.ReactNode }} props
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Lee del localStorage en el primer render — O(1)
    return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LANG;
  });

  /**
   * Alterna entre 'es' y 'en' — O(1)
   * useCallback garantiza referencia estable entre renders
   */
  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook de consumo del contexto
 * @returns {{ lang: string, toggleLang: () => void }}
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  return ctx;
}
