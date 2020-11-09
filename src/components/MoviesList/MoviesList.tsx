import React, { useContext } from 'react';

import { MoviesContext } from '../../context/MovieProvider';
import useMovies from '../../hooks/useMovies';
import { Movie } from '../Movie';
import { Failed } from '../Failed';
import { StyledSpinner } from '../StyledSpinner';
import { Translate } from '../Translate';

export const MoviesList: React.FC = () => {
  const {
    movies,
    movies: { data, isLoading, isFailed },
    dispatchMovies,
  } = useContext(MoviesContext);

  useMovies(movies, dispatchMovies);

  const results = data?.results;

  if (isLoading) {
    return <StyledSpinner />;
  }

  if (isFailed) {
    return <Failed />;
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
