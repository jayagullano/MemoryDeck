import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './components/App.js';

import { CssBaseline } from '@material-ui/core';

/**
 * Notes:
 * 
 * Cards are displayed in the console from memorizationMode, nextCard() function.
 */

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

