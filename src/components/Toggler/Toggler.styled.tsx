import styled, { css } from 'styled-components';

import { Sun } from '@styled-icons/feather/Sun';
import { Moon } from '@styled-icons/feather/Moon';

const icon = css`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  align-self: center;

  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;

export const StyledSun = styled(Sun)`
  ${icon}
`;

export const StyledMoon = styled(Moon)`
  ${icon}
`;
