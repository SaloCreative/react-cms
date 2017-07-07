import {
  GET_PRODUCT_FETCHING,
  GET_PRODUCT_RECEIVED,
  GET_PRODUCT_FAILED,
  ADD_NEW_PRODUCT
} from 'actions/products/types';

const initialState = {
  data: {},
  meta: {
    last_updated: '',
    failed: false
  }
};

// Nav reducer
function product(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCT_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta, fetching: true
        },
        data: {}
      };

    case GET_PRODUCT_RECEIVED :
      return {
        ...state,
        data: action.payload,
        meta: {
          fetching: false,
          last_updated: Date.now(),
          failed: false
        }
      };

    case GET_PRODUCT_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          last_updated: '',
          failed: true
        }
      };

    case ADD_NEW_PRODUCT :
      return initialState;

    default :
      return state;
  }
}

export default product;