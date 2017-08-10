import React, { Component, PropTypes } from 'react';

import Loader from 'components/core/loader';
import FetchFail from 'components/core/loader/fetch-fail';
import { Row } from '@salocreative/react-ui';

export default class LoadingWrapper extends Component {
  render() {
    if (this.props.display && !this.props.loading) {
     return <Row>{ this.props.children }</Row>;
    }
    if (this.props.loading) {
      return <Row><Loader display={ this.props.loading } /></Row>;
    }
    if (this.props.error) {
      return <Row><FetchFail display={ this.props.error } message={ this.props.errorMessage } retryAction={ this.props.retryAction }/></Row>;
    }
    return null;
  }

}

LoadingWrapper.defaultProps = {
  display: false,
  loading: false,
  error: false,
  errorMessage: '',
  classes: '',
  children: (<Row>Why no content?</Row> )
};

LoadingWrapper.propTypes = {
  display: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  classes: PropTypes.string,
  retryAction: PropTypes.func
};