/* eslint
  no-undef: 0,
  no-console: 0,
  no-unused-vars: 0
*/

import axios from "axios";
import { settings } from '../../services/ApiSettings';

// Get latest movies: https://api.themoviedb.org/3/movie/top_rated?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=pl-PL&page=1
// Search movie: https://api.themoviedb.org/3/search/movie?api_key=e09cede2b3058cd5a1257146d6c70bc6&language=en-US&query=coco&page=1&include_adult=false

const tmdb = axios.create({
  baseURL: settings.baseUrl,
  params: {
    api_key: settings.api_key,
    language: settings.language,
    page: 1
  },
});

export function fetchDataSuccess(items = []) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    items
  }
}

export function fetchSingleDataSuccess(item = {}) {
  return {
    type: 'FETCH_SINGLE_DATA_SUCCESS',
    item
  }
}

export function fetchDataLoading(isLoading = false) {
  return {
    type: 'FETCH_DATA_LOADING',
    isLoading
  }
}

export function fetchDataFailed(isFailed = null) {
  return {
    type: 'FETCH_DATA_FAILED',
    isFailed
  }
}

export function fetchSearchSuccess(items = []) {
  return {
    type: 'FETCH_SEARCH_SUCCESS',
    items
  }
}

export function fetchPagination(currentPage = 0, totalPages = 0, totalResults = 0) {
  return {
    type: 'FETCH_PAGINATION',
    currentPage,
    totalPages,
    totalResults
  }
}

export function fetchSearchLoading(isLoading = false) {
  return {
    type: 'FETCH_SEARCH_LOADING',
    isLoading
  }
}

export function fetchSearchFailed(isFailed = null) {
  return {
    type: 'FETCH_SEARCH_FAILED',
    isFailed
  }
}

export function getData(id) {
  return (dispatch) => {
    dispatch(fetchDataLoading(true))

    let properUrl;

    if (id) {
      properUrl = settings.singleMovie + id;
    } else {
      properUrl = settings.topRated
    }

    tmdb
    .get(properUrl)
    .then(res => {
      if (id) {
        dispatch(fetchSingleDataSuccess(res.data))
      } else {
        dispatch(fetchDataSuccess(res.data.results))
      }
    })
    .catch(error => {
      const statusMessage = error.response.data.status_message;
      if (statusMessage) {
        dispatch(fetchDataFailed(statusMessage));
      } else {
        dispatch(fetchDataFailed(settings.error));
      }
    })
  }
}

export function searchData(query, page = 1) {
  return (dispatch) => {
    dispatch(fetchSearchLoading(true))

    tmdb
    .get(settings.searchMovie, {
      params: {
        query,
        page,
        include_adult: false
      }
    })
    .then(res => {
      dispatch(fetchSearchSuccess(res.data.results))
      dispatch(fetchPagination(res.data.page, res.data.total_pages, res.data.total_results))
    })
    .catch(error => {
      const statusMessage = error.response.data.errors;
      if (statusMessage) {
        dispatch(fetchSearchFailed(statusMessage));
      } else {
        dispatch(fetchSearchFailed(settings.error));
      }
    })
  }
}
