import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Information from './components/Information';
import LoginForm from './components/LoginForm';

import './style/App.css';

const App = () => {
  const [ role, setRole ] = useState(null);

  const switchToUser = () => {
    setRole('user');
  }

  const correctAdminPass = '1111';
  const switchToAdmin = () => {
    const adminPass = prompt("Enter admin`s password");
    adminPass === correctAdminPass ? setRole('admin') : setRole('unkown');
  }

  useEffect( () => {}, [role] )

  return( 
    <Router>
      <Route exact path="/" component={LoginForm} />
      <Route path="/main-page">
        <div className="root-box">
          <Header />
          <div className="main">
            <Sidebar switchToUser={switchToUser} switchToAdmin={switchToAdmin} />
            <Information role={role} />
          </div>
        </div>
      </Route>
    </Router>
  )
}

export default App;
