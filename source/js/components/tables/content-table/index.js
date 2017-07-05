import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/core/loader';
import { Row } from 'components/core/grid';

export class DataTable extends Component {
  renderContent() {
    if (!this.props.loading && this.props.children) {
      return this.props.children;
    }
    return null;
  }

  render() {
    return (
      <div className='content-table__wrapper'>
        { this.props.tableHeader }
        <div className={ `content_table ${ this.props.tableClass }` }>
          <Loader display={ this.props.loading } />
          { this.renderContent() }
        </div>
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
      <div className='content-table__header content-table__row'>
        <Row>
          { this.props.children }
        </Row>
      </div>
    );
  }
}

DataTableHeader.defaultProps = {
  children: ''
};

export class DataTableRow extends Component {
  render() {
    return (
      <div className='content-table__row'>
        { this.props.children }
      </div>
    );
  }
}

DataTableRow.defaultProps = {
  children: ''
};