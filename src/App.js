import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './Pages/MainPage/PrivateRoute/PrivateRoute';
import { MainPage } from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { RoleContextProvider }  from './Pages/LoginPage/RoleContext/RoleContext';
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