import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Alerts extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const alerts = nextProps.systemAlerts;
    console.log(alerts.data.length > 0 && !alerts.meta.will_delete, alerts.meta.will_delete);
    if (alerts.data.length > 0 && !alerts.meta.will_delete) {
      console.log('needs to trigger');
      this.props.willExpireAlerts();
      this.props.expireAlerts();
    }
    // return a boolean value always to make sure other updates aren't blocked
    return true;
  }

  render() {
    if (this.props.systemAlerts.data.length > 0) {
      return (
        <div className='alerts__wrapper'>
          {this.props.systemAlerts.data.map((alert, i) =>
            (<div className={ `alert ${ alert.type }` } key={ i }>
              <div className='cell'>
                {alert.message.en}
                <a className='alert__close' onClick={ () => this.props.clearSystemAlert(i) } role='button' tabIndex='-1'>
                  <FontAwesome name='times' />
                </a>
              </div>
            </div>)
          )}
        </div>
      );
    }
    return null;
  }
}

Alerts.propTypes = {
  systemAlerts: PropTypes.object,
  clearSystemAlert: PropTypes.func.isRequired,
  willExpireAlerts: PropTypes.func.isRequired,
  expireAlerts: PropTypes.func.isRequired
};

Alerts.defaultProps = {
  systemAlerts: {}
};