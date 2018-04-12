import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';

class Root extends React.Component {
  state = {
    subtitle: 'List of movies'
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
            <Route exact path="/movies" component={MoviesList} />
            <Route path="/movie/:movieId" component={MovieDetail} />
            <Redirect from="/" to="/movies" />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Root;
