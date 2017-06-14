import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import 'babel-polyfill';
import logger from 'dev/logger';
import DevTools from 'dev/redux-dev-tools';

// Import the root reducer
import rootReducer from 'reducers';

const isProduction = process.env.NODE_ENV === 'production';

let store = null;

if (isProduction) {
  // In production omit logger
  const middleware = applyMiddleware(thunk, apiMiddleware);

  store = createStore(
    rootReducer,
    middleware
  );
} else {
  // In development mode logger and DevTools are added
  const middleware = applyMiddleware(thunk, apiMiddleware, logger);
  const enhancer = compose(
    middleware,
    DevTools.instrument()
  );

  store = createStore(
    rootReducer,
    enhancer
  );
}

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;