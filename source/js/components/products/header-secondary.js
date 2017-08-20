import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import { Row, Column, Switch } from '@salocreative/react-ui';
import SecondaryHeader from 'components/headers/secondary';

import { routeCodes } from 'routes';

const tabs = [
  { title: 'General', key: 'general' },
  { title: 'Inventory', key: 'inventory' },
  { title: 'Sales & Leads', key: 'sales' },
  { title: 'SEO', key: 'seo' }
];

export default class ProductsSecondaryHeader extends Component {

  checkAllValid() {
    const { product } = this.props;
    return product.meta.validations.details && product.meta.validations.tags;
  }

  toggleSwitch(field, e) {
    this.props.productFieldChanged(field, e);
  }

  switchTab(tab) {
    if (this.props.changeTab) {
      this.props.changeTab(tab)
    }
  }

  renderSaveButton() {
    const { product } = this.props;
    let label = 'Saved';
    let valid = this.checkAllValid();
    if (!product.meta.saved) {
      label = 'Save'
    }
    if (product.meta.fetching || product.meta.saved || !valid) {
      return <a className='editing-header__save disabled'>{ label }</a>;
    }
    return <a className='editing-header__save disables' onClick={ () => this.props.saveEdits() }>{ label }</a>;
  }

  renderTabs() {
    return tabs.map((item, i) =>
      <li key={ i }><a className={ this.props.activeTab === item.key ? 'active' : '' } onClick={ () => this.switchTab(item.key) }>{ item.title }</a></li>
    );
  }

  render() {
    const { product } = this.props;
    return (
      <SecondaryHeader>
        <Column customClasses='editing-header__left'>
          <ul className='editing-header__tabs-nav'>
            { this.renderTabs() }
          </ul>
        </Column>
        <Column customClasses='editing-header__right'>
          <Switch label='Featured' state={ product.data.featured } switch={ (e) => this.toggleSwitch('featured', e) } />
          <Switch label='Online' labelOff='Offline' state={ product.data.online } switch={ (e) => this.toggleSwitch('online', e) } />
          <Switch label='Available' labelOff='Sold' state={ product.data.inStock } switch={ (e) => this.toggleSwitch('inStock', e) } />
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
  saveEdits: PropTypes.func,
  changeTab: PropTypes.func,
  activeTab: PropTypes.string
};