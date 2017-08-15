import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import {
  PRODUCT_GALLERY_IMAGE_STATE_ADD,
  PRODUCT_GALLERY_IMAGE_STATE_REMOVE,
  PRODUCT_GALLERY_ASSIGN_ASSIGNING,
  PRODUCT_GALLERY_ASSIGN_ASSIGNED,
  PRODUCT_GALLERY_ASSIGN_FAILED
} from './types';

function stateAddImage(img) {
  return {
    type: PRODUCT_GALLERY_IMAGE_STATE_ADD,
    payload: {
      img
    }
  };
}

function stateRemoveImage(img, i) {
  return {
    type: PRODUCT_GALLERY_IMAGE_STATE_REMOVE,
    payload: {
      img, i
    }
  };
}

export function addImage(img) {
  return (dispatch) => {
    return dispatch(stateAddImage(img));
  };
}

export function removeImage(img) {
  return (dispatch) => {
    return dispatch(stateRemoveImage(img));
  };
}

export const assignImages = (gallery, productID) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.PRODUCTS.GALLERY.MANAGE) }${ productID }`,
    method: 'POST',
    headers: HEADER(),
    body: JSON.stringify(gallery),
    types: [
      {
        type: PRODUCT_GALLERY_ASSIGN_ASSIGNING
      },
      {
        type: PRODUCT_GALLERY_ASSIGN_ASSIGNED
      },
      {
        type: PRODUCT_GALLERY_ASSIGN_FAILED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            ApiError(res.status, ErrorMessages.assignTagsFailed, json);
          });
        }
      }
    ]
  }
});

