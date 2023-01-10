import React from 'react';
import { HeaderContainer } from '../StyledContainer';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size, darken } from 'polished';
import { Translate } from '../Translate';
import { langOptions } from '../../i18n';
import i18next from 'i18next';
import { LangSwitcher } from '../LangSwitcher';
import { Toggler } from '../Toggler';
import { useTranslation } from 'react-i18next';
import { Github } from '@styled-icons/icomoon/Github';
import { githubRepoLink } from './../../api/config';

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

const StyledGitHub = styled(Github)`
  color: ${({ theme }) => theme.textPrimary};
  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;
const StyledLink = styled('a')`
  display: inline-block;
  align-self: center;
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9rem;
`;

export const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <StyledNavigation>
      <HeaderContainer>
        <StyledNavigationList>
          <StyledNavigationItem>
            <StyledNavLink to="/" exact={true}>
              <Translate i18nKey="home" />
            </StyledNavLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <StyledNavLink to="/movies" exact={true}>
              <Translate i18nKey="topRatedMovie" />
            </StyledNavLink>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledOptions>
          <Toggler />
          {langOptions
            .filter((test) => test.value !== i18next.language)
            .map((lang) => (
              <LangSwitcher key={lang.value} {...lang} isActive={lang.value === i18n.language} />
            ))}
          <StyledLink href={githubRepoLink} rel="noopener noreferrer" title={t('github')}>
            <StyledGitHub size="20" />
          </StyledLink>
        </StyledOptions>
      </HeaderContainer>
    </StyledNavigation>
  );
};
