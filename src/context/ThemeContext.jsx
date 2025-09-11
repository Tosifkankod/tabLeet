// ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'default',
  setTheme: (theme) => { },
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "default");

  useEffect(() => {
    document.documentElement.className = ''; // Remove existing
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
