import React from 'react';
import { Link } from 'react-router-dom';
import tmdbSquare from '../../images/tmdb-square.svg';
import settings from '../../api/config';
import { StyledLink } from '../Button';
import { StyledMovie, StyledMoviePoster, StyledMovieTitle } from '../StyledMovie';

type MovieProps = {
  movieId: number;
  movieTitle: string;
  moviePoster: string;
  movieLink: string;
};

export const Movie: React.FC<MovieProps> = ({ movieId, movieTitle, moviePoster, movieLink }) => {
  const tmdbPoster: string | undefined = moviePoster
    ? `${settings.api.baseImageUrl}${settings.api.imageSize}${moviePoster}`
    : tmdbSquare;

  return (
    <StyledMovie key={movieId}>
      <Link to={movieLink}>
        <StyledMoviePoster src={tmdbPoster} alt={movieTitle} />
      </Link>
      <StyledMovieTitle>{movieTitle}</StyledMovieTitle>
      <StyledLink to={movieLink}>view</StyledLink>
    </StyledMovie>
  );
};
