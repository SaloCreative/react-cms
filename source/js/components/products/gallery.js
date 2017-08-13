import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Column, Row, Card } from '@salocreative/react-ui';
import * as tagActionCreators from '../../actions/products/tags/associate';

class Gallery extends Component {

  renderGallery() {
    if (this.props.product.data.gallery) {
      return ( <Row customClasses='inset-margin'>
        {
          this.props.product.data.gallery.map((item, i) =>
            <Column customClasses='is-4' key={ i }>
              <Card>
                Image
              </Card>
            </Column>
          )
        }
      </Row>);
    }
  }

  render() {
    return (
      <Column customClasses='is-4'>
        { this.renderGallery() }
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