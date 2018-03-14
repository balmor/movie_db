import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({match, data}) => {
  const movie = data.find(movie => movie.id == match.params.movieId);
  
  return (
    <div className="container">
      <div className="movies">
        <div className="movies__box movies__box--detail">
          <img className="movies__poster" src={movie.poster} alt={movie.title} />
          <h2 className="movies__title movies__title--center">{movie.title}</h2>
          <p className="movies__description">{movie.description}</p>
        </div>
      </div>
      <Link className="button" to="/">Back to Homepage</Link>
    </div>
  )
}

export default MovieDetail;