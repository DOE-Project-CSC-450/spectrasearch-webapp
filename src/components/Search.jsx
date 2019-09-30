import React from 'react';
import { Component } from 'react'
import { Button, Segment, Divider, Search, Grid, Header } from 'semantic-ui-react';


/* const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
  title: 'princess',
  description: 'thing1',
  image: 'thing2',
  price: 123,
}))

 */

export default class Searching extends Component {

 /*  state = initialState
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
  } */

  render() {
    
    /* const { isLoading, value, results } = this.state */
    return (
        <Grid.Column width={20}>
          <Segment>
            <Header>Illuminant</Header>
            <Search
           
          />
        <Divider></Divider>
        <div>Frequent Instruments</div>
        <Button>LED Bulb</Button>
        <Button>Cool Light name</Button>
        <Button>Another light</Button>

        <Divider>
            <Header>Search via lighting type</Header>

        </Divider>
            
          </Segment>
        </Grid.Column>
      
    )
  }
}
  

 