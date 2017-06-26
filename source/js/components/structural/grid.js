import React, { Component } from 'react';

export class Row extends Component {
  render() {
    return (
      <div className={ `row ${ this.props.rowClass }` }>
        { this.props.children }
      </div>
    );
  }
}

Row.defaultProps = {
  children: '',
  rowClass: ''
};

export class Column extends Component {
  render() {
    return (
      <div className={ `column ${ this.props.columnClass }` }>
        { this.props.children }
      </div>
    );
  }
}

Column.defaultProps = {
  children: '',
  columnClass: ''
};