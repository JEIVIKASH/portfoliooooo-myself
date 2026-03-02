import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  cyber: {
    id: 'cyber',
    label: 'CYBER',
    icon: '⚡',
    tag: 'NEON',
    color: '#00f3ff',
    desc: 'Cyan Neon',
  },
  minimal: {
    id: 'minimal',
    label: 'MINIMAL',
    icon: '◼',
    tag: 'DARK',
    color: '#e2e8f0',
    desc: 'Clean Black',
  },
  matrix: {
    id: 'matrix',
    label: 'MATRIX',
    icon: '▓',
    tag: 'GREEN',
    color: '#00ff41',
    desc: 'Matrix Green',
  },
  nebula: {
    id: 'nebula',
    label: 'NEBULA',
    icon: '✦',
    tag: 'GALAXY',
    color: '#bc13fe',
    desc: 'Purple Galaxy',
  },
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'cyber'; }
    catch { return 'cyber'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
