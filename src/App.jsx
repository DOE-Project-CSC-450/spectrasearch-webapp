import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Label, Form, Checkbox, Divider } from 'semantic-ui-react';
import TabIndex from './components/TabIndex';
import InstProf from './components/Instrument_Profile'






//need to import everything into app and then put all the elements inside of app


function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      
        <TabIndex />
        
        
 
      </header>
    </div>
  );
}

export default App;
