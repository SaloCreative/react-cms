import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import systemAlerts from './alerts/systemAlerts';
import navigation from './navigation';

// Auth
import login from './auth/login';

// Users
import users from './user/users';

export default combineReducers({
  systemAlerts,
  navigation,
  login,
  users,
  form: formReducer,
  routing: routerReducer
});