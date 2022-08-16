import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import  GlobalStyle  from './styles/global';
import theme from './styles/themes';

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Profile } from './pages/Profile';
import { Routes } from './Routes';

import { SignUp } from './pages/SignUp';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <Routes /> 
    </ThemeProvider>
  </React.StrictMode>
);
