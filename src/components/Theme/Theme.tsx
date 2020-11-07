import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../context/ThemeStore';
import { DefaultDarkTheme, DefaultLightTheme } from '../../theme';
import { GlobalStyle } from '../../theme/globalStyles';
import { ThemeMode } from '../../theme/_types';

type ThemeProps = { children: React.ReactNode };

export const Theme: React.FC<ThemeProps> = ({ children }): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === ThemeMode.Light ? DefaultLightTheme : DefaultDarkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
