import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class SaloFromSelect extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  };

  renderPlaceholder() {
    if (!this.props.value) {
      return (
        <option value=''></option>
      );
    }
  };

  renderIcon() {
    if(!this.props.icon) { return null; }
    return (
      <FontAwesome name={ this.props.icon } size='2x' />
    );
  };

  render() {
    return (
      <div className={ `form-group select-wrapper ${ this.shouldDisplayError() ? 'invalid' : '' } ${ this.props.icon ? 'has-icon' : '' }` }>
        { this.renderIcon() }
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
  icon: ''
};