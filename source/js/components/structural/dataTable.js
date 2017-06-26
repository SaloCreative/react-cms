import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/loader';

export class DataTable extends Component {
  renderContent() {
    if (!this.props.loading && this.props.children) {
      return this.props.children;
    }
    return null;
  }

  render() {
    return (
      <div className={ `content_table ${ this.props.tableClass }` }>
        { this.props.tableHeader }
        <Loader display={ this.props.loading } />
        { this.renderContent() }
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
    if ( this.props.tableHeader ) {
      return (
        <div className='content-table__header'>
          { this.props.children }
        </div>
      );
    }
    return null;
  }
}

DataTableHeader.defaultProps = {
  children: ''
};