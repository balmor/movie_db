import React, { useContext } from 'react';

import ScrollToTop from 'react-scroll-up';
import { SwapSpinner } from 'react-spinners-kit';
import { MoviesContext } from '../context/MovieProvider';
import useMovies from '../hooks/useMovies';

const MoviesList: React.FC = () => {
  const { movies, dispatchMovies } = useContext(MoviesContext);
  useMovies(movies, dispatchMovies);

  console.log('movies', movies);

  if (movies.isLoading) {
    return <SwapSpinner size={150} color="#01d277" />;
  }

  return (
    <div className="movies">
      CONTENT
      <ScrollToTop showUnder={160} style={{ right: 200 }}>
        <i className="scroll-up" />
      </ScrollToTop>
    </div>
  )
};

export default MoviesList;
