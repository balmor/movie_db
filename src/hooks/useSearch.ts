import { useEffect } from 'react';
import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure,
  SearchActionTypes,
} from '../actions/search';
import settings from '../api/config';
import { ISearchState } from '../reducers/search';

export default (
  movies: ISearchState,
  dispatchMovies: React.Dispatch<SearchActionTypes>,
  query?: string,
  page?: number
): ISearchState => {
  useEffect(() => {
    const { api, headers, params } = settings;

    if (query === '') return;

    if (query) {
      params.set('query', query);
      params.set('page', String(page));
    }

    const fetchData = async () => {
      dispatchMovies(fetchSearchRequest());
      const response = await fetch(`${api.baseUrl}${api.searchMovie}?${params}`, { headers });

      const data = await response.json();

      if (response.status === 200) {
        return dispatchMovies(fetchSearchSuccess(data));
      }

      dispatchMovies(fetchSearchFailure(data.status_message));

      throw new Error(data.status_message);
    };

    fetchData().catch((err) => err);
  }, [dispatchMovies, query, page]);

  return movies;
};
