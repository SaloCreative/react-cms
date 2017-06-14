import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  }

  render() {
    if (this.props.name) {
      return (
        <div className={ `form__input-wrapper${ this.shouldDisplayError() ? ' invalid' : '' }` }>
          <label htmlFor={ this.props.name } className={ (this.props.showLabel === true ? '' : 'sr-only') }>{this.props.placeholder}</label>
          <textarea
            className='form__textarea'
            ref={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.props.value }
            onChange={ this.props.onFieldChanged }
          />
          <span className='form__error'>{this.props.validation}</span>
        </div>
      );
    }
    return null;
  }
}

TextArea.defaultProps = {
  type: 'text',
  value: '',
  showLabel: true
};

TextArea.propTypes = {
  validation: PropTypes.string.isRequired,
  onFieldChanged: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  showLabel: PropTypes.bool
};