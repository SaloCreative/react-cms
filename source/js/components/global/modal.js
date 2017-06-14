import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@lushdigital/manager-icons';

export default class Modal extends Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) { return null; }

    return (
      <div className='modal' role='dialog'>
        <div className='modal__wrapper'>
          <div className='modal__header'>
            <h3>{this.props.title}</h3>
            <h3 className='modal__subheading'>{this.props.subtitle}</h3>
            <a className='modal__close' onClick={ e => this.close(e) } role='button' tabIndex='-1'><Icon size='14px' icon='close' /></a>
          </div>
          <div className='modal__body'>
            {this.props.children}
          </div>
        </div>
        <div className='modal__backdrop' onClick={ e => this.close(e) } role='presentation' />
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  children: <p>No modal content set</p>,
  title: 'Modal title',
  subtitle: '',
  onClose: null,
  isOpen: null
};