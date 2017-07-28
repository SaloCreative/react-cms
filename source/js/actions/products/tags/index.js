import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import {
  GET_PRODUCT_TAGS_FETCHING,
  GET_PRODUCT_TAGS_RECEIVED,
  GET_PRODUCT_TAGS_FAILED
} from './types';

export const getProductTags = () => ({
  [CALL_API]: {
    endpoint: ENDPOINT(API.PRODUCTS.TAGS.INDEX),
    method: 'GET',
    headers: HEADER(),
    types: [
      {
        type: GET_PRODUCT_TAGS_FETCHING
      },
      {
        type: GET_PRODUCT_TAGS_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return json.data;
          });
        }
      },
      {
        type: GET_PRODUCT_TAGS_FAILED,
        payload: (action, state, res) => {
          getJSON(res).then(
            (json) => new ApiError(res.status, ErrorMessages.getProductsCategoriesFailed, json)
          );
        }
      }

    ]
  }
});