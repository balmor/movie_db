import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size, darken } from 'polished';
import { Github } from '@styled-icons/icomoon/Github';

export const StyledNavigation = styled.nav`
  margin-bottom: 1.6rem;
  background: ${({ theme }) => theme.boxBg};
`;

export const StyledNavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledNavigationItem = styled.li`
  display: inline-block;
`;

export const StyledNavLink = styled(NavLink)`
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

export const StyledGitHub = styled(Github)`
  color: ${({ theme }) => theme.textPrimary};
  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;
export const StyledLink = styled('a')`
  display: inline-block;
  align-self: center;
`;

export const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9rem;
`;
