import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MoviesList } from '../components/MoviesList';
import { MovieDetail } from '../components/MovieDetail';
import { NotFound } from '../components/NotFound';
import { Search } from '../components/Search';
import { Iframe } from '../components/Iframe';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route exact path="/movies">
        <MoviesList />
      </Route>
      <Route path="/movie/:movieId">
        <MovieDetail />
      </Route>
      <Route path="/iframe">
        <Iframe />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
