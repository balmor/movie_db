import React from 'react';
import PropTypes  from 'prop-types';
import tmdb from '../../public/images/tmdb.svg';

const Header = (props) => (
  <div className="header">
    <div className="container header__wrapper">
      <div>
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
      <a className="header__logo" href="https://www.themoviedb.org/"><img alt="TMDb" src={tmdb} width="200" /></a>
    </div>
 </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'React Movies'
}

export default Header;
