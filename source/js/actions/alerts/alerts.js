import React from 'react';

export function clearSystemAlert(i) {
  return {
    type: 'CLEAR_SYSTEM_ALERT',
    i
  };
}