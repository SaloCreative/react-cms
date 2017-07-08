import {
  GET_PRODUCT_FETCHING,
  GET_PRODUCT_RECEIVED,
  GET_PRODUCT_FAILED,
  ADD_NEW_PRODUCT,
  PRODUCT_FIELD_CHANGED
} from 'actions/products/types';

const initialState = {
  data: {},
  meta: {
    last_updated: '',
    failed: false,
    saved: true
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
          fetching: true,
          failed: false,
          saved: true
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
          failed: false,
          saved: true,
          last_updated: Date.now()
        }
      };

    case GET_PRODUCT_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          failed: true,
          saved: true,
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
          fetching: false,
          failed: false,
          saved: false,
          last_updated: ''
        },
        data: {
          ...state.data,
          [action.field]: action.value
        }
      };

    default :
      return state;
  }
}

export default product;