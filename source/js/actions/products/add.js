import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import { ProductFilter } from './filter';

import {
  ADD_NEW_PRODUCT,
  CREATE_PRODUCT_FETCHING,
  CREATE_PRODUCT_RECEIVED,
  CREATE_PRODUCT_FAILED
} from './types';

export function addNewProduct() {
  return {
    type: ADD_NEW_PRODUCT
  };
}

export const saveNewProduct = (body) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.PRODUCT_ADD) }`,
    method: 'POST',
    headers: HEADER(),
    body: JSON.stringify(body),
    types: [
      {
        type: CREATE_PRODUCT_FETCHING
      },
      {
        type: CREATE_PRODUCT_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return {
              product: json
            }
          });
        }
      },
      {
        type: CREATE_PRODUCT_FAILED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            ApiError(res.status, ErrorMessages.addProductFailed, json);
          });
        }
      }
    ]
  }
});

export function createProduct(product) {
  return function (dispatch) {
    dispatch(saveNewProduct(product));
  };
}