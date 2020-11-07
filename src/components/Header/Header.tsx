import React from 'react';
import { HeaderContainer } from '../StyledContainer';
import { Toggler } from '../Toggler';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { Title } from '../Title';

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.headerBg};
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.textPrimary};
`;

export type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export const Header: React.FC<HeaderProps> = ({ title = 'Movie Database', subtitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <Title title={title} subtitle={subtitle} />
      <Logo />
    </HeaderContainer>
    <Toggler />
  </StyledHeader>
);
