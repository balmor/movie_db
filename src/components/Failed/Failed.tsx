import React from 'react';
import { StyledFailed } from '.';
import { StyledLink } from '../Button';
import { Translate } from '../Translate';

type FailedProps = {
  errorMessage?: string | null | undefined;
};

export const Failed: React.FC<FailedProps> = ({ errorMessage }) => (
  <>
    <StyledFailed>{errorMessage || <Translate i18nKey="somethingWrong" />}</StyledFailed>
    <StyledLink to="/">
      <Translate i18nKey="backHome" />
    </StyledLink>
  </>
);
