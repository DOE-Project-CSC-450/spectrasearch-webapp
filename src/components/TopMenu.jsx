import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Message, Form, TextArea, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import { thisTypeAnnotation } from '@babel/types';
import Searching from './Search'
import {Link} from 'react-router-dom';


var secret;
const initialState = { activeItem: 'home', backToHome: Boolean}

export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: ''}
        this.state = {backToHome: false}
      }

      handleActiveItemClick = (e, { name }) => {
        this.setState({activeItem: name})
        console.log(this.state.activeItem)
       
      }

    render () {
        const { activeItem } = this.state
        return (
            <span>
            <Menu inverted>
            <Link to='/'>
              <Menu.Item
                name='Home'
                active={activeItem === 'homeing'}
                onClick={this.handleActiveItemClick}
              />
               </Link>

               <Link to='/upload'>
              <Menu.Item
                name='Upload'
                active={activeItem === 'uploading'}
                onClick={this.handleActiveItemClick}
              />
              </Link>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Modal trigger={<Menu.Item
                  name='login'
                 
                />}>
                    <Modal.Header>Login Page</Modal.Header>
                    <Modal.Content image scrolling>
                    <Modal.Description>
                    
                    <Login />
                    </Modal.Description>
                 
                    </Modal.Content>
                    <Modal.Actions>
        
                    </Modal.Actions>
                     </Modal>
                  }}
              </Menu.Menu>
             
            </Menu>
           </span>

        ) 
    } 
} 