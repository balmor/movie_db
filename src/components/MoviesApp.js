import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Movies from './Movies';

class MoviesApp extends React.Component {
  state = {
    movies: []
  };
  render() {
    const subtitle = 'List of movies';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Movies
          />
        </div>
      </div>
    );
  }
}

export default MoviesApp;