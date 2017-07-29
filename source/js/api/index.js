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
        INDEX: 'products',
        EDIT: 'products/edit',
        ADD: 'products/add',
        CATEGORIES: {
            INDEX: 'products/categories'
        },
        TAGS: {
            INDEX: 'products/tags',
            ASSIGN: 'products/tags/assign/',
            ASSIGN_MANY: 'products/tags/assign/multiple/',
            UNASSIGN: 'products/tags/unassign/',
            UNASSIGN_MANY: 'products/tags/unassign/multiple/',
            MANAGE: 'products/tags/assign/update/'
        }
    },
    MEDIA: {
        MEDIA: 'media'
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
