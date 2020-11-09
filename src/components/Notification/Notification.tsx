import React from 'react';
import styled from 'styled-components';
import { Translate } from '../Translate';

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
          <Translate i18nKey="totalResults" />: {totalResults}
          <StyledSeparator />
          <Translate i18nKey="currentPage" />: {currentPage}
          <StyledSeparator />
          <Translate i18nKey="totalPages" />: {totalPages}
        </p>
      )}

      {noResults && <p>There is no results</p>}
    </>
  );
};
