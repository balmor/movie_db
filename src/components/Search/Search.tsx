import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchProvider';
import { Failed } from '../Failed';
import { Movie } from '../Movie';
import { SearchBox } from '../SearchBox';
import { Notification } from '../Notification';
import { Pagination } from '../Pagination';
import { StyledSpinner } from '../StyledSpinner';

export const Search: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    movies: { data, isLoading, isFailed },
  } = useContext(SearchContext);

  const results = data?.results || [];

  const { page = 0, total_pages = 0, total_results = 0 } = data || {};

  type PagesTypes = {
    currentPage: number;
    totalPages: number;
    totalResults: number;
  };

  const pages: PagesTypes = {
    currentPage: page || 0,
    totalPages: total_pages,
    totalResults: total_results,
  };

  return (
    <>
      <SearchBox pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {results.length > 0 && page && total_pages && total_results && (
        <>
          <Notification {...pages} />
          <Pagination {...pages} setPageNumber={setPageNumber} />
        </>
      )}

      {isFailed && <Failed errorMessage={'Somthing went wrong'} />}
      {isLoading ? (
        <StyledSpinner />
      ) : (
        <>
          {results.map((movie) => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={movie.poster_path}
              movieLink={`/movie/${movie.id}`}
            />
          ))}
        </>
      )}
      <Pagination {...pages} setPageNumber={setPageNumber} />
    </>
  );
};
