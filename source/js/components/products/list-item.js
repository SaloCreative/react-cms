import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';;
import FontAwesome from 'react-fontawesome';

import { routeCodes } from 'routes';

import Switch from 'components/core/switch';
import Loader from 'components/core/loader';
import { Column, Row } from 'components/core/grid';
import { DataTableRow } from 'components/tables/data-table';
import Image from 'components/core/image';
import Price from 'components/core/price';
import Date from 'components/core/date';
import Category from 'components/core/category';

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
      <DataTableRow classes='product-list__item'>
        { this.renderLoader() }
        <Column classes='product-list__image'>
          <Link to={ `${ routeCodes.PRODUCT.EDIT_BASE }/${ product.id }` }>
            <Image image={ product.main_image } size='_thumb' placeholder='https://placeholdit.imgix.net/~text?txtsize=12&txt=100%C3%97100&w=100&h=100' />
          </Link>
        </Column>
        <Column classes='product-list__title'>
          <div className='product-list__title-wrapper'>
            <h3>{ product.title }</h3>
            <p><Category category={ product.category_id } categories={ productCategories } /></p>
          </div>
        </Column>
        <Column classes='product-list__sku'>
          { product.sku }
        </Column>
        <Column classes='product-list__price'>
          <Price price={ product.price } />
        </Column>
        <Column classes='product-list__stock'>
          <Switch label='Available' labelOff='Sold' state={ product.inStock } switch={ (e) => this.toggleStock(e, product, i) } />
        </Column>
        <Column classes='product-list__active'>
          <Switch label='Online' labelOff='Offline' state={ product.online } switch={ (e) => this.toggleOnline(e, product, i) } />
        </Column>
        <Column classes='product-list__actions'>
          <Link to={ `${ routeCodes.PRODUCT.EDIT_BASE }/${ product.id }` } className='action-button'><FontAwesome name='pencil' /></Link>
          <button className='action-button product-list__delete'><FontAwesome name='trash-o' /></button>
        </Column>
      </DataTableRow>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};