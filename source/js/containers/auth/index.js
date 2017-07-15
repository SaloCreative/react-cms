import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auth from 'actions/auth/auth';

export default class AuthWrapper extends Component {

  constructor(props) {
    super(props);
    if (Auth.loggedIn() && Object.keys(this.props.login.user).length <= 0) {
      // Make sure user object is available in the state
      this.props.setUserState();
      // Make current date is set
    }
  }

  render() {
    if (Auth.loggedIn()) {
      return (
        <div className='auth-wrapper__container'>
          { this.props.children }
        </div>
      );
    }
    return null;
  }
}

AuthWrapper.propTypes = {
  children: PropTypes.any
};

AuthWrapper.defaultProps = {
  children: ''
};