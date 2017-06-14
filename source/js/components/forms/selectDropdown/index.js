import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectDropdown extends Component {

  shouldDisplayError = () => {
    return this.props.validation;
  }

  renderPlaceholder() {
    if (this.props.placeholder) {
      return (
        <option value=''>{this.props.placeholder}</option>
      );
    }
  }

  renderOptions() {
    const value = this.props.dataStructure.value;
    const label = this.props.dataStructure.label;
    if (this.props.options) {
      const options = [];
      this.props.options.map(
          (option, i) =>
              options.push(<option value={ option[value] } key={ option[value] }>{option[label]}</option>)
      );
      return options;
    }
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
        <div className={ `form__select-wrapper${ this.shouldDisplayError() ? ' invalid' : '' }` }>
          { this.renderLabel() }
          <select
            className='form__select'
            ref={ this.props.name }
            value={ this.props.value }
            onChange={ this.props.onFieldChanged }
          >
            {this.renderPlaceholder()}
            {this.renderOptions()}
          </select>
          <span className='form__error'>{this.props.validation}</span>
        </div>
      );
    }
    return null;
  }
}

SelectDropdown.defaultProps = {
  value: '',
  options: [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' }
  ],
  dataStructure: {
    label: 'label',
    value: 'value'
  }
};

SelectDropdown.propTypes = {
  validation: PropTypes.string,
  onFieldChanged: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.any,
  dataStructure: PropTypes.object
};