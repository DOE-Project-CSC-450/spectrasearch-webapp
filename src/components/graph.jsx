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


  graphJSON = () => {

    console.log("Do you know it", this.props.ssidForGraph);
    //only grab what we need like demand paging. graph the row with ssid 8 for example
    fetch('http://localhost:4000/SpectralData')
      .then(response => response.json())
      .then(_ = (response) => {
        //this.props.ssidForGraph
        graphResponse = JSON.parse(Object.values(response.data[3])[6])
        //graphNums = Object.values(response.data[this.props.ssidForGraph - 1])[6].split(',')
        //CHANGE THAT 2

        for (var keyObject in graphResponse) {
          var valueObject = graphResponse[keyObject];
          // console.log(keyObject + ", " + valueObject);
          finalGraphValuesArray.push({ wavelength: Number(keyObject), norm_power: Number(valueObject) })

        }




        console.log(finalGraphValuesArray);
      })
  }



  render() {
    return (
      <div>
        <p>Spectral Distribution Grpah for Spectra Search id: {this.props.ssidForGraph}</p>

        <AreaChart
          width={500}
          height={400}
          data={finalGraphValuesArray}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >

          {/* code bound in <defs> does not sync with graph :( */}
          <defs>
            <linearGradient id="norm_power_id" x1="0" y1="0" x2="0" y2="1">
              <stop offset=".0.002821200001%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="0.002821200005%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0.0011821200001" stopColor="#0000FF" />
              <stop offset="0.0012821200001" stopColor="#6495ED" />
              <stop offset=".0013821200001" stopColor="#00FFFF" />
              <stop offset=".0017821200001" stopColor="#7FFF00" />
              <stop offset=".0021821200001" stopColor="#ADFF2F" />
              <stop offset="0023821200001" stopColor="#FFFF00" />
              <stop offset="0025821200001" stopColor="#FFA500" />
              <stop offset="0026821200001" stopColor="#FF4500" />

            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="wavelength"
            ticks={[350, 380, 450, 495, 570, 590, 620, 750]} />
          <YAxis />
          <Area label="monotone" dataKey="norm_power" stroke="#8884d8" fill="url(#colorUv)" />

          <Tooltip />
        </AreaChart>

      </div>


    );
  }
}