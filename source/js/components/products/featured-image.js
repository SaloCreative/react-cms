import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';

export default class FeaturedImage extends Component {

  render() {
    return (
      <Column classes='is-4'>
        <Card>
         Featured image
        </Card>
      </Column>
    );
  }
}

