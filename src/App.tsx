import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Header } from './components/Header';
import Routes from './routes';
import MovieProvider from './context/MovieProvider';
import SearchProvider from './context/SearchProvider';

import { ThemeStore } from './context/ThemeStore';
import { Theme } from './components/Theme';
import { Scroll2Top } from './components/Scroll2Top';
import { StyledContainer } from './components/StyledContainer';
import { Navigation } from './components/Navigation';
import { i18nConfig } from './i18n';

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeStore>
        <Theme>
          <MovieProvider>
            <SearchProvider>
              <Header />
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
    </HashRouter>
  );
};

export default App;
