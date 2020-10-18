import React, { useReducer, createContext } from 'react';
import { MoviesActionTypes } from '../actions/movies';
import reducer, { IState, initialState } from '../reducers/movies';

interface IContextProps {
  movies: IState;
  dispatchMovies: React.Dispatch<MoviesActionTypes>;
}

export type MovieProviderProps = { children: React.ReactNode };

export const MoviesContext = createContext({} as IContextProps);

const MovieProvider: React.FC<MovieProviderProps> = ({ children }): JSX.Element => {
  const [movies, dispatchMovies] = useReducer(reducer, initialState);
  const value = { movies, dispatchMovies };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export default MovieProvider;
