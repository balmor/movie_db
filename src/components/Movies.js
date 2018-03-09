import React from 'react';
import PropTypes  from 'prop-types';

const Movies = (props) => (
  <div className="movies__box">
    <img className="movies__poster" src={props.moviePoster} />
    <h2 className="movies__title">{props.movieTitle}</h2>
    <a className="button" href="#">view</a>
  </div>
);

Movies.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePoster: PropTypes.string.isRequired
};

export default Movies;