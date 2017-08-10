import React, { Component } from 'react';

export class Row extends Component {
  render() {
    return (
      <div className={ `row ${ this.props.customClasses }` }>
        { this.props.children }
      </div>
    );
  }
}

Row.defaultProps = {
  children: '',
  customClasses: ''
};

export class Column extends Component {
  render() {
    return (
      <div className={ `column ${ this.props.customClasses }` }>
        { this.props.children }
      </div>
    );
  }
}

Column.defaultProps = {
  children: '',
  customClasses: ''
};

export class Card extends Component {
  render() {
    return (
      <div className={ `card ${ this.props.customClasses }` }>
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  children: '',
  customClasses: ''
};