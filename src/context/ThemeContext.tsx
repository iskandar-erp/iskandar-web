import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isFirstVisit: boolean;
  dismissFirstVisit: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'iskandar-theme';
const VISITED_KEY = 'iskandar-visited';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !localStorage.getItem(VISITED_KEY);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    if (isFirstVisit) {
      dismissFirstVisit();
    }
  };

  const dismissFirstVisit = () => {
    setIsFirstVisit(false);
    localStorage.setItem(VISITED_KEY, 'true');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isFirstVisit, dismissFirstVisit }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
