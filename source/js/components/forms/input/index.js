import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaloFormInput extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  };

  render() {
    return (
      <div className={ `form-group ${ this.shouldDisplayError() ? 'invalid' : '' }` } >
        <input className={ `form-field ${ this.props.value ? 'has-value' : '' }` }
               type={ this.props.type }
               ref={ this.props.name }
               value={ this.props.value }
               onChange={ this.props.onFieldChanged } />
        <span className='bar' />
        <label>{ this.props.label }</label>
        <span className='form__error'>{ this.props.validation }</span>
      </div>
    );
  }
}

SaloFormInput.defaultProps = {
  type: 'text',
  value: '',
  name: 'form-field'
};

SaloFormInput.propTypes = {
  validation: PropTypes.string,
  onFieldChanged: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};