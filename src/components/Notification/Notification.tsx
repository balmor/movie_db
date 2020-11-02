import React from 'react';

type NotificationProps = {
  totalResults: number;
  currentPage: number;
  totalPages: number;
};

export const Notification: React.FC<NotificationProps> = ({
  totalResults,
  currentPage,
  totalPages,
}) => {
  const hasResults = totalResults > 0,
    noResults = totalResults < 1;

  return (
    <React.Fragment>
      {hasResults && (
        <p>
          Total results: {totalResults}
          <span className="search__results--sep">|</span>
          Current page: {currentPage}
          <span className="search__results--sep">|</span>
          Total pages: {totalPages}
        </p>
      )}

      {noResults && <p>There is no results</p>}
    </React.Fragment>
  );
};
