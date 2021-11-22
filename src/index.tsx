import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { Navbar, NavbarWithClass } from './pages'
import './fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/autohide-navbar" element={<Navbar/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
