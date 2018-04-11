import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import FilmDetail from './FilmDetail';
import NotFound from './NotFound';

import FilmsList from './FilmsList';

import { connect } from 'react-redux';
import { moviesFetchData } from '../redux/actions/movies';

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

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header subtitle={this.state.subtitle} />
          <Switch>
            <Route exact path="/movies" render={ (props) => <MoviesList data={this.props.movies} {...props} />} />
            <Route exact path="/films" component={FilmsList} />
            <Route path="/movie/:movieId" render={ (props) => <MovieDetail data={this.props.movies} {...props} />} />
            <Route path="/film/:filmId" component={FilmDetail} />
            <Redirect from="/" to="/films" />
            <Route path="*" component={NotFound} />
          </Switch>
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
