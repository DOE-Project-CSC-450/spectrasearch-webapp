import React from 'react';
import { Component } from 'react';
import { Input, Segment } from 'semantic-ui-react';



export default class AdvancedSearch extends components{
    render(){
        return(
            <Segment.Group>
                <Segment><Header>Advanced Search for Lighting Instruments</Header></Segment>
                <Search
                fluid >
                </Search>
            </Segment.Group>

        )
    }
}