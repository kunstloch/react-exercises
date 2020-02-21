import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import Game from './components/Game';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 40px;
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    background-color: #CDCDCD;
    
    .board-row:after {
      clear: both;
      content: "";
      display: table;
  }

  .status {
    color: #424242;
    margin-bottom: 10px;
}

.square:focus {
  outline: none;
  
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.game {
  display: flex;
  flex-direction: column;
}

.game-info {
  font-size: 48px;
  color: #424242;
  margin-top: 20px;
  text-align: center;
}

.restart-button {
  margin-top: 20px;
  text-align: center;
}

.restart:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.restart:focus {
  outline: none;
}

.restart:active {
  box-shadow: 0 1px #424242;
  transform: translateY(1px);
}

.restart {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  background-color: #424242;
  color: #fffde7;
  border: none;
  font-size: 24px;
  line-height: 48px;
  height: 48px;
  width: 40%;
  text-align: center;
  border-radius: 4px;
}

  }

  ol, ul {
    padding-left: 30px;
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
    color: black;
    margin: 15px;
    text-align: center;
    font-size: 8em;
    padding: 20px;
    }

  h2 {
    color: black;
    margin: 15px;
    text-align: center;
    font-size: 1.5em;
    }
`;

function App({ value, onClick }) {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Game />
    </>
  );
}

export default App;
