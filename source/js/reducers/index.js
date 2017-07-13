import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { systemAlerts } from '@salocreative/react-redux-alerts';
import navigation from './navigation';

// Auth
import login from './auth/login';

// Media
import media from './media';

// Products
import products from './products';
import product from './products/product';
import productFilter from './products/filters';
import productCategories from './products/categories';
import productTags from './products/tags';

// Users

export default combineReducers({
  systemAlerts,
  navigation,
  login,
  media,
  products,
  product,
  productFilter,
  productCategories,
  productTags,
  form: formReducer,
  routing: routerReducer
});