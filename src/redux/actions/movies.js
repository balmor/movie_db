/* eslint
  no-undef: 0,
  no-console: 0,
  no-unused-vars: 0
*/

import { settings } from '../../services/ApiSettings';

// https://api.themoviedb.org/3/movie/top_rated?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=pl-PL&page=1
const apiTMDb = `${settings.baseUrl}${settings.option}`;
const apiTopRated = `${settings.baseUrl}${settings.option}?api_key=${settings.api_key}&language=${settings.language}&page=1`;
const myJson = '/movies/movies.json';

export function moviesHasErrored(hasErrored) {
  return {
    type: 'MOVIES_HAS_ERRORED',
    hasErrored
  };
}
export function moviesIsLoading(isLoading) {
  return {
    type: 'MOVIES_IS_LOADING',
    isLoading
  };
}
export function moviesFetchDataSuccess(movies) {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
  };
}

export function moviesFetchData() {
  return (dispatch) => {
    dispatch(moviesIsLoading(true));
    fetch(myJson)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(moviesIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((movies) => dispatch(moviesFetchDataSuccess(movies)))
      .catch(() => dispatch(moviesHasErrored(true)));
  };
}
