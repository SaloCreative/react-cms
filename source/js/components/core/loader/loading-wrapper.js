import React, { Component, PropTypes } from 'react';

export default class LoadingWrapper extends Component {
  render() {
    if (this.props.display) {
     return this.props.children;
    }
    return null;
  }

}

LoadingWrapper.defaultProps = {
  display: false,
  classes: '',
  children: (<div className='wrapper'>Why no content?</div> )
};

LoadingWrapper.propTypes = {
  display: PropTypes.bool,
  classes: PropTypes.string
};