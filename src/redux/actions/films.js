/* eslint
  no-undef: 0,
  no-console: 0,
  no-unused-vars: 0
*/

import axios from "axios";
import { settings } from '../../services/ApiSettings';

// https://api.themoviedb.org/3/movie/top_rated?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=pl-PL&page=1
const apiTMDb = `${settings.baseUrl}${settings.option}`;
const apiTopRated = `${apiTMDb}?api_key=${settings.api_key}&language=${settings.language}&page=1`;
const myJson = '/movies/movies.json';

export function fetchDataSuccess(films) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    films
  }
}

export function getLatestMovies() {
  return (dispatch) => {
    axios
    .get(apiTopRated)
    .then(res => {
      dispatch(fetchDataSuccess(res.data.results))
    })
    .catch(error => console.log(error))
  }
}
