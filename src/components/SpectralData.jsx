import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Container, Modal, Message, Form, TextArea, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import { thisTypeAnnotation } from '@babel/types';
import Searching from './Search'
import {Link} from 'react-router-dom';
import Graph from './graph';

  

export default class SpectralData extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: ''};
     
      }

      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
      

    render () {
        const { activeItem } = this.state
        return (
            <Segment>
                <Header>Spectral Data Lookup</Header>
                <TextArea Label= "Enter Spectral Data" placeholder="Enter as comma delimited list"/>
            <Button >Sumbit</Button>
             </Segment>
            
  
           
           

        ) 
    } 
} 