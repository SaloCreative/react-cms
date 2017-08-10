import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pagination from '@salocreative/react-pagination';

// Actions
import * as productListActions from 'actions/products';
import * as productEditActions from 'actions/products/edit';

// General components
import { paginationStyles } from 'constants/config';
import LoadingWrapper from 'components/core/loader/loading-wrapper';
import ErrorMessages from 'constants/messages/errorMessages';
import { shouldUpdate } from 'actions/global/utilityFunctions';
import { DataTable, DataTableHeader, DataTableRow } from 'components/tables/data-table';
import { Column, Row, Container, Card } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';
import SaloFormInput from 'components/forms/input';
import SaloFormSelect from 'components/forms/select';

// Containers
import ProductWrapper from 'containers/products';

// Product components
import { ProductFilter } from 'actions/products/filter';
import ProductListItem from 'components/products/list-item';
import ProductsHeader from 'components/products/header';

let filter = new ProductFilter;

class ProductIndex extends Component {

  componentWillMount() {
    if (shouldUpdate(this.props.products.meta.last_updated, 300)) {
      this.props.getProducts();
    }
  }

  attemptProductsFetch() {
    this.props.getProducts();
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
        <Column customClasses='search__text'>
          <SaloFormInput
            icon='search'
            name='product-search'
            type='search'
            label='Search'
            value={ this.props.productFilter.search }
            onFieldChanged={ this.onChange('search') }/>
        </Column>

        <Column customClasses='search__category'>
          <SaloFormSelect
            icon='sitemap'
            name='product-category'
            label='Filter by category'
            value={ this.props.productFilter.category }
            onFieldChanged={ this.onChange('category') }/>
        </Column>

        <Column customClasses='search__order-by'>
          <SaloFormSelect
            icon='sort'
            name='product-orderby'
            label='Sort by'
            value={ this.props.productFilter.orderBy }
            onFieldChanged={ this.onChange('order') }>
            <option value="created_at-DESC">Newest product</option>
            <option value="created_at-ASC">Oldest product</option>
            <option value="price-DESC">Highest price</option>
            <option value="price-ASC">Lowest price</option>
          </SaloFormSelect>
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

  renderTableHeader() {
    return (
      <DataTableHeader>
        <Column customClasses='product-list__image'>
          <p>Title</p>
        </Column>
        <Column customClasses='product-list__title' />
        <Column customClasses='product-list__sku'>
          <p>SKU</p>
        </Column>
        <Column customClasses='product-list__price'>
          <p>Price</p>
        </Column>
        <Column customClasses='product-list__stock'>
          <p>Stock</p>
        </Column>
        <Column customClasses='product-list__active'>
          <p>Active</p>
        </Column>
        <Column customClasses='product-list__actions' />
      </DataTableHeader>
    );
  }

  render() {
    const { products } = this.props;
    let displayContent = false;
    if (!products.meta.fetching && products.data.length > 0) {
      displayContent = true;
    }
    return (
      <ProductWrapper id='product-index'>
        <Helmet>
          <title>Products</title>
        </Helmet>
        <ProductsHeader />
        <LoadingWrapper
          display={ displayContent }
          loading={ products.meta.fetching }
          error={ products.meta.failed }
          errorMessage={ ErrorMessages.getProductsFailed.message }
          retryAction={ () => this.attemptProductsFetch() } >

          <Column customClasses='product__wrapper'>
            <DataTable
              tableClass='product-index'
              tableHeader={ this.renderTableHeader() }
              loading={ products.meta.fetching }
              filters='ewf'
              title='Products' >

              {products.data.map((product, i) =>
                <ProductListItem { ...this.props } key={ i } i={ i } product={ product }/>
              )}

              { this.renderPagination() }

            </DataTable>
          </Column>

        </LoadingWrapper>
      </ProductWrapper>
    );
  }
}

ProductIndex.propTypes = {
  products: PropTypes.object,
  getProducts: PropTypes.func,
  updateProductFilters: PropTypes.func
};

ProductIndex.propDefaults = {
  products: {}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productListActions,
      productEditActions
    ), dispatch);
}

export default connect(null, mapDispatchToProps)(ProductIndex);