import React from 'react';
import { Component } from 'react'
import { Header, Button, Menu, Segment, Image, Grid, Dropdown } from 'semantic-ui-react'; 
import Graph from './graph';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const export_dropdown_options = [
    { text: '.eis', image: {src:'/temp_icon.png'} },
    { text: '.txt', image: { src:'/temp_icon.png'} },
    { text: '.xls', image: { src:'/temp_icon.png'} },
] //end dropdown options


export default class InstProf extends Component {

    jsPdfGenerator = () => {
        var doc = new jsPDF('p','pt');
        var imgData = 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-0/p280x280/78349443_2349797681950533_449888186349387776_n.png?_nc_cat=100&_nc_ohc=IGHwjD24hbQAQkuydUfon9UF6HO7ZSZfD5DfKDZJE8tCpULWYWIUAT7bQ&_nc_ht=scontent-iad3-1.xx&oh=d65e09e98e6c905eabc75c7f35e28099&oe=5E816F42'
        doc.text(20,30,"Lighting Instrument Name: "+ this.props.s1);
        doc.text(20,50,"Catalog Number: "+ this.props.s0);
        doc.text(20,70, "Manufacturer: "+ this.props.s2);
        doc.text(20,90, "Description: "+ this.props.s3);
        doc.text(20,110, "Document Creator: "+ this.props.s4);
        doc.text(20,130, "Laboratory: "+ this.props.s5);
        doc.text(20,150, "Creation Date: "+ this.props.s6);
        doc.text(20,170, "Report Number: "+ this.props.s7);
      
        //oc.addImage(imgData,'JPEG',20, 170);
        doc.setFont('Garamond');
        doc.setFontType('normal');
        //doc.text(20,60,'this is default text with courier font')
        doc.save('instrumentPage.pdf');
       const input = document.getElementById('target');
       html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l','pt','a4');
            pdf.addImage(imgData,'JPEG',20,20,600,550);
            pdf.save('instrumentpage.pdf');
        })
    }



    render () {
        return (
            <Segment id='target'>
                 
                <Button onClick={this.jsPdfGenerator}></Button>
                <Header size='huge'>{this.props.s1}</Header>
                <Header size='medium'>Catalog Number: {this.props.s0}</Header>  
                <Menu compact id="export">
                    <Dropdown text='Export As' options={export_dropdown_options} simple item />
                </Menu>
                

                
       {/*  <Graph style={{
        position: 'absolute !important', left: '50% !important', top: '50% !important',
        transform: 'translate(-50%, -50%) !important'
      }}/> */}
      


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
                            <p> Laboratory: {this.props.s5} </p>
                            <p> Creation Date: {this.props.s6} </p>
                            <p> Report Number: {this.props.s7} </p>

                        </Grid.Column>
                    </Grid.Row>

                 

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Header size='medium'>Calculations</Header>
                            <p> Insert Calculuations here. Calculations. </p>
                        </Grid.Column>

                        {/* <Grid.Column>
                            <Header size='medium'>Spectral Information</Header>
                            <p> Spectral Quantity: transmittance</p>
                            <p> Reflection Geometry: di:8 </p>
                        </Grid.Column> */}
                    </Grid.Row>
                </Grid>
           </Segment>

        ) // end return 
    } // end render
} //end InstProf class