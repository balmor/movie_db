import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../Button';
import { Translate } from '../Translate';

const StyledFailed = styled.p`
  font-size: 2.6rem;
  text-align: center;
  margin: 9.6rem auto;
`;

type FailedProps = {
  errorMessage?: string | undefined;
};

export const Failed: React.FC<FailedProps> = ({ errorMessage }) => (
  <>
    <StyledFailed>{errorMessage || <Translate i18nKey="somethingWrong" />}</StyledFailed>
    <StyledLink to="/">
      <Translate i18nKey="backHome" />
    </StyledLink>
  </>
);
