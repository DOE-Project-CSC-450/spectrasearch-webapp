import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Label, Form, Checkbox, Divider } from 'semantic-ui-react';
import Searching from './components/Search.jsx'
import InstProf from './components/Instrument_Profile'
import TopMenu from './components/TopMenu'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Uploadpage from './components/uploadpage';
import { Component } from 'react';
import Lamp from './components/Lamp';
import Instrument_Graph_v1 from './components/Instrument_Graph_v1';

//s00={spect} s0={catNum} s1={sResult} s2={manu} s3={desc} s4={docCreate} s5={Lab} s6={createDa} s7={reportNum}


//need to import everything into app and then put all the elements inside of app


export default class App extends Component{
 /*  state = { message: "" }
  callbackFunction = (childData) => {
   
        this.setState({message: childData})
  } */
 render(){
  return(
    <div className="App">
      <header className="App-header">
   <Router>
        
        <TopMenu />
        <Switch>
        <Route path='/' exact component={Searching}/>
        <Route path='/upload' exact component={Uploadpage}/>
        <Route path='/lamps' exact component={Lamp}/>
        
        <Route path='/Graph_v1' exact component={Instrument_Graph_v1}/>

        {/* <Route path='/light' 
         render={() => <InstProf parentCallback = {this.callbackFunction} s1={this.state.message} isAuthed={true} />}
        /> */}
        
        
        </Switch>
    </Router>
       
      </header>
    </div>
  );
}
}
