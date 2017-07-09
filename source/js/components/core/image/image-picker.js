import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

import { config } from 'constants/config';
import { shouldUpdate } from 'actions/global/utilityFunctions';
import ErrorMessages from 'constants/messages/errorMessages';

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
      selectedImage: this.props.selectedImage
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

  updateImage(img) {
    this.setState({selectedImage: img});
    console.log(this.state.selectedImage);
  }

  render() {
    const { media } = this.props;
    let displayContent = false;
    if (!media.meta.fetching && media.data.length > 0) {
      displayContent = true;
    }
    return (
      <div className='image-picker'>
        <Modal isOpen={ this.props.open } onClose={ () => this.closeModal() } classes='large' title='Choose an image'>
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
                imageChanged={ (img) => this.updateImage(img) } />
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
  getMedia: PropTypes.func
};

ImagePicker.defaultProps = {
  selectedImage: '',
  classes: '',
  open: false
};
