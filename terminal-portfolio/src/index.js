// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Remove this line
import './styles/Terminal.css'; // Add this line
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
