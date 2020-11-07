import React from 'react';
import styled from 'styled-components';

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

export type TitleProps = {
  title: string;
  subtitle?: string;
};

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => (
  <StyledTitle>
    <h1 className="header__title">{title}</h1>
    {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
  </StyledTitle>
);
