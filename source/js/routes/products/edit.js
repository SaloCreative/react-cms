import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from 'components/core/grid';
import LoadingWrapper from 'components/core/loader/loading-wrapper';
import ErrorMessages from 'constants/messages/errorMessages';

import ProductsHeader from 'components/products/header';
import ProductsSecondaryHeader from 'components/products/header-secondary';
import FeaturedImage from 'components/products/featured-image';
import ProductDetails from 'components/products/details';
import ProductTagsPicker from 'components/products/tags-picker';
import Gallery from 'components/products/gallery';
import ProductDescription from 'components/products/description';
import ProductDimensionsPicker from 'components/products/dimensions-picker';

export default class EditProduct extends Component {

  componentWillMount() {
    this.props.getProduct(this.props.params.id);
    if (shouldUpdate(this.props.productCategories.meta.last_updated, 300)) {
      this.props.getCategories();
    }
  }

  attemptProductFetch() {
    this.props.getProduct(this.props.params.id);
  }

  saveProduct() {
    console.log('save edits');
  }

  render() {
    const { product } = this.props;
    let displayContent = false;
    if (!product.meta.fetching && product.data.id) {
      displayContent = true;
    }
    return (
      <div id='product-add'>
        <Helmet>
          <title>Edit Product</title>
        </Helmet>
        <ProductsHeader />

        <ProductsSecondaryHeader { ...this.props }
          saveEdits={ () => this.saveProduct() } />

        <LoadingWrapper
          display={ displayContent }
          loading={ product.meta.fetching }
          error={ product.meta.failed }
          errorMessage={ ErrorMessages.getProductFailed.message }
          retryAction={ () => this.attemptProductFetch() } >

          <FeaturedImage />

          <ProductDetails { ...this.props }
            categories={ this.props.productCategories.data }
            showErrors={ true }/>

          <ProductTagsPicker />

          <Gallery />

          <ProductDescription />

          <ProductDimensionsPicker />

        </LoadingWrapper>
      </div>
    );
  }
}

EditProduct.propTypes = {
  getProduct: PropTypes.func
};
