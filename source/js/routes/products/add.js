import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as productAddActions from 'actions/products/add';
import * as productEditActions from 'actions/products/edit';

import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from 'components/core/grid';
import FeaturedImage from 'components/core/image/featured-image';

import ProductWrapper from 'components/products/product-wrapper';
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
    return (
      <ProductWrapper { ...this.props } id='product-add'>
        <Helmet>
            <title>Add Product</title>
        </Helmet>
        <ProductsHeader />
        <ProductsSecondaryHeader { ...this.props }
          saveEdits={ () => this.saveProduct() } />

        <Row>
          <FeaturedImage image={ this.props.product.data.main_image } { ...this.props } />

          <ProductDetails { ...this.props }
            categories={ this.props.productCategories.data } />

          <ProductTagsPicker />

          <Gallery />

          <ProductDescription />

          <ProductDimensionsPicker />
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