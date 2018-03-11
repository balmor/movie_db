import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

class Root extends React.Component {
  state = {
    subtitle: 'List of movies',
    movies: []
  }
  componentDidMount() {
    axios.get('/movies/movies.json')
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
  }  
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header subtitle={this.state.subtitle} />
          <Route exact path="/" render={ (props) => <Movies data={this.state.movies} {...props} />} />
          <Route path="/movie/:movieId" render={ (props) => <MovieDetail data={this.state.movies} {...props} />} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Root;