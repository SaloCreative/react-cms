import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';

export default class ProductDetails extends Component {

  render() {
    return (
      <Column classes='is-4'>
        <Card>
          Details
        </Card>
      </Column>
    );
  }
}

