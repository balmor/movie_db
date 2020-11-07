import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../context/SearchProvider';
import useSearch from '../../hooks/useSearch';
import { SearchButton } from '../SearchButton/SearchButton';
import { SearchInput } from '../SearchInput';

type SearchBoxProps = {
  searchPlaceholder?: string;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const StyledForm = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 4.8rem;
`;

export const SearchBox: React.FC<SearchBoxProps> = ({
  searchPlaceholder = 'Search Movie Title...',
  pageNumber,
  setPageNumber,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [query, setQuery] = useState('');
  const { movies, dispatchMovies } = useContext(SearchContext);

  useSearch(movies, dispatchMovies, query, pageNumber);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPageNumber(1);
    setQuery(searchInput);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSearchSubmit}>
      <SearchInput handleSearchInput={handleSearchInput} searchPlaceholder={searchPlaceholder} />
      <SearchButton />
    </StyledForm>
  );
};
