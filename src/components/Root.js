import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';
import Search from './Search';

class Root extends React.Component {
  state = {
    subtitle: 'List of movies'
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <React.Fragment>
          <Header subtitle={this.state.subtitle} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/movies" component={MoviesList} />
              <Route path="/movie/:movieId" component={MovieDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Root;
