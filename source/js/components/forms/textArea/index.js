import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaloTextArea extends Component {

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

  auto_grow(element) {
    console.log(element);
    element.style.height = "5px";
    element.style.height = (element.scrollHeight + 1)+"px";
  }

  render() {
    if (this.props.name) {
      return (
        <div className={ `form-group ${ this.shouldDisplayError() ? 'invalid' : '' } ${ this.props.icon ? 'has-icon' : '' }` } >
          { this.renderIcon() }
          <textarea
            className={ `form__field ${ this.props.value || this.props.value === 0 ? 'has-value' : '' }` }
            ref={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.props.value }
            onChange={ this.props.onFieldChanged }
            onKeyUp={ (e) => this.auto_grow(e.target) }
          />
          <span className='bar' />
          <label>{ this.props.label } { this.renderRequired() }</label>
          <span className='form__error'>{ this.props.validation }</span>
        </div>
      );
    }
    return null;
  }
}

SaloTextArea.defaultProps = {
  value: '',
  name: 'textarea',
  icon: '',
  requiredAsterisk: false
};

SaloTextArea.propTypes = {
  validation: PropTypes.string,
  requiredAsterisk: PropTypes.bool,
  onFieldChanged: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.string
};