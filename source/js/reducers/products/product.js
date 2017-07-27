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
  ADD_PRODUCT_TAG_SAVING,
  ADD_PRODUCT_TAG_SAVED,
  ADD_PRODUCT_TAG_FAILED,
  REMOVE_PRODUCT_TAG_SAVING,
  REMOVE_PRODUCT_TAG_SAVED,
  REMOVE_PRODUCT_TAG_FAILED
} from 'actions/products/tags/types';

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

    case ADD_PRODUCT_TAG_SAVED :
      return {
        ...state,
        data: {
          ...state.data,
          tags: [
            ...state.data.tags, action.payload.tag
          ]
        }
      };

    default :
      return state;
  }
}

export default product;