import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row } from 'components/structural/grid';
import SecondaryHeader from 'components/structural/secondaryHeader';

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
          <Column columnClass='product__wrapper'>
            Editing Product id: <strong>{ this.props.params.id}</strong>
          </Column>
          </Row>
      </div>
    );
  }
}

