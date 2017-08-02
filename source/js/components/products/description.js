import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import FroalaEditor from 'react-froala-wysiwyg'
import { Column, Row, Card } from 'components/core/grid';

export default class ProductDescription extends Component {

  render() {
    return (
      <Column classes='is-4'>
        <Card>
          Description
          <FroalaEditor tag='textarea'/>
        </Card>
      </Column>
    );
  }
}

