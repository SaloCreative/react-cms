import {
  GET_PRODUCT_FETCHING,
  GET_PRODUCT_RECEIVED,
  GET_PRODUCT_FAILED,
  ADD_NEW_PRODUCT,
  PRODUCT_FIELD_CHANGED,
  PRODUCT_SECTION_VALIDATION,
  UPDATING_PRODUCT_FETCHING,
  UPDATING_PRODUCT_RECEIVED
} from 'actions/products/types';

const initialState = {
  data: {},
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
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: true,
          last_updated: ''
        }
      };

    case UPDATING_PRODUCT_RECEIVED :
      return {
        ...state,
        meta: {
          ...state.meta,
          saved: true,
          fetching: false,
          last_updated: Date.now()
        }
      };

    default :
      return state;
  }
}

export default product;