import store from 'store';
import ErrorMessages from 'constants/messages/errorMessages';
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
      break;

    case 403 :
      store.dispatch(error(ErrorMessages.forbidden));
      break;

    case 404 :
      if (!componentHandleError) {
        store.dispatch(error(errorMessage));
        //browserHistory.push(routeCodes.ERROR);
      }
      break;

    default :
      if (!componentHandleError) {
        // Check for response object from API
        let errors = Object.keys(response);
        if (errors.length > 0) {
          let dispatched = 0;
          // Loop over and see if local translation available
          errors.forEach(function(errorItem) {
            let currentError = ErrorMessages[errorItem];
            if (currentError) {
              store.dispatch(error(currentError));
              dispatched++;
            }
          });
          // Check at least one error is dispatched
          if (dispatched <= 0) {
            store.dispatch(error(errorMessage));
          }
        } else {
          store.dispatch(error(errorMessage));
        }
      }
  }
}