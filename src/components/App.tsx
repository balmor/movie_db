import React, { FC, useState, Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MoviesList from './MoviesList';
import NotFound from './NotFound';
import MovieProvider from '../context/MovieProvider';

const App: FC = () => {
  const [subtitle] = useState('List of movies');

  return (
    <Router>
      <MovieProvider>
        <Header subtitle={subtitle} />
        <div className="container">
          <Suspense fallback={'loading'}>
            <NetworkErrorBoundary>

              <Switch>
                <Route exact path="/" >
                  <MoviesList />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </NetworkErrorBoundary>
          </Suspense>
        </div>
      </MovieProvider>
    </Router>
  );
};

export default App;
