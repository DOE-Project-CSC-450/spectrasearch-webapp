  
import React from "react";
import { Component } from "react";
import { AppRegistry, TextInput } from "react";
import {Button, Segment, Accordion, Input, Divider, Search, Grid, Header, Dropdown, Form, Message, TextArea, FormButton} from "semantic-ui-react";
import { thisTypeAnnotation } from "@babel/types";
import _ from 'lodash'



//var currentDate = new Date().toLocaleTimeString(); //maybe will use getDate() instead use setInterval() keep updating something

export default class Uploadpage extends Component {
  constructor(props) {
    super(props);

    //this.state = {SpectraSearchID: ''}
    this.state = {Name: ''}
    this.state = {manufacturer: ''}
    this.state = {catalogNumber: ''}
    this.state = {description: ''}
    this.state = {docCreat: ''}
    this.state = {uniqueIdent: ''}
    this.state = {measureEquip: ''}
    this.state = {labratory: ''}
    this.state = {reportNum: ''}
    this.state = {reportData: ''}
    this.state = {comments: ''}
    this.state = {application: ''}
    this.state = {type: ''}
    this.state = {technology: ''}
    this.state = {formSubmitted: false}
  }
    
  

  //for the submission button
  handle_submit = (event) =>{
    event.preventDefault();
    this.setState({formSubmitted: true})

       
        // On submit of the form, send a POST request with the data to the server.
        fetch('http://localhost:4000/lighting', { 
            method: 'POST',
            body: JSON.stringify({
              //SpectraSearchID: this.state.SpectraSearchID,
              Name: this.state.Name,
              manufacturer: this.state.manufacturer,
              catalogNumber: this.state.catalogNumber,
              description: this.state.description,
              docCreat: this.state.docCreat,
              uniqueIdent: this.state.uniqueIdent,
              measureEquip: this.state.measureEquip,
              labratory: this.state.labratory,
              reportNum: this.state.reportNum,
              reportData: this.state.reportData,
              comments: this.state.comments,
              application: this.state.application,
              type: this.state.type, 
              technology: this.state.technology,
            }),
            headers: {'Content-Type': 'application/json'}
          })
         .then(function(response) {
            //this is the line that is giving me the error
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
          }

  

  render() {

    const panels = [
      {
        key: 'details',
        title: 'Optional Details',
        content: {
          as: Form.Input,
          label: 'Maiden Name',
          placeholder: 'Maiden Name',
        },
      },
    ]
    return (
      <div>
      <br/>
        {this.state.formSubmitted? <div> <Form success>
            <Message
              success
              header='Upload Completed'
              content="Thanks! Your addition has been sent for review."
            />
        </Form> </div>
        :  
        
        <Segment id="middle-upload">
         
        <Form>
        <div>Note* Please be sure to Login or upload cannot be processed</div>
        <div>User uploading: {localStorage.getItem('thatUser')}</div>
        
        {this.props.user? <div>{this.props.user}</div>: null}
          <Header id="upload-header-id">Upload Form</Header>
          <div class="formElementDecor">
          {/* <Form.Input
            label="Spectra Search ID:"
            type="number"
            onChange={_=(event)=>{this.setState({SpectraSearchID: event.target.value})}}
          /> */}
        
          <Form.Input required
            label="Instrument name:"
            type="text"
            onChange={_=(event)=>{this.setState({Name: event.target.value})}}
          />
        
           <Form.Input required
            label="Application (ex.A-Type):"
            type="text"
            onChange={_=(event)=>{this.setState({application: event.target.value });}}
          />
            <Form.Input required
            label="Type:"
            type="text"
            onChange={_=(event)=>{this.setState({type: event.target.value });}}
          />
          <Form.Input required
            label="Techonology:"
            type="text"
            onChange={_=(event)=>{this.setState({technology: event.target.value});}}
          />

          <Form.Input required
            label="Spectral Data:"
            type="text"
            placeholder='Please enter numbers as a comma seperated list'
            onChange={_=(event)=>{this.setState({technology: event.target.value});}}
          />



      
   <Accordion as={Form.Field} panels={panels}/>
    
 

          {/* --------------------------------------------collapsable ----------------------------------------------------------------------------------------------------------------*/}
      
           <Form.Input
            label="Manufacturer:"
            type="text"
            onChange={_=(event)=>{this.setState({manufacturer: event.target.value});}}
          /> 
           <Form.Input
            label="Catalog number:"
            type="text"
            onChange={_=(event)=>{this.setState({catalogNumber: event.target.value });}}
          />
          <Form.Input
            label="Description">
            <TextArea
              placeholder="Describe instrument"
              maxLength="255"
              onChange={_=(event)=>{this.setState({description: event.target.value });}}
            />
          </Form.Input>
          <Form.Input
            label="Document creator"
            type="text"
            onChange={_=(event)=>{this.setState({docCreat: event.target.value });}}
          />
          <Form.Input
            label="Unique identifier:"
            type="text"
            onChange={_=(event)=>{this.setState({uniqueIdent: event.target.value });}}
          />
          <Form.Input
            label="Measurement equipment:"
            type="text"
            onChange={_=(event)=>{this.setState({measureEquip: event.target.value });}}
          />
          <Form.Input
            label="Laboratory:"
            type="text"
            onChange={_=(event)=>{this.setState({labratory: event.target.value });}}
          />
          <Form.Input
            label="Report number:"
            type="text"
            onChange={_=(event)=>{this.setState({reportNum: event.target.value });}}
          />
          <Form.Input
            label="Report date:"
            type="text"
            onChange={_=(event)=>{this.setState({reportData: event.target.value });}}
          />
           <Form.Input
            label="Comments:"
            type="text"
            onChange={_=(event)=>{this.setState({comments: event.target.value });}}

          />
         
          </div>
        </Form>

        <br />
        <Button onClick={this.handle_submit}>Upload</Button>
        </Segment>}
       
        </div>
    );
  }
}