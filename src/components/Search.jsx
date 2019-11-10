import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const source = [
  {
    "title": "Downlight Solid State Retrofit kits",
    "description": "Model Number: RF408ICAT27W",
    "image": "/downlight.PNG",
    "price": "Maxlite Inc"
  },
  {
    "title": "Rounded Solid State Lighting",
    "description": "Model Number: EF407ICAT27T",
    "image": "/special 2.PNG",
    "price": "Lighting Incoorporated"
  },
  {
    "title": "Circular Enhaced Bulb",
    "description": "Model Number: RFE07ICAT27S",
    "image": "/special 2.PNG",
    "price": "Fixed Inc."
  },
  {
    "title": "Outdoor Parking Bulb",
    "description": "Model Number: TYE07IRAT27Y",
    "image": "/special 2.PNG",
    "price": "Lendly"
  },
  {
    "title": "Preding Bulb",
    "description": "Model Number: UYE07IRAT27Y",
    "image": "/special 2.PNG",
    "price": "Exato"
  }
]
const initialState = { isLoading: false, results: [], value: '' }
const resultRenderer = ({ title }) => <Label content={title} />

export default class Searching extends Component {
  constructor(props) {
    super(props);
   
    this.state = {routings: false}
    this.state = {search: '' }
    this.state = {lighting: []}
  }
  handle_search = (e) => {
    e.preventDefault();
    this.setState({search: e.target.value});
    console.log(this.state.search);
    
  }
  state = initialState
  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    this.setState({routings: true});
 }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  handleItemClick = () =>{
    window.location.href = '';
    alert("you clicked login");
  }

  handleUploadClick = () =>{
    window.open("uploadpage.jsx")
  }


  componentDidMount(){
    this.getProducts();
  }

  getProducts = _ =>{
    fetch('http://localhost:4000/lighting')
    .then(response => response.json())
    .then(response => this.setState({lighting: response.data}))
      .catch(err => console.error(err))
  }

  renderLighting = ({Value}) => <div key={Value}>{Value}</div>
  render() {
    const { lighting, isLoading, value, results } = this.state
    return (
      <Segment.Group>



    
            <Segment id="header-id"><Header as='h2'><Icon.Group size='large'><Icon name='lightbulb' /></Icon.Group> Spectra Search
            </Header></Segment>

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
                {this.state.routings ?  <Router><Route path="/" component ={InstProf} />{lighting.map(this.renderLighting)} </Router> : null} 
                  
                </Segment>
            
                <Segment><Header as='h4'>Frequent Instruments:</Header>
                <Label as='a'>
                  Lighting instrumet B
                  <Icon name='delete' />
                </Label>
                <Label as='a'>
                  Lighting instrumet magna
                  <Icon name='delete' />
                </Label>
                <Label as='a'>
                  Lighting instrumet wanter
                  <Icon name='delete' />
                </Label>
                <Label as='a'>
                  Lighting instrumet year3
                  <Icon name='delete' />
                </Label>
                </Segment>
                <Divider/>OR
              </Segment.Group>


              <Header as='h4'>Search via Lighting Type:</Header>
              <List horizontal>
              <List.Item>
                <List.Header as='a'>Type 1</List.Header>
                <List.Description>
                  omni light <a>omni page</a>.
                </List.Description>


                <List as='ul'>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                </List>


              </List.Item>
              <List.Item>
                <List.Header as='a'>Type 2</List.Header>
                <List.Description>
                  bright <a>bright page</a>.
                </List.Description>

                <List as='ul'>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                </List>


              </List.Item>


              <List.Item>
                <List.Header as='a'>Type 3</List.Header>
                <List.Description>
                  multidirectional <a>multi page</a>.
                </List.Description>
                <List as='ul'>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                </List>


              </List.Item>
              <List.Item>
                <List.Header as='a'>Type 4</List.Header>
                <List.Description>
                  lumincescent <a>lumincescent page</a>.
                </List.Description>
                <List as='ul'>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                </List>
              </List.Item>

              <List.Item>
                <List.Header as='a'>Type 5</List.Header>
                <List.Description>
                  rounded <a>rounded page</a>.
                </List.Description>
                <List as='ul'>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
            </List>            
        </List.Item>
        </List>
          

                 

               {/* <div>{lighting.map(this.renderLighting)}</div>  */}
        
            
            
          </Segment.Group>
          
        
    )
  }
}
  
