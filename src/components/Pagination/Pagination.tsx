import { darken } from 'polished';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button';

const StyledPagination = styled.div`
  margin: 1.2rem auto;
`;

const StyledCurrentPage = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.textThird};
  width: 4.8rem;
  text-align: center;
  padding: 1.2rem 0;
  margin: 0 0.05rem;
  border-bottom: 0.3rem solid ${({ theme }) => darken(0.1, theme.textThird)};
`;

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

    items.unshift(navigation(currentPage - 1, 'prev', prevDisabled));
    items.unshift(navigation(1, 'first', prevDisabled));
    items.push(navigation(currentPage + 1, 'next', nextDisabled));
    items.push(navigation(totalPages, 'last', nextDisabled));

    return items;
  };

  if (!hasResults) return null;

  return <StyledPagination>{createButtons()}</StyledPagination>;
};
