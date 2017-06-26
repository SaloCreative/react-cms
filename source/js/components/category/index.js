import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

export default class Category extends Component {

  renderCategory() {
    const { category, categories } = this.props;
    if (!category || !categories ) { return null }
    return (<span>{ Moment(date*1000).format(format) }</span>)
  }

  render() {
    return this.renderCategory();
  }
}

Category.defaultProps = {
  category: '',
  categories: '',
  categoryClass: ''
};