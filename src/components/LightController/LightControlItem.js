// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

// COMPONENT

const LightControlItem = ({id, light, clickFunc}) => (
    <div className="text-left">
        id: {id}, ip: {light.ip}, desc: {light.desc}, state: {light.state}, connected: {light.connected ? 'Yes' : 'No'}
        <ButtonToolbar >
            <Button 
                bsStyle={light.state=='ON' ? 'danger' : 'link'} 
                bsSize="sm" 
                onClick = {()=>clickFunc(light, 'ON')} 
                disabled = {!light.connected}
            > ON </Button>
            <Button bsSize="sm" 
                bsStyle={light.state=='OFF' ? 'danger' :'link'}
                onClick = {()=>clickFunc(light, 'OFF')} 
                disabled = {!light.connected}
            >OFF</Button>
            <Button bsStyle={light.connected ? 'success' : 'warning'} bsSize="sm" disabled>{light.connected ? 'Online' : 'Offline'}</Button>
        </ButtonToolbar>
    </div>
);

LightControlItem.propTypes = {
    id: PropTypes.string.isRequired,
    light: PropTypes.object.isRequired,
    clickFunc : PropTypes.func.isRequired
};

export { LightControlItem };