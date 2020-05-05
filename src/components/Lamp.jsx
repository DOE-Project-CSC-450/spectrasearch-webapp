import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Modal, Message, Form, TextArea, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn } from 'semantic-ui-react';
import { uptime } from 'os';
import { thisTypeAnnotation } from '@babel/types';
import Searching from './Search'
import { Link } from 'react-router-dom';

//page not in use


export default class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = { serverName: 'temp' }
  }


  render() {

    return (
      <Segment>

        <List id="scrollable-lamps">
          <List.Item>
            <List.Icon name='lightbulb' />
            <List.Content>
              <List.Header as='a'>GE Wattmiser 52 W frosted</List.Header>
              <List.Description>
                52 Watts Incandescent Lamp, A19, Medium Screw (E26), 530/710 Lumens, 2800K Bulb Color Temp.
        </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='lightbulb' />
            <List.Content>
              <List.Header as='a'>Distant light</List.Header>
              <List.Description>
                80 Watts Incandescent Lamp, A19, Medium Screw (E26), 530/710 Lumens, 5000 Bulb Color Temp.
        </List.Description>
            </List.Content>
          </List.Item>

        </List>

      </Segment>



    )
  }
} 