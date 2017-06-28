import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Alerts extends Component {
  render() {
    if (this.props.systemAlerts.length > 0) {
      return (
        <div className='alerts__wrapper'>
          {this.props.systemAlerts.map((alert, i) =>
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
  systemAlerts: PropTypes.array,
  clearSystemAlert: PropTypes.func.isRequired
};

Alerts.defaultProps = {
  systemAlerts: []
};