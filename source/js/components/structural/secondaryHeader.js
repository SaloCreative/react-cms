import React, { Component } from 'react';

export default class SecondaryHeader extends Component {
  render() {
    return (
      <div className={ `secondary-header ${ this.props.headerClass }` } >
        { this.props.children }
      </div>
    );
  }
}

SecondaryHeader.defaultProps = {
  children: '',
  headerClass: ''
};