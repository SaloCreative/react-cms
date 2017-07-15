import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';;

import { Row, Column } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';

import { routeCodes } from 'routes';

export default class ProductsHeader extends Component {
  render() {
    return (
      <SecondaryHeader>
        <Column>
          {/*<h3 className='secondary-header__title'><FontAwesome name='angle-right' /> Products</h3>*/}
        </Column>
        <div className='header-meta'>
          <Link to={ routeCodes.PRODUCT.ADD } className='header-action-button'>
            <FontAwesome name='plus' />
            <span className='header-action-label'>Add</span>
          </Link>
          <Link to={ routeCodes.PRODUCT.INDEX } className='header-action-button active'>
            <FontAwesome name='shopping-cart' />
            <span className='header-action-label'>Products</span>
          </Link>
          <Link className='header-action-button'>
            <FontAwesome name='sitemap' />
            <span className='header-action-label'>Categories</span>
          </Link>
          <Link className='header-action-button'>
            <FontAwesome name='tag' />
            <span className='header-action-label'>Tags</span>
          </Link>
          <Link className='header-action-button'>
            <FontAwesome name='arrows-h' />
            <span className='header-action-label'>Dimensions</span>
          </Link>
        </div>
      </SecondaryHeader>
    );
  }
}