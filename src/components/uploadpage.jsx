
import React from "react";
import { Component } from "react";
import { AppRegistry, TextInput } from "react";
import { Button, Popup, Segment, Accordion, Icon, Input, Divider, Search, Grid, Header, Dropdown, Form, Message, TextArea, FormButton } from "semantic-ui-react";
import { thisTypeAnnotation } from "@babel/types";
import _ from 'lodash'
import { now, timeThursdays } from "d3";

const applicationTypeOptions = [
  {
    key: 'A-Type',
    text: 'A-Type',
    value: 'A-Type'
  },
  {
    key: 'Decorative',
    text: 'Decorative',
    value: 'Decorative'
  },
  {
    key: 'Directional',
    text: 'Directional',
    value: 'Directional'
  },
  {
    key: 'Small Directional',
    text: 'Small Directional',
    value: 'Small Directional'
  },
  {
    key: 'Downlighting',
    text: 'Downlighting',
    value: 'Downlighting'
  },
  {
    key: 'Linear Fixture',
    text: 'Linear Fixture',
    value: 'Linear Fixture'
  },
  {
    key: 'Low/High Bay',
    text: 'Low/High Bay',
    value: 'Low/High Bay'
  },
  {
    key: 'Indoor other',
    text: 'Indoor other',
    value: 'Indoor other'
  },
  {
    key: 'Parking Lot',
    text: 'Parking Lot',
    value: 'Parking Lot'
  },
  {
    key: 'Parking Garage',
    text: 'Parking Garage',
    value: 'Parking Garage'
  },
  {
    key: 'Street/Roadway',
    text: 'Street/Roadway',
    value: 'Street/Roadway'
  },
  {
    key: 'Building Exterior',
    text: 'Building Exterior',
    value: 'Building Exterior'
  },
  {
    key: 'Outdoor Other',
    text: 'Outdoor Other',
    value: 'Outdoor Other'
  },
  {
    key: 'Connected',
    text: 'Connected',
    value: 'Connected'
  },

  {
    key: 'Spiral',
    text: 'Spiral',
    value: 'Sprial'
  },
  {
    key: 'Medical',
    text: 'Medical',
    value: 'Medical'
  }
]

const typeOptions = [
  {
    key: 'Lamp',
    text: 'Lamp',
    value: 'Lamp'
  },
  {
    key: 'Luminaire',
    text: 'Luminaire',
    value: 'Luminaire'
  },
  {
    key: 'Retrofit Kit',
    text: 'Retrofit Kit',
    value: 'Retrofit Kit'
  },
  {
    key: 'No Distinction',
    text: 'No Distinction',
    value: 'No Distinction'
  },
  {
    key: 'Other',
    text: 'Other',
    value: 'Other'
  }

]

const technologyOptions = [
  {
    key: 'Incandescent',
    text: 'Incandescent',
    value: 'Incandescent'
  },
  {
    key: 'LED',
    text: 'LED',
    value: 'LED'
  },
  {
    key: 'Fluorescent',
    text: 'Fluorescent',
    value: 'Fluorescent'
  },
  {
    key: 'Other',
    text: 'Other',
    value: 'Other'
  }
]
var repsonseLength = 0;
var newSpectraSearchId = 0;
export default class Uploadpage extends Component {
  state = { activeIndex: 0 }
  handleAccordianClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }
  constructor(props) {
    super(props);
    this.state = { SpectraSearchID: '' }
    this.state = { Name: '' }
    this.state = { manufacturer: '' }
    this.state = { catalogNumber: '' }
    this.state = { description: '' }
    this.state = { docCreat: '' }
    this.state = { uniqueIdent: '' }
    this.state = { measureEquip: '' }
    this.state = { labratory: '' }
    this.state = { reportNum: '' }
    this.state = { reportData: '' }
    this.state = { comments: '' }
    this.state = { application: '' }
    this.state = { type: '' }
    this.state = { technology: '' }
    this.state = { formSubmitted: false }
    this.state = { sidArrayPlace: '' }
    this.state = { spectralDataState: [] }
    this.state = { errorOnSubmit: false }
    this.state = { hidden: false }
  }

  //need to make a fetch call to get the spectra search id of the last thing entered. length of things -1
  //then put that in a variable
  //so assign spectra search id the current id + 1 each time

  componentWillMount = () => {
    if (localStorage.getItem('thatUser') === undefined || localStorage.getItem('thatUser') === '' || this.props.user === '' || this.props.user === undefined) {
      //document.getElementById("middle-upload").classList.add("hidden");
      this.setState({ hidden: true });
      if (!localStorage.getItem('thatUser')){
        console.log("it is still undefined")
        
      } 
      else{
      console.log("it is not undefined")
      this.setState({ hidden: false });
      console.log("supposed to be good")
   
      }
    }
    else {
      this.setState({ hidden: false });
      console.log("supposed to be good")
    }
  }


  handle_id_assignment = (event) => {
    fetch('http://localhost:4000/lighting')
      .then(response => response.json())
      .then(_ = (response) => {
        if (Object.values(response)[0].length < 1) {
          this.setState({ SpectraSearchID: 1 })
        }
        else {
          this.setState({ lightingResponseCount: Object.values(response)[0].length - 1, sidArrayPlace: Object.values(response.data[0])[0] })
          repsonseLength = Object.values(response)[0].length - 1;
          var ssid = Object.values(response.data[repsonseLength])[0]
          newSpectraSearchId = ssid;
          newSpectraSearchId = newSpectraSearchId + 1
          this.setState({ SpectraSearchID: newSpectraSearchId });
        }
      })

  }

  //for the submission button
  handle_submit = (event) => {
    event.preventDefault();
    //if the required things arent there dont submit
    //need name sprectral data application type technology
    if (this.state.Name === undefined || this.state.spectralDataState === undefined || this.state.application === undefined || this.state.type === undefined || this.state.technology === undefined) {
      console.log("dont send it through");
      this.setState({ errorOnSubmit: true });
      window.scrollTo(0, 0);
      return -1;
    }
    console.log("under here", this.state.Name, this.state.type, this.state.application, this.state.technology);
    this.setState({ formSubmitted: true })
    // On submit of the form, send a POST request with the data to the server.
    fetch('http://localhost:4000/lighting', {
      method: 'POST',
      body: JSON.stringify({
        SpectraSearchID: this.state.SpectraSearchID,
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
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        //this is the line that is giving me the error
        return response.json()
      }).then(function (body) {
        console.log(body);
      });
    //--------------------------------
    fetch('http://localhost:4000/SpectralData', {
      method: 'POST',
      body: JSON.stringify({
        SpectraSearchID: this.state.SpectraSearchID,
        specData: this.state.spectralDataState
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        //this is the line that is giving me the error
        return response.json()
      }).then(function (body) {
        console.log(body);
      });
  }


  render() {
    const { activeIndex } = this.state
    return (
      <div>
        <br />
        {this.state.hidden ? <Form id="noFormError" error>
          <Message
            error
            header='Login to Upload'
            content='Users must have an account and be logged in to upload to Spectra Search Database.'
          />

        </Form> : console.log("it should show")}
        {this.state.errorOnSubmit ? <Form error>

          <Message
            error
            header='Missing required input'
            content='Sorry, you can only submit with all required info. Please check inputs and try again.'
          />

        </Form> : console.log(".")}
        {this.state.formSubmitted ? <div> <Form success>
          <Message
            success
            header='Upload Completed'
            content="Thanks! Your addition has been sent for review."
          />
          {/* <Button onClick={window.location.reload()}>Upload additional instruments</Button> */}
        </Form> </div>
          :
          <Segment id="middle-upload">
            <Form id="uploadFormHidden">
              <div>Note* Please be sure to Login or upload cannot be processed</div>
              <div>User uploading: {localStorage.getItem('thatUser')}</div>
              {this.props.user ? <div>{this.props.user}</div> : null}
              <Header id="upload-header-id">Upload Form</Header>
              <div class="formElementDecor">

                <Form.Input required
                  label="Instrument name:"
                  type="text"
                  onChange={_ = (event) => { this.setState({ Name: event.target.value }) }}
                  onClick={this.handle_id_assignment}
                />
                <Form.Input
                  label="Manufacturer:"
                  type="text"
                  onChange={_ = (event) => { this.setState({ manufacturer: event.target.value }); }}
                />
                <Form.Input
                  label="Description">
                  <TextArea
                    placeholder="Describe instrument"
                    maxLength="255"
                    onChange={_ = (event) => { this.setState({ description: event.target.value }); }}
                  />
                </Form.Input>

                <Form.Input required
                  label="Application (ex.A-Type):"
                >
                  <Dropdown
                    placeholder='Select application'
                    fluid
                    selection
                    options={applicationTypeOptions}
                    onChange={_ = (event, value) => { this.setState({ application: event.target.textContent }); }}
                  />
                </Form.Input>

                <Form.Input required
                  label="Type:"
                >
                  <Dropdown
                    placeholder='Select type'
                    fluid
                    selection
                    options={typeOptions}
                    onChange={_ = (event, value) => { this.setState({ type: event.target.textContent }); }}
                  />
                </Form.Input>

                <Form.Input required
                  label="Technology:"
                >
                  <Dropdown
                    placeholder='Select technology'
                    fluid
                    selection
                    options={technologyOptions}
                    onChange={_ = (event, value) => { this.setState({ technology: event.target.textContent }); }}
                  />
                </Form.Input>

                <Form.Input
                  required
                  label="Spectral Data"
                >
                  <TextArea
                    placeholder="[Please enter numbers as a comma delimited list (350-800) inside brackets]"
                    maxLength="10000000"
                    onChange={_ = (event) => { this.setState({ spectralDataState: event.target.value }); }}
                  />
                  <span><Popup content='Data values for Spectral Distribution Graph. {“wavelength1”:value1,”wavelength2”:value2,”wavelength3”:value3…}
Example: {“350”: 0.04,”351”,0.008,”352”:0.00}' trigger={<Button icon='info' size="mini" circular={true} compact={true} color="blue" />} /></span>
                </Form.Input>

                {/* --------------------------------------------------------------collapsable--------------------------------------------------------------- */}
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleAccordianClick}
                  >
                    <Icon name='dropdown' />
              Add additional information
              </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <Form.Input
                      label="Catalog number:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ catalogNumber: event.target.value }); }}
                    />
                    <Form.Input
                      label="Document creator:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ docCreat: event.target.value }); }}
                    />
                    <Form.Input
                      label="Unique identifier:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ uniqueIdent: event.target.value }); }}
                    />
                    <Form.Input
                      label="Measurement equipment:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ measureEquip: event.target.value }); }}
                    />
                    <Form.Input
                      label="Laboratory:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ labratory: event.target.value }); }}
                    />
                    <Form.Input
                      label="Report number:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ reportNum: event.target.value }); }}
                    />
                    <Form.Input
                      label="Report date:"
                      placeholder="2020-04-23 18:04:08"
                      type="text"
                      onChange={_ = (event) => { this.setState({ reportData: event.target.value }); }}
                    />
                    <Form.Input
                      label="Comments:"
                      type="text"
                      onChange={_ = (event) => { this.setState({ comments: event.target.value }); }}
                    />
                  </Accordion.Content>
                </Accordion>
              </div>
            </Form>
            <br />
            <Button onClick={this.handle_submit}>Upload</Button>
            <br />
          </Segment>}
      </div>
    );
  }
}