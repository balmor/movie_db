import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../Button';

const StyledNotFound = styled.div`
  display: block;
  margin-bottom: 4.8rem;
  text-align: center;
  font-size: 3.2rem;
`;

export const NotFound: React.FC = () => (
  <>
    <StyledNotFound>404 Page not found</StyledNotFound>
    <StyledLink to="/">Back to Homepage</StyledLink>
  </>
);
