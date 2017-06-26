import {
  GET_PRODUCT_CATEGORIES_FETCHING,
  GET_PRODUCT_CATEGORIES_RECEIVED,
  GET_PRODUCT_CATEGORIES_FAILED
} from 'actions/products/types';

const initialState = {
  data: [],
  meta: {
    last_updated: ''
  }
};

// Nav reducer
function productCategories(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCT_CATEGORIES_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta, fetching: true
        }
      };

    case GET_PRODUCT_CATEGORIES_RECEIVED :
      return {
        ...state,
        data: action.payload,
        meta: {
          fetching: false,
          last_updated: Date.now()
        }
      };

    case GET_PRODUCT_CATEGORIES_FAILED :
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

export default productCategories;