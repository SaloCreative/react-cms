import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import auth from 'actions/auth/auth';
import { history } from 'store';

import AppContainer from 'appContainer';
import Dashboard from 'routes/dashboard';
import Login from 'routes/login';
import NotFound from 'routes/notFound';

const publicPath = '/';

export const routeCodes = {
  ERROR: `${ publicPath }404-error`,
  LOGIN: `${ publicPath }login`,
  DASHBOARD: publicPath
};

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: routeCodes.LOGIN,
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
function requireNotAuth(nextState, replace) {
  if (auth.loggedIn()) {
    replace({
      pathname: routeCodes.DASHBOARD,
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default class Routes extends Component {
  render() {
    return (
      <Router history={ history } onUpdate={ () => window.scrollTo(0, 0) }>
        <Route path={ publicPath } component={ AppContainer } >
         
          {/* Dashboard route */}
          <IndexRoute name='Dashboard' component={ Dashboard } onEnter={ requireAuth } />

          {/* Misc routes */}
          <Route name='Login' path={ routeCodes.LOGIN } component={ Login } onEnter={ requireNotAuth } />
          <Route name='404 Error' path='*' component={ NotFound } onEnter={ requireAuth } />

        </Route>
      </Router>
    );
  }
}