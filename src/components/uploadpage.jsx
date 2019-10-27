import React from "react";
import { Component } from "react";
import { AppRegistry, View, TextInput } from "react";
import {
  Button,
  Segment,
  Divider,
  Search,
  Grid,
  Header,
  Dropdown,
  Form,
  TextArea,
  FormButton
} from "semantic-ui-react";

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
      DocumentCreationDate: "",
      comments: "",
      reportData: "",
      reflectionGeom: "",
      transGeom: "",
      bandfwhm: "",
      bandConn: "",
      //below is for the error messages and validation
      descriptionError: "",
      documentCreationError: ""
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
    //bind comments
    this.commentsHandle_change = this.commentsHandle_change.bind(this);
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
    if (this.state.description.length > 255) {
      this.setState.descriptionError =
        "Description cannot be more than 255 characters";
    } else {
      this.setState.descriptionError = "";
    }
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

  //for Comments:
  commentsHandle_change(event) {
    this.setState({ comments: event.target.value });
    console.log(this.state.comments);
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

  //validation function
  validate = () => {
    let allGood = true;
    let descriptionError = "";
    let documentCreationError = "";

    if (this.state.docCreat === "") {
      documentCreationError = "Document Creator is required";
    }
    else{
      documentCreationError = "";
    }
    if (this.state.description === "") {
      descriptionError = "Description is required";
    }
    else{
      descriptionError = "";
    }

    if (descriptionError) {
      this.setState({ descriptionError });
      allGood = false;
    }
    if (documentCreationError) {
      this.setState({ documentCreationError });
      allGood = false;
    }
    return allGood;
  };

  //for the submission button
  handle_submit(event) {
    const validForm = this.validate();
    console.log("VALID " + validForm);
    if (validForm == true) {
      alert("You submitted the form " + this.state.manufacturer);
      event.preventDefault();
    }
  }

  render() {
    return (
      <div id="form">
        <div id="h1Form">
          <Header as="h1">Upload Form</Header>
          <h2>
            Enter the information below. Questions marked with * are required
          </h2>
          <br />
        </div>

        <Form>
          <div class="formElementDecor">
            <Form.Input
              label="1) Manufacturer:"
              type="text"
              onChange={this.handle_change}
            />
            <br></br>
            <Form.Input
              label="2) Catalog Number:"
              type="number"
              onChange={this.cnHandle_change}
            />
            <br></br>
            <label>3) Description: *</label>
            <TextArea
              placeholder="Tell us more"
              // maxLength="255"
              onChange={this.descriptionHandle_change}
            />
            <div style={{ color: "red" }}>{this.state.descriptionError}</div>
            <br />
            <br />
            <br />
            <Form.Input
              label="4) Document Creator: *"
              type="text"
              onChange={this.docCreatHandle_change}
            />
            <div style={{ color: "red" }}>
              {this.state.documentCreationError}
            </div>
            <br></br>
            <Form.Input
              label="5) Unique Identifier:"
              type="text"
              onChange={this.uniqueIdentHandle_change}
            />
            <br></br>
            <Form.Input
              label="6) Measurement Equipment:"
              type="text"
              onChange={this.measureEquipHandle_change}
            />
            <br></br>
            <Form.Input
              label="7) Laboratory:"
              type="text"
              onChange={this.labratoryHandle_change}
            />
            <br></br>
            <Form.Input
              label="8) Report Number:"
              type="text"
              onChange={this.reportNumHandle_change}
            />
            <br></br>
            <Form.Input
              label="9) Comments:"
              type="text"
              onChange={this.commentsHandle_change}
            />
            <br></br>
            <Form.Input
              label="10) Report Data:"
              type="text"
              onChange={this.reportDataHandle_change}
            />
            <br></br>
            <Form.Input
              label="11) Reflection geometry:"
              type="text"
              onChange={this.reflectionGeomHandle_change}
            />
            <br></br>
            <Form.Input
              label="12) Transmission geometry:"
              type="text"
              onChange={this.transGeomHandle_change}
            />
            <br></br>
            <Form.Input
              label="13) bandwidth fwhm:"
              type="text"
              onChange={this.bandfwhmHandle_change}
            />
            <br></br>
            <label>14) Is the Bandwidth corrected:</label>
            <select class="ui dropdown" onChange={this.bandConnHandle_change}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br />
            <br />
            <Form.Input label="15) Upload Form:" type="file" />
          </div>
        </Form>

        <br />

        <br />

        <Button id="submitButton" size="huge" onClick={this.handle_submit}>
          Submit
        </Button>
      </div>
    );
  }
}
