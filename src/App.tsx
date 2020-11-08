import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import Routes from './routes';
import MovieProvider from './context/MovieProvider';
import SearchProvider from './context/SearchProvider';

import { ThemeStore } from './context/ThemeStore';
import { Theme } from './components/Theme';
import { Scroll2Top } from './components/Scroll2Top';
import { StyledContainer } from './components/StyledContainer';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [subtitle] = useState('react hooks + typescript');

  return (
    <Router>
      <ThemeStore>
        <Theme>
          <MovieProvider>
            <SearchProvider>
              <Header subtitle={subtitle} />
              <Navigation />
              <StyledContainer>
                <Suspense fallback={'loading'}>
                  <Routes />
                </Suspense>
              </StyledContainer>
              <Scroll2Top />
            </SearchProvider>
          </MovieProvider>
        </Theme>
      </ThemeStore>
    </Router>
  );
};

export default App;
