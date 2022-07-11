// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Navbar/Logo'
import { ThemeToggler } from './components/ThemeToggler'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Logo/>
    <Navbar/>
    <div className="mobile-divider h-[60px] md:hidden"/>
    <ThemeToggler/>
    <App/>
  </React.StrictMode>
);
