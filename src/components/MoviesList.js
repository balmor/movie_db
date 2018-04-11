import React from 'react';
import { Link } from 'react-router-dom';

import Movie from './Movie';

const MoviesList = (props) => {
//console.log(props.data.results)

  return (
    <div className="container">
      <Link to="/films" className="link">TMDb API</Link>
      <div className="movies">
        {props.data.map((movie) => (
          <Movie
            key={movie.id}
            movieId={movie.id}
            movieTitle={movie.title}
            moviePoster={movie.poster}
            movieLink={`/movie/${movie.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesList;
