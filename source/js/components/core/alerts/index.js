import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Alert from 'components/core/alerts/alert';

export default class Alerts extends Component {

  render() {
    const { alerts } = this.props;
    if (alerts.length > 0) {
      return (
        <div className='alerts__wrapper'>
          { alerts.map((alert, i) =>
            (<Alert key={ i } i={ i } alert={ alert } />)
          )}
        </div>
      );
    }
    return null;
  }
}

Alerts.propTypes = {
  alerts: PropTypes.array
};

Alerts.defaultProps = {
  alerts: []
};