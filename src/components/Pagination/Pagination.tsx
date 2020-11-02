import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

type PaginationProps = {
  totalResults: number;
  currentPage: number;
  totalPages: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  currentPage,
  totalPages,
  setPageNumber,
}) => {
  const prevDisabled = currentPage === 1,
    nextDisabled = currentPage === totalPages,
    hasResults = totalResults > 1;

  const handlePage = (pageNumber: number) => (): void => {
    if (pageNumber === 0 || pageNumber > totalPages) {
      return;
    }

    setPageNumber(pageNumber);
  };

  const navigation = (pageNumber: number, name?: string, disabled?: boolean): JSX.Element => {
    return (
      <button
        key={name || pageNumber}
        className="pagination__button button"
        onClick={handlePage(pageNumber)}
        disabled={disabled}
      >
        {name || pageNumber}
      </button>
    );
  };

  const createButtons = () => {
    const items = [];
    let item;

    const destPage = (function () {
      switch (true) {
        case currentPage < 3 || currentPage === 2:
          return 0;
        case currentPage === totalPages:
          return currentPage - 5;
        case currentPage + 1 === totalPages:
          return currentPage - 4;
        default:
          return currentPage - 3;
      }
    })();

    for (let i = destPage + 1; i < destPage + 6; i++) {
      item =
        i === currentPage ? (
          <p key={i} className="pagination__currentPage">
            {i}
          </p>
        ) : (
          navigation(i)
        );
      if (i > totalPages) {
        break;
      }

      items.push(item);
    }

    items.unshift(navigation(currentPage - 1, 'prev', prevDisabled));
    items.unshift(navigation(1, 'first', prevDisabled));
    items.push(navigation(currentPage + 1, 'next', nextDisabled));
    items.push(navigation(totalPages, 'last', nextDisabled));

    return items;
  };

  if (!hasResults) return null;

  return <div className="pagination">{createButtons()}</div>;
};
