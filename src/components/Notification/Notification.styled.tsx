import styled from 'styled-components';

export const StyledSeparator = styled.i`
  color: ${({ theme }) => theme.third};
  font-style: normal;
  margin: 0 0.5rem;

  &:before {
    content: '|';
  }
`;
