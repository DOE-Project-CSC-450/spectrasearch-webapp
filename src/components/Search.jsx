import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { thisTypeAnnotation } from '@babel/types';
import TopMenu from './TopMenu'
import { Link } from 'react-router-dom';
import App from '../App'
var w = 0;
var hold = [];
var holding = '';
var sourceOption;
var source;
var sResult = ''
var manu = ''
var desc = ''
var docCreate = ''
var Lab = ''
var createDa = ''
var reportNum = ''
var catNum = ''
var spect = '';
var z;
var historia = [];
var refreshed;
var type = '';
var tech = '';


var place;
var holdurl;
//window.onpopstate = checkState;



/* function checkState(e){
  // page reload 
 holdurl = e.replace(/%/g, ' ')
 holdurl = holdurl.replace(/20/g, '') 
 holdurl = holdurl.replace("http://localhost:3000/tab-", " ")
 showContent(holdurl);
  
}

function showContent(id){
  
}  */


const initialState = { activeItem: 'home', serverName: 'temp', fastArray: [], isLoading: false, results: [], value: '', there: false }
const resultRenderer = ({ title }) => <Label content={title} />

export default class Searching extends Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: '' }
    this.state = { serverName: 'temp' }
    this.state = { search: '' }
    this.state = { lighting: [] }
    this.state = { ligtingInstClicked: false }
    this.state = { fastArray: [] }
    this.state = { there: false }


  }

  handle_search = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }
  state = initialState

  componentDidMount() {
    this.getProducts();

  }

  componentWillUnmount = () => {
    this.setState({ lightingInstClicked: false })
  }


  handleResultSelect = (e, { result }) => {
    refreshed = result;
    this.setState({ value: result.title })
    historia.push((result.title));
    sResult = (result.title);
    manu = (result.manufacturer)
    desc = (result.Description)
    docCreate = (result.DocumentCreator)
    Lab = (result.Labratory)
    createDa = (result.CreationDate)
    reportNum = (result.ReportNumber)
    catNum = (result.CatalogNumber)
    spect = (result.SpectraSearchID)
    type = (result.type)
    tech = (result.technology)

    this.setState({ lightingInstClicked: true });
    //this.TabClicked(sResult)
  }




  handleSearchChange = (e, { value }) => {
    document.getElementById("pic").classList.add("playing");
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  handleItemClick = () => {
    window.location.href = '';
    alert("you clicked login");
  }

  handleUploadClick = () => {
    window.open("uploadpage.jsx")
  }
  holding = '/instrument' + spect;
  getProducts = _ => {
    fetch('/lighting')
      .then(response => response.json())
      .then(_ = (response) => {
        this.setState({ lighting: response.data, serverName: Object.values(response.data) })
        for (z = 0; z < this.state.serverName.length; z++) {
          sourceOption =
          {
            "title": this.state.serverName[z].Name,
            "manufacturer": this.state.serverName[z].Manufacturer,
            "Description": this.state.serverName[z].Description,
            "DocumentCreator": this.state.serverName[z].DocumentCreator,
            "Labratory": this.state.serverName[z].Laboratory,
            "CreationDate": this.state.serverName[z].ReportDate,
            "ReportNumber": this.state.serverName[z].ReportNumber,
            "CatalogNumber": this.state.serverName[z].CatalogNumber,
            "SpectraSearchID": this.state.serverName[z].SpectraSearchID,
            "type": this.state.serverName[z].Type,
            "technology": this.state.serverName[z].Technology
          }
          if (hold.length < this.state.serverName.length) {
            hold.push(sourceOption);
          }
        }

        this.setState({ fastArray: hold });
      })
      .catch(err => console.error(err))
  }

  creator = this.state.serverName






  render() {

    holding = '/instrument' + spect;
    //this.componentDidMount();
    const { activeItem } = this.state

    source = this.state.fastArray
    var { lighting, lightingInstClicked, serverName, isLoading, value, results } = this.state

    return (
      <Segment.Group>

        {(this.state.lightingInstClicked) ? <InstProf s00={spect} s0={catNum} s1={sResult} s2={manu} s3={desc} s4={docCreate} s5={Lab} s6={createDa} s7={reportNum} /> :
          <span>

            {/* ------------------------------------------------------------------------------------------------------------------------------- */}

            <Header as='h2' id="header-id"><Icon.Group size='large'><Icon id="pic" name='lightbulb' /></Icon.Group> SpectraSearch
            </Header>


            <Header>Search for Lighting Instruments</Header>
            <Search
              fluid
              input={{ fluid: true }}
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
              {...this.props}
              id="grand-search"
              size='small'
              placeholder='Enter lighting search here'
            />
            <br />
            <br />

            <Header as='h4'>About SpectraSearch Open Source Site</Header>
            <div id="aboutUs">
              <p id="about1">SpectraSearch is a spectral database with accompanying lighting metric functions to help lighting professionals evaluate lighting products
              against industry and project requirements.</p>
              <p id="about2">SpectraSearch was developed by student
              developers at American University in partnership with the Department of Energy's Building Technology Office's Lighting program.</p>

            </div>

          </span>}


      </Segment.Group>


    )
  }
}


