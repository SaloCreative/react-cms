import { browserHistory } from 'react-router';
import { CALL_API, getJSON } from 'redux-api-middleware';
import { ApiError } from 'apiErrorHandler';

import { routeCodes } from 'routes';
import auth from './auth';
import { getObjectByKey } from 'actions/global/utilityFunctions';

export const LOG_IN_ATTEMPT = 'LOG_IN_ATTEMPT';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const SET_USER_STATE = 'SET_USER_STATE';

export function logOutSuccess() {
  return {
    type: LOG_OUT_SUCCESS
  };
}

export function setUserState() {
  return {
    type: SET_USER_STATE
  };
}

export function logOutUser() {
  return function (dispatch) {
    auth.logOut();
    dispatch(logOutSuccess());
    browserHistory.push(routeCodes.LOGIN);
  };
}

export const loginUser = (credentials, returnUrl) => ({
  [CALL_API]: {
    types: [
      {
        type: LOG_IN_ATTEMPT,
        payload: {
          returnUrl
        },
        meta: {
          fetching: true,
          last_updated: ''
        }
      },
      {
        type: LOG_IN_SUCCESS,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return json;
          });
        },
        meta: {
          fetching: false,
          last_updated: Date.now()
        }
      },
      {
        type: LOG_IN_FAIL,
        meta: {
          fetching: false,
          last_updated: ''
        }
      }
    ],
    endpoint: 'http://local.api.salocreative.co.uk/api/v1/auth/login',
    method: 'POST',
    headers: {
      'X-API-Token' : '',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }
});