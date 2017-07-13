import {
  GET_PRODUCT_TAGS_FETCHING,
  GET_PRODUCT_TAGS_RECEIVED,
  GET_PRODUCT_TAGS_FAILED
} from 'actions/products/types';

const initialState = {
  data: [],
  meta: {
    last_updated: ''
  }
};

// Nav reducer
function productTags(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCT_TAGS_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta, fetching: true
        }
      };

    case GET_PRODUCT_TAGS_RECEIVED :
      return {
        ...state,
        data: action.payload,
        meta: {
          fetching: false,
          last_updated: Date.now()
        }
      };

    case GET_PRODUCT_TAGS_FAILED :
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

export default productTags;