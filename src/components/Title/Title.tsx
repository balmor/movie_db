import React from 'react';
import { StyledTitle } from '.';
import { Translate } from '../Translate';

export const Title: React.FC = (): JSX.Element => (
  <StyledTitle>
    <h1 className="header__title">
      <Translate i18nKey="movieDatabase" />
    </h1>
    <h2 className="header__subtitle">
      <Translate i18nKey="subtitle" />
    </h2>
  </StyledTitle>
);
