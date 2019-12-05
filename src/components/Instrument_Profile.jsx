import React from 'react';
import { Component } from 'react'
import { Header, Segment, Image, Grid, Dropdown } from 'semantic-ui-react'; 
import jsPDF from 'jspdf';


const export_dropdown_options = [
    { value: 'eis', text: '.eis', image: { src:'/temp_icon.png'} },
    { value: 'txt', text: '.txt', image: { src:'/temp_icon.png'} },
    { value: 'xls', text: '.xls', image: { src:'/temp_icon.png'} },
    { value: 'pdf', text: '.pdf', image: { src:'/temp_icon.png'} },
] //end dropdown options


export default class InstProf extends Component {

    constructor(props){
        super(props) 
        this.state = {
        }      
    }

    jsPdfGenerator = () => {
        var doc = new jsPDF('p','pt');
        var imgData = 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-0/p280x280/78349443_2349797681950533_449888186349387776_n.png?_nc_cat=100&_nc_ohc=IGHwjD24hbQAQkuydUfon9UF6HO7ZSZfD5DfKDZJE8tCpULWYWIUAT7bQ&_nc_ht=scontent-iad3-1.xx&oh=d65e09e98e6c905eabc75c7f35e28099&oe=5E816F42'
        doc.text(20,30,'LED Bulb');
        doc.text(20,50,'Catalog #: 902398378');
        doc.text(20,70,'Manufacturer: Lighting Co.');
        doc.text(20,90,'Description: This is a great lightbulb to use everyday.');
        doc.text(20,110,'Spectral Information');
        doc.text(20,130,'Spectral Quantity: transmittance');
        doc.text(20,150,'Reflection Geometry: di:8');
        //oc.addImage(imgData,'JPEG',20, 170);
        doc.setFont('Garamond');
        doc.setFontType('normal');
        //doc.text(20,60,'this is default text with courier font')
        doc.save('instrumentPage.pdf');
    }
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
                            <button onClick = {this.jsPdfGenerator}> Export as PDF</button>

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