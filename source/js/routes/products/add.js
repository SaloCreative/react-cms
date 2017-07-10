import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';

import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from 'components/core/grid';
import FeaturedImage from 'components/core/image/featured-image';

import ProductsHeader from 'components/products/header';
import ProductsSecondaryHeader from 'components/products/header-secondary';
import ProductDetails from 'components/products/details';
import ProductTagsPicker from 'components/products/tags-picker';
import Gallery from 'components/products/gallery';
import ProductDescription from 'components/products/description';
import ProductDimensionsPicker from 'components/products/dimensions-picker';

export default class AddProduct extends Component {

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
    if (shouldUpdate(this.props.productCategories.meta.last_updated, 300)) {
      this.props.getCategories();
    }
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
      <div id='product-add'>
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
      </div>
    );
  }
}

AddProduct.propTypes = {
  addNewProduct: PropTypes.func,
  createProduct: PropTypes.func
};


