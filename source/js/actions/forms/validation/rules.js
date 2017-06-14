import * as ErrorMessages from './messages';

export const required = (text) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] == text ? null : ErrorMessages.mustMatch(fieldName);
  };
};

export const minLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};

export const isEmail = (email) => {
  let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (pattern.test(email)) {
    return null;
  } else {
    return ErrorMessages.isEmail;
  }
};