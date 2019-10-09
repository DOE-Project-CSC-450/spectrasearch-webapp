import React from 'react';
import { Component } from 'react'
import { Button, Segment, Divider, Search, Grid, Header, Dropdown } from 'semantic-ui-react';



export default class Form extends Component {

 
  render() {
    return (
        <Grid.Column width={15}>
          <Segment fluid>
              <h1>Upload Form</h1>
              <h2>Fill in the form below. * questions are required!</h2>
              <Form>
                  var currentDate = getDate();
                  <h3>Manufacturer:</h3>
                  <h3>Catalog Number:</h3>
                  <h3>Description:</h3>
                  <h3>Document Creator:</h3>
                  <h3>Unique identifier:</h3>
                  <h3>Measurement equipment:</h3>
                  <h3>Laboratory:</h3>
                  <h3>Report #:</h3>
                  <h3>Report data:</h3>
                  <h3>Reflection geometry:</h3>
                  <h3>Transmission geometry:</h3>
                  <h4>bandwidth fwhm</h4>
                  <h4>Bandwidth corrected (yes or no):</h4>




              </Form>
        <Divider>

        </Divider>
            
          </Segment>
        </Grid.Column>
      
    )
  }
}
  

 