import React, { Component } from 'react';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import Cookies from 'universal-cookie';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import Loader from 'components/loader';

import * as Rule from 'actions/forms/validation/rules';
import { validate, runValidation } from 'actions/forms/validation/validator';

import FormInput from 'components/forms/formInput';
import SaloFormInput from 'components/forms/input'
import Alerts from 'components/alerts';
import { routeCodes } from 'routes';

const fieldValidations = [
  validate('email', 'Email address', Rule.required, Rule.isEmail),
  validate('password', 'Password', Rule.required)
];

const cookies = new Cookies();

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      showErrors: false,
      validationErrors: {},
      email: '',
      password: ''
    };
    // Run validations on initial state
    this.state.validationErrors = runValidation(this.state, fieldValidations);
  }

  shouldComponentUpdate() {
    const authToken = cookies.get('authToken');
    if (authToken && authToken.token) {
      if (this.props.login.returnUrl && this.props.login.returnUrl !== undefined) {
        window.location.replace(this.props.login.returnUrl);
      } else {
        browserHistory.push(routeCodes.DASHBOARD);
      }
    }
    // return a boolean value always to make sure other updates aren't blocked
    return true;
  }

  onChange(field) {
    return (e) => {
      const newState = update(this.state, {
        [field]: { $set: e.target.value }
      });
      newState.validationErrors = runValidation(newState, fieldValidations);
      this.setState(newState);
    };
  }

  errorFor(field) {
    if (this.state.showErrors) {
      return this.state.validationErrors[field];
    }

    return null;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(this.state.validationErrors).length === 0) {
      const credentials = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(credentials);
    } else {
      this.setState({ showErrors: true });
    }
  }

  render() {
    return (
      <div className='account'>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className='account__panel'>
          <img className='account__title' src='/assets/img/logo-full.png' alt='Salo Creative CMS' />

          <Alerts { ...this.props } />

          <form ref='loginForm' className={ `account__form ${ this.props.login.meta.fetching ? 'loading' : '' }` } onSubmit={ this.handleSubmit.bind(this) } noValidate>

            <SaloFormInput
              type='email' name='email'
              label='Email'
              value={ this.state.email }
              onFieldChanged={ this.onChange('email') }
              validation={ this.errorFor('email') }
            />

            <SaloFormInput
              type='password' name='password'
              label='Password'
              value={ this.state.password }
              onFieldChanged={ this.onChange('password') }
              validation={ this.errorFor('password') }
            />
            <div className='form-group'>
              <div className='login-button'>
                <input type='submit' value='Login' />
                <Loader style='inline' display={ this.props.login.meta.fetching } />
              </div>
            </div>
          </form>

        </div>
      </div>

    );
  }
}

Login.defaultProps = {
  returnUrl: '',
  login: {}
};

Login.propTypes = {
  login: PropTypes.object
};