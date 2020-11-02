import React, { useReducer, createContext } from 'react';
import { SearchActionTypes } from '../actions/search';
import reducer, { ISearchState, initialSearchState } from '../reducers/search';

interface IContextProps {
  movies: ISearchState;
  dispatchMovies: React.Dispatch<SearchActionTypes>;
}

export type SearchProviderProps = { children: React.ReactNode };

export const SearchContext = createContext({} as IContextProps);

const SearchProvider: React.FC<SearchProviderProps> = ({ children }): JSX.Element => {
  const [movies, dispatchMovies] = useReducer(reducer, initialSearchState);
  const value = { movies, dispatchMovies };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
