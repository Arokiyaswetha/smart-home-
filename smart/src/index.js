import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    {/* Force redirect to /home on initial load */}
    {window.location.pathname === '/' && (window.location.href = '/home')}
    <App />
  </BrowserRouter>
);
