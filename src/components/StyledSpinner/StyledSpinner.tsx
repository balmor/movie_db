import React from 'react';
import { SwapSpinner } from 'react-spinners-kit';
import { StyledSwapSpinner } from '.';

export const StyledSpinner = (): JSX.Element => {
  return (
    <StyledSwapSpinner aria-busy aria-label="Loading...">
      <SwapSpinner size={100} color="#01d277" />
    </StyledSwapSpinner>
  );
};
