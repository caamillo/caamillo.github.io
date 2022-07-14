// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';
import Logo from './components/Navbar/Logo'
import Social from './components/Social'
import ThemeToggler from './components/ThemeToggler'
import LanguageToggler from './components/LanguageToggler';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Logo/>
    <div className="mobile-divider h-[60px] md:hidden"/>
    <ThemeToggler/>
    <App/>
    <Social/>
  </React.StrictMode>
);
