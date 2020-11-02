import React, { useContext, useState } from 'react';
import ScrollToTop from 'react-scroll-up';
import { SwapSpinner } from 'react-spinners-kit';
import { SearchContext } from '../../context/SearchProvider';
import { Failed } from '../Failed';
import { Movie } from '../Movie';
import { SearchBox } from '../SearchBox';
import { Notification } from '../Notification';
import { Pagination } from '../Pagination';

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
      {isFailed && <Failed isFailed={isFailed} />}
      {isLoading ? (
        <SwapSpinner size={150} color="#01d277" />
      ) : (
        <div className="movies">
          {results.map((movie) => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={movie.poster_path}
              movieLink={`/movie/${movie.id}`}
            />
          ))}
        </div>
      )}
      <ScrollToTop showUnder={160} style={{ right: 200 }}>
        <i className="scroll-up"></i>
      </ScrollToTop>
    </>
  );
};
