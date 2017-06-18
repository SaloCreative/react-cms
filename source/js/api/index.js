import { config } from 'data/config';
import { authToken } from './token';

let token;
if (authToken) {
    token = authToken.token;
}

export const API = {
    BASE: config.API_URL,
    AUTH: {
        LOGIN: 'auth/login',
        LOGOUT: 'auth/logout',
        grants: {}
    },
    PRODUCTS: {
        PRODUCTS: 'products',
        TAGS: 'products/tags'
    }
};

export function ENDPOINT(endpoint) {
    return API.BASE + endpoint;
}

export function HEADER(contentType = 'application/json') {
    return {
        'X-API-Token': `${ token }`,
        'Content-Type': contentType
    };
}
