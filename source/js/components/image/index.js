import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { config } from 'data/config';

export default class Image extends Component {

  renderCaption() {
    if (this.props.caption) {
      return (
        <span className='image_caption'>{ this.props.caption }</span>
      )
    }
    return null;
  }

  renderImage() {
    const { image, size, placeholder } = this.props;
    let imgSrc;
    if (image) {
      imgSrc = config.BASE_URL + '/' + image.folder + `/` + image.slug + size + `.` + image.extension;
    } else if (placeholder) {
      imgSrc = placeholder;
    }
    return (
      <img className='image__image' src={ imgSrc } />
    )
  }

  render() {
    if (!this.props.image && !this.props.placeholder) {
      return null;
    }
    const { imgClass, caption } = this.props;
    return (
      <div className={ `image__wrapper ${ imgClass } ${ caption ? 'has-caption' : '' }` }>
        { this.renderImage() }
        { this.renderCaption() }
      </div>
    );
  }
}

Image.defaultProps = {
  imgClass: '',
  alt: '',
  size: '',
  placeholder: ''
};

Image.propTypes = {
  switch: PropTypes.func,
  image: PropTypes.object
};