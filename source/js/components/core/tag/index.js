import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Tag extends Component {

  deleteTag(id) {
    if (this.props.removeTag) {
      this.props.removeTag(id);
    }
  }

  render() {
    return (
      <span className='tag-item'>
        { this.props.tag.title }
        <a className='tag-item--delete' onClick={ () => this.deleteTag(this.props.tag.id) }>
          <FontAwesome name='times' />
        </a>
      </span>
    );
  }
}


Tag.propTypes = {
  tag: PropTypes.object.isRequired,
  removeTag: PropTypes.func
};