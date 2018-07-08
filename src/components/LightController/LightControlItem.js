// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

// COMPONENT

const LightControlItem = ({id, clickFunc}) => (
    <div className="text-center">
        <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" onClick = {()=>clickFunc({id})}> Large button, {id} </Button>
            <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
    </div>
);

LightControlItem.propTypes = {
    id: PropTypes.string.isRequired,
    clickFunc : PropTypes.func.isRequired
};

export { LightControlItem };