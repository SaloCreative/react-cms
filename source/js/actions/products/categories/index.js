import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import {
  GET_PRODUCT_CATEGORIES_FETCHING,
  GET_PRODUCT_CATEGORIES_RECEIVED,
  GET_PRODUCT_CATEGORIES_FAILED
} from '../types';

export const getCategories = () => ({
  [CALL_API]: {
    endpoint: ENDPOINT(API.PRODUCTS.CATEGORIES),
    method: 'GET',
    headers: HEADER(),
    types: [
      {
        type: GET_PRODUCT_CATEGORIES_FETCHING
      },
      {
        type: GET_PRODUCT_CATEGORIES_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return json;
          });
        }
      },
      {
        type: GET_PRODUCT_CATEGORIES_FAILED,
        payload: (action, state, res) => {
          getJSON(res).then(
            (json) => new ApiError(res.status, ErrorMessages.getProductsCategoriesFailed, json)
          );
        }
      }

    ]
  }
});