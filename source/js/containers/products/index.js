import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import FontAwesome from 'react-fontawesome';
import { shouldUpdate } from 'actions/global/utilityFunctions';
import * as productCategoriesActions from 'actions/products/categories';
import * as productTagActions from 'actions/products/tags';

import { routeCodes } from 'routes';
import { Card } from '@salocreative/react-ui';
import FixedMenu from 'components/core/fixed-menu';

class ProductWrapper extends Component {

  componentWillMount() {
    if (shouldUpdate(this.props.productCategories.meta.last_updated, 300)) {
      this.props.getProductCategories();
    }
    if (shouldUpdate(this.props.productTags.meta.last_updated, 300)) {
      this.props.getProductTags();
    }
  }

  render() {
    return (
      <div className='product-load-wrapper' id={ this.props.id }>
        { this.props.children }
        <FixedMenu icon='plus'>
          <a className='fixed-action__item'>
            <FontAwesome name='sitemap' /> Add Category
          </a>
          <a className='fixed-action__item'>
            <FontAwesome name='tag' /> Add Tag
          </a>
          <a className='fixed-action__item'>
            <FontAwesome name='arrows-h' /> Add Dimension
          </a>
          <Link to={ routeCodes.PRODUCT.ADD } className='fixed-action__item btn'>
            <FontAwesome name='plus' /> Add Product
          </Link>
        </FixedMenu>
      </div>
    );
  }
}

ProductWrapper.propTypes = {
  productTags: PropTypes.object,
  productCategories: PropTypes.object,
  children: PropTypes.any,
  getProductCategories: PropTypes.func,
  getProductTags: PropTypes.func,
  id: PropTypes.string
};

ProductWrapper.defaultProps = {
  children: '',
  id: 'product-container'
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productCategoriesActions,
      productTagActions
    ), dispatch);
}

function mapStateToProps(state) {
  return {
    products: state.products,
    product: state.product,
    productFilter: state.productFilter,
    productCategories: state.productCategories,
    productTags: state.productTags
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);