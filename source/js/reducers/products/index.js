import {
  GET_PRODUCTS_FETCHING,
  GET_PRODUCTS_RECEIVED,
  GET_PRODUCTS_FAILED,
  UPDATING_PRODUCT_FETCHING,
  UPDATING_PRODUCT_RECEIVED,
  UPDATING_PRODUCT_FAILED
} from 'actions/products/types';

const initialState = {
  data: [],
  meta: {
    last_updated: '',
    failed: false
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
          ...state.meta,
          fetching: false,
          last_updated: Date.now(),
          current_page: action.payload.current_page,
          per_page: action.payload.per_page,
          total: action.payload.total,
        }
      };

    case GET_PRODUCTS_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          failed: true,
          last_updated: '',
          valid: false
        }
      };

    case UPDATING_PRODUCT_FETCHING :
      if (action.payload.i || action.payload.i === 0) {
        return {
          ...state,
          data: [
            ...state.data.slice(0, action.payload.i),
            { ...state.data[action.payload.i],
              meta: {
                ...state.data[action.payload.i].meta,
                fetching: true,
                last_updated: ''
              }
            },
            ...state.data.slice(action.payload.i + 1)
          ]
        }
      }
      return state;

    case UPDATING_PRODUCT_RECEIVED :
      if (action.payload.i || action.payload.i === 0) {
        return {
          ...state,
          data: [
            ...state.data.slice(0, action.payload.i),
              action.payload.product,
            ...state.data.slice(action.payload.i + 1)
          ]
        }
      }
      return state;

    case UPDATING_PRODUCT_FAILED :
      if (action.payload.i || action.payload.i === 0) {
        return {
          ...state,
          data: [
            ...state.data.slice(0, action.payload.i),
            { ...state.data[action.payload.i],
              meta: {
                ...state.data[action.payload.i].meta,
                fetching: false
              }
            },
            ...state.data.slice(action.payload.i + 1)
          ]
        }
      }
      return state;

    default :
      return state;
  }
}

export default products;