import {
  PRODUCT_GALLERY_IMAGE_STATE_ADD,
  PRODUCT_GALLERY_IMAGE_STATE_REMOVE,
  PRODUCT_TAGS_ASSIGN_ASSIGNING,
  PRODUCT_TAGS_ASSIGN_ASSIGNED,
  PRODUCT_TAGS_ASSIGN_FAILED
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
