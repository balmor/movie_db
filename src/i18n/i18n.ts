import { InitOptions } from 'i18next';
import { LangOptions } from './locale/_types';

import * as en from './locale/en/';
import * as pl from './locale/pl/';

export const langOptions: LangOptions[] = [
  { value: 'en', label: 'English' },
  { value: 'pl', label: 'Polski' },
];

export const i18nConfig: InitOptions = {
  resources: {
    en,
    pl,
  },
  whitelist: ['en', 'pl'],
  fallbackLng: 'en',
  debug: false,
  initImmediate: false,

  ns: ['general'],
  defaultNS: 'general',

  nsSeparator: ':',
  react: {
    defaultTransParent: 'div',
    transSupportBasicHtmlNodes: true,
  },
};
