import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Column } from '@salocreative/react-ui';
import SecondaryHeader from 'components/headers/secondary';

import { routeCodes } from 'routes';

export default class ProductsHeader extends Component {
  render() {
    return (
      <SecondaryHeader>
        <Column>
          <h3 className='secondary-header__title'><FontAwesome name='angle-right' /> Products</h3>
        </Column>
      </SecondaryHeader>
    );
  }
}