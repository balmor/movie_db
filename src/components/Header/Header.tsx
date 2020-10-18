import React from 'react';
import tmdb from './../../images/tmdb.svg';

export type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export const Header: React.FC<HeaderProps> = ({ title = 'Hooks Movies', subtitle }) => (
  <div className="header">
    <div className="container header__wrapper">
      <div>
        <h1 className="header__title">{title}</h1>
        {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
      </div>
      <a className="header__logo" href="https://www.themoviedb.org/">
        <img alt="TMDb" src={tmdb} width="200" />
      </a>
    </div>
  </div>
);
