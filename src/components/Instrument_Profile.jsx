import React from 'react';
import { Component } from 'react'
import { Header, Segment, Image, Grid } from 'semantic-ui-react'; 


/*
let BasicInfo = {
    manufacturer: "Lighting Co",
    description: "This is a basic description about a hot lighting instrument"  
}

<BasicInfo
    manufacturer={BasicInfo.manufacturer}
    description={BasicInfo.description}/>

    */ 


export default class InstProf extends Component {
    render () {
        return (
            <Segment>
                <div id="Heading Info">
                    <Header size='huge'>LED Bulb</Header>
                    <Header size='medium'>Catalog #: 902398378</Header>  
                </div>

                <div id="Basic Info">
                    <Header size='medium'>Basic Information</Header>
                    <div> Manufacturer: Lighting Co.</div>
                    <div> Description: This is a great lightbulb to use everyday. </div>
                </div>

                <div id="Creation Info">
                    <Header size='medium'>Creation Information</Header>
                    <div> Document Creator: John Smith</div>
                    <div> Labratory: Lighting Lab LLC </div>
                    <div> Creation Date: Sept 2006 </div>
                    <div> Report Number: 0283 </div> 
                </div>

                <div id="Image">
                    <Header size='medium'>Spectral Graph</Header>
                    export default ImageExampleImage
                </div>

                <div id="Spectral Info">
                    <Header size='medium'>Spectral Information</Header>
                    <div> Spectral Quantity: transmittance</div>
                    <div> Reflection Geometry: di:8 </div>
                </div>

            

            <Grid.Column width={3}>
            <Grid.Row>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            </Grid.Row>
            </Grid.Column>
            

            </Segment>
        )
               
        
    }
} 




