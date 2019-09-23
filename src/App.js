import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Click me here example</Button>
        <h1>this will be our boiler plate code!</h1>
        <p>frontend team</p>
        
      </header>
    </div>
  );
}

export default App;
