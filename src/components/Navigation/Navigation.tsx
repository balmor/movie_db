import React from 'react';
import { HeaderContainer } from '../StyledContainer';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size, darken } from 'polished';

const StyledNavigation = styled.nav`
  margin-bottom: 1.6rem;
  background: ${({ theme }) => theme.boxBg};
`;

const StyledNavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledNavigationItem = styled.li`
  display: inline-block;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  line-height: 5rem;
  text-align: center;
  padding: 0 2rem;
  ${size('5rem', 'auto')}
  text-transform: uppercase;
  text-decoration-line: none;
  color: ${({ theme }) => theme.textPrimary};

  &.active {
    background: ${({ theme }) => darken(0.03, theme.boxBg)};
    color: ${({ theme }) => theme.third};
    cursor: default;
  }

  :hover {
    background: ${({ theme }) => darken(0.05, theme.boxBg)};
    color: ${({ theme }) => darken(0.1, theme.textPrimary)};

    &.active {
      background: ${({ theme }) => darken(0.03, theme.boxBg)};
      color: ${({ theme }) => theme.third};
    }
  }
`;

export const Navigation: React.FC = () => (
  <StyledNavigation>
    <HeaderContainer>
      <StyledNavigationList>
        <StyledNavigationItem>
          <StyledNavLink to="/" exact={true}>
            Home
          </StyledNavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavLink to="/movies" exact={true}>
            Top rated movies
          </StyledNavLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderContainer>
  </StyledNavigation>
);
