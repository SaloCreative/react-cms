import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  }

  renderLabel() {
    if (this.props.label !== '' && this.props.label !== undefined) {
      return <label htmlFor={ this.props.name } className={ `${ this.props.name }-label` }>{ this.props.label }</label>;
    } else if (this.props.placeholder !== '' && this.props.placeholder !== undefined) {
      return <label htmlFor={ this.props.name } className={ `${ this.props.name }-label sr-only` }>{ this.props.placeholder }</label>;
    }
    return <label htmlFor={ this.props.name } className={ `${ this.props.name }-label sr-only` }>{ this.props.name }</label>;
  }

  render() {
    if (this.props.name) {
      return (
        <div className={ `form__input-wrapper${ this.shouldDisplayError() ? ' invalid' : '' }` }>
          { this.renderLabel() }
          <input
            className='form__input'
            type={ this.props.type }
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

FormInput.defaultProps = {
  type: 'text',
  value: ''
};

FormInput.propTypes = {
  validation: PropTypes.string,
  onFieldChanged: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};