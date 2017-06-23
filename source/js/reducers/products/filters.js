import {
  UPDATE_PRODUCT_FILTER_CATEGORY,
  UPDATE_PRODUCT_FILTER_SEARCH,
  UPDATE_PRODUCT_FILTER_ORDER
} from 'actions/products/types';

const initialState = {
  category: '',
  search: '',
  orderBy: 'created_at-DESC'
};

// Nav reducer
function productFilter(state = initialState, action) {
  switch (action.type) {

    case UPDATE_PRODUCT_FILTER_CATEGORY :
      return {
        ...state,
        category: action.value
      };

    case UPDATE_PRODUCT_FILTER_SEARCH :
      return {
        ...state,
        search: action.value
      };

    case UPDATE_PRODUCT_FILTER_ORDER :
      return {
        ...state,
        orderBy: action.value
      };

    default :
      return state;
  }
}

export default productFilter;