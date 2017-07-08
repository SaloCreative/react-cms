import ErrorMessages from 'constants/messages/errorMessages';
import WarningMessages from 'constants/messages/warningMessages';
import InfoMessages from 'constants/messages/infoMessages';
import SuccessMessages from 'constants/messages/successMessages';

// Error reducer
function systemAlerts(state = [], action) {
  switch (action.type) {

    case 'LOG_IN_FAIL' :
      return [ErrorMessages.login];

    case 'RECEIVED_TILL_REPORT_ERROR' :
      return [ErrorMessages.tillReportFetchFail];

    case 'API_FAILURE' :
      return [...state, action.payload.errorMessage];


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