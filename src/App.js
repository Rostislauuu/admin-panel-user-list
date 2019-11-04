import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Header from './MainPage/Header';
import Sidebar from './MainPage/Sidebar/SidebarIndex';
import Information from './MainPage/Information';
import LoginForm from './LoginPage/LoginForm';
import RoleContextProvider from './Context/RoleContext';

import './style/App.css';

const App = () => {
  return( 
    <BrowserRouter>
      <RoleContextProvider>
        <Route exact path="/" > 
          <LoginForm />
        </Route>
        <Route path="/main-page">
          <div className="root-box">
            <Header />
            <div className="main">
              <Sidebar />
              <Information />
            </div>
          </div>
        </Route>
    </RoleContextProvider>
  </BrowserRouter>
  )
}

export default App;
