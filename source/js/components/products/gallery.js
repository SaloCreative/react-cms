import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Column, Row, Card } from '@salocreative/react-ui';
import * as tagActionCreators from '../../actions/products/tags/associate';

class Gallery extends Component {

  render() {
    return (
      <Column customClasses='is-4'>
        <Row customClasses='inset-margin'>
          <Column customClasses='is-4'>
            <Card>
            </Card>
          </Column>
        </Row>
      </Column>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(tagActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);