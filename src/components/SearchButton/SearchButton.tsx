import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/feather/Search';

const StyledSearchButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
  background: none;
  border: 0;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;

const StyledSearchIcon = styled(Search)`
  color: ${({ theme }) => theme.textPrimary};

  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;

export const SearchButton: React.FC = () => (
  <StyledSearchButton type="submit" value="Submit">
    <StyledSearchIcon size={20} />
  </StyledSearchButton>
);
