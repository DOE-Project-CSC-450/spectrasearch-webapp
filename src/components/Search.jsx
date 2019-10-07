import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Button, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';


const source = [
  {
    "title": "Beahan, Ziemann and Lemke",
    "description": "Total zero administration system engine",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/wikiziner/128.jpg",
    "price": "$64.74"
  },
  {
    "title": "Pacocha, Harris and Ryan",
    "description": "Function-based even-keeled middleware",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thedjpetersen/128.jpg",
    "price": "$29.73"
  },
  {
    "title": "Quigley, O'Reilly and Jacobson",
    "description": "Profound uniform implementation",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/looneydoodle/128.jpg",
    "price": "$12.75"
  },
  {
    "title": "Wuckert, Pacocha and Hessel",
    "description": "Cross-group 24/7 superstructure",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/abelcabans/128.jpg",
    "price": "$17.83"
  },
  {
    "title": "Predovic, Crooks and Gibson",
    "description": "Phased reciprocal toolset",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/amayvs/128.jpg",
    "price": "$35.90"
  }
]

const initialState = { isLoading: false, results: [], value: '' }
const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default class Searching extends Component {
 
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

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













  render() {
    return (
      <Segment.Group>
  <Menu inverted>
  {/* <Icon.Group size='large'><Icon name='lightbulb' /></Icon.Group> Spectra Search */}
          <Menu.Item
          
            name='Home'
            //active={activeItem === 'home'}
            //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Upload'
            //active={activeItem === 'messages'}
            //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Recent'
            //active={activeItem === 'friends'}
            //onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='login'
              //active={activeItem === 'logout'}
              //onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>


          <Segment id="header-id"><Header as='h2'><Icon.Group size='large'><Icon name='lightbulb' /></Icon.Group> Spectra Search
          </Header></Segment>


          <Segment.Group>
            <Segment><Header>Search for Lighting Instruments</Header>
              <Search fluid id="grand-search"/>
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
      //   <Grid>
      //     <Grid.Column width={3}>
      //       <Image src='./spd graph image.png'/> 
      // </Grid.Column>
      // <Grid.Column width={1}>
      // <h2>Spectra Search</h2> 
      // </Grid.Column>

        
      // <Grid.Column width={10}>
            
      //   <Header>Search for Lighting Instruments</Header>
      //         <Search/>
      //     <Divider></Divider>
      //     <div>Frequent Instruments</div>
      //     <Button>LED Bulb</Button>
      //     <Button>Cool Light name</Button>
      //     <Button>Another light</Button>
      //     <Divider/>
      //         <Header>Search via lighting type</Header>
      //         <Dropdown
      //         placeholder="TYPE 1"
      //         selection
      //         options={type1_options}
      //         />
            
          
      //       </Grid.Column>
      //     </Grid>
        
    )
  }
}
  

 