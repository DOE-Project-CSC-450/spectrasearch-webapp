import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Link } from 'react-router-dom'
import { Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import { BrowserRouter as Router, Route } from 'react-router-dom';
var hold=[];
var sourceOption;
var source;
var sResult = ''
var manu = ''
var desc = ''
var docCreate = ''
var Lab = ''
var createDa = ''
var reportNum = ''
var z;


const initialState = { serverName: 'temp', fastArray: [], isLoading: false, results: [], value: '' }
const resultRenderer = ({ title }) => <Label content={title} />

export default class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {serverName: 'temp'}
    this.state = {search: '' }
    this.state = {lighting: []}
    this.state = {ligtingInstClicked: false}
    this.state = {fastArray: []}
    
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
    this.setState({ value: result.title })
    console.log("yo look here" + JSON.stringify(result.title));
    console.log("and here" + JSON.stringify(result))
    sResult = (result.title);
    manu = (result.manufacturer)
    desc = (result.Description)
    docCreate = (result.DocumentCreator)
    Lab = (result.Labratory)
    createDa = (result.CreationDate)
    reportNum = (result.ReportNumber)
    this.setState({lightingInstClicked: true});
    console.log("everybody 123: ", this.state.serverName.length);
    //open an insrtument page based on props
    //pass instrument title manufactuerrer info and graphs and calculations
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
      "ReportNumber": this.state.serverName[z].ReportNumber 
      }
      hold.push(sourceOption);
      this.setState({fastArray: hold});
    }
    console.log("marry", source);    
    })
      .catch(err => console.error(err))
  }
  
creator = this.state.serverName



  
  render() {
    //this.componentDidMount();
    source = this.state.fastArray
    var { lighting, lightingInstClicked, serverName, isLoading, value, results } = this.state
    
    return (
      <Segment.Group>
      <Menu inverted>
     
              <Menu.Item
                name='Home'
                //active={activeItem === 'home'}
                //onClick={this.handleItemClick}
              />
              <Modal trigger={<Menu.Item
                name='Upload'
                //active={activeItem === 'messages'}
              />}>
                    <Modal.Header>Upload Page</Modal.Header>
                    <Modal.Content image scrolling>
                    <Modal.Description>
                    <Header>Complete Upload Form</Header>
                    <Uploadpage />
                    </Modal.Description>
                 
                    </Modal.Content>
                    <Modal.Actions>
        
                    </Modal.Actions>
                     </Modal>
        
                  }}  

              <Menu.Item
                name='Recent'
                //active={activeItem === 'friends'}
                //onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Modal trigger={<Menu.Item
                  name='login'
                  //active={activeItem === 'logout'}
                
                />}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Content image scrolling>
                    <Modal.Description>
                    <Header>Enter login Information</Header>
                    <Login />
                    </Modal.Description>
                 
                    </Modal.Content>
                    <Modal.Actions>
        
                    </Modal.Actions>
                     </Modal>
        
                  }}

              </Menu.Menu>

            </Menu>

  {(this.state.lightingInstClicked)? <InstProf s1={sResult} s2={manu} s3={desc} s4={docCreate} s5={Lab} s6={createDa} s7={reportNum}/>: 
            <span>

{/* ------------------------------------------------------------------------------------------------------------------------------- */}

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
  <List.Item as='li'>
  <Router>
  <div>
  <Link to="./uploadpage">Lighting page</Link>
  <Route
      path="./uploadpage"
      component={<Uploadpage/>} 
                />
  </div>
</Router>
</List.Item>            
                     
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                </List>
              </List.Item>
              </List>

              
             
              
            
              



  
                </span> } 

        
            
            
          </Segment.Group>
          
        
    )
  }
}
  

 