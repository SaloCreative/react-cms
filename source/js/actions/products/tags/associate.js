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
  REMOVE_PRODUCT_TAG_FAILED
} from './types';

export function stateAddTag(tag) {
  return {
    type: ADD_PRODUCT_TAG_SAVED,
    payload: {
      tag
    }
  };
}

export function stateRemoveTag(tag) {
  return {
    type: REMOVE_PRODUCT_TAG_SAVED,
    payload: {
      tag
    }
  };
}

export function addTag(tag, productID) {
  return (dispatch) => {
    if (productID) {

    } else {

    }
    return dispatch(stateAddTag(tag));
  };
}

export function removeTag(tag, productID) {
  return (dispatch) => {
    if (productID) {

    } else {

    }
    return dispatch(stateRemoveTag(tag));
  };
}
