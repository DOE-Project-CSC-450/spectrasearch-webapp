import React from 'react';
import { Component } from 'react'
import { Button, Segment, Divider, Search, Grid, Header, Dropdown, Form } from 'semantic-ui-react';

  
  var currentDate = new Date().toLocaleTimeString() //maybe will use getDate() instead use setInterval() keep updating something


export default class Uploadpage extends Component {

  constructor(props){
    super(props);
    //you make your states here
    this.state={value: ""};


    this.handle_change = this.handle_change.bind(this);
    this.handle_submit = this.handle_submit.bind(this);
  }

 
//these are your functions
  handle_change(event){
    
    this.setState({value:event.target.value});
    console.log(event.target.value);
  }
  
 handle_submit(event){
   alert("You submitted the form "+ this.state.value);
   event.preventDefault();
 }
   
 
  render() {
    return (
      <Segment>
        <Header as = "h1">Upload Form</Header>
        <Form>
        <Form.Input label='Enter Manufacturer:' type='text' onChange={this.handle_change}/>
        <Form.Input label='Enter Manufacturer:' type='text' />
        <Form.Input label='Enter Manufacturer:' type='text' />
        <Form.Input label='Enter Manufacturer:' type='text' />
        <Form.Input label='Enter Manufacturer:' type='text' />
        <Form.Input label='Enter Manufacturer:' type='text' />
        </Form>
        <br/>
        <Button onClick={this.handle_submit}>Submit</Button>




      </Segment>
        // <Grid.Column width={15}>
        //   <Segment fluid>
        //       <h1>Upload Form</h1>
        //       <h2>Fill in the form below. * questions are required!</h2>
        //       <div id="form">
        //       <form>
        //           <label>
        //             <h3>Manufacturer:</h3>
        //             <input type = "text" name="name"></input>
        //           </label>
        //           <label>
        //           <hr></hr>
        //           <h3>Catalog Number:</h3>
        //           <input type = "number" ></input>
        //           </label>
        //           <label>
        //           <h3>Description:</h3>
        //           <textarea>Hello</textarea>
        //           </label>
                 
        //           <label>
        //           <h3>Document Creator:</h3>
        //           <input type = "text"></input>
        //           </label>
                  
        //           <label>
        //           <h3>Unique identifier:</h3>
        //           <input type ="text"></input>
        //           </label>
        //           <h3>Measurement equipment:</h3>
        //           <h3>Laboratory:</h3>
        //           <h3>Report #:</h3>
        //           <h3>Report data:</h3>
        //           <h3>Reflection geometry:</h3>
        //           <h3>Transmission geometry:</h3>
        //           <h3>bandwidth fwhm</h3>
        //           <h3>Bandwidth corrected (yes or no):</h3>
        //         </form>
        //         </div>
        //           <h1>{currentDate}</h1>
        // <Divider>

        // </Divider>
            
        //   </Segment>
        // </Grid.Column>
      
    )
  }
}
  

 