import {
  GET_PRODUCTS_FETCHING,
  GET_PRODUCTS_RECEIVED,
  GET_PRODUCTS_FAILED,
  UPDATING_PRODUCT_FETCHING
} from 'actions/products/types';

const initialState = {
  data: [],
  meta: {
    last_updated: ''
  }
};

// Nav reducer
function products(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCTS_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta, fetching: true
        }
      };

    case GET_PRODUCTS_RECEIVED :
      return {
        ...state,
        data: action.payload.data,
        meta: {
          fetching: false,
          last_updated: Date.now(),
          current_page: action.payload.current_page,
          per_page: action.payload.per_page,
          total: action.payload.total
        }
      };

    case GET_PRODUCTS_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          last_updated: ''
        }
      };

    default :
      return state;
  }
}

export default products;