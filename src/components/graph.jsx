//import all needed modules and components from React.
import React from 'react';
import { Component } from 'react';
import { Button, Modal, Message, TextArea, Header, Form, Checkbox, Divider, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash'
import Uploadpage from './uploadpage';
import { PureComponent } from 'react';
import SpectralData from './SpectralData';
import {
  LineChart, Line, Label, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid, Brush, Legend,
} from 'recharts';


var graphResponse;
var keyfeverArray = [];
var valuefeverArray = [];
var finalGraphValuesArray = [];


//so if the ssid is 1 then i want to fetch the spectral data, go to the first entry and collect the spectral data
export default class TestingGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SpectralDataNumbersArrayFromJSON: [] }
  }


  componentDidMount() {
    this.graphJSON();
  }
  componentWillUnmount() {
    finalGraphValuesArray = [];
    this.setState({ SpectralDataNumbersArrayFromJSON: [] })
  }


  graphJSON = () => {


    //only grab what we need like demand paging. graph the row with ssid 8 for example
    fetch('http://localhost:4000/SpectralData')
      .then(response => response.json())
      .then(_ = (response) => {
        //this.props.ssidForGraph
        graphResponse = JSON.parse(Object.values(response.data[this.props.ssidForGraph])[6])
        //graphNums = Object.values(response.data[this.props.ssidForGraph - 1])[6].split(',')
        //CHANGE THAT 2

        for (var keyObject in graphResponse) {
          var valueObject = graphResponse[keyObject];
          // console.log(keyObject + ", " + valueObject);
          keyfeverArray.push(keyObject);
          valuefeverArray.push(valueObject)
          finalGraphValuesArray.push({ wavelength: Number(keyObject), norm_power: Number(valueObject), })

        }
        this.setState({ SpectralDataNumbersArrayFromJSON: finalGraphValuesArray })
      })
  }


  render() {
    return (
      <div>
        <p>Spectral Distribution Grpah for Spectra Search id: {this.props.ssidForGraph}</p>
        <AreaChart
          width={470}
          height={400}
          data={this.state.SpectralDataNumbersArrayFromJSON}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          {console.log("this is what it looks like in the thing", typeof (finalGraphValuesArray))}
          <defs>
            <linearGradient id="norm_power_id" x1="0" y1="0" x2="0" y2="1">
              <stop offset=".006%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset=".008%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset=".400" stopColor="#0100ea" />
              <stop offset=".450" stopColor="#0375ea" />
              <stop offset=".475" stopColor="#03ebec" />
              <stop offset=".550" stopColor="#05ea07" />
              <stop offset=".580" stopColor="#ebea07" />
              <stop offset=".600" stopColor="#ec7501" />
              <stop offset=".700" stopColor="#ea0202" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="wavelength"
            ticks={[400, 450, 475, 550, 580, 600, 700]} />
          <YAxis />
          <Area label="monotone" dataKey="norm_power" stroke="#8884d8" fill="url(#colorUv)" />

          <Tooltip />
          {this.componentWillUnmount}
        </AreaChart>

      </div>
    );
  }
}




