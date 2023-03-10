import styled from 'styled-components';
import { darken } from 'polished';

export const StyledPagination = styled.div`
  margin: 1.2rem auto;
`;

export const StyledCurrentPage = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.textThird};
  width: 4.8rem;
  text-align: center;
  padding: 1.2rem 0;
  margin: 0 0.05rem;
  border-bottom: 0.3rem solid ${({ theme }) => darken(0.1, theme.textThird)};
`;
