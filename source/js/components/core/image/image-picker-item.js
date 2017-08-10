import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import { config } from 'constants/config';
import { Column, Row, Card } from 'components/core/grid';

export default class MediaPickerItem extends Component {

  renderBackground() {
    const { asset } = this.props;
    if (asset && asset.slug) {
      let imgSrc = config.BASE_URL + '/' + asset.folder + `/` + asset.slug + '_medium_thumb' + `.` + asset.extension;
      return `url("${ imgSrc }") no-repeat center`;
    }
    return '#ebebeb'
  }

  renderCheckedItem() {
    if (this.props.asset.id == this.props.selectedImage) {
      return (
        <div className='image-picker__checked'>
          <FontAwesome name='check' />
        </div>
      )
    }
    return null;
  }

  imagePicked() {
    const { asset } = this.props;
    this.props.imageChanged(asset.id, asset);
  }

  render() {
    return (
      <Column customClasses='image-picker__item'>
        <a className='card' style={{background: this.renderBackground()}} onClick={ () => this.imagePicked() }>
          { this.renderCheckedItem() }
        </a>
      </Column>
    );
  }

}

MediaPickerItem.defaultProps = {
  asset: {},
  selectedImage: ''
};

MediaPickerItem.propTypes = {
  asset: PropTypes.object,
  imageChanged: PropTypes.func,
  selectedImage: PropTypes.any
};