import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import * as actionCreators from 'actions/alerts/alerts';

class Alert extends Component {

  componentDidMount() {
    this.props.actions.setAlertClear(this.props.alert.id);
  }

  render() {
    const { alert } = this.props;
    if (alert) {
      return (
        <div className={ `alert ${ alert.error.type }` }>
          <div className='cell'>
            { alert.error.message.en}
            <a className='alert__close' onClick={ () => this.props.actions.clearAlert(this.props.alert.id) } role='button' tabIndex='-1'>
              <FontAwesome name='times' />
            </a>
          </div>
        </div>
      );
    }
    return null;
  }
}

Alert.propTypes = {
  alert: PropTypes.any,
  setAlertClear: PropTypes.func,
  clearAlert: PropTypes.func
};

Alert.defaultProps = {
  alert: ''
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(Alert)