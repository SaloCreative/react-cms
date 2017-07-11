import ErrorMessages from 'constants/messages/errorMessages';
import WarningMessages from 'constants/messages/warningMessages';
import InfoMessages from 'constants/messages/infoMessages';
import SuccessMessages from 'constants/messages/successMessages';

import { getIndexByKey } from 'actions/global/utilityFunctions';

// Error reducer
function systemAlerts(state = [], action) {

  let id = Math.floor((Math.random() * 9999) + 1000);
  switch (action.type) {

    case 'LOG_IN_FAIL' :
      return [
        {
          id,
          error: ErrorMessages.login
        }
      ];

    case 'API_FAILURE' :
      return [
        ...state,
        {
          id,
          error: action.payload.errorMessage
        }
      ];

    case 'WILL_CLEAR_SYSTEM_ALERT' :
      return state;

    case 'CLEAR_SYSTEM_ALERT' :
      const index = getIndexByKey(state, action.alert);
      return [
        ...state.slice(0,index),
        ...state.slice(index + 1)
      ];

    case 'CLEAR_ALL_SYSTEM_ALERTS' :
      return {};

    default:
      return state;
  }
}

export default systemAlerts;