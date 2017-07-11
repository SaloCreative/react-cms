import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Alert from 'components/core/alerts/alert';

export default class Alerts extends Component {

  render() {
    const { systemAlerts } = this.props;
    if (systemAlerts.length > 0) {
      return (
        <div className='alerts__wrapper'>
          { systemAlerts.map((alert, i) =>
            (<Alert key={ i } i={ i } alert={ alert } alerts={ systemAlerts } />)
          )}
        </div>
      );
    }
    return null;
  }
}

Alerts.propTypes = {
  systemAlerts: PropTypes.array
};

Alerts.defaultProps = {
  systemAlerts: []
};