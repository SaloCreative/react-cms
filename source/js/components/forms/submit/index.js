import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '@salocreative/react-ui';

export default class SaloFormSubmit extends Component {

  render() {
    return (
      <div className='form-group'>
        <div className='form-button'>
          <input type='submit' value={ this.props.value } />
          <Loader style='inline' display={ this.props.processing } />
        </div>
      </div>
    );
  }
}

SaloFormSubmit.defaultProps = {
  value: 'Submit',
  processing: false,
  customClasses: ''
};

SaloFormSubmit.propTypes = {
  customClasses: PropTypes.string,
  value: PropTypes.any
};