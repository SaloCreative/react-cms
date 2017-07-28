import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import { ProductFilter } from './filter';

import {
  UPDATING_PRODUCT_FETCHING,
  UPDATING_PRODUCT_RECEIVED,
  UPDATING_PRODUCT_FAILED,
  PRODUCT_FIELD_CHANGED,
  PRODUCT_SECTION_VALIDATION
} from './types';

export const updateProduct = (id, body, i = null) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.EDIT) }/${ id }`,
    method: 'PUT',
    headers: HEADER(),
    body: JSON.stringify(body),
    types: [
      {
        type: UPDATING_PRODUCT_FETCHING,
        payload: {
          i,
          body
        }
      },
      {
        type: UPDATING_PRODUCT_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return {
              product: json,
              i
            }
          });
        }
      },
      {
        type: UPDATING_PRODUCT_FAILED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            ApiError(res.status, ErrorMessages.updateProductFailed, json);
            return {
              i
            };
          });
        }
      }
    ]
  }
});

export function editProduct(product) {
  return function (dispatch) {
    dispatch(updateProduct(product.id, product));
  };
}

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

export function productFieldChanged(field, value) {
  return {
    type: PRODUCT_FIELD_CHANGED,
    field,
    value
  }
}

export function productValidationChange(section, errors) {
  return {
    type: PRODUCT_SECTION_VALIDATION,
    section,
    errors
  }
}