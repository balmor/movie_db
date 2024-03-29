import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { StyledScrollToTop } from '.';

export const Scroll2Top = (): JSX.Element => {
  return (
    <ScrollToTop showUnder={160} style={{ right: 20, bottom: 10 }}>
      <StyledScrollToTop />
    </ScrollToTop>
  );
};
