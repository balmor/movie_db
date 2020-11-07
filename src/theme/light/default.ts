import { StyledTheme } from '../_types';
import { palette } from '../palette';
import { darken, lighten } from 'polished';

export const DefaultLightTheme: StyledTheme = {
  primary: palette.white,
  secondary: palette.dark,
  third: palette.green,
  neutral: palette.grey,
  headerBg: darken(0.03, palette.white),
  boxBg: palette.lightGray,
  boxBorder: palette.offWhite,
  textPrimary: palette.dark,
  textSecondary: palette.blue,
  textThird: palette.lightGray,
  buttonBg: palette.purple,
  buttonFg: palette.white,
  buttonBgHover: lighten(0.05, palette.purple),
  buttonFgHover: palette.white,
  inputFocus: palette.lightGray,
  inputLabel: palette.dark,
};
