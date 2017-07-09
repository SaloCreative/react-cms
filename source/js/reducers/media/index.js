import {
  GET_MEDIA_LIST_FETCHING,
  GET_MEDIA_LIST_RECEIVED,
  GET_MEDIA_LIST_FAILED
} from 'actions/media/types';

const initialState = {
  data: [],
  meta: {
    last_updated: '',
    failed: false
  }
};

// Media reducer
function media(state = initialState, action) {
  switch (action.type) {

    case GET_MEDIA_LIST_FETCHING :
      return {
        ...state,
        meta: {
          ...state.meta, fetching: true
        }
      };

    case GET_MEDIA_LIST_RECEIVED :
      return {
        ...state,
        data: action.payload.data,
        meta: {
          ...state.meta,
          fetching: false,
          failed: false,
          last_updated: Date.now(),
          current_page: action.payload.current_page,
          per_page: action.payload.per_page,
          total: action.payload.total
        }
      };

    case GET_MEDIA_LIST_FAILED :
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          failed: true,
          last_updated: ''
        }
      };

    default :
      return state;
  }
}

export default media;