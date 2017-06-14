import ErrorMessages from './messages/errorMessages';
import WarningMessages from './messages/warningMessages';
import InfoMessages from './messages/infoMessages';
import SuccessMessages from './messages/successMessages';

// Error reducer
function systemAlerts(state = [], action) {
  switch (action.type) {

    case 'LOG_IN_FAIL' :
      return [ErrorMessages.login];

    case 'RECEIVED_TILL_REPORT_ERROR' :
      return [ErrorMessages.tillReportFetchFail];

    case 'API_FAILURE' :
      return [action.payload.errorMessage];

    case 'CLEAR_SYSTEM_ALERT' :
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];

    default:
      return state;
  }
}

export default systemAlerts;