import React, { Component } from 'react';

export class Row extends Component {
  render() {
    return (
      <div className={ `row ${ this.props.classes }` }>
        { this.props.children }
      </div>
    );
  }
}

Row.defaultProps = {
  children: '',
  classes: ''
};

export class Column extends Component {
  render() {
    return (
      <div className={ `column ${ this.props.classes }` }>
        { this.props.children }
      </div>
    );
  }
}

Column.defaultProps = {
  children: '',
  classes: ''
};

export class Card extends Component {
  render() {
    return (
      <div className={ `card ${ this.props.classes }` }>
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  children: '',
  classes: ''
};