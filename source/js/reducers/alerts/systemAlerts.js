import ErrorMessages from 'constants/messages/errorMessages';
import WarningMessages from 'constants/messages/warningMessages';
import InfoMessages from 'constants/messages/infoMessages';
import SuccessMessages from 'constants/messages/successMessages';

// Error reducer
function systemAlerts(state = { meta: {}, data: [] }, action) {
  switch (action.type) {

    case 'LOG_IN_FAIL' :
      return {
        ...state,
        data: [
          ...state.data, ErrorMessages.login
        ]
      };

    case 'API_FAILURE' :
      return {
        ...state,
        data: [
          ...state.data, action.payload.errorMessage
        ]
      };

    case 'CLEAR_SYSTEM_ALERT' :
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.i),
          ...state.data.slice(action.i + 1)
        ]
      };

    case 'WILL_CLEAR_ALL_SYSTEM_ALERTS' :
      return {
        ...state,
        meta: {
          ...state.meta, will_delete: true
        }
      };

    case 'CLEAR_ALL_SYSTEM_ALERTS' :
      if (state.meta.will_delete) {
        return {
          ...state,
          meta: {
            ...state.meta, will_delete: false
          },
          data: []
        };
      }
      return state;

    default:
      return state;
  }
}

export default systemAlerts;