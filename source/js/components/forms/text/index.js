import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaloFormInput extends Component {

  render() {
    return (
      <div className='form-group'>
        <input type='text' className={ `form-field ${ this.props.value ? 'has-value' : '' }` } value={ this.props.value } />
        <span className='highlight' />
        <span className='bar' />
        <label>Name</label>
      </div>
    );
  }
}

SaloFormInput.defaultProps = {
  value: ''
};

SaloFormInput.propTypes = {
  validation: PropTypes.string,
  onFieldChanged: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};