import { combineReducers } from 'redux';
import { movies, moviesHasErrored, moviesIsLoading } from './movies';
import { films, film } from './films';

export default combineReducers({
  movies,
  films,
  film,
  moviesHasErrored,
  moviesIsLoading
});
