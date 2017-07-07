import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

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
          <ProductDetails />
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


