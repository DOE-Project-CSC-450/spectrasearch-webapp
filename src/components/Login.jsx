import React from 'react';
import { Component } from 'react';
import { Button, Header, Label, Form, Checkbox, Divider } from 'semantic-ui-react';

const genderOptions = [
    {key: 'm', text: 'Male', value: 'Male'},
    {key: 'f', text: 'Female', value: 'Female'},
    {key: 'o', text: 'Other', value: 'Other'},  
]

export default class loginPage extends Component {
    render(){
        return(
            <div>
                <header>Log in</header>
                <Form>
                    <Form.Field>
                        <Label>Username / E-mail</Label>
                        <input placeholder='Username / E-mail' />
                    </Form.Field>
                    <Form.Field>
                        <Label>Password</Label>
                        <input placeholder='Password' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label = 'Keep me logged in' />
                    </Form.Field>
                    <Button type = 'Log in'>Log in</Button>
                    <Button type = 'Cancel'>cancel</Button>
                    <Header>Not having an account?</Header>
                    <Button type = 'Signup'>Sign up</Button>
                </Form>
                
                <Divider></Divider>
                <header>Sign up</header>
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
                        <Form.input fluid label = 'First name' placeholder = 'First name' />
                        <Form.input fluis label = 'M.' placeholder = 'M.' />
                        <Form.input fluid label = 'Last name' placeholder = 'Last name' />
                    </Form.Group>
                    <Form.Select 
                        fluid 
                        label = 'Gender' 
                        options = {genderOptions} 
                        placeholder = 'Gender' 
                    />
                    <header> Birthdate </header>
                    <Form.Group inline>
                        <Form.input fluid label = 'MM' placeholder = 'Month'/>
                        <Form.input fluid label = 'DD' placeholder = 'Day'/>
                        <Form.input fluid label = 'YYYY' placeholder = 'Year'/>
                    </Form.Group>
                    <Form.Field>
                        <label>Password</label>
                        <input fluid label = 'Password (longer than 8 characters)' placeholder = 'Password' />
                    </Form.Field>
                    <Form.Field>
                        <label>Re-enter assword</label>
                        <input fluid label = 'Re-enter your password' placeholder = 'Re-enter password' />
                    </Form.Field>
                    <Form.Checkbox label="I hereby agree all terms and conditions..." />
                    <Form.Group inline>
                        <Form.Button>Signup</Form.Button>
                        <Form.Button>Cancel</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        )   
    }
}
