import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import settings from '../../api/config';
import tmdbSquare from '../../images/tmdb-square.svg';
import { StyledLink } from '../Button';
import { Failed } from '../Failed';
import { StyledMovieDetail, StyledMoviePosterDetail, StyledMovieTitleDetail } from '../StyledMovie';
import { StyledSpinner } from '../StyledSpinner';
import { Translate } from '../Translate';

export const MovieDetail: React.FC = () => {
  type ParamTypes = {
    movieId?: string;
  };

  type MovieTypes = {
    isLoading: boolean;
    isFailed: boolean;
    data: {
      title: string;
      overview: string;
      poster_path?: string;
      backdrop_path?: string;
    } | null;
  };

  const { api, headers, params } = settings;
  const { movieId = '' } = useParams<ParamTypes>();
  const [movie, setMovie] = useState<MovieTypes | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie({ data: null, isLoading: true, isFailed: false });
      const response = await fetch(`${api.baseUrl}${api.singleMovie}/${movieId}?${params}`, {
        headers,
      });

      const data = await response.json();

      if (response.status === 200) {
        setMovie({ data, isLoading: false, isFailed: false });
        return;
      }

      setMovie({
        data: data.status_message || 'Unable to fetch',
        isLoading: false,
        isFailed: true,
      });

      throw new Error(data.status_message);
    };
    fetchMovie().catch((err) => err);
  }, [api.baseUrl, api.singleMovie, headers, movieId, params]);

  const moviePoster = (): string | undefined => {
    if (movie?.data?.backdrop_path) {
      return `${api.baseImageUrl}${api.imageSize}${movie?.data?.backdrop_path}`;
    } else if (movie?.data?.poster_path) {
      return `${api.baseImageUrl}${api.imageSize}${movie?.data?.poster_path}`;
    }

    return tmdbSquare;
  };

  if (movie?.isLoading) {
    return <StyledSpinner />;
  }

  if (movie?.isFailed) {
    return <Failed />;
  }

  return (
    <>
      <StyledMovieDetail>
        <StyledMoviePosterDetail src={moviePoster()} alt={movie?.data?.title} />
        <StyledMovieTitleDetail>{movie?.data?.title}</StyledMovieTitleDetail>
        <p>{movie?.data?.overview}</p>
      </StyledMovieDetail>
      <StyledLink to="/">
        <Translate i18nKey="backHome" />
      </StyledLink>
    </>
  );
};
