import styled from 'styled-components';
import { StyledTranslateViewProps } from '.';

export const StyledTranslate = styled.span<StyledTranslateViewProps>`
  opacity: 1;
  color: ${({ haskey }) => (haskey ? 'inherit' : 'red')};
  ${({ haskey }) =>
    haskey
      ? ''
      : `
    font-weight: bold;
    animation: blink .9s linear infinite;`}
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
