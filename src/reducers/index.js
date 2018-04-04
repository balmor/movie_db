import { combineReducers } from 'redux';
import { movies, moviesHasErrored, moviesIsLoading } from './movies';
export default combineReducers({
  movies,
  moviesHasErrored,
  moviesIsLoading
});
