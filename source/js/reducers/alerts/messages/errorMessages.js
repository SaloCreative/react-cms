const ErrorMessages = {
  login: {
    type: 'error',
    message: {
      en: 'Your username or password is incorrect.'
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
  },
  getProductsFailed: {
    type: 'error',
    message: {
      en: 'Could not fetch the products list at this time. Please try again.'
    }
  }
};

export default ErrorMessages;