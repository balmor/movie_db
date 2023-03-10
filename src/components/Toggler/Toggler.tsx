import React, { useContext } from 'react';
import { StyledMoon, StyledSun } from '.';
import { ThemeContext } from '../../context/ThemeStore';
import { ThemeMode } from './../../theme/_types';

export const Toggler: React.FC = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === ThemeMode.Light ? (
        <StyledMoon size={20} onClick={() => switchTheme(ThemeMode.Dark)} />
      ) : (
        <StyledSun size={20} onClick={() => switchTheme(ThemeMode.Light)} />
      )}
    </>
  );
};
