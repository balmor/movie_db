import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '.';
import en from '../../images/en.svg';
import pl from '../../images/pl.svg';

export type LangSwitcherProps = {
  value: string;
  label?: string;
  isActive?: boolean;
};

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
