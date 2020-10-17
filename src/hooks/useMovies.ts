import { useEffect } from 'react';
import { request, success, failure, MoviesActionTypes } from '../actions/movies';
import settings from '../api/config';
import { IState } from '../reducers/movies';

export default (movies: IState, dispatchMovies: React.Dispatch<MoviesActionTypes>): unknown => {
  useEffect(() => {
    const { api, headers, params } = settings;
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
  }, [dispatchMovies]);

  return movies;
};
