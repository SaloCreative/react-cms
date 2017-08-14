import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Column } from '@salocreative/react-ui';

import { config } from 'constants/config';

export default class GalleryImage extends Component {

  removeImage(img, asset) {
    if (this.props.onRemove) {
      this.props.onRemove(img, asset);
    }
  }

  renderBackground() {
    const { image } = this.props;
    if (image && image.slug) {
      let imgSrc;
      if (image) {
        imgSrc = config.BASE_URL + '/' + image.folder + `/` + image.slug + '_medium_thumb' + `.` + image.extension;
      }
      return `url("${ imgSrc }") no-repeat center`;
    }
    return '#ebebeb'
  }

  render() {
    const { image } = this.props;
    if (image) {
      return (
        <Column customClasses='is-4'>
          <div className='card gallery-image__image' style={{background: this.renderBackground()}}></div>
        </Column>
      )
    }
    return null;
  }
}

GalleryImage.propTypes = {
  image: PropTypes.object,
  onRemove: PropTypes.func
};