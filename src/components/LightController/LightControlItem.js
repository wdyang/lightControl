// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

// COMPONENT

const LightControlItem = ({id}) => (
    <div className="text-center">
        <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large"> Large button, {id} </Button>
            <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
    </div>
);

LightControlItem.propTypes = {
    id: PropTypes.string.isRequired
};

export { LightControlItem };