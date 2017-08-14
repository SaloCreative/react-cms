import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Column, Row } from '@salocreative/react-ui';

import { getIndexByKey } from '../../actions/global/utilityFunctions';
import * as productGalleryActionCreators from '../../actions/products/gallery';
import AddGalleryImage from '../../components/core/image/add-gallery-image';
import GalleryImage from '../../components/core/image/gallery-image';

class Gallery extends Component {

  removeGalleryImage(img, asset) {
    const gallery = this.props.product.data.gallery;
    const index = getIndexByKey(gallery, img);
    // Check image is already assigned
    if (index >= 0) {
      this.props.removeImage(asset);
    }
  }

  addGalleryImage(img, asset) {
    const gallery = this.props.product.data.gallery;
    let order = 0;
    //Check what order value new item needs
    if (gallery.length > 0) {
      order = (gallery[gallery.length - 1].order) + 1;
    }
    // Check image isn't already assigned
    const index = getIndexByKey(gallery, img);
    if (index < 0) {
      asset.order = order;
      this.props.addImage(asset);
    }
  }

  renderGallery() {
    if (this.props.product.data.gallery) {
      return this.props.product.data.gallery.map((item, i) =>
        <GalleryImage
          key={ i }
          image={ item }
          onRemove={ (img, asset) => this.removeGalleryImage(img, asset, i) }
        />
      )
    }
  }

  render() {
    return (
      <Column customClasses='is-4'>
        <Row customClasses='inset-margin'>
          { this.renderGallery() }
          <AddGalleryImage
            addGalleryImage={ (img, asset) => this.addGalleryImage(img, asset) }
          />
        </Row>
      </Column>
    );
  }
}

Gallery.propTypes = {
  addImage: PropTypes.func,
  removeImage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(productGalleryActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);