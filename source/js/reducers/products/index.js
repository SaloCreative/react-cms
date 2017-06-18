import {
  GET_PRODUCTS_FETCHING,
  GET_PRODUCTS_RECEIVED,
  GET_PRODUCTS_FAILED
} from 'actions/products';

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

    default :
      return state;
  }
}

export default products;