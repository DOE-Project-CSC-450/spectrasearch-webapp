//import all needed modules and components from React.
import React from 'react';
import { Component } from 'react';
import { Button, Modal, Message, TextArea, Header, Form, Checkbox, Divider, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash'
import Uploadpage from './uploadpage';

var sha1 = require('js-sha1');
var D;

/* the login/signup page. **/

//Options for gender selection (Form.select))

const initialState = { username: '', password: '', status: false }
//actual Login class export. (imported in app.jsx)
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' }
        this.state = { password: '' }
        this.state = { signUpEmail: '' }
        this.state = { signUpEmail2: '' }
        this.state = { signUpPassword: '' }
        this.state = { open: false }
        this.state = { SignUpformSubmitted: false }
        this.state = { serverData: 'temp' }
        this.state = { finalUserName: '' }
        this.state = { status: false }

    }

    handleLoginChangeUsername = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.value })
    }

    handleLoginChangePassword = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value })
    }

    close = () => {
        window.location.reload()
    }


    handleSignUpSubmit = () => {
        if (!(this.state.signUpEmail === this.state.signUpEmail2)) {
            //modal error emails do not match, please check emails
            this.setState({ open: true })
        }
        else {
            this.setState({ SignUpformSubmitted: true })
            //nee to put email and password in the db
            //fetch
            fetch('http://localhost:4000/users', {
                method: 'POST',
                body: JSON.stringify({
                    usernames: this.state.signUpEmail2,
                    passwords: this.state.signUpPassword
                }),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    //this is the line that is giving me the error
                    return response.json()
                }).then(function (body) {
                    console.log(body);
                });



        }
    }

    close2 = () => this.setState({ open: false })



    loginButton = (value) => {

        this.getUsers();

    }
    getUsers = _ => {
        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(_ = (response) => {
                this.setState({ serverData: Object.values(response.data) })
                for (D = 0; D < this.state.serverData.length; D++) {

                    if (this.state.serverData[D].Username === this.state.username) {
                        if (this.state.serverData[D].Password === sha1(this.state.password)) {
                            //they are logged on

                            this.setState({ finalUserName: this.state.serverData[D].Username })

                            this.setState({ status: true })
                            //the modal needs to close

                        }
                    }

                }
                if (this.state.status === false) {
                    document.getElementById("implant").innerHTML = "Sorry, user not found. Please sign up first."
                }
                else {
                    document.getElementById("implant").innerHTML = ''
                    this.setState({ status: false })
                    window.location.reload()
                    localStorage.setItem('thatUser', this.state.finalUserName)
                }


            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <Grid textAlign='center' style={{ height: '130vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 800 }}>
                    <Header as='h2' color='black' textAlign='center'>SpectraSearch</Header>
                    {this.state.SignUpformSubmitted ? <div><Form success>
                        <Message
                            success
                            header='Sign Up Complete!'
                            content="You may log in now."
                        />
                        <Button onClick={_ = () => { this.setState({ SignUpformSubmitted: false }) }}>Login</Button>
                    </Form> </div> :
                        <Segment stacked>
                            <Form size='tiny'>
                                <Header as='h2' color='teal' textAlign='left'>Log In</Header>
                                <Form.Field>
                                    <Header as='h5' textAlign='left'>E-mail</Header>
                                    <input label="username" onChange={this.handleLoginChangeUsername} fluid placeholder='jenny@gmail.com' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as='h5' textAlign='left'>Password</Header>
                                    <input type="password" label="password" onChange={this.handleLoginChangePassword} fluid placeholder='Password' />
                                </Form.Field>

                                <br />
                                <Header as='h5' id="implant"></Header>
                                <Form.Group >
                                    <Form.Button onClick={this.loginButton} size='large' primary>Login</Form.Button>
                                    <Form.Button onClick={this.close} size='large' secondary>Cancel</Form.Button>
                                </Form.Group>

                                <br />
                                <Divider horizontal>Don't have an account?</Divider>
                            </Form>




                            {/* ------------------------------------------------------------------------------------------------------------- */}

                            <Form size='tiny'>
                                <Header as='h2' color='teal' textAlign='left'>Sign Up</Header>
                                <Form.Field>
                                    <Header as='h5' textAlign='left'>E-mail</Header>
                                    <input onChange={_ = (event) => { this.setState({ signUpEmail: event.target.value }) }} fluid label='E-mail address' placeholder='bob@gmail.com' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as='h5' textAlign='left'>Re-enter E-mail</Header>
                                    <input onChange={_ = (event) => { this.setState({ signUpEmail2: event.target.value }) }} fluid label='Re-enter E-mail address' placeholder='bob@gmail.com' />
                                </Form.Field>
                                <Form.Field>
                                    <Header as='h5' textAlign='left'>Password</Header>
                                    <input type="password" onChange={_ = (event) => { this.setState({ signUpPassword: event.target.value }) }} fluid label='re-enter E-mail address' placeholder='Enter password' />
                                </Form.Field>

                                <br />
                                <Form.Group>
                                    <Form.Button onClick={this.handleSignUpSubmit} size='large' primary>Sign Up</Form.Button>
                                    <Form.Button onClick={this.close} size='large' secondary>Cancel</Form.Button>
                                </Form.Group>

                                <Modal size='mini' open={this.state.open} onClose={this.close2}>
                                    <Modal.Header>Sign Up Error</Modal.Header>
                                    <Modal.Content>
                                        <p>Please ensure emails match</p>
                                    </Modal.Content>
                                </Modal>

                            </Form>

                        </Segment>
                    }
                </Grid.Column>
            </Grid>

        )//return() ends.   
    }//render() ends.
}//class ends.
