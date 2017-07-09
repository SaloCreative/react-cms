import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { shouldUpdate } from 'actions/global/utilityFunctions';
import ErrorMessages from 'constants/messages/errorMessages';

import { Column, Row, Card } from 'components/core/grid';
import Modal from 'components/core/modal';
import LoadingWrapper from 'components/core/loader/loading-wrapper';

import MediaPickerItem from 'components/core/image/image-picker-item';
import { MediaFilter } from 'actions/media/filter';

let filter = new MediaFilter;

export default class ImagePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.selectedImage,
      selectedImage: this.props.selectedImage,
      asset: {}
    }
  }

  componentWillMount() {
    filter.type = 'image';
    if (shouldUpdate(this.props.media.meta.last_updated, 300)) {
      this.props.getMedia(filter);
    }
  }

  attemptProductFetch() {
    filter.type = 'image';
    this.props.getMedia(filter);
  }

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  resetModal() {
    this.setState({selectedImage: this.state.currentImage});
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  saveImage() {
    this.closeModal();
    if (this.state.currentImage !== this.state.selectedImage) {
      return this.props.onChangeImage(this.state.selectedImage, this.state.asset);
    }
  }

  modalFooter() {
    return (
      <div className='image-picker__submits'>
        <a className='button button--negative' onClick={ () => this.resetModal() }>Cancel</a>
        <a className='button button--positive' onClick={ () => this.saveImage() }>Select</a>
      </div>
    )
  }

  updateImage(img, asset) {
    this.setState({selectedImage: img});
    this.setState({asset});
  }

  render() {
    const { media } = this.props;
    let displayContent = false;
    if (!media.meta.fetching && media.data.length > 0) {
      displayContent = true;
    }
    return (
      <div className='image-picker'>
        <Modal
          isOpen={ this.props.open }
          onClose={ () => this.closeModal() }
          classes='large'
          title='Choose an image'
          footer={ this.modalFooter() } >

          <LoadingWrapper
            display={ displayContent }
            loading={ media.meta.fetching }
            error={ media.meta.failed }
            errorMessage={ ErrorMessages.getMediaFailed.message }
            retryAction={ () => this.attemptProductFetch() } >

            { media.data.map((asset, i) =>
              <MediaPickerItem
                selectedImage={ this.state.selectedImage }
                key={ i } i={ i }
                asset={ asset }
                imageChanged={ (img, asset) => this.updateImage(img, asset) } />
            )}
          </LoadingWrapper>

        </Modal>
      </div>
    );
  }
}

ImagePicker.propTypes = {
  selectedImage: PropTypes.any,
  media: PropTypes.object,
  classes: PropTypes.string,
  open: PropTypes.bool,
  getMedia: PropTypes.func,
  onChangeImage: PropTypes.func
};

ImagePicker.defaultProps = {
  selectedImage: '',
  classes: '',
  open: false
};
