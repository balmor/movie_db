/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultTheme } from 'styled-components';
import { StyledTheme } from './_types';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
