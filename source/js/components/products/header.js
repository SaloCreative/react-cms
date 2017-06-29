import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { Row, Column } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';

export default class ProductsHeader extends Component {
  render() {
    return (
      <SecondaryHeader>
        <Column>
          <h3><FontAwesome name='angle-right' size='2x' /> Products</h3>
        </Column>
      </SecondaryHeader>
    );
  }
}