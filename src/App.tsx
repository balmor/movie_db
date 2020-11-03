import React, { useState, Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import Routes from './routes';
import MovieProvider from './context/MovieProvider';
import SearchProvider from './context/SearchProvider';

const App: React.FC = () => {
  const [subtitle] = useState('List of movies');

  return (
    <Router>
      <MovieProvider>
        <SearchProvider>
          <Header subtitle={subtitle} />
          <div className="container">
            <Suspense fallback={'loading'}>
              <NetworkErrorBoundary>
                <Routes />
              </NetworkErrorBoundary>
            </Suspense>
          </div>
        </SearchProvider>
      </MovieProvider>
    </Router>
  );
};

export default App;
