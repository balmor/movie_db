import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SwapSpinner } from 'react-spinners-kit';
import settings from '../../api/config';
import tmdbSquare from '../../images/tmdb-square.svg';
import { Failed } from '../Failed';

export const MovieDetail: React.FC = () => {
  type ParamTypes = {
    movieId?: string;
  };

  type MovieTypes = {
    isLoading: boolean;
    isFailed: boolean;
    data: { title: string; overview: string; poster_path?: string } | null;
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

  const tmdbPoster = movie?.data?.poster_path
    ? `${api.baseImageUrl}${api.imageSize}${movie?.data?.poster_path}`
    : tmdbSquare;

  if (movie?.isLoading) {
    return <SwapSpinner size={150} color="#01d277" />;
  }

  if (movie?.isFailed) {
    return <Failed isFailed={movie.isFailed} />;
  }

  return (
    <>
      <div className="movies--space">
        <div className="movies__box movies__box--detail">
          <img className="movies__poster" src={tmdbPoster} alt={movie?.data?.title} />
          <h2 className="movies__title movies__title--center">{movie?.data?.title}</h2>
          <p className="movies__description">{movie?.data?.overview}</p>
        </div>
      </div>
      <Link className="button" to="/">
        Back to Homepage
      </Link>
    </>
  );
};
