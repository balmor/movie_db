import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../Button';
import { Translate } from '../Translate';

const StyledNotFound = styled.div`
  display: block;
  margin-bottom: 4.8rem;
  text-align: center;
  font-size: 3.2rem;
`;

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
