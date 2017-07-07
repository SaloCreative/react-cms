import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import { ProductFilter } from './filter';

import {
  ADD_NEW_PRODUCT
} from './types';

export function addNewProduct() {
  return {
    type: ADD_NEW_PRODUCT
  };
}