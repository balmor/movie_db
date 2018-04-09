import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

import { connect } from 'react-redux';
import { moviesFetchData } from '../redux/actions/movies';

// TODO
// - move componenetDidMount to Movies,
// - use https://www.themoviedb.org/ API,
// - create one state in redux,
// - create new fetch for one product,
// - use `progressive web apps`

class Root extends React.Component {
  state = {
    subtitle: 'List of movies'
  }
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the movies</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    console.log('process NODE_ENV', process.env.REACT_APP_API_KEY);

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header subtitle={this.state.subtitle} />
          <Route exact path="/" render={ (props) => <MoviesList data={this.props.movies} {...props} />} />
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
      fetchData: () => dispatch(moviesFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
