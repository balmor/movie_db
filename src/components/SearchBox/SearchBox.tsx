import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledForm } from '.';
import { SearchContext } from '../../context/SearchProvider';
import useSearch from '../../hooks/useSearch';
import { SearchButton } from '../SearchButton';
import { SearchInput } from '../SearchInput';

type SearchBoxProps = {
  searchPlaceholder?: string;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

export const SearchBox: React.FC<SearchBoxProps> = ({
  searchPlaceholder = 'searchMovie',
  pageNumber,
  setPageNumber,
}) => {
  const { movies, dispatchSearch } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState('');
  const [query, setQuery] = useState(movies?.query || '');
  const { t } = useTranslation();

  useSearch(movies, dispatchSearch, query, pageNumber);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPageNumber(1);
    setQuery(searchInput.trim());
  };

  return (
    <StyledForm onSubmit={handleSearchSubmit} role="search">
      <SearchInput
        setSearchValue={setSearchInput}
        searchInput={searchInput}
        searchPlaceholder={t(searchPlaceholder)}
      />
      <SearchButton />
    </StyledForm>
  );
};
