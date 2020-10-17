import React, { useReducer, createContext } from 'react';
import { MoviesActionTypes } from '../actions/movies';
import reducer, { IState, initialState } from '../reducers/movies';

interface IContextProps {
  movies: IState;
  dispatchMovies: React.Dispatch<MoviesActionTypes>;
}

export const MoviesContext = createContext({} as IContextProps);

const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const [movies, dispatchMovies] = useReducer(reducer, initialState);
  const value = { movies, dispatchMovies };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export default MovieProvider;
