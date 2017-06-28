import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Pagination from '@salocreative/react-pagination';
import { paginationStyles } from 'constants/config';
import Loader from 'components/core/loader';
import { DataTable, DataTableHeader, DataTableRow } from 'components/tables/content-table';
import { Column, Row, Container, Card } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';
import SaloFormInput from 'components/forms/input';
import SaloFromSelect from 'components/forms/select';

import { shouldUpdate } from 'actions/global/utilityFunctions';
import { ProductFilter } from 'actions/products/filter';
import ProductListItem from 'components/products/list-item';

let filter = new ProductFilter;

export default class ProductIndex extends Component {

  componentWillMount() {
    if (shouldUpdate(this.props.products.meta.last_updated, 300)) {
      this.props.getProducts();
    }
    if (shouldUpdate(this.props.productCategories.meta.last_updated, 300)) {
      this.props.getCategories();
    }
  }

  onChange(field) {
    return (e) => {
      this.props.updateProductFilters(field, e.target.value);
    };
  }

  changePage() {
    return (e) => {
      filter.page = parseInt(e.target.getAttribute('data-page'));
      this.props.getProducts(filter);
    };
  }

  renderFilterHeader() {
    return (
      <Row>
        <Column classes='search__text'>
          <SaloFormInput
            icon='search'
            name='product-search'
            type='search'
            label='Search'
            value={ this.props.productFilter.search }
            onFieldChanged={ this.onChange('search') }/>
        </Column>

        <Column classes='search__category'>
          <SaloFromSelect
            icon='sitemap'
            name='product-category'
            label='Filter by category'
            value={ this.props.productFilter.category }
            onFieldChanged={ this.onChange('category') }/>
        </Column>

        <Column classes='search__order-by'>
          <SaloFromSelect
            icon='sort'
            name='product-orderby'
            label='Sort by'
            value={ this.props.productFilter.orderBy }
            onFieldChanged={ this.onChange('order') }>
            <option value="created_at-DESC">Newest product</option>
            <option value="created_at-ASC">Oldest product</option>
            <option value="price-DESC">Highest price</option>
            <option value="price-ASC">Lowest price</option>
          </SaloFromSelect>
        </Column>
      </Row>
    );
  }

  renderPagination() {
    const { products } = this.props;
    if (products && products.meta.total) {
      return (
        <Pagination
          total={ products.meta.total }
          page={ products.meta.current_page }
          perPage={ parseInt(products.meta.per_page) }
          changePage={ (e) => this.changePage(e) }
          styles={ paginationStyles } />
      );
    }
    return null;
  }

  render() {
    const { products } = this.props;
    return (
      <div id='product-index'>
        <Helmet>
          <title>Products</title>
        </Helmet>
        <SecondaryHeader>
        </SecondaryHeader>
        { this.renderFilterHeader() }
        <Row>
          <Column classes='product__wrapper'>
            <Card classes='content_table_card'>
              <DataTable
                tableClass='product-index'
                loading={ products.meta.fetching } >
                {products.data.map((product, i) =>
                  <DataTableRow key={ i }>
                    <ProductListItem { ...this.props } i={ i } product={ product }/>
                  </DataTableRow>
                )}
                { this.renderPagination() }
              </DataTable>
            </Card>
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

