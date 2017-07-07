import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Column } from 'components/core/grid';
import FontAwesome from 'react-fontawesome';
import ErrorMessages from 'constants/messages/errorMessages';

export default class FailedReport extends Component {
  render() {
    if (this.props.display) {
      return (
        <Column classes='failed-report__wrapper'>
          { this.props.message.en }
        </Column>
      );
    }
    return null;
  }
}

FailedReport.propTypes = {
  message: PropTypes.object
};

FailedReport.defaultProps = {
  message: ErrorMessages.general.message,
  display: false
};