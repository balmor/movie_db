import React from 'react';
import { StyledSearchButton, StyledSearchIcon } from '.';

export const SearchButton: React.FC = () => (
  <StyledSearchButton type="submit" value="Submit">
    <StyledSearchIcon size={20} />
  </StyledSearchButton>
);
