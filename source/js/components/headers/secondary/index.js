import React, { Component } from 'react';

import { Row } from 'components/core/grid';

export default class SecondaryHeader extends Component {
  render() {
    return (
      <div className={ `secondary-header ${ this.props.headerClass }` } >
        <Row>
          { this.props.children }
        </Row>
      </div>
    );
  }
}

SecondaryHeader.defaultProps = {
  children: '',
  headerClass: ''
};