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
      en: 'Could not fetch the product at this time'
    }
  },
  updateProductFailed: {
    type: 'error',
    message: {
      en: 'Could not update the product at this time'
    }
  },
  slug: {
    type: 'error',
    message: {
      en: 'That url has already been taken'
    }
  },
  sku: {
    type: 'error',
    message: {
      en: 'The SKU has already been taken'
    }
  },
  getProductsFailed: {
    type: 'error',
    message: {
      en: 'Could not fetch the products list at this time'
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