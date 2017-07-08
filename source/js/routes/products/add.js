import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';

import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from 'components/core/grid';
import ProductsHeader from 'components/products/header';
import ProductsSecondaryHeader from 'components/products/header-secondary';
import FeaturedImage from 'components/products/featured-image';
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

  saveProduct() {
    console.log('save edits');
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
          <FeaturedImage />

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
  addNewProduct: PropTypes.func
};


