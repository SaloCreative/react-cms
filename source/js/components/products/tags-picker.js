import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';

export default class ProductTagsPicker extends Component {

  render() {
    return (
      <Column classes='is-4'>
        <Card>
          Tags picker
        </Card>
      </Column>
    );
  }
}
