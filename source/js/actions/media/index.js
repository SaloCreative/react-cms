import { CALL_API, getJSON } from 'redux-api-middleware';
import { API, HEADER, ENDPOINT } from 'api';
import { ApiError } from 'api/errorHandler';
import ErrorMessages from 'constants/messages/errorMessages';

import { MediaFilter } from './filter';

import {
  GET_MEDIA_LIST_FETCHING,
  GET_MEDIA_LIST_RECEIVED,
  GET_MEDIA_LIST_FAILED
} from './types';

export const getMedia = (filter = new MediaFilter) => ({
  [CALL_API]: {
    endpoint: `${ ENDPOINT(API.MEDIA.MEDIA) }?${ filter.getEndpointParameters() }`,
    method: 'GET',
    headers: HEADER(),
    types: [
      {
        type: GET_MEDIA_LIST_FETCHING
      },
      {
        type: GET_MEDIA_LIST_RECEIVED,
        payload: (action, state, res) => {
          return getJSON(res).then((json) => {
            return json;
          });
        }
      },
      {
        type: GET_MEDIA_LIST_FAILED,
        payload: (action, state, res) => {
          getJSON(res).then(
            (json) => new ApiError(res.status, ErrorMessages.getMediaFailed, json, true)
          );
        }
      }

    ]
  }
});