import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ProductListItem from 'components/products/list';
import Loader from 'components/loader';
import { DataTable, DataTableHeader } from 'components/structural/dataTable';
import SaloFormInput from 'components/forms/text'

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

  renderTableHeader() {
    return (
      <DataTableHeader>
        <div className='search__text'>
          <label>Search products</label>
          <input type="search" />
        </div>
        <SaloFormInput />
        <div className='search__category'>
          <select>
            <option value="">Select a category</option>
          </select>
        </div>
        <div className='search__order-by'>
          <select>
            <option value="created_at-DESC">Newest product</option>
            <option value="created_at-ASC">Oldest product</option>
            <option value="price-DESC">Highest price</option>
            <option value="price-ASC">Lowest price</option>
          </select>
        </div>
      </DataTableHeader>
    );
  }

  render() {
    const { products } = this.props;
    return (
      <div id='product-index' className='row'>
        <div className='product__wrapper column'>
          <Helmet>
              <title>Products</title>
          </Helmet>
          <DataTable tableClass='product-index' tableHeader={ this.renderTableHeader() } loading={ products.meta.fetching }>
            {products.data.map((product, i) =>
              <ProductListItem { ...this.props } key={ i } i={ i } product={ product } />
            )}
          </DataTable>
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

