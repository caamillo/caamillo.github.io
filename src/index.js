// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Navbar/Logo'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Logo />
    <Navbar />
    <App />
  </React.StrictMode>
);
