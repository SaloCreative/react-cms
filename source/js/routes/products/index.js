import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ProductListItem from 'components/products/list';
import Loader from 'components/loader';

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
    const { products } = this.props;
    return (
      <div id='product-index' className='row'>
        <div className='product__wrapper column'>
          <Helmet>
              <title>Products</title>
          </Helmet>
          <div className='content_table product-index'>
            <div class='content-table__header'>

            </div>
            <Loader display={ products.meta.fetching } />
            {products.data.map((product, i) =>
              <ProductListItem key={ i } i={ i } product={ product } />
            )}
          </div>
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

