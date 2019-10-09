import React from "react";
import { Component } from "react";
import { AppRegistry, View, TextInput } from "react";
import {Button, Segment, Divider, Search, Grid, Header, Dropdown, Form, TextArea, FormButton} from "semantic-ui-react";

var currentDate = new Date().toLocaleTimeString(); //maybe will use getDate() instead use setInterval() keep updating something

export default class Uploadpage extends Component {
  constructor(props) {
    super(props);
    //you make your states here
    this.state = {
      manufacturer: "",
      catalogNumber: "",
      description: "",
      docCreat: "",
      uniqueIdent: "",
      measureEquip: "",
      labratory: "",
      reportNum: "",
      reportData: "",
      reflectionGeom: "",
      transGeom: "",
      bandfwhm: "",
      bandConn: ""
    };

    //bind manufactuer
    this.handle_change = this.handle_change.bind(this);
    //bind catalog number
    this.cnHandle_change = this.cnHandle_change.bind(this);
    //bind decription
    this.descriptionHandle_change = this.descriptionHandle_change.bind(this);
    //bind document creator
    this.docCreatHandle_change = this.docCreatHandle_change.bind(this);
    //bind unique identifier
    this.uniqueIdentHandle_change = this.uniqueIdentHandle_change.bind(this);
    //bind measurement equipment
    this.measureEquipHandle_change = this.measureEquipHandle_change.bind(this);
    //bind labratory
    this.labratoryHandle_change = this.labratoryHandle_change.bind(this);
    //bind report num
    this.reportNumHandle_change = this.reportNumHandle_change.bind(this);
    //bind report data
    this.reportDataHandle_change = this.reportDataHandle_change.bind(this);
    //bind reflection geometry
    this.reflectionGeomHandle_change = this.reflectionGeomHandle_change.bind(
      this
    );
    //bind transmission geometry
    this.transGeomHandle_change = this.transGeomHandle_change.bind(this);
    //bind bandwidth fwhm
    this.bandfwhmHandle_change = this.bandfwhmHandle_change.bind(this);
    //bind bandwidth connected
    this.bandConnHandle_change = this.bandConnHandle_change.bind(this);

    //for the submission value
    this.handle_submit = this.handle_submit.bind(this);
  }

  //these are your functions

  //for manufacturer
  handle_change(event) {
    this.setState({ manufacturer: event.target.value });
  }
  //for catalog number
  cnHandle_change(event) {
    this.setState({ catalogNumber: event.target.value });
  }

  //for description
  descriptionHandle_change(event) {
    this.setState({ description: event.target.value });
    console.log(this.state.description);
  }

  //for document creator
  docCreatHandle_change(event) {
    this.setState({ docCreat: event.target.value });
    console.log(this.state.docCreat);
  }

  //for unique identifier
  uniqueIdentHandle_change(event) {
    this.setState({ uniqueIdent: event.target.value });
    console.log(this.state.uniqueIdent);
  }

  //for Measurement equipment:
  measureEquipHandle_change(event) {
    this.setState({ measureEquip: event.target.value });
    console.log(this.state.measureEquip);
  }

  //for Laboratory:
  labratoryHandle_change(event) {
    this.setState({ labratory: event.target.value });
    console.log(this.state.labratory);
  }

  //for Report #
  reportNumHandle_change(event) {
    this.setState({ reportNum: event.target.value });
    console.log(this.state.reportNum);
  }

  //for report data
  reportDataHandle_change(event) {
    this.setState({ reportData: event.target.value });
    console.log(this.state.reportData);
  }

  //for reflection geometry
  reflectionGeomHandle_change(event) {
    this.setState({ reflectionGeom: event.target.value });
    console.log(this.state.reflectionGeom);
  }

  //for transmission geometry
  transGeomHandle_change(event) {
    this.setState({ transGeom: event.target.value });
    console.log(this.state.transGeom);
  }

  //for bandwidth fwhm
  bandfwhmHandle_change(event) {
    this.setState({ bandfwhm: event.target.value });
    console.log(this.state.bandfwhm);
  }

  //for bandwith corrected
  bandConnHandle_change(event) {
    this.setState({ bandConn: event.target.value });
    console.log(this.state.bandConn);
  }

  //for the submission button
  handle_submit(event) {
    alert("You submitted the form " + this.state.manufacturer);
    event.preventDefault();
  }

  render() {
    return (
      <div id="form">
        <div id="h1Form">
          <Header as="h1">Upload Form</Header>
        </div>

        <Form>
          <div class="formElementDecor">
          <Form.Input
            label="Manufacturer:"
            type="text"
            onChange={this.handle_change}
          />
          <br></br>
          <Form.Input
            label="Catalog Number:"
            type="number"
            onChange={this.cnHandle_change}
          />
          {/* <Form.Input label='Description:' type='text' maxLength ="255" rows="4" onChange={this.descriptionHandle_change} /> */}
          <label>Description</label>
          <TextArea
            label="Description"
            placeholder="Tell us more"
            maxLength="255"
            onChange={this.descriptionHandle_change}
          />
          <Form.Input
            label="Document Creator"
            type="text"
            onChange={this.docCreatHandle_change}
          />
          <Form.Input
            label="Unique identifier:"
            type="text"
            onChange={this.uniqueIdentHandle_change}
          />
          <Form.Input
            label="Measurement equipment::"
            type="text"
            onChange={this.measureEquipHandle_change}
          />
          <Form.Input
            label="Laboratory:"
            type="text"
            onChange={this.labratoryHandle_change}
          />
          <Form.Input
            label="Report #:"
            type="text"
            onChange={this.reportNumHandle_change}
          />
          <Form.Input
            label="Report data:"
            type="text"
            onChange={this.reportDataHandle_change}
          />
          <Form.Input
            label="Reflection geometry:"
            type="text"
            onChange={this.reflectionGeomHandle_change}
          />
          <Form.Input
            label="Transmission geometry:"
            type="text"
            onChange={this.transGeomHandle_change}
          />
          <Form.Input
            label="bandwidth fwhm:"
            type="text"
            onChange={this.bandfwhmHandle_change}
          />
          <label>Is the Bandwidth corrected</label>
          <select class="ui dropdown" onChange={this.bandConnHandle_change}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </div>
        </Form>

        <br />
        <div id="uploadForm">
          <Button>Upload</Button>
        </div>

        <Button onClick={this.handle_submit}>Submit</Button>
      </div>
    );
  }
}
