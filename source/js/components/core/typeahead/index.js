import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TypeAhead extends Component {

  render() {
    return (
      <div className='form-group'>
        <input className='form-field' />
        <span className='bar' />
        <label>{ this.props.placeholder }</label>
      </div>
    );
  }
}

TypeAhead.defaultProps = {
  placeholder: 'Start typing...',
  tags: []
};

TypeAhead.propTypes = {
  tags: PropTypes.array,
  placeholder: PropTypes.string
};