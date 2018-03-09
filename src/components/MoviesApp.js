import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Movies from './Movies';
import axios from 'axios';

class MoviesApp extends React.Component {
  state = {
    subtitle: 'List of movies',
    movies: []
  }
  componentDidMount() {
    axios.get(`/movies/movies.json`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }
  render() {
    return (
      <React.Fragment>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <div className="movies">
            {this.state.movies.map((movie) => (
              <Movies
                key={movie.id}
                movieId={movie.id}
                movieTitle={movie.title}
                moviePoster={movie.poster}
              />
            ))}          
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesApp;