import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Switch from 'components/switch';

export default class ProductListItem extends Component {

  toggleStock(e, id, i) {
    console.log(e);
  }

  toggleOnline(e, product, i) {
    this.props.toggleProductOnline(product, e, i);
  }

  render() {
    const { product, i } = this.props;
    return (
      <div className='product-list__item column'>
        <div className='product-list__image'>
        </div>
        <div className='product-list__title column'>
          <h3>{ product.title }</h3>
          <p>{ product.category_id }</p>
        </div>
        <div className='product-list__sku column'>
          { product.sku }
        </div>
        <div className='product-list__price column'>
          { product.price }
        </div>
        <div className='product-list__stock column'>
          <Switch label='Available' labelOff='Sold' state={ product.inStock } switch={ (e) => this.toggleStock(e, product, i) } />
        </div>
        <div className='product-list__active column'>
          <Switch label='Online' labelOff='Offline' state={ product.online } switch={ (e) => this.toggleOnline(e, product, i) } />
        </div>
        <div className='product-list__actions column'>
        </div>
      </div>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};