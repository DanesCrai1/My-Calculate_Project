import { createContext, useContext, useState } from 'react';
import { getStorage, setStorage } from 'shared/functions/storage';

export const enum Themes {
    LIGHT = "light",
    DARK = "dark"
}

export const ThemeContext = createContext({
  theme: Themes.LIGHT,
  switchTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStorage("LOCAL_STORAGE_CALCULATE_THEME", Themes.DARK));

  const switchTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    setStorage("LOCAL_STORAGE_CALCULATE_THEME", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);