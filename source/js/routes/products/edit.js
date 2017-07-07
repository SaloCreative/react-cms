import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';
import LoadingWrapper from 'components/core/loader/loading-wrapper';
import ErrorMessages from 'constants/messages/errorMessages';

import ProductsHeader from 'components/products/header';
import FeaturedImage from 'components/products/featured-image';
import ProductDetails from 'components/products/details';
import ProductTagsPicker from 'components/products/tags-picker';
import Gallery from 'components/products/gallery';
import ProductDescription from 'components/products/description';
import ProductDimensionsPicker from 'components/products/dimensions-picker';

export default class EditProduct extends Component {

  componentWillMount() {
    this.props.getProduct(this.props.params.id);
  }

  attemptProductFetch() {
    this.props.getProduct(this.props.params.id);
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
        <LoadingWrapper
          display={ displayContent }
          loading={ product.meta.fetching }
          error={ product.meta.failed }
          errorMessage={ ErrorMessages.getProductFailed.message }
          retryAction={ () => this.attemptProductFetch() } >

          <FeaturedImage />
          <ProductDetails />
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
