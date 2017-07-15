import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import AppContainer from 'appContainer';

import Routes from 'routes';
import store, { history } from 'store';

// Load SCSS
import '../scss/app.scss';


const router = (
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ AppContainer } />
      </Switch>
    </BrowserRouter>
  </Provider>
);

// Render it to DOM
render(router, document.getElementById('root'));