import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './components/App.js';

import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

