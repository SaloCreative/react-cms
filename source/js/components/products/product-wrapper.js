import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { shouldUpdate } from 'actions/global/utilityFunctions';

export default class ProductWrapper extends Component {

  componentWillMount() {
    if (shouldUpdate(this.props.productCategories.meta.last_updated, 300)) {
      this.props.getCategories();
    }
  }

  render() {
    return (
      <div className='product-load-wrapper' id={ this.props.id }>
        { this.props.children }
      </div>
    );
  }
}

ProductWrapper.propTypes = {
  children: PropTypes.any,
  createProduct: PropTypes.func,
  id: PropTypes.string
};

ProductWrapper.defaultProps = {
  children: '',
  id: 'product-container'
};

