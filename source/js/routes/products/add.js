import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row } from 'components/core/grid';
import ProductsHeader from 'components/products/header';

export default class AddProduct extends Component {

  render() {
    return (
      <div id='product-add'>
        <Helmet>
            <title>Add Product</title>
        </Helmet>
        <ProductsHeader />
        <Row>
          <Column classes='product__wrapper'>
            Add a product
          </Column>
        </Row>
      </div>
    );
  }
}

