const ErrorMessages = {
  login: {
    type: 'error',
    message: {
      en: 'Your username or password is incorrect.'
    }
  },
  storeFetchInfoFail: {
    type: 'error',
    message: {
      en: 'Could not get the requested store details at this time.'
    }
  },
  tillReportFetchFail: {
    type: 'error',
    message: {
      en: 'Could not get the requested till details at this time.'
    }
  },
  general: {
    type: 'error',
    message: {
      en: 'Whoops! Something went wrong'
    }
  },
  forbidden: {
    type: 'error',
    message: {
      en: 'You do not have permission to complete this action.'
    }
  }
};

export default ErrorMessages;