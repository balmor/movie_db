import styled from 'styled-components';

export const StyledSearchInput = styled.input`
  width: 100%;
  background: none;
  border: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.inputLabel};
  line-height: 3.2rem;
  padding: 0.2rem 0;
  padding-right: 4.8rem;
  color: ${({ theme }) => theme.inputLabel};
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.inputFocus};
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border-color: ${({ theme }) => theme.third};

    &::placeholder {
      color: transparent;
    }
  }
`;
