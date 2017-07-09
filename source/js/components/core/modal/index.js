import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Modal extends Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  renderFooter() {
    if (this.props.footer) {
      return (
        <div className='modal__footer'>
          { this.props.footer }
        </div>
      )
    }
  }

  render() {
    if (this.props.isOpen === false) { return null; }

    return (
      <div className={ `modal ${ this.props.classes }` } role='dialog'>
        <div className='modal__wrapper'>
          <div className='modal__header'>
            <h3>{this.props.title}</h3>
            <h3 className='modal__subheading'>{this.props.subtitle}</h3>
            <a className='modal__close' onClick={ e => this.close(e) } role='button' tabIndex='-1'><FontAwesome name='times' /></a>
          </div>
          <div className='modal__body'>
            {this.props.children}
          </div>
          { this.renderFooter() }
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
  onClose: PropTypes.func,
  classes: PropTypes.string,
  footer: PropTypes.any
};

Modal.defaultProps = {
  children: <p>No modal content set</p>,
  title: 'Modal title',
  subtitle: '',
  onClose: null,
  isOpen: null,
  classes: '',
  footer: ''
};