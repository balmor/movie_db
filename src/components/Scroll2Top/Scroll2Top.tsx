import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledScrollToTop = styled.i`
  display: inline-block;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 15%;
  border: 0.2rem solid ${({ theme }) => darken(0.1, theme.third)};
  transition: all 0.2s ease-in-out;

  &:before {
    border-right: 5px solid ${({ theme }) => theme.third};
    border-top: 5px solid ${({ theme }) => theme.third};
    content: '';
    display: inline-block;
    height: 1.5rem;
    margin-top: 1.8rem;
    margin-left: 1.4rem;
    width: 1.5rem;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    border-color: ${({ theme }) => darken(0.15, theme.secondary)};

    &:before {
      border-color: ${({ theme }) => darken(0.15, theme.secondary)};
    }
  }
`;

export const Scroll2Top = (): JSX.Element => {
  return (
    <ScrollToTop showUnder={160} style={{ right: 200 }}>
      <StyledScrollToTop />
    </ScrollToTop>
  );
};
