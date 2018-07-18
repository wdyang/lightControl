// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchLights, updateLight } from '../state/actions/LightActions';
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
        // setTimeout(()=>{
        //     console.log('checking connection...');
        //     this.checkConnected();
        // }, 3000);
    }

    checkConnected(){
        console.log('checking connecting');
        let scope = this;
        this.props.lights.forEach(light =>{
            fetch('http://'+light.ip+'/led_status')
                .then(response=>{
                    if(!response.ok){
                        throw Error(response.statusText);
                    }
                    return response.text();
                }).then(x=>{
                    window._res = x;
                    let res = JSON.parse(x);
                    console.log(x);
                    console.log(res);
                    this.props.updateLight({
                        _id:light._id, 
                        state: res.LED == 1 ? 'ON' : 'OFF',
                        connected : true
                    });
                }).catch(function(error) {
                    console.log('connection error');
                    console.log(error);
                    scope.props.updateLight({
                        _id:light._id, 
                        connected : false
                    });
                });
        });
    }

    clickFunc(light, action){
        console.log('clicked', light._id, light.ip, action);
        let scope = this;
        fetch('http://'+light.ip+'/led_' + action.toLowerCase())
            .then(response=>{
                if(!response.ok){
                    throw Error(response.statusText);
                }
                return response.text();
            }).then(x=>{
                window._res = x;
                let res = JSON.parse(x);
                console.log(x);
                console.log(res);
                this.props.updateLight({_id:light._id, state: res.LED == 1 ? 'ON' : 'OFF'});
            }).catch(function(error) {
                console.log('connection error');
                console.log(error);
                scope.props.updateLight({
                    _id:light._id, 
                    connected : false
                });
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <LightControlList lights={this.props.lights} clickFunc={this.clickFunc.bind(this)}/>
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
    updateLight : PropTypes.func.isRequired,
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
    bindActionCreators({ fetchLights, updateLight }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(LightController);


// EXPORT COMPONENT

export { hoc as LightController };