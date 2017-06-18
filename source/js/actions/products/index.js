import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'apiErrorHandler';

import { ProductFilter } from './filter';

export const GET_PRODUCTS_FETCHING = 'GET_PRODUCTS_FETCHING';
export const GET_PRODUCTS_RECEIVED = 'GET_PRODUCTS_RECEIVED';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const getProducts = (filter = new ProductFilter) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.INDEX) }?${ filter.getEndpointParameters() }`,
    method: 'GET',
    headers: HEADER(),
    types: [
      {
        type: GET_PRODUCTS_FETCHING
      },
      {
        type: GET_PRODUCTS_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return json;
          });
        }
      },
      {
        type: GET_PRODUCTS_FAILED
      }
    ]
  }
});