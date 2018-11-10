import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
import tmdbSquare from '../../public/images/tmdb-square.svg';

const Movie = (props) => {
  const collect = props.details;
  console.log('prop children', props.details)

  const ButtonDetail = () => {
    return (
      <button
      className="button icon-magnifier icons"
      onClick={props.handleMovieId}
    >detail</button>
    )
  }

  const MovieData = () => {

    const avarage = collect.find(x => x.id === props.movieId);

    const voteAverage = avarage && `Vote average: ${avarage.vote_average}`;
    const status = props.status && `Status: ${props.status}`;

    //console.log('avarage', voteAverage)

    return (
      <div className="movies__data">
        <p>{status}</p>
        <p>{voteAverage}</p>
      </div>
    )
  }

  return (
    <div className="movies__box">
      <Link to={props.movieLink}><img
        className="movies__poster"
        src={props.moviePoster}
        alt={props.movieTitle}
      /></Link>
      <div className={`movies__detail ${props.moreDetails && 'movies__detail--top'}`}>
        <h2 className="movies__title movies__title--top">{props.movieTitle}</h2>
        {props.moreDetails && <MovieData />}
      </div>
      <Link className="button" to={props.movieLink}>view</Link>

      {props.moreDetails && <ButtonDetail />}
    </div>
  )
};


Movie.propTypes = {
  movieId: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  moviePoster: PropTypes.string,
  movieLink: PropTypes.string.isRequired,
  handleMovieId: PropTypes.func,
  moreDetails: PropTypes.bool,
  details: PropTypes.array,
}

Movie.defaultProps = {
  moviePoster: `${tmdbSquare}`
}

export default Movie;
