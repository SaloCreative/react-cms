import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as productAddActions from 'actions/products/add';
import * as productEditActions from 'actions/products/edit';

// General components
import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from '@salocreative/react-ui';
import FeaturedImage from 'components/core/image/featured-image';

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

class AddProduct extends Component {

  constructor() {
    super();
    this.state = {
      sections: {
        details: false
      },
      valid: false
    }
  }

  componentWillMount() {
    this.props.addNewProduct();
  }

  checkAllValid() {
    const { product } = this.props;
    return product.meta.validations.details;
  }

  saveProduct() {
    if (this.checkAllValid()) {
      if (!this.props.product.meta.created) {
        this.props.createProduct(this.props.product.data);
      } else {
        this.props.editProduct(this.props.product.data);
      }
    } else {
      alert('There are validation errors');
    }
  }

  render() {
    const { productCategories, product } = this.props;
    return (
      <ProductWrapper { ...this.props } id='product-add'>
        <Helmet>
            <title>Add Product</title>
        </Helmet>

        <ProductsSecondaryHeader { ...this.props }
          saveEdits={ () => this.saveProduct() } />

        <Row>
          <FeaturedImage
            { ...this.props }
            image={ product.data.main_image }
          />

          <ProductDetails
            product={ product }
            categories={ productCategories.data }
          />

          <ProductTagsPicker />

          <Gallery />

          <ProductDescription />

          { /* <ProductDimensionsPicker /> */ }
        </Row>
      </ProductWrapper>
    );
  }
}

AddProduct.propTypes = {
  addNewProduct: PropTypes.func,
  createProduct: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productAddActions,
      productEditActions
    ), dispatch);
}

export default connect(null, mapDispatchToProps)(AddProduct);