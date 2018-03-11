import React from 'react';

import Movie from './Movie';

const Movies = (props) => { 
  return (
    <div className="container">
      <div className="movies">
        {props.data.map((movie) => (
          <Movie
            key={movie.id}
            movieId={movie.id}
            movieTitle={movie.title}
            moviePoster={movie.poster}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies;