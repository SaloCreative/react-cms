import store from 'store';
import ErrorMessages from 'reducers/alerts/messages/errorMessages';
import { browserHistory } from 'react-router';
import { routeCodes } from 'routes';

/**
 * This action is called by `handleError` to show the API failure message
 * @param errorMessage {String} - The error message to display
 */
function error(errorMessage) {
  return {
    type: 'API_FAILURE',
    payload: {
      errorMessage
    }
  };
}

export function ApiError(responseCode, errorMessage, response, componentHandleError = false) {
  switch (responseCode) {
    case 401 :
      console.log('401 Error - Not authorised');
    case 403 :
      store.dispatch(error(ErrorMessages.forbidden));
    case 404 :
      if (!componentHandleError) {
        //browserHistory.push(routeCodes.ERROR);
      }
    default :
      if (!componentHandleError) {
        store.dispatch(error(errorMessage));
      }
  }
}