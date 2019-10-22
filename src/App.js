import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Information from './components/Information';

import './App.css';

const App = () => {
  return( 
    <div className="root-box">
      <Header />
      <div className="main">
        <Sidebar />
        <Information />
      </div>
    </div>
  )
}

export default App;
