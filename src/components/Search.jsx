import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { thisTypeAnnotation } from '@babel/types';
import TopMenu from './TopMenu'
import {Link} from 'react-router-dom';
import App from '../App'
var w=0;
var hold=[];
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
var spect ='';
var z;
var historia =[];
var refreshed;
var type='';
var tech ='';


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
    this.state = {activeItem: ''}
    this.state = {serverName: 'temp'}
    this.state = {search: '' }
    this.state = {lighting: []}
    this.state = {ligtingInstClicked: false}
    this.state = {fastArray: []}
    this.state = {there: false}
    
   
  }
 
  handle_search = (e) => {
    
    e.preventDefault();
    this.setState({search: e.target.value});
    console.log(this.state.search);
  }
  state = initialState

  componentDidMount(){
    this.getProducts();
  
  }

 
 
  handleResultSelect = (e, { result }) => {
    refreshed = result;
    this.setState({ value: result.title })
    historia.push((result.title));
    console.log("finger", historia)
    console.log("yo look here" + JSON.stringify(result.title));
    console.log("and here" + JSON.stringify(result))
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
   
    this.setState({lightingInstClicked: true});
    //this.TabClicked(sResult)
    console.log("everybody 123: ", this.state.serverName.length);   
 }

/* TabClicked=(e)=>{
  
  var contentId = e.target;
  showContent(contentId);
    window.history.pushState({
    tabForId: contentId
    }, null, "tab-"+contentId);

    
    window.history.replaceState({
      tabForId: sResult
  }, null, "tab-"+sResult);
 
    }   */
   

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
    }, 2000)
  }

  handleItemClick = () =>{
    window.location.href = '';
    alert("you clicked login");
  }

  handleUploadClick = () =>{
    window.open("uploadpage.jsx")
  }
holding = '/instrument' + spect;
  getProducts = _ =>{
    fetch('http://localhost:4000/lighting')
    .then(response => response.json())
    .then(_ = (response) =>{ 
      this.setState({lighting: response.data, serverName:Object.values(response.data)})
      for (z = 0; z < this.state.serverName.length; z++){
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
      "type" : this.state.serverName[z].Type,
      "technology": this.state.serverName[z].Technology
      }
       if (hold.length < this.state.serverName.length){
      hold.push(sourceOption);
       }
    }

    this.setState({fastArray: hold});
    console.log("marry", source);    
    })
      .catch(err => console.error(err))
  }
  
creator = this.state.serverName


sendData = () => {
  alert("hel")
  this.props.parentCallback("Hey Popsie, How’s it going?");
}
  


  render() {
    
    holding = '/instrument' + spect;
    //this.componentDidMount();
    const { activeItem } = this.state
    
    source = this.state.fastArray
    var { lighting, lightingInstClicked, serverName, isLoading, value, results } = this.state
    
    return (
      <Segment.Group>
       
    {/* {(this.state.lightingInstClicked) ? this.props.history.push('/foo'): console.log("hi")}   */}

  {(this.state.lightingInstClicked)? <InstProf s00={spect} s0={catNum} s1={sResult} s2={manu} s3={desc} s4={docCreate} s5={Lab} s6={createDa} s7={reportNum}/> : 
            <span>

{/* ------------------------------------------------------------------------------------------------------------------------------- */}

            <Header as='h2' id="header-id"><Icon.Group size='large'><Icon id="pic" name='lightbulb'/></Icon.Group> Spectra Search
            </Header>

              <Segment.Group>
                <Segment><Header>Search for Lighting Instruments</Header>
                  <Search 
                  fluid
                  input={{ fluid: true }} 
                  loading={isLoading}  
                  onResultSelect={this.handleResultSelect} 
                  onSearchChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true,})}  
                  results={results}
                  value={value}
                  {...this.props} 
                  id="grand-search" 
                  size='small' 
                  placeholder='Enter lighting search here' 
                  //onSearchChange = {this.handle_search}
                  />
                </Segment>
            
            <br/>
            
                <span><Header as='h4'>Frequent Instruments:</Header>
                <Label as='a'>
                  {historia[0]}
                  <Icon name='delete' />
                </Label>
                <Label as='a'>
                  {historia[1]}
                  <Icon name='delete' />
                </Label>
                <Label as='a'>
                  {historia[2]}
                  <Icon name='delete' />
                </Label>
                <Label as='a'>
                  {historia[3]}
                  <Icon name='delete' />
                </Label>
                </span>
                <br/>
                <br/>
                <br/>
               
              </Segment.Group>
              OR

              <Header as='h4'>Search via Lighting Type or Application:</Header>
              <List horizontal>
              <List.Item>
              

                <List.Description>
                  Lamp <Link to='/lamps'><a>All lamps</a></Link>
                </List.Description>
              </List.Item>


              <List.Item>
               
                <List.Description>
                  Luminaire <a>All luminaire</a>.
                </List.Description>
                
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Retrofit Kit <a>All retrofit kit</a>.
                </List.Description>
               
              </List.Item>

              <Divider/>
              <List.Item>
               
                <List.Description>
                  A-Type <a>All A-type</a>.
                </List.Description>
                
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Decorative <a>All decorative</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
                
                <List.Description>
                  Directional <a>All directional</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Small Directional <a>All small directional</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Downlighting <a>All downlighting</a>.
                </List.Description>
              
              </List.Item>


              <List.Item>
               
                <List.Description>
                  Linear Fixture <a>All linear fixture</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Low/High Bay <a>All low/high bay</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Indoor other <a>All indoor other</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Parking Lot <a>All parking lot</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
                
                <List.Description>
                  Parking Garage <a>All parking garage</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Street/Roadway <a>All street/roadway</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Building Exterior <a>All building exterior</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
               
                <List.Description>
                  Outdoor Other <a>All outdoor other</a>.
                </List.Description>
               
              </List.Item>

              <List.Item>
              
                <List.Description>
                  Connected <a>All connected</a>.
                </List.Description>
               
              </List.Item>

            
              </List>  
                </span> } 

        
          </Segment.Group>
          
        
    )
  }
}
  

 