import React from 'react';
import { StyledToast } from '.';
import { Translate } from '../Translate';

type ToastProps = {
  toastMessage?: string | null | undefined;
};

export const Toast: React.FC<ToastProps> = ({ toastMessage }) => (
  <StyledToast>{toastMessage || <Translate i18nKey="toastDefault" />}</StyledToast>
);
