import React from 'react';
import i18next, { TOptions, StringMap } from 'i18next';
import { useTranslation } from 'react-i18next';
import { StyledTranslate } from '.';

export type StyledTranslateViewProps = {
  haskey: boolean;
};

export type TranslateProps = {
  i18nKey: string;
  options?: string | TOptions<StringMap>;
};

export const Translate: React.FC<TranslateProps> = ({ i18nKey, options }): JSX.Element => {
  const { t } = useTranslation();
  const hasTranslationKey = (key: string) => i18next.exists(key);
  const getTranslation = (key: string) => t(key, options);

  const text = getTranslation(i18nKey);
  const haskey = hasTranslationKey(i18nKey);

  return <StyledTranslate haskey={haskey}>{text}</StyledTranslate>;
};
