import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class ProductIndex extends Component {

  componentWillMount() {
    if (this.props.products.meta.last_updated) {
      if ((Date.now() - this.props.meta.last_updated) / 1000 > 300) {
        this.props.getProducts();
      }
    } else {
      this.props.getProducts();
    }

  }

  render() {
    return (
      <div className='page__product-index'>
        <Helmet>
            <title>Products</title>
        </Helmet>
        <div className='product__wrapper'>

        </div>
      </div>
    );
  }
}

ProductIndex.propTypes = {
  products: PropTypes.object,
  getProducts: PropTypes.func
};

ProductIndex.propDefaults = {
  products: {}
};

