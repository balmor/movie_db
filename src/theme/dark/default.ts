import { StyledTheme } from '../_types';
import { palette } from '../palette';
import { lighten } from 'polished';

export const DefaultDarkTheme: StyledTheme = {
  primary: palette.dark,
  secondary: palette.white,
  third: palette.green,
  neutral: palette.grey,
  headerBg: palette.offBlack,
  boxBg: palette.lightBlue,
  boxBorder: palette.blue,
  textPrimary: palette.white,
  textSecondary: palette.offWhite,
  textThird: palette.lightBlue,
  buttonBg: palette.purple,
  buttonFg: palette.white,
  buttonBgHover: lighten(0.05, palette.purple),
  buttonFgHover: palette.white,
  inputFocus: palette.lightBlue,
  inputLabel: palette.white,
};
