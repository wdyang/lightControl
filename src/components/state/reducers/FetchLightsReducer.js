import {
    FETCH_LIGHTS_PENDING,
    FETCH_LIGHTS_FULFILLED,
    FETCH_LIGHTS_REJECTED,
    UPDATE_LIGHT
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
        case UPDATE_LIGHT:
            console.log('reducing');
            console.log(action.payload);
            return {
                ...state,
                lights: state.lights.map(light=>{
                    if(light._id == action.payload._id){
                        let state = typeof(action.payload.state)==='undefined' ? light.state : action.payload.state;
                        let connected = typeof(action.payload.connected)==='undefined' ? light.connected : action.payload.connected;
                        return {...light, state, connected};
                    }else{
                        return light;
                    }
                })
            };
        default:
            return state;
    }
};