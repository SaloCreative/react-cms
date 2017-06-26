import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ProductListItem from 'components/products/list';
import Loader from 'components/loader';
import { DataTable } from 'components/structural/dataTable';
import { Column, Row } from 'components/structural/grid';
import SecondaryHeader from 'components/structural/secondaryHeader';
import SaloFormInput from 'components/forms/input';
import SaloFromSelect from 'components/forms/select';

export default class ProductIndex extends Component {

  componentWillMount() {
    if (this.props.products.meta.last_updated) {
      if ((Date.now() - this.props.products.meta.last_updated) / 1000 > 300) {
        this.props.getProducts();
      }
    } else {
      this.props.getProducts();
    }
    if (this.props.productCategories.meta.last_updated) {
      if ((Date.now() - this.props.productCategories.meta.last_updated) / 1000 > 300) {
        this.props.getCategories();
      }
    } else {
      this.props.getCategories();
    }
  }

  onChange(field) {
    return (e) => {
      this.props.updateProductFilters(field, e.target.value);
    };
  }

  renderPageHeader() {
    return (
      <SecondaryHeader>
        <Row>
          <Column columnClass='search__text'>
            <SaloFormInput
              name='product-search'
              type='search'
              label='Search'
              value={ this.props.productFilter.search }
              onFieldChanged={ this.onChange('search') }/>
          </Column>

          <Column columnClass='search__category'>
            <SaloFromSelect
              name="product-category"
              label="Filter by category"
              value={ this.props.productFilter.category }
              onFieldChanged={ this.onChange('category') }/>
          </Column>

          <Column columnClass='search__order-by'>
            <SaloFromSelect
              name="product-orderby"
              label="Sort by"
              value={ this.props.productFilter.orderBy }
              onFieldChanged={ this.onChange('order') }>
              <option value="created_at-DESC">Newest product</option>
              <option value="created_at-ASC">Oldest product</option>
              <option value="price-DESC">Highest price</option>
              <option value="price-ASC">Lowest price</option>
            </SaloFromSelect>
          </Column>
        </Row>
      </SecondaryHeader>
    );
  }

  render() {
    const { products } = this.props;
    return (
      <div id='product-index'>
        { this.renderPageHeader() }
        <Row>
          <Column columnClass='product__wrapper'>
            <Helmet>
              <title>Products</title>
            </Helmet>
            <DataTable
              tableClass='product-index'
              loading={ products.meta.fetching }>
              {products.data.map((product, i) =>
                <ProductListItem { ...this.props } key={ i } i={ i } product={ product }/>
              )}
            </DataTable>
          </Column>
        </Row>
      </div>
    );
  }
}

ProductIndex.propTypes = {
  products: PropTypes.object,
  getProducts: PropTypes.func,
  updateProductFilters: PropTypes.func,
  getCategories: PropTypes.func
};

ProductIndex.propDefaults = {
  products: {}
};

