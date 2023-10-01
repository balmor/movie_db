import React, { useContext, useEffect } from 'react';

import { MoviesContext } from '../../context/MovieProvider';
import useMovies from '../../hooks/useMovies';
import { Movie } from '../Movie';
import { Failed } from '../Failed';
import { StyledSpinner } from '../StyledSpinner';
import { Translate } from '../Translate';
import { SearchContext } from '../../context/SearchProvider';
import { clearSearch } from '../../actions/search';

export const MoviesList: React.FC = () => {
  const {
    movies,
    movies: { data, error, isLoading, isFailed },
    dispatchMovies,
  } = useContext(MoviesContext);

  const { dispatchSearch } = useContext(SearchContext);

  useMovies(movies, dispatchMovies);

  const results = data?.results;

  useEffect(() => {
    dispatchSearch(clearSearch());
  }, [dispatchSearch]);

  if (isLoading) {
    return <StyledSpinner />;
  }

  if (isFailed) {
    return <Failed errorMessage={error} />;
  }

  return (
    <>
      <h2>
        <Translate i18nKey="topRatedMovie" />
      </h2>
      {results?.map((movie) => (
        <Movie
          key={movie.id}
          movieId={movie.id}
          movieTitle={movie.title}
          moviePoster={movie.poster_path}
          movieLink={`/movie/${movie.id}`}
        />
      ))}
    </>
  );
};
