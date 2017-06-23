import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaloFromSelect extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  };

  renderPlaceholder() {
    if (this.props.placeholder || !this.props.value) {
      return (
        <option value=''></option>
      );
    }
  };

  render() {
    return (
      <div className={ `form-group select-wrapper ${ this.shouldDisplayError() ? 'invalid' : '' }` }>
        <select className={ `form-field ${ this.props.value ? 'has-value' : '' }` }
                ref={ this.props.name }
                value={ this.props.value }
                onChange={ this.props.onFieldChanged }
        >
          {this.renderPlaceholder()}
          { this.props.children }
        </select>
        <span className='bar' />
        <label htmlFor={ this.props.name } >{ this.props.label }</label>
        <span className='form__error'>{ this.props.validation }</span>
      </div>
    );
  }
}

SaloFromSelect.defaultProps = {
  value: '',
  children: null,
  label: 'Enter a label',
  name: 'a-select',
  placeholder: false
};

SaloFromSelect.propTypes = {
  validation: PropTypes.string,
  onFieldChanged: PropTypes.func,
  placeholder: PropTypes.boolean,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.any
};