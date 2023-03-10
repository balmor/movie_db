import React from 'react';

import { HeaderContainer } from '../StyledContainer';
import { Logo } from '../Logo';
import { Title } from '../Title';
import { StyledHeader } from '.';

export const Header: React.FC = (): JSX.Element => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Title />
        <Logo />
      </HeaderContainer>
    </StyledHeader>
  );
};
