import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Popup, Container, Modal, Message, Form, TextArea, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn, FormGroup } from 'semantic-ui-react';
import { uptime, type } from 'os';
import { thisTypeAnnotation } from '@babel/types';
import Searching from './Search'
import { Link } from 'react-router-dom';
import Graph from './graph';
import {
  LineChart, Line, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid, Brush, Legend,
} from 'recharts';


var actualGraphQuick;
var graphDataObject;
var finalGraphValuesArrayQuick = [];

export default class SpectralData extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: '' };
    this.state = { QuickSpectralNumbers: '' }
    this.state = { quickFlag: false }
    this.state = { SpectralDataNumbersArray: [] }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleQucikSubmitRefresh = () => {
    window.location.reload();
  }

  handleTheirTextInput = (event) => {
    this.setState({ QuickSpectralNumbers: event.target.value + '' });
  }

  handleQucikSubmit = () => {
    this.setState({ quickFlag: true });
    console.log(this.state.QuickSpectralNumbers);
    var temp1 = this.state.QuickSpectralNumbers;
    temp1 = temp1.replace(/\\/g, '')
    //get rid of the slashes
    var obj = JSON.parse(temp1);
    graphDataObject = Object(obj);
    for (var keyObj in graphDataObject) {
      var valueObj = graphDataObject[keyObj];
      finalGraphValuesArrayQuick.push({ wavelength: Number(keyObj), norm_power: Number(valueObj), })
    }
    this.setState({ SpectralDataNumbersArray: finalGraphValuesArrayQuick })
  }


  render() {
    const { activeItem } = this.state
    return (
      <Form id='quickLookupPage'>
        <Header>Spectral Data: Quick SPD Graph Calculator</Header>
        <Popup content='Data values for Spectral Distribution Graph. Enter {“wavelength1”:value1,”wavelength2”:value2,”wavelength3”:value3…}
Example: {“350”: 0.04,”351”,0.008,”352”:0.00}' trigger={<Button icon='info' size="mini" floated='left' circular={true} compact={true} color="blue" />} />
        <TextArea id="grabTextArea"
          rows={2}
          maxLength="10000000"
          style={{ minHeight: 220 }}
          label="Enter Spectral Data"
          placeholder="Enter as comma delimited list inside brackets"
          onChange={this.handleTheirTextInput}
        />
        <br /><br />
        <Button onClick={this.handleQucikSubmit} floated='left' >Submit</Button>
        <Button onClick={this.handleQucikSubmitRefresh} floated='left' >Clear</Button>
        <br /><br />
        <Divider />
        {this.state.quickFlag ?
          <AreaChart
            margin={{ top: 10, right: 30, left: 0, bottom: 0, }}
            width={500}
            height={400}
            data={this.state.SpectralDataNumbersArray}
          >
            <defs>
              <linearGradient id="norm_power_id" x1="0" y1="0" x2="0" y2="1">
                <stop offset=".006%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset=".008%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset=".350" stopColor="#0000FF" />
                <stop offset=".380" stopColor="#6495ED" />
                <stop offset=".450" stopColor="#00FFFF" />
                <stop offset=".495" stopColor="#7FFF00" />
                <stop offset=".570" stopColor="#ADFF2F" />
                <stop offset=".590" stopColor="#FFFF00" />
                <stop offset=".620" stopColor="#FFA500" />
                <stop offset=".750" stopColor="#FF4500" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="wavelength"
              ticks={[350, 380, 450, 495, 570, 590, 620, 750]}
              label={{ value: 'Wavelength (nm)', dy: 15, offset: 10, position: 'insideMiddle' }}
            />
            <YAxis label={{ value: 'Normalized Power', angle: -90, offset: 10, position: 'insideMiddle' }} />
            <Area label="monotone" dataKey="norm_power" stroke="#8884d8" fill="url(#colorUv)" />
            <Tooltip />
          </AreaChart>
          : console.log("nothing")}
      </Form>
    )
  }
} 