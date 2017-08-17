import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row } from '@salocreative/react-ui';

export default class Tab extends Component {

  render() {
    if (this.props.item === this.props.currentItem) {
      return (
        <Row customClasses='no-margin'>
          { this.props.children }
        </Row>
      );
    }
    return null;
  }

}

Tab.defaultProps = {
  currentItem: '',
  children: null
};

Tab.propTypes = {
  item: PropTypes.string.isRequired,
  currentItem: PropTypes.string
};