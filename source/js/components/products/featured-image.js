import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FeaturedImage from '../core/image/featured-image';
import * as productEditActions from '../../actions/products/edit';

class ProductFeaturedImage extends Component {

  setFeaturedImage(img, asset) {
    this.props.productFieldChanged('featured_image', img);
    this.props.productFieldChanged('main_image', asset);
  }


  render() {
    return <FeaturedImage image={ this.props.image } featuredImageChange={ (img, asset) => this.setFeaturedImage(img, asset)} />;
  }
}

ProductFeaturedImage.propTypes = {
  image: PropTypes.object,
  setFeaturedImage: PropTypes.func
};

ProductFeaturedImage.defaultProps = {
  image: {}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({},
      productEditActions
    ), dispatch);
}

export default connect(null, mapDispatchToProps)(ProductFeaturedImage);