import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure,
  SearchActionTypes,
} from '../actions/search';
import settings from '../api/config';
import { getLocale } from '../i18n';
import { ISearchState } from '../reducers/search';

export default (
  movies: ISearchState,
  dispatchMovies: React.Dispatch<SearchActionTypes>,
  query?: string | null | undefined,
  page?: number
): ISearchState => {
  const { i18n: { language = 'en' } = {} } = useTranslation();

  useEffect(() => {
    const { api, headers, params } = settings;

    if (!query) return;

    params.set('query', query);
    params.set('page', String(page));
    params.set('language', getLocale(language));

    const fetchData = async () => {
      dispatchMovies(fetchSearchRequest());
      const response = await fetch(`${api.baseUrl}${api.searchMovie}?${params}`, { headers });

      const data = await response.json();

      if (response.status === 200) {
        return dispatchMovies(fetchSearchSuccess(data, query));
      }

      dispatchMovies(fetchSearchFailure(data.status_message));

      throw new Error(data.status_message);
    };

    fetchData().catch((err) => err);
  }, [dispatchMovies, query, page, language]);

  return movies;
};
