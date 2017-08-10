import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { getObjectByKey } from 'actions/global/utilityFunctions';

export default class Category extends Component {

  renderCategory() {
    const { category, categories } = this.props;
    if (!category || !categories.data ) { return null }
    let currentCategory = getObjectByKey(categories.data, category);
    return (<span>{ currentCategory.title }</span>)
  }

  render() {
    return this.renderCategory();
  }
}

Category.defaultProps = {
  category: '',
  categories: ''
};

Category.propTypes = {
  categories: PropTypes.object,
  category: PropTypes.number
};