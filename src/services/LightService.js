// IMPORT DATA FROM STATIC JSON FILE

import lights from './lights.json';


// COMPONENT

const simulateError = false;

export const fetchLights = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of zip codes');
            } else {
                resolve(lights);
            }
        }, 1000);
    });
};