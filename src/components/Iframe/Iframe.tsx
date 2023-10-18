import React from 'react';

export const Iframe: React.FC = () => {
  const srcIframe =
    // eslint-disable-next-line max-len
    'https://vitzo-default.staging.nexway.build/checkout-iap-18297/add?products=7e572c4d-e52f-45a6-bd47-cd8ee3c958b5&newCart=true';

  return (
    <>
      <h2>Iframe</h2>
      <iframe src={srcIframe} title="iframe CSP" />
    </>
  );
};
