import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { Row, Column } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';

export default class ProductsHeader extends Component {
  render() {
    return (
      <SecondaryHeader>
        <Column>
          {/*<h3 className='secondary-header__title'><FontAwesome name='angle-right' /> Products</h3>*/}
        </Column>
        <div className='header-meta'>
          <a class='header-action-button'>
            <FontAwesome name='plus' />
            <span className='header-action-label'>Add</span>
          </a>
          <a class='header-action-button active'>
            <FontAwesome name='shopping-cart' />
            <span className='header-action-label'>Products</span>
          </a>
          <a class='header-action-button'>
            <FontAwesome name='sitemap' />
            <span className='header-action-label'>Categories</span>
          </a>
          <a class='header-action-button'>
            <FontAwesome name='tag' />
            <span className='header-action-label'>Tags</span>
          </a>
          <a class='header-action-button'>
            <FontAwesome name='arrows-h' />
            <span className='header-action-label'>Dimensions</span>
          </a>
        </div>
      </SecondaryHeader>
    );
  }
}