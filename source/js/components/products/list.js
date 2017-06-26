import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Switch from 'components/switch';
import Loader from 'components/loader';
import { Column } from 'components/structural/grid';
import Image from 'components/image';
import Price from 'components/price';
import Date from 'components/date';
import Category from 'components/category';

export default class ProductListItem extends Component {

  toggleStock(e, product, i) {
    this.props.toggleProductStock(product, e, i);
  }

  toggleOnline(e, product, i) {
    this.props.toggleProductOnline(product, e, i);
  }

  renderLoader() {
    const { product } = this.props;
    if (product.meta && product.meta.fetching) {
      return (
        <div className='product-list__loader'>
          <Loader style='inline' display={ product.meta.fetching } />
        </div>
      );
    }
    return null;
  }

  render() {
    const { product, i, productCategories } = this.props;
    return (
      <Column columnClass='product-list__item'>
        { this.renderLoader() }
        <Column columnClass='product-list__image'>
          <Image image={ product.main_image } size='_thumb' placeholder='https://placeholdit.imgix.net/~text?txtsize=12&txt=100%C3%97100&w=100&h=100' />
        </Column>
        <Column columnClass='product-list__title'>
          <div className='product-list__title-wrapper'>
            <h3>{ product.title }</h3>
            <p><Category category={ product.category_id } categories={ productCategories } /></p>
          </div>
        </Column>
        <Column columnClass='product-list__sku'>
          { product.sku }
        </Column>
        <Column columnClass='product-list__price'>
          <Price price={ product.price } />
        </Column>
        <Column columnClass='product-list__stock'>
          <Switch label='Available' labelOff='Sold' state={ product.inStock } switch={ (e) => this.toggleStock(e, product, i) } />
        </Column>
        <Column columnClass='product-list__active'>
          <Switch label='Online' labelOff='Offline' state={ product.online } switch={ (e) => this.toggleOnline(e, product, i) } />
        </Column>
        <Column columnClass='product-list__date'>
          <Date date={ product.updated_at } label='Last modified'/>
        </Column>
        <Column columnClass='product-list__actions'>
        </Column>
      </Column>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};