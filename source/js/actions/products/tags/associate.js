import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import store from 'store';

import {
  ADD_PRODUCT_TAG_STATE,
  REMOVE_PRODUCT_TAG_STATE,
  PRODUCT_TAGS_ASSIGN_ASSIGNING,
  PRODUCT_TAGS_ASSIGN_ASSIGNED,
  PRODUCT_TAGS_ASSIGN_FAILED
} from './types';

export function stateAddTag(tag) {
  return {
    type: ADD_PRODUCT_TAG_STATE,
    payload: {
      tag
    }
  };
}

export function stateRemoveTag(tag, i) {
  return {
    type: REMOVE_PRODUCT_TAG_STATE,
    payload: {
      tag, i
    }
  };
}

export const assignTags = (tags, productID) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.TAGS.MANAGE) }${ productID }`,
    method: 'POST',
    headers: HEADER(),
    body: JSON.stringify(tags),
    types: [
      {
        type: PRODUCT_TAGS_ASSIGN_ASSIGNING
      },
      {
        type: PRODUCT_TAGS_ASSIGN_ASSIGNED
      },
      {
        type: PRODUCT_TAGS_ASSIGN_FAILED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            ApiError(res.status, ErrorMessages.assignTagsFailed, json);
          });
        }
      }
    ]
  }
});


export function addTag(tag, productID) {
  return (dispatch) => {
    return dispatch(stateAddTag(tag));
  };
}

export function removeTag(tag, productID, i) {
  return (dispatch) => {
    return dispatch(stateRemoveTag(tag, i));
  };
}
