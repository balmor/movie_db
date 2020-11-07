import styled, { css } from 'styled-components';

export const StyledMovie = styled.div`
  background: ${({ theme }) => theme.boxBg};
  display: flex;
  align-items: center;
  padding: 1.6rem;
  margin-bottom: 0.3rem;
  height: 13.4rem;
`;

export const StyledMovieDetail = styled(StyledMovie)`
  flex-direction: column;
  height: auto;
  margin-bottom: 4.8rem;
`;

export const StyledMoviePoster = styled.img`
  width: 9.6rem;
  border: 0.3rem solid ${({ theme }) => theme.boxBorder};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0.6rem #888888;
    opacity: 0.8;
  }
`;

export const StyledMoviePosterDetail = styled(StyledMoviePoster)`
  width: 30rem;
  min-height: 15rem;
`;

export const styledMovieTitle = css`
  color: ${({ theme }) => theme.textPrimary};
  padding: 1.6rem;
  word-break: break-all;
  max-height: 9.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledMovieTitle = styled.h2`
  ${styledMovieTitle}
  margin: 1.6rem;
  width: 38rem;
`;

export const StyledMovieTitleDetail = styled.h2`
  ${styledMovieTitle}
  text-align: center;
`;
