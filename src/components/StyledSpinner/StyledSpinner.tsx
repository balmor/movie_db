import React from 'react';
import { SwapSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

const StyledSwapSpinner = styled.div`
  margin: 9.6rem auto;
  width: 158px;
  display: block;
`;

export const StyledSpinner = (): JSX.Element => {
  return (
    <StyledSwapSpinner>
      <SwapSpinner size={150} color="#01d277" />
    </StyledSwapSpinner>
  );
};
