
import React from "react";
import { Component } from "react";
import { AppRegistry, TextInput } from "react";
import { Button, Popup, Segment, Accordion, Icon, Input, Divider, Search, Grid, Header, Dropdown, Form, Message, TextArea, FormButton } from "semantic-ui-react";
import { thisTypeAnnotation } from "@babel/types";
import _ from 'lodash'
import { now } from "d3";

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
  }
]

const technologyOptions = [
  {
    key: 'Incandescent',
    text: 'Incandescent',
    value: 'Incandescent'
  },
  {
    key: 'idk1',
    text: 'idk1',
    value: 'idk1'
  },
  {
    key: 'idk2',
    text: 'idk2',
    value: 'idk2'
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
    //this.state = {lightingReponseCount: ''}
    this.state = { sidArrayPlace: '' }
  }

  //need to make a fetch call to get the spectra search id of the last thing entered. length of things -1
  //then put that in a variable
  //so assign spectra search id the current id + 1 each time

  handle_id_assignment = (event) => {
    fetch('http://localhost:4000/lighting')
      .then(response => response.json())
      .then(_ = (response) => {
        this.setState({ lightingResponseCount: Object.values(response)[0].length - 1, sidArrayPlace: Object.values(response.data[0])[0] })
        repsonseLength = Object.values(response)[0].length - 1;
        var ssid = Object.values(response.data[repsonseLength])[0]
        newSpectraSearchId = ssid;
        newSpectraSearchId = newSpectraSearchId + 1
        this.setState({ SpectraSearchID: newSpectraSearchId });
      })
  }

  //for the submission button
  handle_submit = (event) => {
    event.preventDefault();
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
  }


  render() {
    const { activeIndex } = this.state
    return (
      <div>
        <br />
        {this.state.formSubmitted ? <div> <Form success>
          <Message
            success
            header='Upload Completed'
            content="Thanks! Your addition has been sent for review."
          />
          <Button onClick={window.location.reload()}>Upload additional instruments</Button>
        </Form> </div>
          :
          <Segment id="middle-upload">
            <Form>
              <div>Note* Please be sure to Login or upload cannot be processed</div>
              <div>User uploading: {localStorage.getItem('thatUser')}</div>
              {this.props.user ? <div>{this.props.user}</div> : null}
              <Header id="upload-header-id">Upload Form</Header>
              <div class="formElementDecor">
                {/* <Form.Input
                label="Spectra Search ID:"
                type="number"
                onChange={_=(event)=>{this.setState({SpectraSearchID: event.target.value})}}
              />  */}
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

                {/* 
<Form.Input required label="Type:" onChange={_ = (event) => { this.setState({ type: event.target.value }); }}>
<Form.Group grouped>
      <Form.Field
        label='Lamp'
        control='input'
        type='radio'
        name='typeRadios'
      />
      <Form.Field
        label='Luminaire'
        control='input'
        type='radio'
        name='typeRadios'
      />
      <Form.Field
        label='Retrofit Kit'
        control='input'
        type='radio'
        name='typeRadios'
      />
    </Form.Group>
    </Form.Input> */}


                <Form.Input
                  required
                  label="Spectral Data"
                >
                  <TextArea
                    placeholder="Please enter numbers as a comma delimited list (350-800)"
                    maxLength="2000"
                  //onChange={_ = (event) => { this.setState({ technology: event.target.value }); }}
                  />
                  <span><Popup content='Data values for Spectral Distribution Graph.   i.e. 0.000172174,  0.00019782,  0.000172848,  ...' trigger={<Button icon='info' size="mini" circular={true} compact={true} color="blue" />} /></span>
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