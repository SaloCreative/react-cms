import Moment from 'moment';

/**
 * Get index of an item in an array by it's key matching a value.
 * @param array {array}
 * @param value
 * @param key {string}
 * @returns {int}
 */

export function getIndexByKey(array, value, key = 'id') {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}

/**
 * GET OBJECT BY KEY
 * @param array {array}
 * @param value
 * @param key {string}
 * @returns {*}
 */

export function getObjectByKey(array, value, key = 'id') {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

/**
 * DEBOUNCE FUNCTION
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * FORMAT NUMBER WITH COMMAS
 * @param number
 * @returns string
 */
export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * FORMAT CURRENCY FUNCTION
 * @param amount
 * @param region
 * @returns string
 */

export function formatCurrency(amount, region = 'GBP') {
  switch (region) {
    case 'GBP' :
    default :
      const fixedAmount = amount.toFixed(2);
      const value = numberWithCommas(fixedAmount);
      return `£${ value }`;
  }
}

/**
 * FORMAT TIME RANGE
 * @param string
 * @returns string
 */
export function timeRange(time) {
  const hour = Moment(time).format('kk');
  const precedeHour = (hour - 1) <= 9 ? `0${ hour - 1 }` : hour - 1;
  return `${ precedeHour }:00 - ${ hour }:00`;
}