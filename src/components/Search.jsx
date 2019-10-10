import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';

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
    this.state = {search: '' }
  }


  handle_search = (e) => {
    e.preventDefault();
    this.setState({search: e.target.value});
    console.log(this.state.search);
    
  }

  state = initialState

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    window.open("https://drive.google.com/file/d/1fYtEBMducLvZZNotV5a1P98mmXb5goV1/view")
   
   
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


  render() {

    const { isLoading, value, results } = this.state







    return (
      <Segment.Group>
      <Menu inverted>
      {/* <Icon.Group size='large'><Icon name='lightbulb' /></Icon.Group> Spectra Search */}
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
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                      <List.Item as='li'><a href='#'>aaaaaa</a></List.Item>
                </List>
              </List.Item>
              </List>
            
            
          </Segment.Group>
          
        
    )
  }
}
  

 