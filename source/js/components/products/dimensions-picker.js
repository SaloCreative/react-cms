import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from '@salocreative/react-ui';

export default class ProductDimensionsPicker extends Component {

  render() {
    return (
      <Column customClasses='is-4'>
        <Card>
          Dimensions
        </Card>
      </Column>
    );
  }
}
