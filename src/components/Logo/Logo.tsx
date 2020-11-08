import React from 'react';
import styled from 'styled-components';
import tmdb from './../../images/tmdb.svg';

const StyledLogo = styled.a`
  display: block;
`;

export const Logo = (): JSX.Element => (
  <StyledLogo href="https://www.themoviedb.org/">
    <img alt="TMDb" src={tmdb} width="200" />
  </StyledLogo>
);
