import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Routes from 'routes';
import store from 'store';

// Load SCSS
import '../scss/app.scss';


const router = (
  
  <Provider store={ store }>
    <IntlProvider locale={ navigator.language }>
      <Routes />
    </IntlProvider>
  </Provider>
);

// Render it to DOM
render(router, document.getElementById('root'));