import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <Column classes='image-picker__item'>
        <div className='card' style={{background: this.renderBackground()}}>
        </div>
      </Column>
    );
  }

}

MediaPickerItem.defaultProps = {
  asset: {}
};

MediaPickerItem.propTypes = {
  asset: PropTypes.object
};