import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this matches the location of App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
