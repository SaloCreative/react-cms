import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import auth from 'actions/auth/auth';
import { history } from 'store';

import AppContainer from 'appContainer';
import Dashboard from 'routes/dashboard';
import Login from 'routes/login';
import NotFound from 'routes/notFound';

// Products
import ProductIndex from 'routes/products';
import AddProduct from 'routes/products/add';
import EditProduct from 'routes/products/edit';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: '/dashboard',
  LOGIN: '/',
  PAGE: {
    INDEX: '/pages'
  },
  PRODUCT: {
    INDEX: '/products',
    ADD: '/products/add',
    EDIT_BASE: '/products/edit',
    EDIT: '/products/edit/:id'
  },
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
      <Router history={ history } onUpdate={ () => window.scrollTo(0, 0) }>
        <Route path={ publicPath } component={ AppContainer } >

          {/* Dashboard route */}
          <Route name='Dashboard' path={ routeCodes.DASHBOARD } component={ Dashboard } onEnter={ requireAuth } />

          {/* Product routes */}
          <Route path={ routeCodes.PRODUCT.INDEX }>
            <IndexRoute name='Products' component={ ProductIndex } onEnter={ requireAuth } />
            <Route name='Add Product' path={ routeCodes.PRODUCT.ADD } component={ AddProduct } onEnter={ requireAuth } />
            <Route name='Edit Product' path={ routeCodes.PRODUCT.EDIT } component={ EditProduct } onEnter={ requireAuth } />
          </Route>

          {/* Misc routes */}
          <IndexRoute name='Login' component={ Login } onEnter={ requireNotAuth } />
          <Route name='404 Error' path='*' component={ NotFound } onEnter={ requireAuth } />

        </Route>
      </Router>
    );
  }
}