import React from 'react';
import { Link } from 'react-router-dom';

type FailedProps = {
  isFailed: boolean;
};

export const Failed: React.FC<FailedProps> = ({ isFailed }) => (
  <React.Fragment>
    <p className="failed">{isFailed}</p>
    <Link className="button" to="/">
      Back to Homepage
    </Link>
  </React.Fragment>
);
