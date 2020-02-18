import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      background-color: #CDCDCD;
  }
  p {
    margin-top: 0;
    font-size: (1em + 1vw); 
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    font-size: (1em + 1vw); 
    }

  h1 {
    color: #FF0000;
    margin: 15px;
    text-align: center;
    font-size: 2em; 
    }

  h2 {
    color: black;
    margin: 15px;
    text-align: center;
    font-size: 1.5em;
    }
`;

function App() {
  return (
    <>
      <Layout />
      <div>Test</div>
    </>
  );
}

export default App;
