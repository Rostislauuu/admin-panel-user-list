import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Information from './components/Information';

import './App.css';

const App = () => {
  const [ role, setRole ] = useState(null);

  const switchToUser = () => {
    setRole('user');
  }

  const switchToAdmin = () => {
    setRole('admin');
  }

  useEffect( () => {}, [role])

  return( 
    <div className="root-box">
      <Header />
      <div className="main">
        <Sidebar switchToUser={switchToUser} switchToAdmin={switchToAdmin}/>
        <Information role={role} />
      </div>
    </div>
  )
}

export default App;
