import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import systemAlerts from './alerts/systemAlerts';
import navigation from './navigation';

// Auth
import login from './auth/login';

// Products
import products from './products'

// Users

export default combineReducers({
  systemAlerts,
  navigation,
  login,
  products,
  form: formReducer,
  routing: routerReducer
});