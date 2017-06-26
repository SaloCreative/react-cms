import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

export default class Date extends Component {

  renderDate() {
    const { date, format } = this.props;
    return (<span>{ Moment(date*1000).format(format) }</span>)
  }

  renderLabel() {
    if (!this.props.label) { return null; }
    return <span className='date__label'>{ this.props.label }</span>
  }

  render() {
    return (
      <div className={ `date__wrapper ${ this.props.dateClass }` }>
        { this.renderLabel() }
        { this.renderDate() }
      </div>
    );
  }
}

Date.defaultProps = {
  date: Moment.unix(),
  format: 'DD-MM-YYYY hh:mm:ss',
  dateClass: '',
  label: ''
};