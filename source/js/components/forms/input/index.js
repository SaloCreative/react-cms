import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class SaloFormInput extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  };

  renderRequired() {
    if(!this.props.requiredAsterisk) { return null; }
    return (
      <sup>*</sup>
    );
  }

  renderIcon() {
    if(!this.props.icon) { return null; }
    return (
      <FontAwesome name={ this.props.icon } size='2x' />
    );
  };

  render() {
    return (
      <div className={ `form-group ${ this.shouldDisplayError() ? 'invalid' : '' } ${ this.props.icon ? 'has-icon' : '' }` } >
        { this.renderIcon() }
        <input className={ `form-field ${ this.props.value || this.props.value === 0 ? 'has-value' : '' }` }
               type={ this.props.type }
               ref={ this.props.name }
               value={ this.props.value }
               onChange={ this.props.onFieldChanged } />
        <span className='bar' />
        <label>{ this.props.label } { this.renderRequired() }</label>
        <span className='form__error'>{ this.props.validation }</span>
      </div>
    );
  }
}

SaloFormInput.defaultProps = {
  type: 'text',
  value: '',
  name: 'form-field',
  icon: '',
  requiredAsterisk: false
};

SaloFormInput.propTypes = {
  validation: PropTypes.string,
  requiredAsterisk: PropTypes.bool,
  onFieldChanged: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.string
};