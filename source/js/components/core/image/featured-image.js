import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { Column, Row, Card } from 'components/core/grid';
import ImagePicker from 'components/core/image/image-picker';

export default class FeaturedImage extends Component {

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

  renderImagePicker() {
    const { image } = this.props;
    if (this.state.isImagePickerOpen) {
      return <ImagePicker { ...this.props } image={ image } open={ this.state.isImagePickerOpen } onClose={ () => this.closeModal() } />;
    }
    return null;
  }

  renderBackground() {
    const { image } = this.props;
    if (image && image.slug) {
      let imgSrc;
      if (image) {
        imgSrc = config.BASE_URL + '/' + image.folder + `/` + image.slug + '_medium_thumb' + `.` + image.extension;
      }
      return `url(${ imgSrc }) no-repeat center`
    }
    return '#ebebeb'
  }

  renderAddOverlayIcon() {
    const { image } = this.props;
    if (image && image.slug) {
      return <FontAwesome name='exchange' size='2x' />
    }
    return <FontAwesome name='plus' size='2x' />
  }

  render() {
    const { image } = this.props;
    return (
      <Column classes={ `is-4 featured-image__wrapper ${ this.props.classes } ${ image && image.slug ? 'has-image' : '' }` }>
        <div className='card' style={{background: this.renderBackground()}}>
         <a className='featured-image__link' onClick={ () => this.openModal() }>
           { this.renderAddOverlayIcon() }
           <span className='featured-image__text'>Featured Image</span>
         </a>
          { this.renderImagePicker() }
        </div>
      </Column>
    );
  }
}

FeaturedImage.propTypes = {
  image: PropTypes.object,
  featuredImageChange: PropTypes.func,
  classes: PropTypes.string
};

FeaturedImage.defaultProps = {
  image: {},
  classes: ''
};
