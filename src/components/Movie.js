import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = (props) => (
  <div className="movies__box">
    <img className="movies__poster" src={props.moviePoster} alt={props.movieTitle} />
    <h2 className="movies__title">{props.movieTitle}</h2>
    <Link className="button" to={props.movieLink}>view</Link>
  </div>
)

Movie.propTypes = {
  movieId: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  moviePoster: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired
}

export default Movie;
