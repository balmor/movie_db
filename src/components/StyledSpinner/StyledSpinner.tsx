import React from 'react';
import { SwapSpinner } from 'react-spinners-kit';
import { StyledSwapSpinner } from '.';

export const StyledSpinner = (): JSX.Element => {
  return (
    <StyledSwapSpinner>
      <SwapSpinner size={150} color="#01d277" />
    </StyledSwapSpinner>
  );
};
