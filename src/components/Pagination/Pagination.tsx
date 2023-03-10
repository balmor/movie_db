import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledCurrentPage, StyledPagination } from '.';
import { StyledButton } from '../Button';

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

  const { t } = useTranslation();

  const handlePage = (pageNumber: number) => (): void => {
    if (pageNumber === 0 || pageNumber > totalPages) {
      return;
    }

    setPageNumber(pageNumber);
  };

  const navigation = (pageNumber: number, name?: string, disabled?: boolean): JSX.Element => {
    return (
      <StyledButton
        key={name || pageNumber}
        className="pagination__button button"
        onClick={handlePage(pageNumber)}
        disabled={disabled}
      >
        {name || pageNumber}
      </StyledButton>
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
      item = i === currentPage ? <StyledCurrentPage key={i}>{i}</StyledCurrentPage> : navigation(i);
      if (i > totalPages) {
        break;
      }

      items.push(item);
    }

    items.unshift(navigation(currentPage - 1, t('prev'), prevDisabled));
    items.unshift(navigation(1, t('first'), prevDisabled));
    items.push(navigation(currentPage + 1, t('next'), nextDisabled));
    items.push(navigation(totalPages, t('last'), nextDisabled));

    return items;
  };

  if (!hasResults) return null;

  return <StyledPagination>{createButtons()}</StyledPagination>;
};
