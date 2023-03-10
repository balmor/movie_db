import styled from 'styled-components';

export const StyledTitle = styled.div`
  h1 {
    font-size: 3.2rem;
    margin: 15px 0 0 0;
  }

  h2 {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
  }
`;
