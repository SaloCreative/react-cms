import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/loader';

export class DataTable extends Component {
  render() {
    return (
      <div className={ `content_table ${ this.props.tableClass }` }>
        { this.props.tableHeader }
        <Loader display={ this.props.loading } />
        { this.props.children }
      </div>
    );
  }
}

DataTable.defaultProps = {
  children: '',
  tableClass: '',
  tableHeader: '',
  loading: false
};

export class DataTableHeader extends Component {
  render() {
    return (
      <div className='content-table__header'>
        { this.props.children }
      </div>
    );
  }
}

DataTableHeader.defaultProps = {
  children: ''
};