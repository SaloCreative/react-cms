import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { Column, Row, Card } from '@salocreative/react-ui';
import ImagePicker from 'components/core/image/image-picker';

export default class AddGalleryImage extends Component {

  constructor() {
    super();
    this.state = {
      isImagePickerOpen: false
    };
  }

  closeModal() {
    this.setState({ isImagePickerOpen: false });
  }

  openModal() {
    this.setState({ isImagePickerOpen: true });
  }

  setGalleryImage(img, asset) {
    if (this.props.addGalleryImage) {
      this.props.addGalleryImage(img, asset);
    }
  }

  renderImagePicker() {
    if (this.state.isImagePickerOpen) {
      return <ImagePicker
        open={ this.state.isImagePickerOpen }
        onClose={ () => this.closeModal() }
        onChangeImage={ (img, asset) => this.setGalleryImage(img, asset) } />;
    }
    return null;
  }

  render() {
    const { customClasses } = this.props;
    return (
      <Column customClasses={ `is-4 gallery-image__add-wrapper ${ customClasses }` }>
        <div className='card' style={{background: '#ebebeb'}}>
          <a className='gallery-image__link' onClick={ () => this.openModal() }>
            <div className='gallery-image__overlay'>
              <FontAwesome name='plus' size='2x' />
              <span className='gallery-image__text'>Image</span>
            </div>
          </a>
          { this.renderImagePicker() }
        </div>
      </Column>
    );
  }
}

AddGalleryImage.propTypes = {
  addGalleryImage: PropTypes.func,
  customClasses: PropTypes.string
};

AddGalleryImage.defaultProps = {
  customClasses: ''
};
