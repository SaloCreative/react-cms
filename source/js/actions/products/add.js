import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';
import { assignTags } from './tags/associate';

import { ProductFilter } from './filter';

import {
  ADD_NEW_PRODUCT,
  CREATE_PRODUCT_FETCHING,
  CREATE_PRODUCT_RECEIVED,
  CREATE_PRODUCT_FAILED
} from './types';

function prepareData(json, tags) {
  let product = json;
  if (tags && tags !== null) {
    product.tags = tags;
  }
  return product;
}


export function addNewProduct() {
  return {
    type: ADD_NEW_PRODUCT
  };
}

export const saveNewProduct = (body, tags) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.ADD) }`,
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
              product: prepareData(json, tags)
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
  return (dispatch) => {
    const tags = product.tags.slice();
    return dispatch(saveNewProduct(product, tags)).then((response) => {
      if (!response.error && response.payload.product) {
        return dispatch(assignTags(tags, response.payload.product.id));
      }
    });
  };
}