import React from 'react';
import { StyledSearchInput } from '.';

type SearchInputProps = {
  searchInput: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchPlaceholder?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  searchInput,
  setSearchValue,
  searchPlaceholder = '',
}) => {
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value;
    const isValidSearch = /\S+/g.test(e.target.value);
    if (!isValidSearch && searchValue.length) return;
    setSearchValue(searchValue);
  };

  return (
    <StyledSearchInput
      className="search__input"
      onChange={handleSearchInput}
      value={searchInput}
      maxLength={100}
      type="search"
      name="search"
      placeholder={searchPlaceholder}
      autoComplete="off"
    />
  );
};
