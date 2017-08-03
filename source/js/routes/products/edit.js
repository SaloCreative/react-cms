import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as productGetActions from 'actions/products/get';
import * as productEditActions from 'actions/products/edit';

// General components
import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from 'components/core/grid';
import LoadingWrapper from 'components/core/loader/loading-wrapper';
import FeaturedImage from 'components/core/image/featured-image';
import ErrorMessages from 'constants/messages/errorMessages';

// Containers
import ProductWrapper from 'containers/products';

// Product components
import ProductsHeader from 'components/products/header';
import ProductsSecondaryHeader from 'components/products/header-secondary';
import ProductDetails from 'components/products/details';
import ProductTagsPicker from 'components/products/tags-picker';
import Gallery from 'components/products/gallery';
import ProductDescription from 'components/products/description';
import ProductDimensionsPicker from 'components/products/dimensions-picker';

class EditProduct extends Component {

  componentWillMount() {
    this.props.getProduct(this.props.params.id);
  }

  attemptProductFetch() {
    this.props.getProduct(this.props.params.id);
  }

  checkAllValid() {
    const { product } = this.props;
    return product.meta.validations.details;
  }

  saveProduct() {
   if (this.checkAllValid()) {
     this.props.editProduct(this.props.product.data);
   } else {
     alert('There are validation errors');
   }
  }

  render() {
    const { product, productCategories } = this.props;
    let displayContent = false;
    if (!product.meta.fetching && product.data.id) {
      displayContent = true;
    }
    return (
      <ProductWrapper { ...this.props } id='product-edit'>
        <Helmet>
          <title>Edit Product</title>
        </Helmet>

        <ProductsSecondaryHeader { ...this.props }
          saveEdits={ () => this.saveProduct() } />

        <LoadingWrapper
          display={ displayContent }
          loading={ product.meta.fetching }
          error={ product.meta.failed }
          errorMessage={ ErrorMessages.getProductFailed.message }
          retryAction={ () => this.attemptProductFetch() } >

          <FeaturedImage image={ product.data.main_image } { ...this.props }/>

          <ProductDetails { ...this.props }
            categories={ productCategories.data }
            showErrors={ true } />

          <ProductTagsPicker />

          <Gallery />

          <ProductDescription content={ product.data.content }/>

          <ProductDimensionsPicker />

        </LoadingWrapper>
      </ProductWrapper>
    );
  }
}

EditProduct.propTypes = {
  getProduct: PropTypes.func,
  editProduct: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productGetActions,
      productEditActions
    ), dispatch);
}

export default connect(null, mapDispatchToProps)(EditProduct);