// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { LightControlItem } from './LightControlItem';


// COMPONENT

const renderList = lights => (
    <div className="list-group animated fadeIn">
        {lights.map(light => renderListItem(light))}
    </div>
);

const renderListItem = light => (
    <Fragment key={light._id}>
        <LightControlItem id={light._id} />
    </Fragment>
);

const LightControlList = (props) => (
    <Fragment>
        {renderList(props.lights)}
    </Fragment>
);

LightControlList.propTypes = {
    lights: PropTypes.array.isRequired
};

export { LightControlList };