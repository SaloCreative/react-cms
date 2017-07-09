import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { Column, Row, Card } from 'components/core/grid';
import Modal from 'components/core/modal';
import { MediaFilter } from 'actions/media/filter';

let filter = new MediaFilter;

export default class ImagePicker extends Component {

  componentWillMount() {
    filter.type = 'image';
    console.og
    this.props.getMedia(filter);
  }

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className='image-picker'>
        <Modal isOpen={ this.props.open } onClose={ () => this.closeModal() } classes='large' title='Choose an image'>
          some contnet here
        </Modal>
      </div>
    );
  }
}

ImagePicker.propTypes = {
  image: PropTypes.object,
  media: PropTypes.object,
  classes: PropTypes.string,
  open: PropTypes.bool
};

ImagePicker.defaultProps = {
  image: {},
  classes: '',
  open: false
};
