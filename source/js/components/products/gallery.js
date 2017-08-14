import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Column, Row } from '@salocreative/react-ui';

import * as tagActionCreators from '../../actions/products/tags/associate';
import AddGalleryImage from '../../components/core/image/add-gallery-image';
import GalleryImage from '../../components/core/image/gallery-image';

class Gallery extends Component {

  removeGalleryImage(img, asset, i) {
    console.log(img);
    console.log(i);
    console.log(asset);
  }

  addGalleryImage(img, asset) {
    console.log(img);
    console.log(asset);
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
          <AddGalleryImage addGalleryImage={ (img, asset) => this.addGalleryImage(img, asset) }/>
        </Row>
      </Column>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(tagActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);