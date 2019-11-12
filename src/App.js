import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './MainPage/PrivateRoute/PrivateRoute';
import { MainPage } from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import { RoleContextProvider }  from './LoginPage/RoleContext/RoleContext';
import './style/App.css';

export const App = () => {
  return(
    <BrowserRouter>
      <RoleContextProvider>
        
        <LoginPage />

        <PrivateRoute path="/main-page">
          <MainPage />
        </PrivateRoute>

      </RoleContextProvider>
    </BrowserRouter>
  )
};