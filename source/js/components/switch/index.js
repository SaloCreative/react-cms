import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Switch extends Component {

  renderLabel() {
    if (!this.props.state && this.props.labelOff) {
      return this.props.labelOff;
    }
    return this.props.label;
  }
  render() {
    return (
      <div className={ `switch__wrapper ${ this.props.state ? 'active' : '' }` }>
        <div className='switch__container' onClick={ () => { this.props.switch(!this.props.state); } }>
          <span className='switch__handle' />
        </div>
        <span className='switch__label'>{ this.renderLabel() }</span>
      </div>
    );
  }
}

Switch.defaultProps = {
  state: false,
  label: '',
  labelOff: ''
};

Switch.propTypes = {
  switch: PropTypes.func
};