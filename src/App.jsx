import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import Searching from './components/Search'
import loginPage from './components/Login'
//need to import everything into app and then put all the elements inside of app


function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <loginPage />
        <Searching />
      </header>
    </div>
  );
}

export default App;
