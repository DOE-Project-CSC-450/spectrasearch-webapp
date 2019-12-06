//import all needed modules and components from React.
import React from 'react';
import { Component } from 'react';
import { Button, Header, Form, Checkbox, Divider, Segment, Grid} from 'semantic-ui-react';

/* the login/signup page. **/

//Options for gender selection (Form.select))
const genderOptions = [
    {key: 'd', text: 'Select your gender', value: 'default'}, 
    {key: 'm', text: 'Male', value: 'Male'},
    {key: 'f', text: 'Female', value: 'Female'},
    {key: 'o', text: 'Other', value: 'Other'},  
]

//actual Login class export. (imported in app.jsx)
export default class Login extends Component {  
    render(){
        return(
            <Grid textAlign = 'center' style = {{height: '130vh'}} verticalAlign = 'middle'>
                <Grid.Column style = {{maxWidth: 800}}>
                    <Header as = 'h1' color = 'black' textAlign = 'center'>SpectraSearch</Header>    
                        <Segment stacked>
                            <Form size = 'huge'>
                                <Header as = 'h2' color = 'teal' textAlign = 'left'>Log In</Header> 
                                <Form.Field>
                                    <Header as = 'h4' color = 'teal' textAlign = 'left'>Username / E-mail</Header> 
                                    <input fluid placeholder='Username / E-mail' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as = 'h4' color = 'teal' textAlign = 'left'>Password</Header>
                                    <input fluid placeholder='Password' />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label = 'Keep me logged in' />
                                </Form.Field>

                                <Form.Group widths = 'equal'>
                                    <Form.Button size = 'large' primary>Log In</Form.Button>
                                    <Form.Button size = 'large' secondary>Cancel</Form.Button>
                                </Form.Group>

                                <Divider horizontal>Not having an account?</Divider>
                                <Button type = 'Signup' size = 'large' primary >Sign up</Button>
                            </Form>
                        
                            <Divider section/>
                            
                            <Form size = 'huge'>
                                <Header as = 'h2' color = 'teal' textAlign = 'left'>Sign Up</Header>
                                <Form.Field>
                                    <Header as = 'h4' color = 'teal' textAlign = 'left'>Username</Header>
                                    <input placeholder = 'Username (8-10 characters)' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as = 'h4' color = 'teal' textAlign = 'left'>E-mail</Header>
                                    <input fluid label = 'E-mail address' placeholder = 'Enter your E-mail address' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as = 'h4' color = 'teal' textAlign = 'left'>Re-enter E-mail</Header>
                                    <input fluid label = 're-enter E-mail address' placeholder = 'Re-enter your E-mail address' />
                                </Form.Field>
                                <Header as = 'h4' color = 'teal' textAlign = 'left'> Your Name </Header>
                                <Form.Group widths = 'equal'>
                                    <Form.Input fluid placeholder = "First Name" />
                                    <Form.Input fluid placeholder = "Middle" />
                                    <Form.Input fluid placeholder = "Last Name" />
                                </Form.Group>

                                <Header as = 'h4' color = 'teal' textAlign = 'left'> Birthdate </Header>

                                <Form.Group widths = 'equal'>
                                    <Form.Input fluid placeholder = 'Month (MM)' />
                                    <Form.Input fluid placeholder = 'Day (DD)' />
                                    <Form.Input fluid placeholder = 'Year (YYYY)' />
                                </Form.Group>
                                
                                <Header as = 'h4' color = 'teal' textAlign = 'left'> Gender </Header>
                                <Form.Select options = {genderOptions} placeholder = 'Gender' />
                                <Form.Checkbox label = 'I hereby agree to all conditions and terms.' />
                                
                                <Form.Group widths = 'equal'>
                                    <Form.Button size = 'large' primary>Sign Up</Form.Button>
                                    <Form.Button size = 'large' secondary>Cancel</Form.Button>
                                </Form.Group>

                            </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )//return() ends.   
    }//render() ends.
}//class ends.
