// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { LightControlItem } from './LightControlItem';


// COMPONENT

const renderList = (lights, clickFunc )=> (
    <div className="list-group animated fadeIn">
        {lights.map(light => renderListItem(light, clickFunc))}
    </div>
);

const renderListItem = (light, clickFunc) => (
    <Fragment key={light._id}>
        <LightControlItem id={light._id} light={light} clickFunc={clickFunc}/>
    </Fragment>
);

const LightControlList = (props) => (
    <Fragment>
        {renderList(props.lights, props.clickFunc)}
    </Fragment>
);

LightControlList.propTypes = {
    lights: PropTypes.array.isRequired,
    clickFunc: PropTypes.func.isRequired
};

export { LightControlList };