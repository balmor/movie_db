import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => darken(0.05, theme.secondary)};
    scroll-behavior: smooth;
    font-family: "Fira Sans", Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }
  code {
    font-family: Consolas, 'Courier New', monospace;
  }
`;
