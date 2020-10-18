import React, { useContext } from 'react';

import ScrollToTop from 'react-scroll-up';
import { SwapSpinner } from 'react-spinners-kit';
import { MoviesContext } from '../../context/MovieProvider';
import useMovies from '../../hooks/useMovies';
import settings from '../../api/config';
import { Movie } from '../Movie';
import { Failed } from '../Failed';

export const MoviesList: React.FC = () => {
  const movieImage = `${settings.api.baseImageUrl}${settings.api.imageSize}`;
  const {
    movies,
    movies: { data, isLoading, isFailed },
    dispatchMovies,
  } = useContext(MoviesContext);

  useMovies(movies, dispatchMovies);

  const results = data?.results;

  if (isLoading) {
    return <SwapSpinner size={150} color="#01d277" />;
  }

  if (isFailed) {
    return <Failed isFailed={isFailed} />;
  }

  return (
    <div className="movies">
      {results?.map((movie) => (
        <div key={movie.id}>
          <Movie
            movieId={movie.id}
            movieTitle={movie.title}
            moviePoster={`${movieImage}${movie.poster_path}`}
            movieLink={`/movie/${movie.id}`}
          />
        </div>
      ))}
      <ScrollToTop showUnder={160} style={{ right: 200 }}>
        <i className="scroll-up" />
      </ScrollToTop>
    </div>
  );
};
