import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaloFromSelect extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  };

  renderPlaceholder() {
    if (this.props.placeholder) {
      return (
        <option value=''>{this.props.placeholder}</option>
      );
    }
  };

  render() {
    if (this.props.name) {
      return (
        <div className={ `form-group ${ this.shouldDisplayError() ? 'invalid' : '' }` }>
          <label htmlFor={ this.props.name } >{ this.props.label }</label>
          <select className='form-field'
            ref={ this.props.name }
            value={ this.props.value }
            onChange={ this.props.onFieldChanged }
          >
            {this.renderPlaceholder()}
            { this.props.children }
          </select>
          <span className='form__error'>{this.props.validation}</span>
        </div>
      );
    }
    return null;
  }
}

SaloFromSelect.defaultProps = {
  value: '',
  children: null,
  label: '',
  name: 'a-select'
};

SaloFromSelect.propTypes = {
  validation: PropTypes.string,
  onFieldChanged: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.any
};