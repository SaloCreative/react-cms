import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { Column, Row, Card } from 'components/core/grid';

export default class FeaturedImage extends Component {

  renderBackground() {
    if (this.props.image) {
      const { image } = this.props;
      let imgSrc;
      if (image) {
        imgSrc = config.BASE_URL + '/' + image.folder + `/` + image.slug + '_medium_thumb' + `.` + image.extension;
      }
      return `url(${ imgSrc }) no-repeat center`
    }
    return '#ebebeb'
  }

  renderAddOverlayIcon() {
    if (this.props.image) {
      return <FontAwesome name='exchange' size='2x' />
    }
    return <FontAwesome name='plus' size='2x' />
  }

  render() {
    return (
      <Column classes={ `is-4 featured-image__wrapper ${ this.props.classes } ${ this.props.image ? 'has-image' : '' }` }>
        <div className='card' style={{background: this.renderBackground()}}>
         <a className='featured-image__link'>
           { this.renderAddOverlayIcon() }
           <span className='featured-image__text'>Featured Image</span>
         </a>
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
