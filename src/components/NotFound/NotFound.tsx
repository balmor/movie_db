import React from 'react';
import { StyledNotFound } from '.';
import { StyledLink } from '../Button';
import { Translate } from '../Translate';

export const NotFound: React.FC = () => (
  <>
    <StyledNotFound>
      <Translate i18nKey="notFound" />
    </StyledNotFound>
    <StyledLink to="/">
      <Translate i18nKey="backHome" />
    </StyledLink>
  </>
);
