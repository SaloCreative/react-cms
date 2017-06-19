import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class ProductListItem extends Component {

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
          { product.inStock }
        </div>
        <div className='product-list__active column'>
          { product.online }
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