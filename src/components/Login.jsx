import React from 'react';
import { Component } from 'react';
import { Button, Icon, Header, Input, Label, Image, Dropdown, Form, Checkbox } from 'semantic-ui-react';

const loginForm = () => {
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
}

export default class Login extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <Header>SpectraSearch</Header>
                <Form>loginForm</Form>
            </View>
        )   
    }
}
