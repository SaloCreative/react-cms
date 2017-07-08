import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { shouldUpdate } from 'actions/global/utilityFunctions';
import { Column, Row, Card } from 'components/core/grid';
import ProductsHeader from 'components/products/header';
import FeaturedImage from 'components/products/featured-image';
import ProductDetails from 'components/products/details';
import ProductTagsPicker from 'components/products/tags-picker';
import Gallery from 'components/products/gallery';
import ProductDescription from 'components/products/description';
import ProductDimensionsPicker from 'components/products/dimensions-picker';

export default class AddProduct extends Component {

  componentWillMount() {
    this.props.addNewProduct();
    if (shouldUpdate(this.props.productCategories.meta.last_updated, 300)) {
      this.props.getCategories();
    }
  }

  render() {
    return (
      <div id='product-add'>
        <Helmet>
            <title>Add Product</title>
        </Helmet>
        <ProductsHeader />
        <Row>
          <FeaturedImage />
          <ProductDetails categories={ this.props.productCategories.data } />
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


