import React from 'react';
import { Component } from 'react'
import { Header, Button, Menu, Segment, Table, Image, Grid, Dropdown, Divider } from 'semantic-ui-react';
import Graph from './graph';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import _ from 'lodash'
import { timingSafeEqual } from 'crypto';
import { thisTypeAnnotation, thisExpression } from '@babel/types';
import Chart from "react-google-charts";
import Lamp from './Lamp'
import Searching from './Search'

//HAVE TO DO A FETCH CALL TO GET THINGS FROM THE DATA BASE
var mArray = [];
var metricResponder;
var raresult = 0;
var rereresult = 0;
var numbersArray = [];
var numberOption;
var zz;
var dataInfo;
var finalArray = [];
var h;
var b;
var finalArray2 = [];
var lastData;
var hold2 = [];
var spOption;
var ui;
var t;
//single letters are used as variables in for loops


const export_dropdown_options = [
    { value: 'pdf', text: 'pdf' },
    { value: 'eis', text: '.eis' },
    { value: 'txt', text: '.txt' },
    { value: 'xls', text: '.xls' }
] //end dropdown options

//------------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------------


export default class InstProf extends Component {

    constructor(props) {
        super(props);
        this.state = { pdf: false }
        this.state = { eis: '' }
        this.state = { txt: '' }
        this.state = { xls: '' }
        this.state = { S: [] }
        this.state = { specs: [] }
        this.state = { doingCalculations: false }
        this.state = { save: [] }
        this.state = { serverSide: 'temp' }
        this.state = { fastArray2: [] }
        this.state = { SpectralDataNumbersArrayFromJSON: [] }
        this.state = { mrID: '' }
        this.state = { mrlumens: '' }
        this.state = { mrwatts: '' }
        this.state = { mrvolts: '' }
        this.state = { mrcc_X: '' }
        this.state = { mrcc_Y: '' }
        this.state = { mrcc_Z: '' }
        this.state = { mrCIEXY: '' }
        this.state = { mrCCT: '' }
        this.state = { mrFSI: '' }
        this.state = { mrFSCI: '' }
        this.state = { mrGAI: '' }
        this.state = { mrCRI_R1: '' }
        this.state = { mrCRI_R2: '' }
        this.state = { mrCRI_R3: '' }
        this.state = { mrCRI_R4: '' }
        this.state = { mrCRI_R5: '' }
        this.state = { mrCRI_R6: '' }
        this.state = { mrCRI_R7: '' }
        this.state = { mrCRI_R8: '' }
        this.state = { mrCRI: '' }

    }
    componentDidMount() {
        this.getProductsSpectral();
    }

    getProductsSpectral = _ => {
        fetch('http://localhost:4000/SpectralData')
            .then(response => response.json())
            .then(_ = (response) => {
                this.setState({ S: response.data })
                this.setState({ serverSide: Object.values(response.data) })
                for (t = 0; t < this.state.serverSide.length; t++) {
                    spOption =
                    {
                        "id": this.state.serverSide[t].SpectraSearchID,
                        "spectralInfo": this.state.serverSide[t].SpectralData,
                    }
                    if (hold2.length < this.state.serverSide.length) {
                        hold2.push(spOption);
                    }
                }
                this.setState({ fastArray2: hold2 });
                //depending on which one they click, you get the id which is this.props.s00
                //if the id  is equal to the id in [].id then you dispaly that [].spectraldata
                for (ui = 0; ui < this.state.fastArray2.length; ui++) {
                    if (this.props.s00 === this.state.fastArray2[ui].id) {
                        this.setState({ specs: (this.state.serverSide[ui].SpectralData).split(',') })
                    }
                    else { console.log("") }
                }
                finalArray = []
                for (h = 0; h < this.state.specs.length; h++) {
                    b = this.state.specs[h]
                    finalArray.push(b);
                }

                lastData = finalArray.map(Number)
                this.setState({ save: lastData })
            })
            .catch(err => console.error(err))




        fetch('http://localhost:4000/metrics')
            .then(response => response.json())
            .then(_ = (response) => {

                this.setState({ mrID: Object.values(response.data[this.props.s00])[0] })
                this.setState({ mrlumens: Object.values(response.data[this.props.s00])[20] })
                this.setState({ mrwatts: Object.values(response.data[this.props.s00])[19] })
                this.setState({ mrvolts: Object.values(response.data[this.props.s00])[18] })
                this.setState({ mrcc_X: Object.values(response.data[this.props.s00])[1] })
                this.setState({ mrcc_Y: Object.values(response.data[this.props.s00])[2] })
                this.setState({ mrcc_Z: Object.values(response.data[this.props.s00])[3] })
                this.setState({ mrCIEXY: Object.values(response.data[this.props.s00])[4] })
                this.setState({ mrCCT: Object.values(response.data[this.props.s00])[5] })
                this.setState({ mrFSI: Object.values(response.data[this.props.s00])[6] })
                this.setState({ mrFSCI: Object.values(response.data[this.props.s00])[7] })
                this.setState({ mrGAI: Object.values(response.data[this.props.s00])[8] })
                this.setState({ mrCRI_R1: Object.values(response.data[this.props.s00])[9] })
                this.setState({ mrCRI_R2: Object.values(response.data[this.props.s00])[10] })
                this.setState({ mrCRI_R3: Object.values(response.data[this.props.s00])[11] })
                this.setState({ mrCRI_R4: Object.values(response.data[this.props.s00])[12] })
                this.setState({ mrCRI_R5: Object.values(response.data[this.props.s00])[13] })
                this.setState({ mrCRI_R6: Object.values(response.data[this.props.s00])[14] })
                this.setState({ mrCRI_R7: Object.values(response.data[this.props.s00])[15] })
                this.setState({ mrCRI_R8: Object.values(response.data[this.props.s00])[16] })
                this.setState({ mrCRI: Object.values(response.data[this.props.s00])[17] })


                //metricResponder = JSON.parse(Object.values(response.data[this.props.s00])[6])

            })


    }

    // componentWillMount = () =>{
    //     this.calculations();
    // }





    jsPdfGenerator = () => {
        const input = document.getElementsByClassName('target')[0];
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('l', 'pt', 'a4');
                pdf.addImage(imgData, 'JPEG', 20, 20, 710, 550);
                pdf.save('instrumentpage.pdf');
            })
        //document.getElementsByClassName("inst-dropdown")[0].innerHTML = save;
        return;
    }
    //<Graph className="theGraph"></Graph>


    render() {

        var lastData;
        return (
            <Segment className='target'>
                <Dropdown className="inst-dropdown" closeOnChange={true} text='Export as'>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.jsPdfGenerator} text='pdf' />
                    </Dropdown.Menu>
                </Dropdown>

                <Header as='h1'>{this.props.s1}</Header>
                <Header size='medium'>Catalog Number: {this.props.s0}</Header>

                <br />

                <Grid>
                    <Grid.Row>
                        <Grid.Column id="firstCol" width={9}>
                            <div className="inst-info">
                                <Header className="headerForTable" size='medium'>Basic Information</Header>
                                <Table fixed='true' size='small' celled>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell width='2'>Manufacturer:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s2}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Description:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s3}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>


                                <Header className="headerForTable" size='medium'>Creation Information</Header>
                                <Table fixed='true' size='small' celled>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell width='2'>Document Creator:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s4}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Laboratory:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s5}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Creation Date:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s6}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Report Number: </Table.Cell>
                                            <Table.Cell width='2'>{this.props.s7} </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>


                                <Header className="headerForTable" size='medium'>Calculations</Header>

                                <Button className="headerForTable" onClick={_ = () => { this.setState({ doingCalculations: true }); }}>Reveal Calculations</Button>
                                <Button className="headerForTable" onClick={_ = () => { this.setState({ doingCalculations: false }); document.getElementsByClassName("erroring")[0].innerHTML = '' }}>Hide Calculations</Button>
                                <br />
                                <br />
                                <span className="erroring"></span>

                                {this.state.doingCalculations ?



                                    <div><br />

                                        <Table fixed='true' size='huge' celled>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell width='2'>Lumens:</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrlumens} </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>Watts (w):</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrwatts} </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>Volts (v):</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrvolts} </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CIE (XYZ):</Table.Cell>
                                                    <Table.Cell width='2'>X: {this.state.mrcc_X},   Y: {this.state.mrcc_Y},   Z: {this.state.mrcc_Z}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CIE (x,y):</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrCIEXY}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CCT:</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrCCT}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>FSI (Full Spectrum Index):</Table.Cell>
                                                    <Table.Cell width='2'>FSI: {this.state.mrFSI},  FSCI: {this.state.mrFSCI} </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>GAI (Gamut Area Index):</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrGAI}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CRI:</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrCRI}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CRI R1-8:</Table.Cell>
                                                    <Table.Cell width='2'>R1: {this.state.mrCRI_R1}, R2: {this.state.mrCRI_R2}, R3: {this.state.mrCRI_R3}, R4: {this.state.mrCRI_R4}, R5: {this.state.mrCRI_R5}, R6: {this.state.mrCRI_R6}, R7: {this.state.mrCRI_R7}, R8:  {this.state.mrCRI_R8} </Table.Cell>
                                                </Table.Row>

                                            </Table.Body>
                                        </Table>
                                    </div> : ''}

                            </div>







                        </Grid.Column>
                        <Grid.Column id="rightCol" width={7}>
                            <Graph real={this.state.save} ssidForGraph={this.props.s00}></Graph>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>






            </Segment>

        ) // end return 
    } // end render
} //end InstProf class