import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchProvider';
import { Failed } from '../Failed';
import { Movie } from '../Movie';
import { SearchBox } from '../SearchBox';
import { Notification } from '../Notification';
import { Pagination } from '../Pagination';
import { StyledSpinner } from '../StyledSpinner';
import { Translate } from '../Translate';
import { Toast } from '../Toast';

export const Search: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    movies: { data, error, isLoading, isFailed },
  } = useContext(SearchContext);

  const { results = [], page = 0, total_pages = 0, total_results = 0 } = data || {};

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

  const noResults = !pages.totalResults && !!pages.currentPage;

  return (
    <>
      <h2>
        <Translate i18nKey="search" />
      </h2>
      <SearchBox pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {results.length > 0 && page && total_pages && total_results && (
        <>
          <Notification {...pages} />
          <Pagination {...pages} setPageNumber={setPageNumber} />
        </>
      )}

      {isFailed && <Failed errorMessage={error} />}
      {isLoading ? (
        <StyledSpinner />
      ) : (
        <>
          {noResults && <Toast />}
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
