/* eslint
  no-undef: 0,
  no-console: 0,
  no-unused-vars: 0
*/

import axios from "axios";
import { settings } from '../../services/ApiSettings';

// Get latest movies: https://api.themoviedb.org/3/movie/top_rated?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=pl-PL&page=1
const topRated = `${settings.baseUrl}${settings.topRated}`;
const singleMovie = `${settings.baseUrl}${settings.singleMovie}`;
const myJson = '/movies/movies.json';

const paramsTopRated = {
  params: {
    api_key: settings.api_key,
    language: settings.language,
    page: 1
  }
}

const paramsSingleMovie = {
  params: {
    api_key: settings.api_key,
    language: settings.language,
    page: 1
  }
}

export function fetchDataSuccess(movies) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    movies
  }
}

export function fetchSingleDataSuccess(movie) {
  return {
    type: 'FETCH_SINGLE_DATA_SUCCESS',
    movie
  }
}

export function getData(id) {
  return (dispatch) => {
    if (id) {
      axios
      .get(singleMovie + id, paramsSingleMovie)
      .then(res => {
        dispatch(fetchSingleDataSuccess(res.data))
      })
      .catch(error => console.log(error))
    } else {
      axios
      .get(topRated, paramsTopRated)
      .then(res => {
        dispatch(fetchDataSuccess(res.data.results))
      })
      .catch(error => console.log(error))
    }
  }
}
