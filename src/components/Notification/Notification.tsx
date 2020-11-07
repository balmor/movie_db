import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.i`
  color: ${({ theme }) => theme.third};
  font-style: normal;
  margin: 0 0.5rem;

  &:before {
    content: '|';
  }
`;

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
    <>
      {hasResults && (
        <p>
          Total results: {totalResults}
          <StyledSeparator />
          Current page: {currentPage}
          <StyledSeparator />
          Total pages: {totalPages}
        </p>
      )}

      {noResults && <p>There is no results</p>}
    </>
  );
};
