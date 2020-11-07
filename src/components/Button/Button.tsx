import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const button = css`
  display: inline-block;
  outline: none;
  background: ${({ theme }) => theme.buttonBg};
  border: none;
  border-bottom: 0.3rem solid ${({ theme }) => darken(0.1, theme.buttonBg)};
  color: ${({ theme }) => theme.buttonFg};
  font-weight: 500;
  padding: 1.2rem;
  margin: 0 0.05rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.buttonBgHover};
    color: ${({ theme }) => theme.buttonFgHover};
    border-bottom: 0.3rem solid ${({ theme }) => darken(0.05, theme.buttonBg)};
    cursor: pointer;

    &:disabled {
      cursor: default;
      background: #8357c5;
      border-bottom: 0.3rem solid ${({ theme }) => darken(0.1, theme.buttonBg)};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.neutral};
  }
`;

export const StyledLink = styled(Link)`
  ${button}
`;

export const StyledButton = styled.button`
  ${button}
  min-width: 4.8rem;
`;
