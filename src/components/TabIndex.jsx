import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Searching from './Search';

export default class TabIndex extends Component {
    


    render () {
        return (
            <Segment>
                 <Menu inverted>
              <Menu.Item
                name='Home'
                //active={activeItem === 'home'}
                //onClick={this.handleItemClick}
                //when they click home (or anything else) make this.state.routings false
              />
              <Modal trigger={<Menu.Item
                name='Upload'
                //active={activeItem === 'messages'}
              />}>
                    <Modal.Header>Upload Page</Modal.Header>
                    <Modal.Content image scrolling>
                    <Modal.Description>
                    <Header>Complete Upload Form</Header>
                    <Uploadpage />
                    </Modal.Description>
                 
                    </Modal.Content>
                    <Modal.Actions>
        
                    </Modal.Actions>
                     </Modal>
        
                  }}  
              <Menu.Item
                name='Recent'
                //active={activeItem === 'friends'}
                //onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Modal trigger={<Menu.Item
                  name='login'
                  //active={activeItem === 'logout'}
                
                />}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Content image scrolling>
                    <Modal.Description>
                    <Header>Enter login Information</Header>
                    <Login />
                    </Modal.Description>
                 
                    </Modal.Content>
                    <Modal.Actions>
        
                    </Modal.Actions>
                     </Modal>
        
                  }}

              </Menu.Menu>

            </Menu>
            <Searching />
     {/*    {this.state.routingss ?  <Router><Route path="/" component ={InstProf} /></Router> :  <Searching />} */}
           



           </Segment>

        ) // end return
    } // end render
} //end InstProf class







/* 
{this.state.routings ?  <Router><Route path="/" component ={InstProf} /></Router> : null} */