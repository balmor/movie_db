import { combineReducers } from 'redux';
import { movies, moviesHasErrored, moviesIsLoading } from './movies';
import { films } from './films';

export default combineReducers({
  movies,
  films,
  moviesHasErrored,
  moviesIsLoading
});
