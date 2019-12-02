import React from 'react';
import { Component } from 'react'
import { Header, Segment, Image, Grid, Dropdown } from 'semantic-ui-react'; 

import SpectaGraph from 'spectragraph'

import rd3 from 'react-d3-library';
import node from 'd3file';
const RD3Component = rd3.Component;

//const rd3 = require('react-d3-library');
//const RD3Component = rd3.Component;


//import './App.css'
//import BarChart from './BarChart'

const export_dropdown_options = [
    { text: '.eis', image: {src:'/'} },
    { text: '.txt', image: { src:'/'} },
    { text: '.xls', image: { src:'/'} },
] //end dropdown options




class my_Specta_Graph extends React.Component {

    constructor(props) {
      super(props);
      this.state = {d3: ''}
    }
  
    componentDidMount() {
      this.setState({d3: node});
    }
} 

export default class InstProf extends Component {
    render () {
        return (
            <Segment>
                <Header size='huge'>LED Bulb</Header>
                <Header size='medium'>Catalog #: 902398378</Header>  
                <Grid>
                    <Grid.Row columns={2}>

                        <Grid.Column>
                            <Header size='medium'>Basic Information</Header>
                            <p> Manufacturer: Lighting Co.</p>
                            <p> Description: This is a great lightbulb to use everyday. </p>
                        </Grid.Column>

                        <Grid.Column>
                            <Dropdown
                                placeholder= "Export As"
                                options={export_dropdown_options}
                            />

                            <Header size='medium'>Creation Information</Header>
                            <p> Document Creator: John Smith</p>
                            <p> Labratory: Lighting Lab LLC </p>
                            <p> Creation Date: Sept 2006 </p>
                            <p> Report Number: 0283 </p>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Header size='medium'>Spectral Graph</Header>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' centered/>
                        </Grid.Column>

                        <Grid.Column>
                            <Header size='medium'>Human Spectral Graph</Header>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' centered/>
                        </Grid.Column>

                        <Grid.Column>
                            <Header size='medium'>Graph 3</Header>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' centered/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header size='medium'>Calculations</Header>
                            <p> Insert Calculuations here. Calculations. </p>
                            < SpectaGraph />
                        </Grid.Column>

                        <Grid.Column>
                            <Header size='medium'>Spectral Information</Header>
                            <p> Spectral Quantity: transmittance</p>
                            <p> Reflection Geometry: di:8 </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
           </Segment>

        ) // end return 
    } // end render
} //end InstProf class