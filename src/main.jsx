import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure App.jsx is in the same directory
import './index.css'; // Ensure index.css is in the same directory
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap is installed

// Ensure an element with ID 'root' exists in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
