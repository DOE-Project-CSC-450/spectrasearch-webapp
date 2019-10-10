import React from 'react';
import { Component } from 'react'
import { Header, Segment, Image, Grid } from 'semantic-ui-react'; 

export default class InstProf extends Component {
    render () {
        return (
            <Segment>
                <Header size='huge'>LED Bulb</Header>
                <Header size='medium'>Catalog #: 902398378</Header>  
                <Grid>
                    <Grid.Column width={8}>
                        <Header size='medium'>Basic Information</Header>
                        <p> Manufacturer: Lighting Co.</p>
                        <p> Description: This is a great lightbulb to use everyday. </p>

                        <Header size='medium'>Creation Information</Header>
                        <p> Document Creator: John Smith</p>
                        <p> Labratory: Lighting Lab LLC </p>
                        <p> Creation Date: Sept 2006 </p>
                        <p> Report Number: 0283 </p> 
                    </Grid.Column>

                    <Grid.Column width={8}>
                        <Header size='medium'>Spectral Graph</Header>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' centered/>

                        <Header size='medium'>Spectral Information</Header>
                        <p> Spectral Quantity: transmittance</p>
                        <p> Reflection Geometry: di:8 </p>
                    </Grid.Column>
                </Grid>
           </Segment>

        ) // end return
    } // end render
} //end InstProf class