import { getObjectByKey, getIndexByKey } from 'actions/global/utilityFunctions';

import {
  GET_PRODUCT_FETCHING,
  GET_PRODUCT_RECEIVED,
  GET_PRODUCT_FAILED,
  ADD_NEW_PRODUCT,
  PRODUCT_FIELD_CHANGED,
  PRODUCT_SECTION_VALIDATION,
  UPDATING_PRODUCT_FETCHING,
  UPDATING_PRODUCT_RECEIVED,
  UPDATING_PRODUCT_FAILED,
  CREATE_PRODUCT_FETCHING,
  CREATE_PRODUCT_RECEIVED,
  CREATE_PRODUCT_FAILED,
} from 'actions/products/types';

import {
  ADD_PRODUCT_TAG_STATE,
  REMOVE_PRODUCT_TAG_STATE,
} from 'actions/products/tags/types';

import {
  PRODUCT_GALLERY_IMAGE_STATE_ADD,
  PRODUCT_GALLERY_IMAGE_STATE_REMOVE
} from '../../actions/products/gallery/types';

const initialState = {
  data: {
    tags: []
  },
  meta: {
    last_updated: '',
    failed: false,
    saved: true,
    validations: {
      details: false
    }
  }
};

// Nav reducer
function product(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCT_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: true
        },
        data: {}
      };

    case GET_PRODUCT_RECEIVED :
      return {
        ...state,
        data: action.payload,
        meta: {
          ...state.meta,
          fetching: false,
          saved: true,
          last_updated: Date.now(),
          validations: {
            ...state.meta.validations,
            details: true
          }
        }
      };

    case GET_PRODUCT_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          failed: true,
          last_updated: ''
        }
      };

    case ADD_NEW_PRODUCT :
      return initialState;

    case PRODUCT_FIELD_CHANGED :
      return {
        ...state,
        meta: {
          ...state.meta,
          saved: false,
          last_updated: ''
        },
        data: {
          ...state.data,
          [action.field]: action.value
        }
      };

    case PRODUCT_SECTION_VALIDATION :
      let valid = false;
      if (action.errors <= 0) {
        valid = true;
      }
      return {
        ...state,
        meta: {
          ...state.meta,
          validations: {
            ...state.meta.validations,
            [action.section]: valid
          }
        }
      };

    case UPDATING_PRODUCT_FETCHING :
    case CREATE_PRODUCT_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta,
          saving: true,
          last_updated: ''
        }
      };

    case UPDATING_PRODUCT_FAILED :
    case CREATE_PRODUCT_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          saving: false
        }
      };

    case UPDATING_PRODUCT_RECEIVED :
    case CREATE_PRODUCT_RECEIVED :
      return {
        ...state,
        data: action.payload.product,
        meta: {
          ...state.meta,
          saved: true,
          saving: false,
          fetching: false,
          created: true,
          last_updated: Date.now()
        }
      };

    case ADD_PRODUCT_TAG_STATE :
      return {
        ...state,
        meta: {
          ...state.meta,
          saved: false
        },
        data: {
          ...state.data,
          tags: [
            ...state.data.tags, action.payload.tag
          ]
        }
      };

    case REMOVE_PRODUCT_TAG_STATE :
      const index = getIndexByKey(state.data.tags, action.payload.tag.id);
      return {
        ...state,
        meta: {
          ...state.meta,
          saved: false
        },
        data: {
          ...state.data,
          tags: [
            ...state.data.tags.slice(0, index),
            ...state.data.tags.slice(index + 1)
          ]
        }
      };

    case PRODUCT_GALLERY_IMAGE_STATE_ADD :
      return {
        ...state,
        meta: {
          ...state.meta,
          saved: false
        },
        data: {
          ...state.data,
          gallery: [
            ...state.data.gallery, action.payload.img
          ]
        }
      };

    case PRODUCT_GALLERY_IMAGE_STATE_REMOVE :
      const j = getIndexByKey(state.data.tags, action.payload.tag.id);
      return {
        ...state,
        meta: {
          ...state.meta,
          saved: false
        },
        data: {
          ...state.data,
          tags: [
            ...state.data.tags.slice(0, j),
            ...state.data.tags.slice(j + 1)
          ]
        }
      };

    default :
      return state;
  }
}

export default product;