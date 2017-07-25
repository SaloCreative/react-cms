import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Tag extends Component {

  render() {
    return (
      <span className='tag-item'>
        { this.props.tag.title }
        <a className='tag-item--delete'><FontAwesome name='times' /></a>
      </span>
    );
  }
}


Tag.propTypes = {
  tag: PropTypes.object.isRequired
};