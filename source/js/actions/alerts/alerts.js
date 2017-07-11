import React from 'react';

export function clearSystemAlert(alert) {
  return {
    type: 'CLEAR_SYSTEM_ALERT',
    alert
  };
}

export function willClearSystemAlert(alert) {
  return {
    type: 'WILL_CLEAR_SYSTEM_ALERT',
    alert
  };
}

export function clearAllSystemAlerts() {
  return {
    type: 'CLEAR_ALL_SYSTEM_ALERTS'
  };
}

export function setAlertClear(alert) {
  return function (dispatch) {
    dispatch(willClearSystemAlert(alert));
    setTimeout(() => {
      dispatch(clearSystemAlert(alert));
    }, 5000)
  }
}

export function clearAlert(alert) {
  return function (dispatch) {
    dispatch(clearSystemAlert(alert));
  }
}

export function clearAlerts() {
  return function (dispatch) {
    dispatch(clearAllSystemAlerts());
  }
}