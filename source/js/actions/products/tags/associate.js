import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import {
  ADD_PRODUCT_TAG_SAVING,
  ADD_PRODUCT_TAG_SAVED,
  ADD_PRODUCT_TAG_FAILED,
  REMOVE_PRODUCT_TAG_SAVING,
  REMOVE_PRODUCT_TAG_SAVED,
  REMOVE_PRODUCT_TAG_FAILED,
  PRODUCT_TAGS_ASSIGN_ASSIGNING,
  PRODUCT_TAGS_ASSIGN_ASSIGNED,
  PRODUCT_TAGS_ASSIGN_FAILED
} from './types';

export function stateAddTag(tag) {
  return {
    type: ADD_PRODUCT_TAG_SAVED,
    payload: {
      tag
    }
  };
}

export function stateRemoveTag(tag, i) {
  return {
    type: REMOVE_PRODUCT_TAG_SAVED,
    payload: {
      tag, i
    }
  };
}

export const assignTags = (tags, productID) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.TAGS.ASSIGN_MANY) }/${ productID }`,
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
