import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { Column, Row, Card } from 'components/core/grid';
import Modal from 'components/core/modal';

export default class ImagePicker extends Component {

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className='image-picker'>
        <Modal isOpen={ this.props.open } onClose={ () => this.closeModal() } classes='large' title='My Modal Title' />
      </div>
    );
  }
}

ImagePicker.propTypes = {
  image: PropTypes.object,
  images: PropTypes.object,
  classes: PropTypes.string,
  open: PropTypes.bool
};

ImagePicker.defaultProps = {
  image: {},
  images: {},
  classes: '',
  open: false
};
