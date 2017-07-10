import React from 'react';

export function clearSystemAlert(i) {
  return {
    type: 'CLEAR_SYSTEM_ALERT',
    i
  };
}

export function clearAllSystemAlerts() {
  return {
    type: 'CLEAR_ALL_SYSTEM_ALERTS'
  };
}

export function willClearAllSystemAlerts() {
  return {
    type: 'WILL_CLEAR_ALL_SYSTEM_ALERTS'
  };
}

export function willExpireAlerts() {
  return function (dispatch) {
    dispatch(willClearAllSystemAlerts());
  }
}

export function expireAlerts() {
  return function (dispatch) {
    dispatch(clearAllSystemAlerts());
  }
}