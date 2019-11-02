import React, { useState } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Header from './MainPage/Header';
import Sidebar from './MainPage/Sidebar/SidebarIndex';
import Information from './MainPage/Information';
import LoginForm from './LoginPage/LoginForm';

import './style/App.css';

const App = () => {
  const user = 'user';
  const admin = 'admin';
  const unknown = 'unknown';
  const initialRole = '';
  const [role, setRole] = useState(initialRole);

  const [fields, setFields] = useState({});

  const handleChangeFields = name => event => {
    const value = event.target.value;
    setFields({ ...fields, [name]: value });
  }

  const handleSubmit = () => {
    const { login, password } = fields;

    if ( login === user && password === user ) {
      setRole(user);
    } else if ( login === admin && password === admin ) {
      setRole(admin);
    } else {
      setRole(unknown);
    }

  }

  return( 
    <BrowserRouter>
      <Route exact path="/" > 
        <LoginForm 
          handleChangeFields={handleChangeFields} 
          handleSubmit={handleSubmit} 
          role={role} 
        />
      </Route>
      <Route path="/main-page">
        <div className="root-box">
          <Header />
          <div className="main">
            <Sidebar 
              role={role}
            />
            <Information />
          </div>
        </div>
      </Route>
    </BrowserRouter>
  )
}

export default App;
