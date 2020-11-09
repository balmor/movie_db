import React from 'react';

import { HeaderContainer } from '../StyledContainer';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { Title } from '../Title';

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.headerBg};
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.textPrimary};
`;

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
