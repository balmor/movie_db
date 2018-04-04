import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

import { connect } from 'react-redux';
import { moviesFetchData } from '../actions/movies';

class Root extends React.Component {
  state = {
    subtitle: 'List of movies'
  }
  componentDidMount() {
    this.props.fetchData('http://localhost:8585/movies/movies.json');
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the movies</p>;
    }
    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    console.log('props', this.props);

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header subtitle={this.state.subtitle} />
          <Route exact path="/" render={ (props) => <Movies data={this.props.movies} {...props} />} />
          <Route path="/movie/:movieId" render={ (props) => <MovieDetail data={this.props.movies} {...props} />} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
      hasErrored: state.moviesHasErrored,
      isLoading: state.moviesIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(moviesFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
