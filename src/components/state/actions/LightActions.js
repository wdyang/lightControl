import { fetchLights } from '../../../services/LightService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_LIGHTS = 'FETCH_LIGHTS';
export const FETCH_LIGHTS_PENDING = 'FETCH_LIGHTS_PENDING';
export const FETCH_LIGHTS_FULFILLED = 'FETCH_LIGHTS_FULFILLED';
export const FETCH_LIGHTS_REJECTED = 'FETCH_LIGHTS_REJECTED';

export const UPDATE_LIGHT = 'UPDATE_LIGHT';


// ACTION GENERATORS

const fetchLightsAction = () => ({
    type: FETCH_LIGHTS,
    payload: fetchLights()
});

const updateLightAction = (light) => ({
    type: UPDATE_LIGHT,
    payload: light
});
// EXPORT ACTIONS

export { fetchLightsAction as fetchLights, updateLightAction as updateLight };