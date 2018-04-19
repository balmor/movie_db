import { combineReducers } from 'redux';
import { movies, movie, search } from './movies';

export default combineReducers({
  movies,
  movie,
  search
});
