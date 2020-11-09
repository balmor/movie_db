import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ThemeContext } from '../../context/ThemeStore';
import { ThemeMode } from './../../theme/_types';
import { Sun } from '@styled-icons/feather/Sun';
import { Moon } from '@styled-icons/feather/Moon';

const icon = css`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  align-self: center;

  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;

const StyledSun = styled(Sun)`
  ${icon}
`;

const StyledMoon = styled(Moon)`
  ${icon}
`;

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
