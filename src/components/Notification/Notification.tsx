import React from 'react';
import { StyledSeparator } from '.';
import { Translate } from '../Translate';

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
