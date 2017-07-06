import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/core/loader';
import { Row, Card } from 'components/core/grid';

export class DataTable extends Component {
  renderContent() {
    if (!this.props.loading && this.props.children) {
      return this.props.children;
    }
    return null;
  }

  render() {
    return (
      <Card classes='content_table_card'>
        <div className='content-table__wrapper'>
          <div className={ `content_table ${ this.props.tableClass }` }>
            { this.props.tableHeader }
            <Loader display={ this.props.loading } />
            { this.renderContent() }
          </div>
        </div>
      </Card>
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
      <Row classes='content-table__row content-table__header'>
        <Row classes='inset-margin'>
          { this.props.children }
        </Row>
      </Row>
    );
  }
}

DataTableHeader.defaultProps = {
  children: ''
};

export class DataTableRow extends Component {
  render() {
    return (
      <Row classes={ `content-table__row ${ this.props.classes }` }>
        <Row classes='inset-margin'>
          { this.props.children }
        </Row>
      </Row>
    );
  }
}

DataTableRow.defaultProps = {
  children: '',
  classes: ''
};