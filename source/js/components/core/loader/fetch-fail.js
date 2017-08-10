import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Column } from '@salocreative/react-ui';
import FontAwesome from 'react-fontawesome';
import ErrorMessages from 'constants/messages/errorMessages';

export default class FetchFail extends Component {
  render() {
    if (this.props.display) {
      return (
        <div className='error-message__container'>
          <h2 className='error-message__text'>{ this.props.message.en }</h2>
          <p className='error-message__support'>Press the button below to retry</p>
          <div className='error-navigation--links'>
            <a className='navigation-overlay__link navigation-overlay__link--inverse' title='name' onClick={ this.props.retryAction }>
              <span className='navigation-overlay__icon'><FontAwesome name='refresh' size='3x' /></span>
              <span className='navigation-overlay__link-text'>Retry</span>
            </a>
          </div>
       </div>
      );
    }
    return null;
  }
}

FetchFail.propTypes = {
  message: PropTypes.object,
  retryAction: PropTypes.func
};

FetchFail.defaultProps = {
  message: ErrorMessages.general.message,
  display: false
};