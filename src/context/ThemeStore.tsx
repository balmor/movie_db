import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../theme/_types';

export const LS_THEME_KEY = 'theme';

interface ThemeContextProps {
  theme: string;
  switchTheme: React.Dispatch<ThemeMode>;
}

export const getSavedMode = (): ThemeMode =>
  window.localStorage.getItem(LS_THEME_KEY) === ThemeMode.Light ? ThemeMode.Light : ThemeMode.Dark;

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export type ThemeStoreProps = { children: React.ReactNode };

const ThemeStore: React.FC<ThemeStoreProps> = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<ThemeMode>(getSavedMode);

  const switchTheme = (theme: React.SetStateAction<ThemeMode>) => setTheme(theme);

  useEffect(() => {
    window.localStorage.setItem(LS_THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeStore, ThemeContext };
