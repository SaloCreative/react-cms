import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { shouldUpdate } from 'actions/global/utilityFunctions';
import * as productCategoriesActions from 'actions/products/categories';
import * as productTagActions from 'actions/products/tags';

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
        <button className='action-button fixed'><FontAwesome name='plus' /></button>
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