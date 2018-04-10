/* eslint
  no-undef: 0,
  no-console: 0,
  no-unused-vars: 0
*/

import axios from "axios";
import { settings } from '../../services/ApiSettings';

// https://api.themoviedb.org/3/movie/top_rated?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=pl-PL&page=1
const apiTMDb = `${settings.baseUrl}${settings.option}`;
const apiTopRated = `${settings.baseUrl}${settings.option}?api_key=${settings.api_key}&language=${settings.language}&page=1`;
const myJson = '/movies/movies.json';

export function fetchDataSuccess(films) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    films
  };
}

export function fetchTopRatedData() {
  return (dispatch) => {
    fetch(myJson)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((films) => dispatch(fetchDataSuccess(films)))
      .catch(error => console.log(error))
  };
}

export function getLatestMovies() {
  axios
    .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=pl-PL&page=1`)
    .then(res => {
      dispatch(fetchDataSuccess(res.data))
    })
    .catch(error => console.log(error))
}
