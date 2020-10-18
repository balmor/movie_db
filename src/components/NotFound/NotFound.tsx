import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <div className="container">
    <div className="notfound">404 Page not found</div>
    <Link to="/" className="button">
      Back to Homepage
    </Link>
  </div>
);
