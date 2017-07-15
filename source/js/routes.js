import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import auth from 'actions/auth/auth';
import { history } from 'store';

import AppContainer from 'appContainer';
import Dashboard from 'routes/dashboard';
import Login from 'routes/login';
import NotFound from 'routes/notFound';

// Products
import ProductIndex from 'routes/products';
import ProductDashboard from 'routes/products/dashboard';
import AddProduct from 'routes/products/add';
import EditProduct from 'routes/products/edit';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: '/',
  LOGIN: '/login',
  PRODUCT: {
    DASHBOARD: '/products',
    INDEX: '/products/list',
    ADD: '/products/add',
    EDIT_BASE: '/products/edit',
    EDIT: '/products/edit/:id'
  },
  PAGES: '/pages',
  MEDIA: '/media',
  SETTINGS: '/settings',
  ERROR: '/404-error'
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
      <ConnectedRouter history={ history } onUpdate={ () => window.scrollTo(0, 0) }>
        <Route path={ publicPath } component={ AppContainer } />
      </ConnectedRouter>
    );
  }
}