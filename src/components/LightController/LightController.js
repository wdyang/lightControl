// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchLights } from '../state/actions/LightActions';
import { LightControlList } from './LightControlList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class LightController extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLights();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <LightControlList lights={this.props.lights} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of lights" />
                }
            </div>
        );
    }
}

LightController.propTypes = {
    fetchLights: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    lights: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, lights } = state.lights;

    return { fetching, fetched, failed, lights };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchLights }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(LightController);


// EXPORT COMPONENT

export { hoc as LightController };