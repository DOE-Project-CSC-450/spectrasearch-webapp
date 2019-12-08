//import all needed modules and components from React.
import React from 'react';
import { Component } from 'react';
import { Button, Header, Form, Checkbox, Divider, Segment, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

/* the login/signup page. **/

//Options for gender selection (Form.select))

const initialState = {username: '', password: ''}
//actual Login class export. (imported in app.jsx)
export default class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = {username: ''}
        this.state = {password: ''}
      }
     
    handleLoginChangeUsername = (event) =>{
        event.preventDefault();
        this.setState({username: event.target.value})       
      }

    handleLoginChangePassword = (event) =>{
        event.preventDefault();
        this.setState({password: event.target.value})       
      }

      close = () =>{
        window.location.reload() 
      }
    loginButton = (value) =>{
       console.log("username", this.state.username)
       console.log("password", this.state.password)
    
      }


    render(){
        return(
            <Grid textAlign = 'center' style = {{height: '130vh'}} verticalAlign = 'middle'>
                <Grid.Column style = {{maxWidth: 800}}>
                    <Header as = 'h1' color = 'black' textAlign = 'center'>SpectraSearch</Header>    
                        <Segment stacked>
                            <Form size = 'tiny'>
                                <Header as = 'h2' color = 'teal' textAlign = 'left'>Log In</Header> 
                                <Form.Field>
                                    <Header as ='h5' textAlign = 'left'>Username / E-mail</Header> 
                                    <input label="username" onChange={this.handleLoginChangeUsername} fluid placeholder='Username / E-mail' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as ='h5' textAlign = 'left'>Password</Header>
                                    <input label="password" onChange={this.handleLoginChangePassword} fluid placeholder='Password' />
                                </Form.Field>
                                
                                <br/>
                                <Form.Group >
                                    <Form.Button onClick={this.loginButton} size = 'large' primary>Login</Form.Button>
                                    <Form.Button onClick={this.close} size = 'large' secondary>Cancel</Form.Button>
                                </Form.Group>

                                <br/>
                                <Divider horizontal>Don't have an account?</Divider>
                            </Form>
                           
                            


                            <Form size = 'tiny'>
                                <Header as = 'h2' color = 'teal' textAlign = 'left'>Sign Up</Header>
                                <Form.Field>
                                    <Header as = 'h5' textAlign = 'left'>Username</Header>
                                    <input placeholder = 'Username (8-10 characters)' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as = 'h5' textAlign = 'left'>E-mail</Header>
                                    <input fluid label = 'E-mail address' placeholder = 'Enter your E-mail address' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as = 'h5' textAlign = 'left'>Re-enter E-mail</Header>
                                    <input fluid label = 're-enter E-mail address' placeholder = 'Re-enter your E-mail address' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as = 'h5' textAlign = 'left'>Password</Header>
                                    <input fluid label = 're-enter E-mail address' placeholder = 'Enter password' />
                                </Form.Field>
                                                               
                                <br/>
                                <Form.Group>
                                    <Form.Button size = 'large' primary>Sign Up</Form.Button>
                                    <Form.Button onClick={this.close} size = 'large' secondary>Cancel</Form.Button>
                                </Form.Group>

                            </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )//return() ends.   
    }//render() ends.
}//class ends.
