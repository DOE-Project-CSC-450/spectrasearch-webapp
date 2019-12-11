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

var z;
var sourceOption;
var hold;
var source;



export default class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {serverName: 'temp'}
      }

    
     /*  getProducts = _ =>{
        fetch('http://localhost:4000/lighting')
        .then(response => response.json())
        .then(_ = (response) =>{ 
          this.setState({lighting: response.data, serverName:Object.values(response.data)})
          for (z = 0; z < this.state.serverName.length; z++){
          sourceOption = 
          { 
          "title": this.state.serverName[z].Name,
          "manufacturer": this.state.serverName[z].Manufacturer,
          "Description": this.state.serverName[z].Description,
          "DocumentCreator": this.state.serverName[z].DocumentCreator,
          "Labratory": this.state.serverName[z].Laboratory,
          "CreationDate": this.state.serverName[z].ReportDate,
          "ReportNumber": this.state.serverName[z].ReportNumber, 
          "CatalogNumber": this.state.serverName[z].CatalogNumber,
          "SpectraSearchID": this.state.serverName[z].SpectraSearchID,
          "type" : this.state.serverName[z].Type,
          "technology": this.state.serverName[z].Technology
          }
           if (hold.length < this.state.serverName.length){
          hold.push(sourceOption);
           }
        }
    
        this.setState({fastArray: hold});
        console.log("marry", source);    
        })
          .catch(err => console.error(err))
      }
      




      handleResultSelect = (e, { result }) => {
        refreshed = result;
        this.setState({ value: result.title })
        historia.push((result.title));
        console.log("finger", historia)
        console.log("yo look here" + JSON.stringify(result.title));
        console.log("and here" + JSON.stringify(result))
        sResult = (result.title);
        manu = (result.manufacturer)
        desc = (result.Description)
        docCreate = (result.DocumentCreator)
        Lab = (result.Labratory)
        createDa = (result.CreationDate)
        reportNum = (result.ReportNumber)
        catNum = (result.CatalogNumber)
        spect = (result.SpectraSearchID)
        type = (result.type)
        tech = (result.technology)
       
        this.setState({lightingInstClicked: true});
        //this.TabClicked(sResult)
        console.log("everybody 123: ", this.state.serverName.length);   
     }
     */
      

    render () {
        
        return (
            <Segment>

<List id="scrollable-lamps">
    <List.Item>
      <List.Icon name='lightbulb' />
      <List.Content>
        <List.Header as='a'>GE Wattmiser 52 W frosted</List.Header>
        <List.Description>
        52 Watts Incandescent Lamp, A19, Medium Screw (E26), 530/710 Lumens, 2800K Bulb Color Temp.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='lightbulb' />
      <List.Content>
        <List.Header as='a'>Distant light</List.Header>
        <List.Description>
        80 Watts Incandescent Lamp, A19, Medium Screw (E26), 530/710 Lumens, 5000 Bulb Color Temp.
        </List.Description>
      </List.Content>
    </List.Item>
  
  </List>

            </Segment>
           
           

        ) 
    } 
} 