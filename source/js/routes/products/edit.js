import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';

export default class EditProduct extends Component {

  render() {
    return (
      <div id='product-edit'>
        <Helmet>
          <title>Edit Product</title>
        </Helmet>
        <SecondaryHeader>
          <Row>
            <Column>
              Men
            </Column>
          </Row>
        </SecondaryHeader>
        <Row>
          <Column classes='product__wrapper'>
            Editing Product id: <strong>{ this.props.params.id}</strong>
          </Column>
          </Row>
      </div>
    );
  }
}

