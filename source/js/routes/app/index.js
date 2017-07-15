import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import { Alerts } from '@salocreative/react-redux-alerts';

import Dashboard from 'routes/dashboard';
import ProductDashboard from 'routes/products/dashboard';
import { routeCodes } from 'routes';

import Header from 'components/headers/primary';
import Auth from 'actions/auth/auth';
import AuthWrapper from 'containers/auth';
import { alertStyles } from 'constants/config';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Helmet titleTemplate='%s | Salo CMS' />

        <AuthWrapper { ...this.props } >
          <Header { ...this.props } >
            <h1 className='navigation__logo'>Salo CMS</h1>
          </Header>
       </AuthWrapper>

        <div className='page'>
          <Alerts alerts={ this.props.systemAlerts } colours={ alertStyles } />
          <Switch>
            <Route exact name='Products' path={ routeCodes.PRODUCT.DASHBOARD } component={ ProductDashboard } />
            <Route exact name='Dashboard' path={ routeCodes.DASHBOARD } component={ Dashboard } />
          </Switch>
        </div>
      </div>
    );
  }
}