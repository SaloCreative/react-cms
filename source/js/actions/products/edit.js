import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';
import { assignTags } from './tags/associate';

import { ProductFilter } from './filter';

import {
  UPDATING_PRODUCT_FETCHING,
  UPDATING_PRODUCT_RECEIVED,
  UPDATING_PRODUCT_FAILED,
  PRODUCT_FIELD_CHANGED,
  PRODUCT_SECTION_VALIDATION
} from './types';

function prepareData(json, tags) {
  let product = json;
  if (tags && tags !== null) {
    product.tags = tags;
  }
  return product;
}

export const updateProduct = (id, body, tags, i = null) => ({
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
              product: prepareData(json, tags),
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
  return (dispatch) => {
    const tags = product.tags.slice();
    dispatch(updateProduct(product.id, product, tags));
    dispatch(assignTags(tags, product.id));
  }
}

export function toggleProductOnline(product, e, i) {
  return function (dispatch) {
    let fields = {
      slug: product.slug,
      sku: product.sku,
      title: product.title,
      online: e
    };
    dispatch(updateProduct(product.id, fields, null, i));
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
    dispatch(updateProduct(product.id, fields, null, i));
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