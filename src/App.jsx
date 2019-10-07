import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Label, Form, Checkbox, Divider } from 'semantic-ui-react';
import Login from './components/Login.jsx'
//need to import everything into app and then put all the elements inside of app


function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <Login />
 
      </header>
    </div>
  );
}

export default App;
