import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import Searching from './components/Search'
import Form from './components/uploadpage'
//need to import everything into app and then put all the elements inside of app


function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <Searching />
        <Form />
        
        
        
      </header>
    </div>
  );
}

export default App;
