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

  //this page is not in use anymore and can be developed further if the need arises

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: ''};
     
      }

      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
      

    render () {
        const { activeItem } = this.state
        return (
            <Segment>
                <Header>Administrator Page</Header>
                <Menu>
        <Menu.Item
          name='Pending Instruments'
          active={activeItem === 'Pending Instruments'}
          content='Pending Instruments'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='Deleted Instruments'
          active={activeItem === 'Deleted Instruments'}
          content='Deleted Instruments'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='User Feedback'
          active={activeItem === 'User Feedback'}
          content='User Feedback'
          onClick={this.handleItemClick}
        />
      </Menu>


       {(this.state.activeItem == 'Pending Instruments') ? 
       
       <Grid>
       <Grid.Column width={4}>
       <Graph></Graph>
       </Grid.Column>
       <Grid.Column width={9}>
       <Container text id ="soscontainer">
    <Header as='h2'>Basic Information</Header>
    <p>
        Manufacturer:	GE Lighting
        Description:	52 Watts Incandescent Lamp, A19, Medium Screw (E26), 530/710 Lumens, 2800K Bulb Color Temp.
        Creation Information
        Document Creator:	
        Laboratory:	
        Creation Date:	0000-00-00 00:00:00
        Report Number:	
        Calculations
        Color Correlated Temperature:	2383
        CRI General (R1-R8):	98
        CRI Extended (R1-R15):	98
    </p>
    <Header as='h2'>Numerical keys</Header>
    <p>
        0.000172174,0.00019782,0.000172848,0.000163227,0.00019036,0.000207698,0.000207333,0.000205626,
        0.000219011,0.000243203,0.000250086,0.000244639,0.000252732,0.000262975,0.000276727,0.000290483,
        0.00028693,0.000297219,0.000312412,0.000315359,0.000337491,0.000344327,0.000337119,0.000363282,
        0.000389649,0.000407566,0.00041797,0.000434073,0.000442378,0.000444949,0.000456075,0.000482237,
        0.000503746,0.000508244,0.00051079,0.000523827,0.00054248,0.000554715,0.000583674,0.000604276,
        0.000610428,0.000646404,0.000674084,0.000699585,0.000741093,0.000767675,0.000785589,0.00080585,
        0.000841434,0.000885663,0.000933614,0.000981088,0.00102862,0.00107423,0.00111577,0.00114923,0.00119956
    
    </p>
  </Container>
       </Grid.Column>
       <Grid.Column width={3}>
        
         
       </Grid.Column>
       <Button content='Accept' primary />
       <Button content='Accept with changes' secondary />
      <Button content='Reject' secondary />
     </Grid>
      
      

       
       : console.log("hi")}
       <Divider/>

    </Segment>
  
           
           

        ) 
    } 
} 