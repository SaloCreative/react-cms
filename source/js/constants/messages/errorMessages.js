const ErrorMessages = {
  login: {
    type: 'error',
    message: 'Your username or password is incorrect.'
  },
  general: {
    type: 'error',
    message: 'Whoops! Something went wrong'
  },
  forbidden: {
    type: 'error',
    message: 'You do not have permission to complete this action.'
  },
  getMediaFailed: {
    type: 'error',
    message: 'Could not fetch the media list at this time'
  },
  addProductFailed: {
    type: 'error',
    message: 'Could not add the product at this time'
  },
  getProductFailed: {
    type: 'error',
    message: 'Could not fetch the product at this time'
  },
  updateProductFailed: {
    type: 'error',
    message: 'Could not update the product at this time'
  },
  slug: {
    type: 'error',
    message: 'That url has already been taken'
  },
  sku: {
    type: 'error',
    message: 'The SKU has already been taken'
  },
  getProductsFailed: {
    type: 'error',
    message: 'Could not fetch the products list at this time'
  },
  getProductsCategoriesFailed: {
    type: 'error',
    message: 'Could not fetch the product categories at this time. Please try again.'
  },
  assignTagsFailed: {
    type: 'error',
    message: 'Could not assign new tags at this time. Please try again.'
  }
};

export default ErrorMessages;