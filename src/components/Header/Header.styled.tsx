import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: ${({ theme }) => theme.headerBg};
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.textPrimary};
`;
