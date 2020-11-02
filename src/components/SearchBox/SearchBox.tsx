import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchProvider';
import useSearch from '../../hooks/useSearch';

type SearchBoxProps = {
  searchPlaceholder?: string;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

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
    <form className="search" onSubmit={handleSearchSubmit}>
      <input
        className="search__input"
        onChange={handleSearchInput}
        type="text"
        name="search"
        placeholder={searchPlaceholder}
        autoComplete="off"
      />
      <button className="search__submit icon-magnifier icons" type="submit" value="Submit"></button>
    </form>
  );
};
