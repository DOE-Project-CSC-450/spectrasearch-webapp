import React from 'react';
import { Component } from 'react';
import { Button, Header, Label, Form, Checkbox, Divider, Segment, Grid, TextArea, Icon } from 'semantic-ui-react';

/* the login/signup page. **/

const genderOptions = [
    {key: 'm', text: 'Male', value: 'Male'},
    {key: 'f', text: 'Female', value: 'Female'},
    {key: 'o', text: 'Other', value: 'Other'},  
]

export default class Login extends Component {  
    render(){
        return(
            <Grid textAlign = 'center' style = {{height: '130vh'}} verticalAlign = 'middle'>
                <Grid.Column style = {{maxWidth: 600}}>
                    <Header as = 'h1' color = 'teal' textAlign = 'left'>SpectraSearch</Header>    
                        <Segment stacked>
                            <Form size = 'large'>
                                <Header as = 'h2' color = 'teal' textAlign = 'left'>Log In</Header> 
                                <Form.Field>
                                    <Label textAlign = 'left'>Username / E-mail</Label>
                                    <input fluid icon = 'user' iconPosition = 'left' placeholder='Username / E-mail' />
                                </Form.Field>
                                <Form.Field>
                                    <Label>Password</Label>
                                    <input placeholder='Password' />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label = 'Keep me logged in' />
                                </Form.Field>
                                <Button type = 'Log in' primary>Log in</Button>
                                <Button type = 'Cancel'>cancel</Button>

                                <Divider horizontal>Not having an account?</Divider>
                                <Button type = 'Signup' primary >Sign up</Button>
                            </Form>
                        
                            <Divider section/>
                            <header size  = 'huge'>Sign up</header>
                            <Form>
                                <Form.Field>
                                    <label>Username</label>
                                    <input placeholder = 'Username' />
                                </Form.Field>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input fluid label = 'your E-mail address' placeholder = 'E-mail address' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Re-enter E-mail</label>
                                    <input fluid label = 're-enter your E-mail address' placeholder = 'Re-enter E-mail' />
                                </Form.Field>
                                <Form.Group widths = 'equal'>
                                    <Form.Field
                                        id='First Name'
                                        control={TextArea}
                                        label='First Name'
                                        placeholder='First Name'
                                    />
                                    <Form.Field
                                        id='M.'
                                        control={TextArea}
                                        label='Middle'
                                        placeholder='Middle'
                                    />
                                    <Form.Field
                                        id='Last Name'
                                        control={TextArea}
                                        label='Last Name'
                                        placeholder='Last Name'
                                    />
                                </Form.Group>

                                <Form.Field>
                                    <Checkbox label = 'I hereby agree to all conditions and terms.' />
                                </Form.Field>

                                <Form.Group widths = 'equal'>
                                    <Form.Button primary>Signup</Form.Button>
                                    <Form.Button>Cancel</Form.Button>
                                </Form.Group>

                            </Form>



                    </Segment>
                </Grid.Column>
            </Grid>
        )   
    }
}
