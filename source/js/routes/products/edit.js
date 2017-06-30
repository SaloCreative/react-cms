import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row } from 'components/core/grid';
import ProductsHeader from 'components/products/header';

export default class EditProduct extends Component {

  render() {
    return (
      <div id='product-edit'>
        <Helmet>
          <title>Edit Product</title>
        </Helmet>
        <ProductsHeader />
        <Row>
          <Column classes='product__wrapper'>
            Editing Product id: <strong>{ this.props.params.id}</strong>
          </Column>
          </Row>
      </div>
    );
  }
}

