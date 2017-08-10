import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import Loader from 'components/core/loader';
import { Row, Card } from 'components/core/grid';

export class DataTable extends Component {
  renderContent() {
    if (!this.props.loading && this.props.children) {
      return this.props.children;
    }
    return null;
  }

  renderTitle() {
    if (this.props.title) {
      return <h4>{ this.props.title }</h4>;
    }
    return null;
  }

  renderFilter() {
    if (this.props.filters) {
      return (
        <div className='content-table__filter-wrapper'>
          <FontAwesome name='sliders'/>
        </div>
      );
    }
    return null;
  }

  renderTopBar() {
    if (this.props.title || this.props.filters) {
      return (
        <div className='content-table__top-bar'>
          { this.renderTitle() }
          { this.renderFilter()}
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <Card classes='content_table_card'>
        <div className='content-table__wrapper'>
          <div className={ `content_table ${ this.props.tableClass }` }>
            { this.renderTopBar() }
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
  loading: false,
  filters: '',
  title: ''
};

export class DataTableHeader extends Component {
  render() {
    return (
      <Row customClasses='content-table__row content-table__header'>
        <Row customClasses='inset-margin'>
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
      <Row customClasses={ `content-table__row ${ this.props.classes }` }>
        <Row customClasses='inset-margin'>
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