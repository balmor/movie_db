import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MoviesList } from '../components/MoviesList';
import { MovieDetail } from '../components/MovieDetail';
import { NotFound } from '../components/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MoviesList />
      </Route>
      <Route path="/movie/:movieId">
        <MovieDetail />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
