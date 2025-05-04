import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Custom global styles
import App from './App'; // Main application component
import './App.css';
import reportWebVitals from './reportWebVitals'; // Optional performance reporting

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Report performance metrics
reportWebVitals();
