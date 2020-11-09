import React from 'react';
import styled from 'styled-components';
import { Translate } from '../Translate';

const StyledTitle = styled.div`
  h1 {
    font-size: 3.2rem;
    margin: 15px 0 0 0;
  }

  h2 {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
  }
`;

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
