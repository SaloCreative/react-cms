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
  getProductFailed: {
    type: 'error',
    message: {
      en: 'Could not fetch the product at this time. Please try again.'
    }
  },
  getProductsFailed: {
    type: 'error',
    message: {
      en: 'Could not fetch the products list at this time. Please try again.'
    }
  },
  getProductsCategoriesFailed: {
    type: 'error',
    message: {
      en: 'Could not fetch the product categories at this time. Please try again.'
    }
  }
};

export default ErrorMessages;