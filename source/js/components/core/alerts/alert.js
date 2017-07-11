import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import injectSheet from 'react-jss';

import * as actionCreators from 'actions/alerts/alerts';

const styles = {
  alert: {
    width: '100%',
    background: '#ed5565',
    color: '#fff',
    padding: '5px 10px',
    fontSize: '12px',
    textAlign: 'left',
    position: 'relative',
    '&.error': {
      background: '#ed5565'
    },
    '&.warning': {
      background: '#ed5565'
    },
    '&.info': {
      background: '#00B5D2'
    },
    '&:after': {
      display: 'block',
      content: '""',
      width: '0',
      left: '0',
      top: '0',
      position: 'absolute',
      height: '2px',
      background: 'rgba(255,255,255,0.3)',
      webkitAnimationFillMode: 'both',
      animationFillMode: 'both',
      webkitAnimation: 'loadSwipe 5s linear',
      animation: 'loadSwipe 5s linear'
    }
  },
  alert__close: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: '0',
    width: '30px',
    height: '100%',
    opacity: '0.6',
    cursor: 'pointer',
    transition: 'opacity 0.3s linear',
    '&:hover': {
      opacity: '1.0'
    }
  },
  '@keyframes loadSwipe': {
    '0%': {
      width: '0'
    },
    '100%': {
      width: '100%'
    }
  }
};

class Alert extends Component {

  componentDidMount() {
    this.props.actions.setAlertClear(this.props.alert.id);
  }

  render() {
    const { alert, classes } = this.props;
    if (alert) {
      return (
        <div className={ `alert ${ classes.alert } ${ alert.error.type }` }>
          <div className='cell'>
            { alert.error.message.en}
            <a className={ `alert__close ${ classes.alert__close }` } onClick={ () => this.props.actions.clearAlert(this.props.alert.id) } role='button' tabIndex='-1'>
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

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Alert));