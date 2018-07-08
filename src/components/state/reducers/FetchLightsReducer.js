import {
    FETCH_LIGHTS_PENDING,
    FETCH_LIGHTS_FULFILLED,
    FETCH_LIGHTS_REJECTED
} from '../actions/LightActions';


// INITIALIZE STATE

const initialState = {
    lights: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchLightsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LIGHTS_PENDING:
            return {
                ...state,
                lights: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_LIGHTS_FULFILLED:
            return {
                ...state,
                lights: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_LIGHTS_REJECTED:
            return {
                ...state,
                lights: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};