import React from 'react';
import { Component } from 'react'
import { Header, Menu, Segment, Image, Grid, Dropdown } from 'semantic-ui-react'; 

const export_dropdown_options = [
    { text: '.eis', image: {src:'/temp_icon.png'} },
    { text: '.txt', image: { src:'/temp_icon.png'} },
    { text: '.xls', image: { src:'/temp_icon.png'} },
] //end dropdown options


export default class InstProf extends Component {
    render () {
        return (
            <Segment>
                 
                
                <Header size='huge'>{this.props.s1}</Header>
                <Header size='medium'>Catalog Number: {this.props.s0}</Header>  
                <Menu compact id="export">
                    <Dropdown text='Export As' options={export_dropdown_options} simple item />
                </Menu>
                

                <Grid>
                    <Grid.Row columns={2}>

                        <Grid.Column width={8} className="info">
                            <Header size='medium'>Basic Information</Header>
                            <p> Manufacturer: {this.props.s2}</p>
                            <p> Description: {this.props.s3} </p>
                        </Grid.Column>

                        <Grid.Column width={8} className="info">
                            <Header size='medium'>Creation Information</Header>
                            <p> Document Creator: {this.props.s4}</p>
                            <p> Labratory: {this.props.s5} </p>
                            <p> Creation Date: {this.props.s6} </p>
                            <p> Report Number: {this.props.s7} </p>

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