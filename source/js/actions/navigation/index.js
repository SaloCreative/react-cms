import React from 'react';

export const NAVIGATION_STATE_CHANGE = 'NAVIGATION_STATE_CHANGE';
export const MANAGER_NAVIGATION_STATE_CHANGE = 'MANAGER_NAVIGATION_STATE_CHANGE';

export function updateNavState(navState) {
  return {
    type: NAVIGATION_STATE_CHANGE,
    navState
  };
}

export function setNavigationState(navState) {
  return function (dispatch) {
    dispatch(updateNavState(navState));
  };
}

export function toggleManagerMenu(navState) {
  return {
    type: MANAGER_NAVIGATION_STATE_CHANGE,
    navState
  };
}