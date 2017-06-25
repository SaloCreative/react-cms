import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

export default class Price extends Component {

  renderDate() {
    const { date, format } = this.props;
    return (<span>{ Moment(date*1000).format(format) }</span>)
  }

  render() {
    return (
      <div className={ `date__wrapper ${ this.props.dateClass }` }>
        { this.renderDate() }
      </div>
    );
  }
}

Price.defaultProps = {
  date: Date.now() / 1000,
  format: 'DD-MM-YYYY hh:mm:ss',
  dateClass: ''
};