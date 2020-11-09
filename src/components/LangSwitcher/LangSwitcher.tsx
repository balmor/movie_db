import React from 'react';
import { useTranslation } from 'react-i18next';
import en from '../../images/en.svg';
import pl from '../../images/pl.svg';

import styled from 'styled-components';

export type LangSwitcherProps = {
  value: string;
  label?: string;
  isActive?: boolean;
};

const StyledButton = styled.button<LangSwitcherProps>`
  display: block;
  align-self: center;
  cursor: pointer;
  outline: none;
  border: none;
  outline: none;
  background: none;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.9)};
  z-index: ${({ isActive }) => (isActive ? 1 : 2)};
  transition: 0.3s ease-in;
  position: relative;
  line-height: 0;
  padding: 0;

  img {
    border: 2px solid transparent;
  }

  &:hover {
    opacity: 1;

    img {
      border: 2px solid ${({ theme }) => theme.third};
    }
  }
`;

export const LangSwitcher: React.FC<LangSwitcherProps> = ({
  value,
  isActive,
}: LangSwitcherProps) => {
  const { i18n } = useTranslation();
  const setLanguage = (): void => {
    i18n.changeLanguage(value);
  };

  return (
    <StyledButton onClick={setLanguage} value={value} isActive={isActive}>
      <img src={value === 'en' ? en : pl} alt="en" width="20" />
    </StyledButton>
  );
};
