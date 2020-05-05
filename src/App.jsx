import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Label, Form, Checkbox, Divider } from 'semantic-ui-react';
import Searching from './components/Search.jsx'
import InstProf from './components/Instrument_Profile'
import TopMenu from './components/TopMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Uploadpage from './components/uploadpage';
import { Component } from 'react';
import Lamp from './components/Lamp';
import Admin from './components/Admin';
import SpectralData from './components/SpectralData'



export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>

            <TopMenu />
            <Switch>
              <Route path='/' exact component={Searching} />
              <Route path='/spectralData' exact component={SpectralData} />
              <Route path='/upload' exact component={Uploadpage} />
              <Route path='/Administrating' exact component={Admin} />
              <Route path='/lamps' exact component={Lamp} />


            </Switch>
          </Router>

        </header>
      </div>
    );
  }
}
