import styled from 'styled-components';
import { LangSwitcherProps } from '.';

export const StyledButton = styled.button<LangSwitcherProps>`
  display: block;
  align-self: center;
  cursor: pointer;
  outline: none;
  border: none;
  outline: none;
  background: none;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.9)};
  z-index: ${({ isActive }) => (isActive ? 1 : 2)};
  transition: 0.3s ease-in;
  position: relative;
  line-height: 0;
  padding: 0;

  img {
    border: 2px solid transparent;
  }

  &:hover {
    opacity: 1;

    img {
      border: 2px solid ${({ theme }) => theme.third};
    }
  }
`;
