// LOGIN reducer
import Cookies from 'universal-cookie';

import {
  LOG_IN_ATTEMPT,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_OUT_SUCCESS,
  SET_USER_STATE
} from 'actions/auth/authActions';

const cookies = new Cookies();

const initialState = {
  user: {},
  token: '',
  meta: {
    fetching: false,
    last_updated: ''
  }
};

function login(state = initialState, action) {
  switch (action.type) {

    case LOG_IN_ATTEMPT : {
      return {
        ...state,
        meta: {
          fetching: true
        }
      };
    }

    case LOG_IN_SUCCESS : {
      cookies.set('authToken', JSON.stringify(action.payload), { path: '/' });
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        meta: {
          fetching: false
        }
      };
    }

    case SET_USER_STATE : {
      const authToken = cookies.get('authToken');
      return {
        ...state,
        user: authToken.user,
        token: authToken.token,
        meta: {
          fetching: false
        }
      };
    }

    case LOG_IN_FAIL : {
      return {
        ...state,
        meta: {
          fetching: false
        }
      };
    }

    case LOG_OUT_SUCCESS : {
      return initialState;
    }

    default : {
      return state;
    }
  }
}

export default login;