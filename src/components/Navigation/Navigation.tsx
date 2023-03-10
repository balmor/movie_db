import React from 'react';
import { HeaderContainer } from '../StyledContainer';

import { Translate } from '../Translate';
import { langOptions } from '../../i18n';
import i18next from 'i18next';
import { LangSwitcher } from '../LangSwitcher';
import { Toggler } from '../Toggler';
import { useTranslation } from 'react-i18next';
import { githubRepoLink } from './../../api/config';
import {
  StyledGitHub,
  StyledLink,
  StyledNavigation,
  StyledNavigationItem,
  StyledNavigationList,
  StyledNavLink,
  StyledOptions,
} from '.';

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
