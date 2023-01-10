import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { request, success, failure, MoviesActionTypes } from '../actions/movies';
import settings from '../api/config';
import { getLocale } from '../i18n';
import { IState } from '../reducers/movies';

export default (movies: IState, dispatchMovies: React.Dispatch<MoviesActionTypes>): IState => {
  const { i18n: { language = 'en' } = {} } = useTranslation();

  useEffect(() => {
    const { api, headers, params } = settings;
    params.set('language', getLocale(language));

    const fetchData = async () => {
      dispatchMovies(request());
      const response = await fetch(`${api.baseUrl}${api.topRated}?${params}`, { headers });

      const data = await response.json();

      if (response.status === 200) {
        return dispatchMovies(success(data));
      }

      dispatchMovies(failure(data.status_message));

      throw new Error(data.status_message);
    };

    fetchData().catch((err) => err);
  }, [dispatchMovies, language]);

  return movies;
};
