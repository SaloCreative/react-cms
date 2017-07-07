import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import { ProductFilter } from './filter';

import {
  GET_PRODUCTS_FETCHING,
  GET_PRODUCTS_RECEIVED,
  GET_PRODUCTS_FAILED,
  UPDATE_PRODUCT_FILTER_CATEGORY,
  UPDATE_PRODUCT_FILTER_SEARCH,
  UPDATE_PRODUCT_FILTER_ORDER
} from './types';

function updateCategory(value) {
  return {
    type: UPDATE_PRODUCT_FILTER_CATEGORY,
    value
  };
}

function updateSearch(value) {
  return {
    type: UPDATE_PRODUCT_FILTER_SEARCH,
    value
  };
}

function updateOrder(value) {
  return {
    type: UPDATE_PRODUCT_FILTER_ORDER,
    value
  };
}

export function updateProductFilters(type, value) {
  return function (dispatch) {
    switch (type) {
      case 'category':
        dispatch(updateCategory(value));
        break;
      case 'search':
        dispatch(updateSearch(value));
        break;
      case 'order':
        dispatch(updateOrder(value));
        break;
    }
  }
}

export const getProducts = (filter = new ProductFilter) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.PRODUCTS) }?${ filter.getEndpointParameters() }`,
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
        type: GET_PRODUCTS_FAILED,
        payload: (action, state, res) => {
          getJSON(res).then(
            (json) => new ApiError(res.status, ErrorMessages.getProductsFailed, json, true)
          );
        }
      }

    ]
  }
});