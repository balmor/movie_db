import React from 'react';
import i18next, { TOptions, StringMap } from 'i18next';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export type StyledTranslateViewProps = {
  haskey: boolean;
};

const StyledTranslate = styled.span<StyledTranslateViewProps>`
  opacity: 1;
  color: ${({ haskey }) => (haskey ? 'inherit' : 'red')};
  ${({ haskey }) =>
    haskey
      ? ''
      : `
    font-weight: bold;
    animation: blink .9s linear infinite;`}
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

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
