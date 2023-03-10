import React from 'react';
import { StyledSearchInput } from '.';

type SearchInputProps = {
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPlaceholder?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  handleSearchInput,
  searchPlaceholder = '',
}) => (
  <StyledSearchInput
    className="search__input"
    onChange={handleSearchInput}
    type="text"
    name="search"
    placeholder={searchPlaceholder}
    autoComplete="off"
  />
);
