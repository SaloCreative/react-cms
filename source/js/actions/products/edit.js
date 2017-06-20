import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'reducers/alerts/messages/errorMessages';

import { ProductFilter } from './filter';

import {
  UPDATING_PRODUCT_FETCHING,
  UPDATING_PRODUCT_RECEIVED,
  UPDATING_PRODUCT_FAILED
} from './types';

export const updateProduct = (product, i = null) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.PRODUCTS) }/${ product.id }`,
    method: 'PUT',
    headers: HEADER(),
    body: JSON.stringify(product),
    types: [
      {
        type: UPDATING_PRODUCT_FETCHING,
        payload: {
          i,
          product
        }
      },
      {
        type: UPDATING_PRODUCT_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return json;
          });
        }
      },
      {
        type: UPDATING_PRODUCT_FAILED,
        payload: (action, state, res) => {
          getJSON(res).then(
            (json) => new ApiError(res.status, ErrorMessages.getProductsFailed, json)
          );
        }
      }

    ]
  }
});

export function toggleProductOnline(product, e, i) {
  return function (dispatch) {
    product.online = e;
    dispatch(updateProduct(product, i));
  };
}