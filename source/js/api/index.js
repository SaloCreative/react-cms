import Cookies from 'universal-cookie';
import { config } from 'constants/config';

const cookies = new Cookies();

const authToken = cookies.get('authToken');

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
        PRODUCT_EDIT: 'products/edit',
        CATEGORIES: 'products/categories',
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
