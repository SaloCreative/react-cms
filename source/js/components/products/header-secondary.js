import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Column } from 'components/core/grid';
import SecondaryHeader from 'components/headers/secondary';
import Switch from 'components/core/switch';

import { routeCodes } from 'routes';

export default class ProductsSecondaryHeader extends Component {
  renderSaveButton() {
    const { product } = this.props;
    let label = 'Saved';
    if (!product.meta.saved) {
      label = 'Save'
    }
    if (product.meta.fetching || product.meta.saved) {
      return <a className='editing-header__save disabled'>{ label }</a>;
    }
    return <a className='editing-header__save disables' onClick={ () => this.props.saveEdits() }>{ label }</a>;
  }

  render() {
    const { product } = this.props;
    return (
      <SecondaryHeader headerClass='pull-up'>
        <Column classes='editing-header__left'>
          <ul>
            <li>General</li>
            <li>Inventory &amp; Sales</li>
            <li>SEO</li>
          </ul>
        </Column>
        <Column classes='editing-header__right'>
          <Switch label='Featured' state={ product.data.featured } switch={ (e) => this.toggleOnline(e, product, i) } />
          <Switch label='Online' labelOff='Offline' state={ product.data.online } switch={ (e) => this.toggleOnline(e, product, i) } />
          <Switch label='Available' labelOff='Sold' state={ product.data.inStock } switch={ (e) => this.toggleStock(e, product, i) } />
          { this.renderSaveButton() }
        </Column>
      </SecondaryHeader>
    );
  }
}

ProductsSecondaryHeader.defaultProps = {
  product: {
    data: {}
  }
};

ProductsSecondaryHeader.propTypes = {
  product: PropTypes.object,
  saveEdits: PropTypes.func
};