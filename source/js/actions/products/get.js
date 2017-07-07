import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'reducers/alerts/messages/errorMessages';

import { ProductFilter } from './filter';

import {
  GET_PRODUCT_FETCHING,
  GET_PRODUCT_RECEIVED,
  GET_PRODUCT_FAILED
} from './types';

export const getProduct = (id) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.PRODUCTS) }/${ id }`,
    method: 'GET',
    headers: HEADER(),
    types: [
      {
        type: GET_PRODUCT_FETCHING
      },
      {
        type: GET_PRODUCT_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res);
        }
      },
      {
        type: GET_PRODUCT_FAILED,
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
    let fields = {
      slug: product.slug,
      sku: product.sku,
      title: product.title,
      online: e
    };
    dispatch(updateProduct(product.id, fields, i));
  };
}

export function toggleProductStock(product, e, i) {
  return function (dispatch) {
    let fields = {
      slug: product.slug,
      sku: product.sku,
      title: product.title,
      inStock: e
    };
    dispatch(updateProduct(product.id, fields, i));
  };
}